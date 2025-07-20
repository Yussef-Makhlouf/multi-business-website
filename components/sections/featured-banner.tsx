"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Award, Users, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

interface FeaturedBannerProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  backgroundColor?: string
  gradient?: string
  icon?: React.ReactNode
}

export default function FeaturedBanner({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink,
  backgroundColor = "bg-gradient-to-br from-[#1375bd] to-[#018bd2]",
  gradient = "from-[#1375bd] to-[#018bd2]",
  icon
}: FeaturedBannerProps) {
  return (
    <section className={`py-20 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Icon */}
          {icon && (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              {icon}
            </div>
          )}

          {/* Title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">{title}</h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-6">{subtitle}</p>
          
          {/* Description */}
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">{description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-reverse space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href={buttonLink}>
            <Button size="lg" className="bg-white text-[#1375bd] hover:bg-gray-100 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300">
              <ArrowLeft className="w-5 h-5 ml-2" />
              {buttonText}
            </Button>
          </Link>
        </div>

        {/* Additional Info Cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">جودة مضمونة</h3>
            <p className="text-white/80 text-sm">نضمن لكم أعلى معايير الجودة في جميع خدماتنا</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">فريق متخصص</h3>
            <p className="text-white/80 text-sm">فريق من الخبراء المتخصصين في مجالاتهم</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">خدمة 24/7</h3>
            <p className="text-white/80 text-sm">خدمة متواصلة على مدار الساعة لراحتكم</p>
          </div>
        </div> */}

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-1000">
          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-bounce delay-500">
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
} 