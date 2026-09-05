import { useCallback, useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ChatPanel } from "../chat/ChatPanel";
import { DocumentView } from "../document/DocumentView";

export function MainLayout() {
  const [chatOpen, setChatOpen] = useState(true);
  const [activePageId, setActivePageId] = useState("5");
  const [scrollAnchor, setScrollAnchor] = useState<string | null>(null);

  const handleAnchorClick = useCallback((pageId: string, anchorId: string) => {
    setActivePageId(pageId);
    setScrollAnchor(anchorId);
    setTimeout(() => setScrollAnchor(null), 100);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-bg-primary">
      <TopBar chatOpen={chatOpen} onToggleChat={() => setChatOpen((v) => !v)} />

      <div className="flex flex-1 min-h-0 gap-0 pb-2.5 pr-2.5">
        <Sidebar
          activeItemId={activePageId}
          onItemClick={setActivePageId}
          onAnchorClick={handleAnchorClick}
        />

        <div className="flex-1 min-w-0">
          <DocumentView pageId={activePageId} scrollToAnchor={scrollAnchor} />
        </div>

        {chatOpen && (
          <div className="w-[var(--chat-width)] shrink-0 ml-2.5">
            <ChatPanel onClose={() => setChatOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
