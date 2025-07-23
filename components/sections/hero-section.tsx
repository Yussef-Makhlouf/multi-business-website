"use client"

import { Button } from "@/components/ui/button"
import {  Play, Star, CheckCircle, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f3f8fc] via-white to-[#e8f4fd] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#1375bd]/10 to-[#018bd2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#018bd2]/10 to-[#1375bd]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#1375bd]/5 to-[#018bd2]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-20 animate-bounce">
        <div className="w-4 h-4 bg-[#1375bd] rounded-full"></div>
      </div>

      <div className="absolute bottom-32 left-1/4 animate-bounce delay-500">
        <div className="w-3 h-3 bg-[#1375bd] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-reverse space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#1375bd]/20">
              <Star className="w-5 h-5 text-[#1375bd]" />
              <span className="text-sm font-semibold text-[#1375bd]">شركة معتمدة ومضمونة</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-relaxed ">
                <span className="text-gray-900 leading-relaxed ">القوس الماسي</span>
                <br />
                <span className="bg-gradient-to-r from-[#1375bd] to-[#018bd2] bg-clip-text text-transparent">
                  شريكك الموثوق
                </span>
              </h1>
              
              {/* Services Description */}
              <div className="text-2xl lg:text-3xl text-gray-700 font-medium">
                في <span className="text-[#1375bd] font-bold">خدمات التكييف والمقاولات والدعايه والاعلان والتسويق</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              نقدم حلولاً شاملة ومتخصصة في مجالات التكييف والمقاولات والدعايه والاعلان والتسويق. 
               نقدم خدماتنا  في جميع أنحاء المملكة العربية السعودية.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-reverse space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">خدمة 24/7</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">ضمان شامل</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">أسعار منافسة</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">فريق متخصص</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 ml-2" />
                  احصل على عرض سعر مجاني
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-[#1375bd] text-[#1375bd] hover:bg-[#1375bd] hover:text-white text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Play className="w-5 h-5 ml-2" />
                  شاهد أعمالنا
                </Button>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center space-x-reverse space-x-6 pt-4">
              <div className="flex items-center space-x-reverse space-x-2">
                <MessageCircle className="w-5 h-5 text-[#1375bd]" />
                <span className="text-gray-600">واتساب مباشر</span>
              </div>
              <Button
                variant="ghost"
                className="text-[#1375bd] hover:text-[#018bd2] p-0"
                onClick={() => {
                  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم")
                  window.open(`https://wa.me/966559811925?text=${message}`, "_blank")
                }}
              >
                0559811925
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Central Logo */}
              <div className="relative z-20 w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full shadow-2xl animate-pulse"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-36 h-36 rounded-full flex items-center justify-center ">
                    <Image src="/logov.png" alt="logo" width={32} height={32} className="w-full h-full object-contain"   />
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-10 -right-10 bg-white rounded-xl shadow-xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-8 h-8 bg-[#1375bd] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">❄️</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">التكييف</span>
                </div>
              </div>

              <div className="absolute bottom-20 -left-10 bg-white rounded-xl shadow-xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-8 h-8 bg-[#018bd2] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🏗️</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">المقاولات</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-20 bg-white rounded-xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">الدعايه والاعلان والتسويق</span>
                </div>
              </div>

              {/* Company Info Banner */}
              {/* <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-6 w-80">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Award className="w-6 h-6 text-[#1375bd]" />
                    <span className="font-semibold text-gray-700">شركة معتمدة</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Users className="w-6 h-6 text-[#1375bd]" />
                    <span className="font-semibold text-gray-700">فريق متخصص</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Clock className="w-6 h-6 text-[#1375bd]" />
                    <span className="font-semibold text-gray-700">خدمة متواصلة</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1375bd] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#1375bd] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
} 