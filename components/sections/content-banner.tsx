"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Phone, MessageCircle, Award, Users, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

interface ContentBannerProps {
  title: string
  subtitle: string
  description: string
  longDescription: string
  features: string[]
  highlights: string[]
  buttonText: string
  buttonLink: string
  backgroundColor?: string
  icon?: React.ReactNode
}

export default function ContentBanner({
  title,
  subtitle,
  description,
  longDescription,
  features,
  highlights,
  buttonText,
  buttonLink,
  backgroundColor = "bg-white",
  icon
}: ContentBannerProps) {
  return (
    <section className={`py-20 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1375bd] to-[#018bd2] transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {icon && (
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full mb-6 shadow-lg">
                {icon}
              </div>
            )}
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1375bd] mb-4">{title}</h2>
            <p className="text-xl lg:text-2xl text-[#018bd2] font-semibold mb-6">{subtitle}</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{description}</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Long Description */}
              <div className="bg-gradient-to-r from-[#1375bd]/5 to-[#018bd2]/5 rounded-xl p-8 border border-[#1375bd]/20">
                <h3 className="text-2xl font-bold text-[#1375bd] mb-4">تفاصيل الخدمة</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{longDescription}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1375bd] mb-6">مميزات الخدمة</h3>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-reverse space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href={buttonLink}>
                  <Button size="lg" className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                    <ArrowLeft className="w-5 h-5 ml-2" />
                    {buttonText}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Highlights */}
              <div className="bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">لماذا تختار خدماتنا؟</h3>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-reverse space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white/90 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-[#1375bd]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">جودة مضمونة</h4>
                  <p className="text-sm text-gray-600">نضمن لكم أعلى معايير الجودة</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-[#1375bd]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">فريق متخصص</h4>
                  <p className="text-sm text-gray-600">خبراء في مجالاتهم</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-[#1375bd]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">خدمة 24/7</h4>
                  <p className="text-sm text-gray-600">خدمة متواصلة لراحتكم</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-[#1375bd]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">ضمان شامل</h4>
                  <p className="text-sm text-gray-600">ضمان على جميع الخدمات</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">تواصل معنا الآن</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <Phone className="w-5 h-5 text-[#1375bd]" />
                    <span className="text-gray-700">0559811925</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-3">
                    <MessageCircle className="w-5 h-5 text-[#1375bd]" />
                    <span className="text-gray-700">واتساب مباشر</span>
                  </div>
                </div>
                <Link href="/contact" className="block mt-4">
                  <Button className="w-full bg-[#1375bd] hover:bg-[#018bd2]">
                    <Phone className="w-4 h-4 ml-2" />
                    احصل على عرض سعر
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 