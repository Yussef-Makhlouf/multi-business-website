import { Badge } from "@/components/ui/badge"

import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-reverse space-x-4 mb-6">
                <div className="w-18 h-16  rounded-xl flex items-center justify-center ">
                  <Image src="/logoh.png" alt="logo" width={34} height={34} className="w-full h-full object-contain"   />
                </div>
          
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                شريكك الموثوق في خدمات التكييف والمقاولات والتسويق في جدة والمملكة العربية السعودية. نقدم حلولاً شاملة ومبتكرة لجميع احتياجاتك.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gradient-to-r from-[#1375bd] to-[#018bd2] hover:from-[#018bd2] hover:to-[#1375bd] transition-all duration-300 shadow-md">
                  جودة مضمونة
                </Badge>
                <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-md">
                  خدمة 24/7
                </Badge>
              </div>
              
  
            </div>

            {/* HVAC Services */}
            <div>
              <div className="mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-[#1375bd] to-[#018bd2] rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-white mb-4">خدمات التكييف</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "صيانة المكيفات المركزية",
                  "تركيب أنظمة جديدة",
                  "تنظيف وتعقيم شامل",
                  "خدمة طوارئ فورية",
                  "صيانة دورية مجدولة"
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-reverse space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group">
                    <div className="w-1.5 h-1.5 bg-[#1375bd] rounded-full group-hover:bg-[#018bd2] transition-colors duration-200"></div>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contracting & Real Estate */}
            <div>
              <div className="mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-white mb-4">المقاولات والعقارات</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "البناء السكني والتجاري",
                  "التطوير العقاري",
                  "استشارات الاستثمار",
                  "التسويق العقاري",
                  "إدارة المشاريع"
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-reverse space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full group-hover:bg-emerald-500 transition-colors duration-200"></div>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketing & Advertising */}
            <div>
              <div className="mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full mb-4"></div>
                <h3 className="text-lg font-bold text-white mb-4">الإعلان والتسويق</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "طباعة بنرات احترافية عالية الجودة",
                  "كلادينج خارجي وداخلي متطور",
                  "لافتات إعلانية جذابة",
                  "حروف بارزة ثلاثية الأبعاد",
                  "استيكرات مخصصة ومقاومة",
                  "طباعة أوت دور وإن دور"
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-reverse space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors duration-200"></div>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social Section */}
  

          {/* Bottom Section */}
          <Separator className="bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 القوس الماسي. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                مصمم و مطور بأحدث التقنيات بواسطة <a href="https://goldenmoonads.com" target="_blank" className="text-white font-bold">القمر الذهبي</a>
              </p>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-6">
              <div className="flex space-x-reverse space-x-4">
                {[
                  { number: "0559811925", color: "from-[#1375bd] to-[#018bd2]" }
                
                ].map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number}`}
                    className="flex items-center space-x-reverse space-x-2 group focus:outline-none focus:ring-2 focus:ring-[#1375bd] rounded transition"
                  >
                  <div key={index} className="flex items-center space-x-reverse space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${phone.color} rounded-full`}></div>
                    <span className="text-gray-400 text-sm font-medium">{phone.number}</span>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}