"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmptyInbox from "@/components/empty-inbox"
import EmailView from "@/components/email-view"

export default function EmailList() {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null)
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "Cursor",
      subject: "Verify your email address",
      preview: "Verify your email You need to verify your email address guanaco12991@mailbai.com ...",
      time: "4:39:47 PM",
      read: false,
    },
  ])

  if (selectedEmail !== null) {
    return <EmailView onBack={() => setSelectedEmail(null)} />
  }

  if (emails.length === 0) {
    return <EmptyInbox />
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-[#8b949e]">
          <span>{emails.length} total email</span>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-[#8b949e] hover:text-white hover:bg-[#30363d]">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] hover:text-white"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Yangilash
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-[#30363d]">
        <div className="grid grid-cols-3 border-b border-[#30363d] bg-[#161b22] px-4 py-3 text-xs font-medium uppercase tracking-wider text-[#8b949e]">
          <div>Yuboruvchi</div>
          <div>Mavzu</div>
          <div>Vaqt</div>
        </div>

        <div className="divide-y divide-[#30363d]">
          {emails.map((email) => (
            <div
              key={email.id}
              className="grid grid-cols-3 px-4 py-3 cursor-pointer hover:bg-[#161b22]"
              onClick={() => setSelectedEmail(email.id)}
            >
              <div className={`truncate ${email.read ? "text-[#8b949e]" : "font-medium text-white"}`}>
                {email.sender}
              </div>
              <div className={`truncate ${email.read ? "text-[#8b949e]" : "font-medium text-white"}`}>
                {email.subject}
              </div>
              <div className="text-[#8b949e] text-right">{email.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

