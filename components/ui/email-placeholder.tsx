interface EmailPlaceholderProps {
  opacity?: number
}

export function EmailPlaceholder({ opacity = 1 }: EmailPlaceholderProps) {
  return (
    <div 
      className="flex animate-pulse flex-col gap-2 rounded-md border border-[#30363d] bg-[#161b22] p-3"
      style={{ opacity }}
    >
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-[#30363d]"></div>
        <div className="h-3 w-16 rounded bg-[#30363d]"></div>
      </div>
      <div className="h-3 w-32 rounded bg-[#30363d]"></div>
      <div className="h-3 w-full rounded bg-[#30363d]"></div>
    </div>
  )
} 