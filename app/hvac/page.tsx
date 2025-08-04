import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckCircle, Wind, Thermometer, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ServiceHero from "@/components/service-hero"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function HVACPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
 <Header/>

      {/* Hero Section */}
      <ServiceHero
        title="خدمات التكييف المركزي الاحترافية"
        subtitle="راحة وكفاءة على مدار السنة"
        description="خدمات متخصصة في صيانة وتنظيف وتركيب أنظمة التكييف المركزي. حافظوا على راحة منازلكم ومكاتبكم على مدار السنة مع فنيينا المعتمدين ودعم الطوارئ على مدار الساعة في جدة وجميع أنحاء المملكة."
        primaryButtonText="احجز خدمة"
        primaryButtonLink="/contact"
        secondaryButtonText="خدمة طوارئ"
        secondaryButtonLink="/contact"
        imageSrc="/air.jpg"
        imageAlt="فني تكييف محترف يعمل على وحدة التكييف المركزي"
        badges={["خدمة 24/7", "فنيون معتمدون", "ضمان شامل", "أسعار تنافسية"]}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">خدمات التكييف المركزي</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              حلول شاملة لأنظمة التكييف للعقارات السكنية والتجارية. من العقود الدورية و الحالات الطارئه للفيلل و المستشفيات و الفنادق و المجمعات التجاريه و المكاتب و المباني الاداريه و المجمعات الحكوميه
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maintenance & Repair */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">الصيانة والإصلاح</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/build3.jpg"
                  alt="خدمات صيانة وإصلاح أنظمة التكييف"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">  جداول صيانة منتظمة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">خدمات إصلاح الطوارئ</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">استبدال المرشحات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تشخيص الأنظمة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Installation */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">التركيب الاحترافي</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/build4.jpg"
                  alt="تركيب أنظمة التكييف المركزي الاحترافي"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تركيب أنظمة جديدة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">ترقية الأنظمة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">حلول موفرة للطاقة</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تغطية الضمان</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cleaning & Sanitization */}
            <Card className="border-2 border-[#018bd2] hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1375bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#1375bd]">التنظيف العميق والتعقيم</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/build5.jpg"
                  alt="تنظيف وتعقيم أنظمة التكييف"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">خدمات تنظيف المجاري</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تنظيف الملفات</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">تحسين جودة الهواء</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">معالجات التعقيم</span>
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our HVAC Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">لماذا تختار خدمات التكييف لدينا؟</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              خدمات تكييف احترافية وموثوقة وفعالة مدعومة بسنوات من الخبرة وفنيين معتمدين في جدة والمملكة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">خدمة طوارئ 24/7</h3>
              <p className="text-gray-600">دعم على مدار الساعة لمشاكل التكييف العاجلة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مرخص ومؤمن</h3>
              <p className="text-gray-600">فنيون معتمدون بالكامل مع تأمين شامل</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">ضمان الجودة</h3>
              <p className="text-gray-600">ضمان رضا 100% على جميع خدماتنا</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f3f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-10 h-10 text-[#1375bd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1375bd] mb-2">موفر للطاقة</h3>
              <p className="text-gray-600">حلول تقلل تكاليف الطاقة والأثر البيئي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#f3f8fc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">مناطق الخدمة</h2>
            <p className="text-xl text-gray-600">نقدم خدمات التكييف في جدة وجميع أنحاء المملكة العربية السعودية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd] text-center">الخدمات السكنية</CardTitle>
              </CardHeader>
              <CardContent className="text-right">
                <ul className="space-y-2">
                  <li>• المنازل المستقلة</li>
                  <li>• التاون هاوس والشقق</li>
                  <li>• المجمعات السكنية</li>
                  <li>• البيوت الجاهزة</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd] text-center">الخدمات التجارية</CardTitle>
              </CardHeader>
              <CardContent className="text-right">
                <ul className="space-y-2">
                  <li>• المباني الإدارية</li>
                  <li>• المتاجر والمحلات</li>
                  <li>• المطاعم والمقاهي</li>
                  <li>• المستودعات</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd] text-center">الخدمات الصناعية</CardTitle>
              </CardHeader>
              <CardContent className="text-right">
                <ul className="space-y-2">
                  <li>• المنشآت الصناعية</li>
                  <li>• مراكز البيانات</li>
                  <li>• المرافق الصحية</li>
                  <li>• المؤسسات التعليمية</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1375bd]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">تحتاج خدمة تكييف اليوم؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            لا تنتظروا حتى يتعطل التكييف. احجزوا صيانة وقائية أو احصلوا على خدمة طوارئ من فنيينا المعتمدين في جدة
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-reverse space-x-3">
           
              <div className="text-center">
                <div className="text-white text-lg font-semibold">خط الطوارئ</div>
                <div className="text-blue-100">0559811925</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-reverse space-x-3">
           
              <div className="text-center">
                <div className="text-white text-lg font-semibold">طلبات الخدمة</div>
                <div className="text-blue-100">info@alqawsco.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8">
              تواصل معنا
            </Button></Link>
           
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  )
}
