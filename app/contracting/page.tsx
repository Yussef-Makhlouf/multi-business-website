import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, CheckCircle, Home, Building, TrendingUp, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ServiceHero from "@/components/service-hero"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ContractingPage() {
  return (


    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
          <Header/>
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-reverse space-x-2">
              <div className="w-10 h-10 bg-[#1375bd] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ش</span>
              </div>
              <span className="text-2xl font-bold text-[#1375bd]">شركة الحلول المتكاملة</span>
            </Link>
            <div className="hidden md:flex items-center space-x-reverse space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                الرئيسية
              </Link>
              <Link href="/hvac" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                خدمات التكييف
              </Link>
              <Link href="/marketing" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                الإعلان والتسويق
              </Link>
              <Button className="bg-[#018bd2] hover:bg-[#1375bd]">تواصل معنا</Button>
            </div>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <ServiceHero
        title="التميز في المقاولات والعقارات"
        subtitle="بناء الأحلام وخلق الفرص الاستثمارية"
        description="من البناء السكني إلى التطوير العقاري التجاري، نحن نبني الأحلام ونخلق الفرص الاستثمارية. نهجنا الشامل يغطي كل جانب من جوانب البناء وإدارة العقارات في جدة وجميع أنحاء المملكة."
        primaryButtonText="ابدأ مشروعك"
        primaryButtonLink="/contact"
        secondaryButtonText="استشارة استثمارية"
        secondaryButtonLink="/contact"
        imageSrc="/art1.png"
        imageAlt="مشاريع البناء والتطوير العقاري"
        badges={["مرخص ومضمون", "تسليم في الوقت", "جودة عالية", "خبرة 10+ سنوات"]}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">خدمات البناء والعقارات</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              حلول شاملة لجميع احتياجاتكم في البناء والعقارات، من التخطيط الأولي إلى التسليم النهائي والإدارة المستمرة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Construction */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">البناء السكني</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/estate2.jpg"
                  alt="مشاريع البناء السكني وبناء المنازل"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">بناء منازل مخصصة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تجديد المنازل والإضافات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تجديد المطابخ والحمامات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تشطيب الأقبية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Commercial Construction */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">البناء التجاري</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/pro6.jpg"
                  alt="مشاريع بناء المباني التجارية"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">بناء المباني الإدارية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تطوير المساحات التجارية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">المستودعات والمنشآت الصناعية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تحسينات المستأجرين</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real Estate Investment */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">الاستثمار العقاري</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/estate.jpg"
                  alt="خدمات الاستثمار العقاري والاستشارات"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تحليل العقارات الاستثمارية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">بحوث السوق والاتجاهات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr" >
                    <span className="mr-2">إدارة المحافظ</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">اقتناء العقارات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">لماذا تختار خدمات البناء والعقارات لدينا؟</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              عقود من الخبرة، سجل حافل بالإنجازات، والتزام بالتميز في كل مشروع نتولاه في جدة والمملكة
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مرخص ومضمون</h3>
              <p className="text-gray-600">مقاولون مرخصون بالكامل مع ضمان شامل</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">التسليم في الوقت المحدد</h3>
              <p className="text-gray-600">مشاريع مكتملة في الموعد المحدد وضمن الميزانية</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">فريق خبير</h3>
              <p className="text-gray-600">محترفون مهرة مع سنوات من الخبرة في الصناعة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">التركيز على الاستثمار</h3>
              <p className="text-gray-600">تعظيم القيمة والعائد على استثماركم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      {/* <section className="py-20 bg-[#f3f8fc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">المشاريع الحديثة</h2>
            <p className="text-xl text-gray-600">استكشفوا بعض مشاريعنا الحديثة في البناء والتطوير العقاري</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <Image
                    src="/pro1.jpg"
                  alt="مشروع مجمع سكني فاخر"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مجمع سكني فاخر</h3>
                  <p className="text-gray-600 mb-4">
                    مجمع سكني فاخر من 50 وحدة مع وسائل راحة حديثة وتصميم مستدام في جدة
                  </p>
                  <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Image
                  src="/pro2.jpg"
                  alt="بناء مبنى إداري تجاري"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مبنى إداري تجاري</h3>
                  <p className="text-gray-600 mb-4">مبنى إداري من 5 طوابق مع شهادة LEED وتقنية متطورة</p>
                  <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Image
                  src="/pro3.jpg"
                  alt="مشروع ترميم منزل تراثي"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1375bd] mb-2">ترميم منزل تراثي</h3>
                  <p className="text-gray-600 mb-4">ترميم كامل لمنزل تراثي من العشرينات مع الحفاظ على الطابع الأصلي</p>
                  <Badge className="bg-[#018bd2] text-white">مكتمل 2023</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-[#1375bd]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">مستعدون لبدء مشروعكم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            سواء كنتم تخططون لمشروع بناء جديد أو تبحثون عن فرص استثمار عقاري، نحن هنا لمساعدتكم في تحقيق رؤيتكم
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <div className="text-center">
                <div className="text-white text-lg font-semibold">استشارة المشاريع</div>
                <div className="text-blue-100">0559811925</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <div className="text-center">
                <div className="text-white text-lg font-semibold">استفسارات المشاريع</div>
                <div className="text-blue-100">info@alqawsco.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8" >
              تواصل معنا
            </Button></Link>
        
          </div>
        </div>
      </section>

      {/* Footer */}
<Footer/>
    </div>
  )
}
