import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Star, CheckCircle, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "خبرة وجودة مضمونة",
    description: "أكثر من 10 سنوات من الخبرة المتراكمة في السوق السعودي مع سجل حافل بالمشاريع الناجحة وشهادات الجودة المعتمدة",
  },
  {
    icon: Users,
    title: "فريق متخصص ومؤهل",
    description: "نخبة من الخبراء والفنيين المعتمدين والمدربين على أحدث التقنيات، مع فهم عميق لاحتياجات السوق المحلي",
  },
  {
    icon: Clock,
    title: "خدمة شاملة ومستمرة",
    description: "دعم على مدار الساعة مع خدمات طوارئ فورية، وضمان شامل على جميع الخدمات مع متابعة دورية لضمان رضاكم",
  },
  {
    icon: Star,
    title: "حلول مبتكرة ومخصصة",
    description: "نقدم حلولاً مبتكرة ومخصصة لكل عميل، مع استخدام أحدث التقنيات والمواد عالية الجودة لضمان أفضل النتائج",
  },
  {
    icon: CheckCircle,
    title: "أسعار تنافسية وشفافة",
    description: "نقدم أفضل قيمة مقابل المال مع شفافية كاملة في التسعير، وعروض خاصة للعملاء الدائمين والمشاريع الكبيرة",
  },
  {
    icon: MapPin,
    title: "تغطية شاملة للمملكة",
    description: "خدماتنا تغطي جدة وجميع مناطق المملكة، مع فرق عمل متنقلة ومستودعات موزعة لضمان سرعة الاستجابة",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1375bd] mb-4">لماذا تختار القوس الماسي؟</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            خبرتنا المتنوعة في عدة صناعات تمكننا من تقديم حلول شاملة ومتكاملة لا تستطيع الشركات التقليدية ذات التخصص
            الواحد تقديمها. نحن نفهم احتياجات السوق السعودي ونقدم خدمات تتماشى مع رؤية المملكة 2030
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#018bd2]">
              <CardHeader>
                <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                </div>
                <CardTitle className="text-xl text-[#1375bd]">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 