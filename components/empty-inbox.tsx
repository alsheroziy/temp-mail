import LoadingPulse from "@/components/loading-pulse"
import { ActionButton } from "@/components/ui/action-button"
import { EmailPlaceholder } from "@/components/ui/email-placeholder"
import { Copy, Edit, RefreshCw, Trash2 } from "lucide-react"

const actions = [
  { icon: Copy, label: "Nusxalash" },
  { icon: RefreshCw, label: "Yangilash" },
  { icon: Edit, label: "O'zgartirish" },
  { icon: Trash2, label: "O'chirish" },
]

export default function EmptyInbox() {
  return (
    <div className="mt-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {actions.map((action) => (
          <ActionButton key={action.label} icon={action.icon}>
            {action.label}
          </ActionButton>
        ))}
      </div>

      <div className="overflow-hidden rounded-md border border-[#30363d]">
        <div className="grid grid-cols-3 border-b border-[#30363d] bg-[#161b22] px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#8b949e]">
          <div>Yuboruvchi</div>
          <div>Mavzu</div>
          <div>Ko'rish</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#0d1117] py-16">
          <div className="mb-6">
            <LoadingPulse />
          </div>
          <h3 className="mb-2 text-lg font-medium text-white">Sizning pochta qutingiz bo'sh</h3>
          <p className="text-sm text-[#8b949e]">Kiruvchi xabarlarni kutmoqda</p>

          <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
            <EmailPlaceholder />
            <EmailPlaceholder opacity={0.7} />
          </div>
        </div>
      </div>
    </div>
  )
}

