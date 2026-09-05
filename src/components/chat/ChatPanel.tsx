import { CloseIcon, MoreIcon, LocationIcon, AttachIcon, SendIcon, TergiaLogo } from "../icons";

interface ChatPanelProps {
  onClose?: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  return (
    <div className="bg-bg-surface rounded-2xl flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 h-[76px]">
        <div className="flex items-center gap-2">
          <TergiaLogo size={40} className="opacity-80" />
          <span className="text-text-white font-medium text-base opacity-80">
            Tegria AI
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-center size-10 text-text-muted hover:text-text-primary">
            <MoreIcon size={24} />
          </button>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-10 text-text-muted hover:text-text-primary"
          >
            <CloseIcon size={24} />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 px-6 pt-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <svg width={21} height={21} viewBox="0 0 21 21" fill="none">
              <circle cx="10.5" cy="10.5" r="9" stroke="var(--color-text-muted)" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-text-white font-medium text-sm">Intent</span>
        </div>
      </div>

      {/* Input area */}
      <div className="mx-2.5 mb-3 bg-bg-input rounded-2xl pb-0.5 px-0.5">
        {/* Context bar */}
        <div className="flex items-center gap-2 px-2.5 py-4">
          <LocationIcon size={24} className="text-text-muted" />
          <span className="text-text-context text-base">Context: Checkout</span>
        </div>

        {/* Text input */}
        <div className="bg-bg-surface border border-border-subtle rounded-2xl overflow-hidden">
          <div className="px-8 pt-6 pb-1">
            <p className="text-text-placeholder text-base">Ask anything...</p>
          </div>
          <div className="flex items-center justify-between p-3.5">
            <button className="flex items-center justify-center size-12 rounded-xl text-text-muted hover:text-text-primary">
              <AttachIcon size={24} />
            </button>
            <button className="flex items-center justify-center size-12 rounded-full bg-accent-green-solid text-bg-surface">
              <SendIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
