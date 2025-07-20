import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import FloatingButtons from "@/components/floating-buttons"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">ق</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1375bd]">القوس الماسي</h1>
                <p className="text-sm text-gray-600">Al Qous Almasi</p>
              </div>
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
              <Link href="/marketing" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                الإعلان والتسويق
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#1375bd] transition-colors">
                من نحن
              </Link>
              <Link href="/contact">
                <Button className="bg-[#018bd2] hover:bg-[#1375bd]">تواصل معنا</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#f3f8fc] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#1375bd] mb-6">معرض أعمالنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استكشفوا مجموعة من أفضل مشاريعنا المنجزة في مجالات التكييف والمقاولات والتسويق
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* HVAC Projects */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1375bd] mb-4">مشاريع التكييف المركزي</h2>
              <p className="text-xl text-gray-600">مشاريع صيانة وتركيب وتنظيف أنظمة التكييف</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=مشروع+تكييف+مركزي+-+فيلا+سكنية"
                    alt="مشروع تكييف مركزي - فيلا سكنية"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">تركيب نظام تكييف مركزي - فيلا سكنية</h3>
                    <p className="text-gray-600 mb-4">
                      تركيب نظام تكييف مركزي متطور لفيلا سكنية في جدة مع أحدث التقنيات الموفرة للطاقة
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=صيانة+تكييف+مركزي+-+مبنى+تجاري"
                    alt="صيانة تكييف مركزي - مبنى تجاري"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">صيانة شاملة - مبنى تجاري</h3>
                    <p className="text-gray-600 mb-4">
                      صيانة وتنظيف شامل لنظام التكييف المركزي في مبنى تجاري بمساحة 5000 متر مربع
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=تنظيف+مجاري+التكييف+-+مجمع+سكني"
                    alt="تنظيف مجاري التكييف - مجمع سكني"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">تنظيف مجاري التكييف - مجمع سكني</h3>
                    <p className="text-gray-600 mb-4">
                      تنظيف وتعقيم شامل لمجاري التكييف في مجمع سكني يضم 50 وحدة سكنية
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2023</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Construction Projects */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1375bd] mb-4">مشاريع المقاولات والعقارات</h2>
              <p className="text-xl text-gray-600">مشاريع البناء والتطوير العقاري والاستثمار</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=مجمع+سكني+فاخر+-+جدة"
                    alt="مجمع سكني فاخر - جدة"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مجمع سكني فاخر - جدة</h3>
                    <p className="text-gray-600 mb-4">
                      تطوير وبناء مجمع سكني فاخر يضم 30 فيلا مع جميع المرافق والخدمات الحديثة
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=مبنى+إداري+تجاري+-+جدة"
                    alt="مبنى إداري تجاري - جدة"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">مبنى إداري تجاري</h3>
                    <p className="text-gray-600 mb-4">
                      بناء مبنى إداري تجاري من 8 طوابق مع مواقف سيارات ومرافق متكاملة
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2023</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=تجديد+فيلا+تراثية+-+جدة"
                    alt="تجديد فيلا تراثية - جدة"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">تجديد فيلا تراثية</h3>
                    <p className="text-gray-600 mb-4">
                      ترميم وتجديد شامل لفيلا تراثية مع الحفاظ على الطابع المعماري الأصيل
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2023</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Marketing Projects */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1375bd] mb-4">مشاريع الإعلان والتسويق</h2>
              <p className="text-xl text-gray-600">حملات إعلانية وتسويقية ناجحة لعملائنا</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=حملة+إعلانية+-+مطعم+فاخر"
                    alt="حملة إعلانية - مطعم فاخر"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">حملة إعلانية متكاملة - مطعم فاخر</h3>
                    <p className="text-gray-600 mb-4">تصميم هوية بصرية كاملة وحملة تسويقية رقمية لمطعم فاخر في جدة</p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=لوحات+إعلانية+-+مجمع+تجاري"
                    alt="لوحات إعلانية - مجمع تجاري"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">لوحات إعلانية - مجمع تجاري</h3>
                    <p className="text-gray-600 mb-4">تصميم وتنفيذ لوحات إعلانية خارجية وداخلية لمجمع تجاري كبير</p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2024</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=250&width=400&text=تسويق+رقمي+-+شركة+خدمات"
                    alt="تسويق رقمي - شركة خدمات"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1375bd] mb-2">حملة تسويق رقمي - شركة خدمات</h3>
                    <p className="text-gray-600 mb-4">
                      استراتيجية تسويق رقمي شاملة لشركة خدمات مع زيادة 300% في المبيعات
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-[#018bd2] text-white">مكتمل 2023</Badge>
                      <Badge variant="outline" className="border-[#1375bd] text-[#1375bd]">
                        جدة
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1375bd] to-[#018bd2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">مشروعكم القادم معنا؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            انضموا إلى قائمة عملائنا الراضين واستفيدوا من خبرتنا المتنوعة في تحقيق أهدافكم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8">
                ابدأ مشروعك معنا
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1375bd] text-lg px-8 bg-transparent"
              >
                تعرف على خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-reverse space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ق</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">القوس الماسي</h3>
                  <p className="text-sm text-gray-400">Al Qous Almasi</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">شريكك الموثوق في خدمات التكييف والمقاولات والتسويق</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li>صيانة المكيفات المركزية</li>
                <li>المقاولات والعقارات</li>
                <li>الإعلان والتسويق</li>
                <li>استشارات متخصصة</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white">
                    أعمالنا
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
              <ul className="space-y-2 text-gray-400">
                <li>0559811925</li>
                <li>0534363845</li>
                <li>0562939917</li>
                <li>جدة، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 القوس الماسي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  )
}
