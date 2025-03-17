interface LoadingDotsProps {
  className?: string
  size?: "sm" | "md"
}

export function LoadingDots({ className = "", size = "md" }: LoadingDotsProps) {
  const dotSize = size === "sm" ? "h-1 w-1" : "h-1.5 w-1.5"
  
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`rounded-full bg-current ${dotSize}`}
          style={{
            animation: `loadingPulse 1.5s infinite ease-in-out`,
            animationDelay: `${i * 0.2}s`,
          }}
        ></div>
      ))}
    </div>
  )
} 