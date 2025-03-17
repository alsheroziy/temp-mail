import { Code } from "lucide-react"

export default function TechExplanation() {
  return (
    <div className="mt-8 rounded-md border border-[#30363d] bg-[#0d1117]">
      <div className="border-b border-[#30363d] bg-[#161b22] px-4 py-3">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-[#58a6ff]" />
          <h2 className="text-sm font-medium text-white">Bir martalik Email Manzillar ortidagi Texnologiya</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4 text-sm text-[#c9d1d9]">
          <p>
            Har bir kishi ishda bog'lanish, biznes hamkorlar bilan, do'stlar va hamkasblar bilan bog'lanish uchun
            elektron pochta manziliga ega. Bugungi kunda biz ro'yxatdan o'tadigan deyarli 99% ilovalar va xizmatlar
            elektron pochta manzilini talab qiladi.
          </p>

          <div className="rounded-md border border-[#30363d] bg-[#161b22] p-4">
            <h3 className="mb-2 text-sm font-medium text-white">Xo'sh, Bir martalik Email Manzil nima?</h3>

            <p className="text-[#8b949e]">
              Bir martalik elektron pochta manzili (DEA) texnik jihatdan foydalanuvchining joriy aloqasi uchun
              vaqtinchalik elektron pochta manzilini oladigan yondashuvni anglatadi. DEA xizmatlarga va veb-saytga
              ro'yxatdan o'tish uchun haqiqiy identifikatoringizni ko'rsatmasdan elektron pochta manzilini yaratish
              imkonini beradi.
            </p>
          </div>

          <p>
            Agar bir martalik elektron pochta manzillari xavf ostida qolsa yoki elektron pochta suiiste'molligi bilan
            bog'liq bo'lsa, egasi suiiste'mollikka bog'lanmaydi va uning ilovasini boshqa kontaktlarga ta'sir qilmasdan
            tezda bekor qilishi mumkin.
          </p>

          <p>
            Vaqtinchalik pochta bilan siz soxta elektron pochta manzilingizdan haqiqiy elektron pochta manzilingizga
            ma'lum vaqt davomida xabarlarni olishingiz mumkin. Soxta elektron pochta manzili - bu shunchaki bir martalik
            elektron pochta, vaqtinchalik elektron pochta to'plami va o'z-o'zini yo'q qiladigan elektron pochta.
          </p>
        </div>
      </div>
    </div>
  )
}

