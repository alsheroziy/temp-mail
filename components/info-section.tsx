import { Info } from "lucide-react"

export default function InfoSection() {
  return (
    <div className="rounded-md border border-[#30363d] bg-[#0d1117]">
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-[#58a6ff]" />
          <h2 className="text-sm font-medium text-white">Bir martalik Vaqtinchalik E-pochta nima?</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-[#c9d1d9]">
          <p className="mb-4">
            <strong className="text-white">Bir martalik elektron pochta</strong> - bu ma'lum vaqt o'tgandan so'ng
            o'z-o'zidan yo'q qilinadigan vaqtinchalik manzilda elektron pochta qabul qilish imkonini beruvchi bepul
            xizmat.
          </p>
          <p>
            U tempmail, 10minutemail, 10minmail, bir martalik elektron pochta, soxta pochta, soxta elektron pochta
            generatori kabi nomlar bilan ham tanilgan. TempMail - bu spamdan qochish va xavfsiz qolishga yordam
            beradigan eng rivojlangan bir martalik elektron pochta xizmati.
          </p>
        </div>
      </div>
    </div>
  )
}

