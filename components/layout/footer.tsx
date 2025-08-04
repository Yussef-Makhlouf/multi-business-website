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
          <div className="flex flex-col items-center text-center mb-12">
            {/* Company Info */}
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              <div className="w-18 h-16 rounded-xl flex items-center justify-center">
                <Image src="/logoh.png" alt="logo" width={34} height={34} className="w-full h-full object-contain" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">القوس الماسي</h2>
            
            <div className="flex items-center space-x-reverse space-x-2 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1375bd] to-[#018bd2] rounded-full"></div>
              <span className="text-gray-400 text-lg font-medium">0559811925</span>
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </footer>
  )
}