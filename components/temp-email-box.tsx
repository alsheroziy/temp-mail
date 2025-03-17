"use client"

import { useState } from "react"
import { RefreshCw, Clipboard, Check, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

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

    // Simulate loading
    setTimeout(() => {
      // In a real app, this would generate a new email
      const randomString = Math.random().toString(36).substring(2, 10)
      setEmail(`${randomString}@bankrau.com`)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="rounded-md border border-[#30363d] bg-[#0d1117]">
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
        <h2 className="text-sm font-medium text-white">Sizning Vaqtinchalik Email Manzilingiz</h2>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-md border border-[#30363d] bg-[#0d1117] px-4 py-2 font-mono text-sm text-white">
            {isLoading ? (
              <div className="flex items-center justify-center py-1">
                <Mail className="mr-2 h-4 w-4 text-[#58a6ff]" />
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#58a6ff]"
                      style={{
                        animation: `loadingPulse 1.5s infinite ease-in-out`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <span className="ml-2 text-[#8b949e]">Yangi manzil yaratilmoqda...</span>
              </div>
            ) : (
              email
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] hover:text-white"
              onClick={copyToClipboard}
              disabled={isLoading}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Nusxalandi
                </>
              ) : (
                <>
                  <Clipboard className="mr-2 h-4 w-4" />
                  Nusxalash
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] hover:text-white"
              onClick={refreshEmail}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="mr-2 flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-current"
                        style={{
                          animation: `loadingPulse 1.5s infinite ease-in-out`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                  Yangilanmoqda
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Yangilash
                </>
              )}
            </Button>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#8b949e]">
          Bu email manzil avtomatik ravishda 10 daqiqadan so'ng o'chiriladi. Yangi manzil olish uchun "Yangilash"
          tugmasini bosing.
        </p>
      </div>
    </div>
  )
}

