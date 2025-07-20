import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "شركة أرامكو السعودية",
    logo: "/placeholder.svg?height=80&width=200&text=أرامكو",
    description: "شراكة استراتيجية في مشاريع التكييف والصيانة",
  },
  {
    id: 2,
    name: "مجموعة سامبا المالية",
    logo: "/placeholder.svg?height=80&width=200&text=سامبا",
    description: "تنفيذ مشاريع التطوير العقاري والمقاولات",
  },
  {
    id: 3,
    name: "شركة الاتصالات السعودية",
    logo: "/placeholder.svg?height=80&width=200&text=STC",
    description: "حملات تسويقية وإعلانية متكاملة",
  },
  {
    id: 4,
    name: "مجموعة الراجحي",
    logo: "/placeholder.svg?height=80&width=200&text=الراجحي",
    description: "خدمات التكييف والصيانة للفروع",
  },
  {
    id: 5,
    name: "شركة سابك",
    logo: "/placeholder.svg?height=80&width=200&text=سابك",
    description: "مشاريع البناء والتطوير الصناعي",
  },
  {
    id: 6,
    name: "مجموعة بن لادن",
    logo: "/placeholder.svg?height=80&width=200&text=بن+لادن",
    description: "شراكة في المشاريع الإنشائية الكبرى",
  },
]

export default function SuccessPartners() {
  return (
    <section className="py-20 bg-[#f3f8fc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1375bd] mb-4">شركاء النجاح</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بشراكتنا مع كبرى الشركات والمؤسسات في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="mx-auto h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1375bd] mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-reverse space-x-4 bg-white p-6 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1375bd] mb-1">+50</div>
              <div className="text-sm text-gray-600">شريك موثوق</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1375bd] mb-1">+500</div>
              <div className="text-sm text-gray-600">مشروع مشترك</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1375bd] mb-1">%95</div>
              <div className="text-sm text-gray-600">معدل تجديد الشراكة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
