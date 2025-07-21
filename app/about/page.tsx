import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FloatingButtons from "@/components/floating-buttons"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
<Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#f3f8fc] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#1375bd] mb-6">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            القوس الماسي - شركة رائدة في تقديم الحلول المتكاملة في المملكة العربية السعودية
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1375bd] mb-6">قصتنا</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                تأسست شركة القوس الماسي في مدينة جدة بهدف تقديم خدمات متميزة ومتكاملة في ثلاثة مجالات أساسية: صيانة
                وتركيب أنظمة التكييف المركزي، والمقاولات والاستثمار العقاري، والإعلان والتسويق الرقمي.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نحن نؤمن بأن التميز يأتي من خلال الجمع بين الخبرة العملية والابتكار التقني، ولهذا نسعى دائماً لتقديم حلول
                شاملة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                فريقنا المتخصص يضم نخبة من الخبراء السعوديين الذين يفهمون طبيعة السوق المحلي ويعملون بأعلى معايير الجودة
                والاحترافية لضمان رضا عملائنا الكامل.
              </p>
            </div>
            <div>
              <Image
                src="/logov.png"
                alt="فريق عمل القوس الماسي"
                width={600}
                height={500}
                className="w-full h-96 object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#1375bd]">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  نسعى لتقديم خدمات متميزة ومتكاملة في مجالات التكييف والمقاولات والتسويق، مع الالتزام بأعلى معايير
                  الجودة والاحترافية، لنكون الشريك الموثوق لعملائنا في تحقيق أهدافهم وتطلعاتهم.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#1375bd]">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الشركة الرائدة في تقديم الحلول المتكاملة في المملكة العربية السعودية، ونساهم في تطوير القطاعات
                  التي نعمل بها من خلال الابتكار والتميز في الخدمة والجودة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#f3f8fc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">القيم التي نؤمن بها وتوجه عملنا اليومي</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">الجودة والتميز</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا ونسعى للتميز في كل ما نقوم به
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">العمل الجماعي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نؤمن بقوة العمل الجماعي والتعاون بين أعضاء فريقنا لتحقيق أفضل النتائج لعملائنا
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">الثقة والأمانة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">نبني علاقاتنا مع عملائنا على أساس الثقة المتبادلة والشفافية في التعامل</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">لماذا القوس الماسي؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">ما يميزنا عن غيرنا في السوق السعودي</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">خدمات متكاملة</h3>
              <p className="text-gray-600">نقدم حلولاً شاملة في ثلاثة مجالات مختلفة تحت سقف واحد</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">خبرة محلية</h3>
              <p className="text-gray-600">فهم عميق للسوق السعودي واحتياجات العملاء المحليين</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">فريق متخصص</h3>
              <p className="text-gray-600">نخبة من الخبراء المؤهلين في كل مجال من مجالات عملنا</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">تقنيات حديثة</h3>
              <p className="text-gray-600">استخدام أحدث التقنيات والأدوات في تنفيذ المشاريع</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">5</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">أسعار تنافسية</h3>
              <p className="text-gray-600">نقدم أفضل قيمة مقابل المال مع الحفاظ على الجودة العالية</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#1375bd]">6</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">دعم مستمر</h3>
              <p className="text-gray-600">خدمة عملاء متميزة ودعم فني على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1375bd] to-[#018bd2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">انضموا إلى عائلة عملائنا الراضين</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            اكتشفوا كيف يمكن لخبرتنا وخدماتنا المتكاملة أن تساعدكم في تحقيق أهدافكم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8">
                تواصل معنا الآن
              </Button>
            </Link>
            {/* <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1375bd] text-lg px-8 bg-transparent"
              >
                اطلع على أعمالنا
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Footer */}
<Footer />

      <FloatingButtons />
    </div>
  )
}
