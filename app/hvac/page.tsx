import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckCircle, Wind, Thermometer, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ServiceHero from "@/components/service-hero"

export default function HVACPage() {
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
              <Link href="/contracting" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                المقاولات والعقارات
              </Link>
              <Link href="/marketing" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                الإعلان والتسويق
              </Link>
              <Button className="bg-[#018bd2] hover:bg-[#1375bd]">تواصل معنا</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <ServiceHero
        title="خدمات التكييف المركزي الاحترافية"
        subtitle="راحة وكفاءة على مدار السنة"
        description="خدمات متخصصة في صيانة وتنظيف وتركيب أنظمة التكييف المركزي. حافظوا على راحة منازلكم ومكاتبكم على مدار السنة مع فنيينا المعتمدين ودعم الطوارئ على مدار الساعة في جدة وجميع أنحاء المملكة."
        primaryButtonText="احجز خدمة"
        primaryButtonLink="/contact"
        secondaryButtonText="خدمة طوارئ"
        secondaryButtonLink="/contact"
        imageSrc="/placeholder.svg?height=500&width=600&text=فني+تكييف+محترف+يعمل+على+وحدة+التكييف"
        imageAlt="فني تكييف محترف يعمل على وحدة التكييف المركزي"
        badges={["خدمة 24/7", "فنيون معتمدون", "ضمان شامل", "أسعار تنافسية"]}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">خدمات التكييف المركزي</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              حلول شاملة لأنظمة التكييف للعقارات السكنية والتجارية. من الصيانة الدورية إلى إصلاح الطوارئ والتركيبات
              الجديدة
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
                  src="/placeholder.svg?height=200&width=400&text=صيانة+وإصلاح+التكييف"
                  alt="خدمات صيانة وإصلاح أنظمة التكييف"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 mb-4 text-right">
                  <li className="flex items-center justify-end" dir="ltr">
                    <span className="mr-2">جداول صيانة منتظمة</span>
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
                  src="/placeholder.svg?height=200&width=400&text=تركيب+أنظمة+التكييف"
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
                  src="/placeholder.svg?height=200&width=400&text=تنظيف+وتعقيم+التكييف"
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
              <Phone className="w-6 h-6 text-white" />
              <div className="text-center">
                <div className="text-white text-lg font-semibold">خط الطوارئ</div>
                <div className="text-blue-100">+966 12 123 تكييف</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <Mail className="w-6 h-6 text-white" />
              <div className="text-center">
                <div className="text-white text-lg font-semibold">طلبات الخدمة</div>
                <div className="text-blue-100">hvac@integrated-solutions.sa</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8">
              احجز خدمة الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1375bd] text-lg px-8 bg-transparent"
            >
              احصل على تقدير مجاني
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
              <p className="text-gray-400 leading-relaxed">خدمات تكييف احترافية يمكنكم الوثوق بها للراحة والكفاءة</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">خدمات التكييف</h3>
              <ul className="space-y-2 text-gray-400">
                <li>صيانة التكييف</li>
                <li>خدمات التركيب</li>
                <li>إصلاح الطوارئ</li>
                <li>تنظيف الأنظمة</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">خدمات أخرى</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contracting" className="hover:text-white">
                    المقاولات والعقارات
                  </Link>
                </li>
                <li>
                  <Link href="/marketing" className="hover:text-white">
                    الإعلان والتسويق
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+966 12 123 تكييف</li>
                <li>hvac@integrated-solutions.sa</li>
                <li>خدمة طوارئ 24/7</li>
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
