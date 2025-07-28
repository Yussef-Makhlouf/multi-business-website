import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckCircle, Megaphone, Target, Users, BarChart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ServiceHero from "@/components/service-hero"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
<Header/>

      {/* Hero Section */}
      <ServiceHero
        title="خدمات الدعاية والإعلان المتكاملة"
        subtitle="حلول إعلانية شاملة بجودة عالية وأسعار منافسة"
        description="تقدم القوس الماسي خدمات دعاية وإعلان متكاملة تشمل الطباعة والكلادينج واللافتات والشاشات الرقمية بجودة عالية وأسعار منافسة. فريقنا من المتخصصين يضمن لكم حلولاً مبتكرة تناسب احتياجاتكم وتحقق أهدافكم التجارية."
        primaryButtonText="استكشف خدمات الدعاية والإعلان"
        primaryButtonLink="/contact"
        secondaryButtonText="احصل على عرض سعر"
        secondaryButtonLink="/contact"
        imageSrc="/5.png"
        imageAlt="خدمات دعاية وإعلان متكاملة وشاشات رقمية"
        badges={["طباعة احترافية", "كلادينج متطور", "شاشات رقمية", "أسعار منافسة"]}
      />

      {/* Services Section */}
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1375bd] mb-3 sm:mb-4">خدمات الدعاية والإعلان</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              حلول إعلانية شاملة تشمل الطباعة والكلادينج واللافتات والشاشات الرقمية بجودة عالية وأسعار منافسة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 ">
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
                  src="/screen.jpg"
                  alt="شاشات رقمية متطورة في المستشفيات والمراكز الطبية"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
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
                  src="/mart1.png"
                  alt="طباعة بنرات احترافية عالية الجودة"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
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
            {/* <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">كلادينج خارجي وداخلي متطور</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/panel2.jpg"
                  alt="خدمات كلادينج خارجي وداخلي متطور"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
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
            </Card> */}



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
                  src="/panel.jpg"
                  alt="لافتات إعلانية جذابة ومبتكرة"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
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
                  src="/mart6.jpg"
                  alt="حروف بارزة ثلاثية الأبعاد احترافية"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
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
            {/* <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">استيكرات مخصصة ومقاومة</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                    src="/sticker.jpg"
                  alt="استيكرات مخصصة ومقاومة عالية الجودة"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-contain rounded-lg mb-4"
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
            </Card> */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-10 sm:py-20 bg-[#1375bd]">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">مستعدون لتنفيذ مشاريعكم الإعلانية؟</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            دعونا ننفذ مشاريع دعاية وإعلان احترافية تحقق أهدافكم. تواصلوا معنا اليوم للحصول على عرض سعر مجاني
            واستشارة متخصصة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-reverse space-x-2 sm:space-x-3">
              <div className="text-center">
                <div className="text-white text-base sm:text-lg font-semibold">استشارة إعلانية</div>
                <div className="text-blue-100 text-sm sm:text-base">0559811925</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-reverse space-x-2 sm:space-x-3">
              <div className="text-center">
                <div className="text-white text-base sm:text-lg font-semibold">استفسارات الدعاية والإعلان</div>
                <div className="text-blue-100 text-sm sm:text-base">info@alqawsco.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3">
              تواصل معنا
            </Button>
            </Link>
           
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
