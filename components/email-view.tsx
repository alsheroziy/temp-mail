"use client"

import { ArrowLeft, Trash2, Maximize, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailViewProps {
  onBack: () => void
}

export default function EmailView({ onBack }: EmailViewProps) {
  const currentTime = "4:39:47 PM"
  const emailAddress = "guanaco12991@mailbai.com"
  const verificationCode = "977296"

  return (
    <div className="flex flex-col h-full">
      {/* Email header */}
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#8b949e] hover:text-white hover:bg-[#30363d]"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-[#8b949e] hover:text-white hover:bg-[#30363d]">
            <Trash2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#8b949e] hover:text-white hover:bg-[#30363d]">
            <Maximize className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#8b949e] hover:text-white hover:bg-[#30363d]">
            <Printer className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Email subject and sender */}
      <div className="border-b border-[#30363d] bg-[#0d1117] p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Verify your email address</h2>
            <div className="text-sm text-[#8b949e]">Cursor &lt;no-reply@cursor.sh&gt;</div>
          </div>
          <div className="text-sm text-[#8b949e]">{currentTime}</div>
        </div>
      </div>

      {/* Email content */}
      <div className="flex-1 overflow-auto p-6 bg-white text-gray-800">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#888888" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#888888"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#888888"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Verify your email</h1>

          <p className="mb-6 text-gray-600">
            We need to verify your email address <span className="text-blue-600">{emailAddress}</span> before you can
            access your account. Enter the code below in your open browser window.
          </p>

          <div className="mb-6 text-center">
            <div className="text-4xl font-mono font-bold tracking-wider">{verificationCode}</div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-sm text-gray-500">This code expires in 10 minutes.</p>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            If you didn't sign up for Cursor, you can safely ignore this email. Someone else might have typed your email
            address by mistake.
          </p>

          <p className="text-sm text-gray-500">
            Need to save email address, custom domain or forwording emails?{" "}
            <a href="#" className="text-blue-600 font-medium">
              Log in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

