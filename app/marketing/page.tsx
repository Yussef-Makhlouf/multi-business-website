import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckCircle, Megaphone, Target, Users, BarChart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ServiceHero from "@/components/service-hero"

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
              <Link href="/contracting" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                المقاولات والعقارات
              </Link>
              <Button className="bg-[#018bd2] hover:bg-[#1375bd]">تواصل معنا</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <ServiceHero
        title="خدمات الدعاية والإعلان المتكاملة"
        subtitle="حلول إعلانية شاملة بجودة عالية وأسعار منافسة"
        description="تقدم القوس الماسي خدمات دعاية وإعلان متكاملة تشمل الطباعة والكلادينج واللافتات والشاشات الرقمية بجودة عالية وأسعار منافسة. فريقنا من المتخصصين يضمن لكم حلولاً مبتكرة تناسب احتياجاتكم وتحقق أهدافكم التجارية."
        primaryButtonText="استكشف خدمات الدعاية والإعلان"
        primaryButtonLink="/contact"
        secondaryButtonText="احصل على عرض سعر"
        secondaryButtonLink="/contact"
        imageSrc="/placeholder.svg?height=500&width=600&text=خدمات+دعاية+وإعلان+متكاملة+وشاشات+رقمية"
        imageAlt="خدمات دعاية وإعلان متكاملة وشاشات رقمية"
        badges={["طباعة احترافية", "كلادينج متطور", "شاشات رقمية", "أسعار منافسة"]}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">خدمات الدعاية والإعلان</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              حلول إعلانية شاملة تشمل الطباعة والكلادينج واللافتات والشاشات الرقمية بجودة عالية وأسعار منافسة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Professional Printing */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">طباعة احترافية عالية الجودة</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=طباعة+بنرات+احترافية+عالية+الجودة"
                  alt="طباعة بنرات احترافية عالية الجودة"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">طباعة بنرات احترافية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">طباعة أوت دور وإن دور</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">استيكرات مخصصة ومقاومة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">طباعة بجودة عالية وأسعار منافسة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cladding Services */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">كلادينج خارجي وداخلي متطور</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=كلادينج+خارجي+وداخلي+متطور"
                  alt="خدمات كلادينج خارجي وداخلي متطور"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">كلادينج خارجي للمباني</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">كلادينج داخلي للمحلات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تصميم وتنفيذ احترافي</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">مواد عالية الجودة ومقاومة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digital Screens */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">شاشات رقمية متطورة</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=شاشات+رقمية+متطورة+في+المستشفيات"
                  alt="شاشات رقمية متطورة في المستشفيات والمراكز الطبية"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">شاشات LED عالية الدقة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">  
                    <span className="mr-2">إدارة محتوى ذكية ومتطورة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تغطية واسعة في المستشفيات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">عرض معلومات طبية وإعلانات تفاعلية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Advertising Signs */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">لافتات إعلانية جذابة</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=لافتات+إعلانية+جذابة+ومبتكرة"
                  alt="لافتات إعلانية جذابة ومبتكرة"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">لافتات إعلانية خارجية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">لافتات داخلية للمحلات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تصميم إبداعي وجذاب</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تركيب احترافي ومتانة عالية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 3D Letters */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">حروف بارزة ثلاثية الأبعاد</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=حروف+بارزة+ثلاثية+الأبعاد+احترافية"
                  alt="حروف بارزة ثلاثية الأبعاد احترافية"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">حروف بارزة للمحلات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">حروف بارزة للمباني</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تصميم وتنفيذ احترافي</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">مواد عالية الجودة ومقاومة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Custom Stickers */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">استيكرات مخصصة ومقاومة</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=استيكرات+مخصصة+ومقاومة+عالية+الجودة"
                  alt="استيكرات مخصصة ومقاومة عالية الجودة"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">استيكرات للمركبات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">استيكرات للمحلات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">مواد مقاومة للعوامل الجوية</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تصميم مخصص حسب الطلب</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">مشاريعنا الناجحة</h2>
            <p className="text-xl text-gray-600">نتائج حقيقية من مشاريع الدعاية والإعلان والشاشات الرقمية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#1375bd] mb-2">+50</div>
                  <div className="text-lg font-semibold text-gray-700">شاشة رقمية في المستشفيات</div>
                </div>
                <p className="text-gray-600 text-center">
                  تركيب وإدارة 50 شاشة LED متطورة في مستشفى كبير بجدة لعرض المعلومات الطبية والإعلانات التفاعلية
                  مع إدارة محتوى ذكية
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#1375bd] mb-2">+200</div>
                  <div className="text-lg font-semibold text-gray-700">مشروع كلادينج وطباعة</div>
                </div>
                <p className="text-gray-600 text-center">
                  تنفيذ أكثر من 200 مشروع كلادينج خارجي وداخلي مع خدمات طباعة احترافية عالية الجودة لشركات ومحلات
                  في جميع أنحاء المملكة
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-[#1375bd] mb-2">%100</div>
                  <div className="text-lg font-semibold text-gray-700">رضا العملاء</div>
                </div>
                <p className="text-gray-600 text-center">
                  تحقيق معدل رضا 100% من العملاء من خلال تقديم خدمات دعاية وإعلان عالية الجودة بأسعار منافسة
                  وضمان الجودة في جميع مشاريعنا
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1375bd]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">مستعدون لتنفيذ مشاريعكم الإعلانية؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            دعونا ننفذ مشاريع دعاية وإعلان احترافية تحقق أهدافكم. تواصلوا معنا اليوم للحصول على عرض سعر مجاني
            واستشارة متخصصة
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <Phone className="w-6 h-6 text-white" />
              <div className="text-center">
                <div className="text-white text-lg font-semibold">استشارة إعلانية</div>
                <div className="text-blue-100">+966 12 123 نمو</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <Mail className="w-6 h-6 text-white" />
              <div className="text-center">
                <div className="text-white text-lg font-semibold">استفسارات الدعاية والإعلان</div>
                <div className="text-blue-100">marketing@integrated-solutions.sa</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8">
              احصل على عرض سعر
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1375bd] text-lg px-8 bg-transparent"
            >
              استشارة مجانية
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-reverse space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#1375bd] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ش</span>
                </div>
                <span className="text-xl font-bold">شركة الحلول المتكاملة</span>
              </Link>
              <p className="text-gray-400 leading-relaxed">خدمات دعاية وإعلان متكاملة بجودة عالية وأسعار منافسة</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">خدمات الدعاية والإعلان</h3>
              <ul className="space-y-2 text-gray-400">
                <li>طباعة احترافية</li>
                <li>كلادينج خارجي وداخلي</li>
                <li>شاشات رقمية</li>
                <li>لافتات إعلانية</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">خدمات أخرى</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/hvac" className="hover:text-white">
                    خدمات التكييف
                  </Link>
                </li>
                <li>
                  <Link href="/contracting" className="hover:text-white">
                    المقاولات والعقارات
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+966 12 123 نمو</li>
                <li>marketing@integrated-solutions.sa</li>
                <li>تدقيق تسويقي مجاني</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 شركة الحلول المتكاملة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
