import { Badge } from "@/components/ui/badge"

export default function Footer() {
  return (
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
            <p className="text-gray-400 leading-relaxed mb-4">
              شريكك الموثوق في خدمات التكييف والمقاولات والتسويق في جدة والمملكة العربية السعودية
            </p>
            <div className="flex space-x-reverse space-x-4">
              <Badge className="bg-[#1375bd]">جودة مضمونة</Badge>
              <Badge className="bg-[#018bd2]">خدمة 24/7</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">خدمات التكييف</h3>
            <ul className="space-y-2 text-gray-400">
              <li>صيانة المكيفات المركزية</li>
              <li>تركيب أنظمة جديدة</li>
              <li>تنظيف وتعقيم شامل</li>
              <li>خدمة طوارئ فورية</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">المقاولات والعقارات</h3>
            <ul className="space-y-2 text-gray-400">
              <li>البناء السكني والتجاري</li>
              <li>التطوير العقاري</li>
              <li>استشارات الاستثمار</li>
              <li>التسويق العقاري</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">الإعلان والتسويق</h3>
            <ul className="space-y-2 text-gray-400">
              <li>التصميم الجرافيكي</li>
              <li>الطباعة والإعلان</li>
              <li>التسويق الرقمي</li>
              <li>اللوحات الإعلانية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-right">&copy; 2024 القوس الماسي. جميع الحقوق محفوظة.</p>
            <div className="flex space-x-reverse space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400">0559811925</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">0534363845</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">0562939917</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 