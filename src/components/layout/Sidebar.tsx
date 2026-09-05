import { FolderIcon, CopyIcon } from "../icons";
import { StatusIndicator } from "../ui/StatusIndicator";

interface TreeItem {
  id: string;
  label: string;
  type: "folder" | "file" | "task";
  status?: "draft" | "ready" | "approved";
  depth: number;
  parentId?: string;
}

export const treeData: TreeItem[] = [
  { id: "1", label: "Checkout", type: "folder", status: "draft", depth: 0 },
  { id: "2", label: "brief.md", type: "file", depth: 1, parentId: "1" },
  { id: "3", label: "prd.md", type: "file", depth: 1, parentId: "1" },
  { id: "4", label: "architecture.md", type: "file", depth: 1, parentId: "1" },
  { id: "5", label: "Apply discount code", type: "task", status: "ready", depth: 1, parentId: "1" },
  { id: "6", label: "story.md", type: "file", depth: 2, parentId: "5" },
  { id: "7", label: "criteria.md", type: "file", depth: 2, parentId: "5" },
  { id: "8", label: "Save payment method", type: "task", status: "approved", depth: 1, parentId: "1" },
  { id: "9", label: "Accounts", type: "folder", status: "draft", depth: 0 },
  { id: "10", label: "Billing", type: "folder", status: "draft", depth: 0 },
];

interface SidebarProps {
  activeItemId: string;
  onItemClick: (id: string) => void;
  onAnchorClick: (pageId: string, anchorId: string) => void;
}

export function Sidebar({ activeItemId, onItemClick, onAnchorClick }: SidebarProps) {
  function handleClick(item: TreeItem) {
    if (item.type === "file") {
      const parentId = item.parentId ?? "";
      onAnchorClick(parentId, item.id);
    } else {
      onItemClick(item.id);
    }
  }

  return (
    <aside className="w-[var(--sidebar-width)] h-full flex flex-col">
      {/* Space header */}
      <div className="flex items-center justify-between px-4 py-5 h-20">
        <div className="flex items-center gap-2">
          <FolderIcon size={24} className="text-text-white" />
          <span className="text-text-white font-medium text-base">Space 1</span>
        </div>
        <button className="flex items-center justify-center size-10 text-text-muted hover:text-text-primary">
          <CopyIcon size={24} />
        </button>
      </div>

      {/* Tree */}
      <nav className="flex flex-col overflow-y-auto relative">
        {treeData.map((item, index) => {
          const hasChildrenBelow = treeData
            .slice(index + 1)
            .some((next) => next.parentId === item.id);
          const isActive = item.id === activeItemId;

          if (item.type === "file") {
            return (
              <div
                key={item.id}
                onClick={() => handleClick(item)}
                className="h-8 flex items-center overflow-hidden relative cursor-pointer hover:bg-bg-surface-hover"
                style={{ paddingLeft: 69 }}
              >
                <div
                  className="absolute top-1/2 h-px bg-border-tree"
                  style={{ left: item.depth === 2 ? 53 : 28, width: item.depth === 2 ? 12 : 37 }}
                />
                <div
                  className="absolute bg-border-tree"
                  style={{
                    left: item.depth === 2 ? 53 : 28,
                    top: 0,
                    width: 1,
                    height: isLastChild(treeData, index, item.depth) ? "50%" : "100%",
                  }}
                />
                <span className="text-text-muted text-sm">{item.label}</span>
              </div>
            );
          }

          const isTask = item.type === "task";
          const paddingLeft = isTask ? 45 : 20;

          return (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className={`h-12 flex items-center gap-2 overflow-hidden relative cursor-pointer hover:bg-bg-surface-hover ${
                isActive ? "bg-bg-active" : ""
              }`}
              style={{ paddingLeft }}
            >
              {isActive && (
                <div className="absolute left-0 top-[7px] bottom-[7px] w-[3px] rounded-r-sm bg-status-ready" />
              )}

              {item.depth > 0 && (
                <div
                  className="absolute bg-border-tree"
                  style={{
                    left: item.depth === 1 ? 28 : 53,
                    top: 0,
                    width: 1,
                    height: isLastChild(treeData, index, item.depth) ? "50%" : "100%",
                  }}
                />
              )}

              {isTask && (
                <div
                  className="absolute top-1/2 h-px bg-border-tree"
                  style={{ left: 28, width: 13 }}
                />
              )}

              {hasChildrenBelow && (
                <div
                  className="absolute bg-border-tree"
                  style={{
                    left: isTask ? 53 : 28,
                    top: "50%",
                    width: 1,
                    bottom: 0,
                  }}
                />
              )}

              <StatusIndicator status={item.status ?? "draft"} size={16} />
              <span className="text-text-white font-medium text-sm">
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function isLastChild(items: TreeItem[], currentIndex: number, depth: number): boolean {
  for (let i = currentIndex + 1; i < items.length; i++) {
    if (items[i].depth < depth) return true;
    if (items[i].depth === depth) return false;
  }
  return true;
}
