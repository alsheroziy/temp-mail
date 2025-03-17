"use client"

import { ActionButton } from "@/components/ui/action-button"
import { LoadingDots } from "@/components/ui/loading-dots"
import { Check, Clipboard, Mail, RefreshCw } from "lucide-react"
import { useState } from "react"

const commonClasses = {
  container: "rounded-md border border-[#30363d]",
  darkBg: "bg-[#0d1117]",
  headerBg: "bg-[#161b22]",
  text: {
    primary: "text-white",
    secondary: "text-[#8b949e]",
    accent: "text-[#58a6ff]"
  }
}

interface LoadingStateProps {
  text: string
}

function LoadingState({ text }: LoadingStateProps) {
  return (
    <div className="flex items-center justify-center py-1">
      <Mail className={`mr-2 h-4 w-4 ${commonClasses.text.accent}`} />
      <LoadingDots className={commonClasses.text.accent} />
      <span className={`ml-2 ${commonClasses.text.secondary}`}>{text}</span>
    </div>
  )
}

export default function TempEmailBox() {
  const [email, setEmail] = useState("latox24878@bankrau.com")
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const refreshEmail = () => {
    setIsLoading(true)
    setTimeout(() => {
      const randomString = Math.random().toString(36).substring(2, 10)
      setEmail(`${randomString}@bankrau.com`)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className={`${commonClasses.container} ${commonClasses.darkBg}`}>
      <div className={`border-b border-[#30363d] ${commonClasses.headerBg} px-4 py-3`}>
        <h2 className="text-sm font-medium text-white">Sizning Vaqtinchalik Email Manzilingiz</h2>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className={`flex-1 ${commonClasses.container} ${commonClasses.darkBg} px-4 py-2 font-mono text-sm ${commonClasses.text.primary}`}>
            {isLoading ? (
              <LoadingState text="Yangi manzil yaratilmoqda..." />
            ) : (
              email
            )}
          </div>

          <div className="flex gap-2">
            <ActionButton
              icon={copied ? Check : Clipboard}
              onClick={copyToClipboard}
              disabled={isLoading}
            >
              {copied ? "Nusxalandi" : "Nusxalash"}
            </ActionButton>

            <ActionButton
              icon={RefreshCw}
              onClick={refreshEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoadingDots size="sm" className="mr-2" />
                  Yangilanmoqda
                </>
              ) : (
                "Yangilash"
              )}
            </ActionButton>
          </div>
        </div>

        <p className={`mt-4 text-xs ${commonClasses.text.secondary}`}>
          Bu email manzil avtomatik ravishda 10 daqiqadan so'ng o'chiriladi. Yangi manzil olish uchun "Yangilash"
          tugmasini bosing.
        </p>
      </div>
    </div>
  )
}

