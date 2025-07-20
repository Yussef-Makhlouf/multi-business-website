"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/hvac", label: "خدمات التكييف" },
    { href: "/contracting", label: "المقاولات والعقارات" },
    { href: "/marketing", label: "الإعلان والتسويق" },
    { href: "/about", label: "من نحن" },
    { href: "/portfolio", label: "أعمالنا" },
  ]

  return (
    <header className="bg-white shadow-lg border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-reverse space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
              <Image src="/logov.png" alt="logo" width={32} height={32} className="w-full h-full object-contain"   />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1375bd] group-hover:text-[#018bd2] transition-colors truncate">
                القوس الماسي
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">Al Qous Almasi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#1375bd] transition-colors font-medium relative group text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1375bd] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-[#018bd2] hover:bg-[#1375bd] shadow-lg transition-all duration-300 transform hover:scale-105 text-sm xl:text-base">
                <Phone className="w-4 h-4 ml-2" />
                تواصل معنا
              </Button>
            </Link>
          </div>

          {/* Tablet Navigation (Medium screens) */}
          <div className="hidden md:flex lg:hidden items-center space-x-reverse space-x-4">
            <Link href="/contact">
              <Button size="sm" className="bg-[#018bd2] hover:bg-[#1375bd] shadow-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="w-4 h-4 ml-2" />
                تواصل معنا
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px]">
                <div className="flex flex-col h-full">
                  {/* Tablet Logo */}
                  <div className="flex items-center space-x-reverse space-x-3 mb-8">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                      <Image src="/logov.png" alt="logo" width={32} height={32} className="w-full h-full object-contain"   />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#1375bd]">القوس الماسي</h2>
                      <p className="text-sm text-gray-600">Al Qous Almasi</p>
                    </div>
                  </div>

                  {/* Tablet Navigation */}
                  <nav className="flex-1">
                    <div className="space-y-3">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-3 px-4 text-gray-700 hover:text-[#1375bd] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Tablet Contact Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="space-y-3 text-sm text-gray-600">
                      <p className="font-semibold text-[#1375bd]">اتصل بنا مباشرة:</p>
                      <div className="space-y-1">
                        <p className="flex items-center">
                          <Phone className="w-4 h-4 ml-2 text-[#1375bd]" />
                          0559811925
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-4 h-4 ml-2 text-[#1375bd]" />
                          0534363845
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1.5 sm:p-2">
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-reverse space-x-3 mb-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                      <Image src="/logov.png" alt="logo" width={32} height={32} className="w-full h-full object-contain"   />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold text-[#1375bd] truncate">القوس الماسي</h2>
                      <p className="text-xs text-gray-600 truncate">Al Qous Almasi</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1">
                    <div className="space-y-2">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-3 px-3 text-gray-700 hover:text-[#1375bd] hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Contact Section */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link href="/contact" className="block mb-4">
                      <Button className="w-full bg-[#018bd2] hover:bg-[#1375bd] shadow-lg text-sm">
                        <Phone className="w-4 h-4 ml-2" />
                        تواصل معنا
                      </Button>
                    </Link>
                    
                    {/* Quick Contact Info */}
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <p className="font-semibold text-[#1375bd]">اتصل بنا مباشرة:</p>
                      <div className="space-y-1">
                        <p className="flex items-center">
                          <Phone className="w-3 h-3 ml-1 text-[#1375bd]" />
                          0559811925
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-3 h-3 ml-1 text-[#1375bd]" />
                          0534363845
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
} 