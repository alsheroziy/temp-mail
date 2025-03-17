import { Mail, AlertCircle } from "lucide-react"
import TempEmailBox from "@/components/temp-email-box"
import EmailList from "@/components/email-list"
import InfoSection from "@/components/info-section"
import PopularArticles from "@/components/popular-articles"
import TechExplanation from "@/components/tech-explanation"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-[#58a6ff]" />
            <h1 className="text-xl font-semibold text-white">Vaqtinchalik Email</h1>
          </div>
        </div>

        <div className="mb-8 rounded-md border border-[#30363d] bg-[#161b22] p-4">
          <div className="flex items-center gap-2 text-sm text-[#8b949e]">
            <AlertCircle className="h-4 w-4 text-[#58a6ff]" />
            <p>Vaqtinchalik email xizmati - spamdan himoya qilish va xavfsizlikni ta'minlash uchun</p>
          </div>
        </div>

        <TempEmailBox />

        <EmailList />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <InfoSection />
          <PopularArticles />
        </div>

        <TechExplanation />
      </main>

      <footer className="border-t border-[#30363d] bg-[#0d1117] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#8b949e]">© 2025 TempMail</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                API
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                Maqolalar
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                Premium
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                Maxfiylik
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                Shartlar
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                FAQ
              </a>
              <a href="#" className="hover:text-[#58a6ff] hover:underline">
                Kontaktlar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

