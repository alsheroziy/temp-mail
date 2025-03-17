import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function ActionButton({ icon: Icon, children, onClick, disabled }: ActionButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] hover:text-white"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </Button>
  )
} 