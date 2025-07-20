"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

interface ServiceBannerProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  images: {
    main: string
    mainAlt: string
    small1: string
    small1Alt: string
    small2: string
    small2Alt: string
    small3: string
    small3Alt: string
  }
  backgroundColor?: string
  reverse?: boolean
  icon?: React.ReactNode
}

export default function ServiceBanner({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink,
  images,
  backgroundColor = "bg-white",
  reverse = false,
  icon
}: ServiceBannerProps) {
  return (
    <section className={`py-20 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1375bd] to-[#018bd2] transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Service Icon and Title */}
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              {/* {icon && (
                <div className="w-16 h-16 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full flex items-center justify-center shadow-lg">
                  {icon}
                </div>
              )} */}
              <div>
                <h2 className="text-4xl font-bold text-[#1375bd] mb-2">{title}</h2>
                <p className="text-lg text-[#018bd2] font-semibold">{subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href={buttonLink}>
                <Button className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  {buttonText}
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            {/* <div className="bg-gradient-to-r from-[#1375bd]/10 to-[#018bd2]/10 rounded-xl p-6 border border-[#1375bd]/20">
              <div className="flex items-center space-x-reverse space-x-3 mb-3">
                <Star className="w-6 h-6 text-[#1375bd]" />
                <h3 className="text-lg font-semibold text-[#1375bd]">لماذا تختار خدماتنا؟</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-[#1375bd] rounded-full"></div>
                  <span>أسعار منافسة</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-[#1375bd] rounded-full"></div>
                  <span>ضمان شامل</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-[#1375bd] rounded-full"></div>
                  <span>فريق متخصص</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-[#1375bd] rounded-full"></div>
                  <span>خدمة 24/7</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image Side */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Background with Curved Shape */}
            <div className="relative  rounded-3xl p-2">
              {/* Curved Decorative Element */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1375bd]/10 to-[#018bd2]/10 rounded-full blur-xl"></div>
              
              {/* 4 Images in Square Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1 - Main Image */}
                <div className="relative overflow-hidden shadow-lg" style={{
                      borderTopLeftRadius: '40px',
                      borderBottomRightRadius: '40px',
                    }}>
                  <img
                    src={images.main}
                    alt={images.mainAlt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{
                      borderTopLeftRadius: '40px',
                      borderBottomRightRadius: '40px',
                    }}
                  />
                  {/* Subtle Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                </div>
                
                {/* Image 2 - Small Image 1 */}
                <div className="relative overflow-hidden shadow-lg" style={{
                      borderTopRightRadius: '40px',
                      borderBottomLeftRadius: '40px',
                    }}>
                  <img
                    src={images.small1}
                    alt={images.small1Alt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{
                      borderTopRightRadius: '40px',
                      borderBottomLeftRadius: '40px',
                    }}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Image 3 - Small Image 2 */}
                <div className="relative overflow-hidden shadow-lg" style={{
                        borderTopRightRadius: '40px',
                        borderBottomLeftRadius: '40px',
                    }}>
                  <img
                    src={images.small2}
                    alt={images.small2Alt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{
                      borderTopRightRadius: '40px',
                      borderBottomLeftRadius: '40px',
                    }}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Image 4 - Small Image 3 */}
                <div className="relative overflow-hidden shadow-lg" style={{
                            borderTopLeftRadius: '40px',
                            borderBottomRightRadius: '40px',
                    }}>
                  <img
                    src={images.small3}
                    alt={images.small3Alt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{
                      borderTopLeftRadius: '40px',
                      borderBottomRightRadius: '40px',
                    }}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex space-x-reverse space-x-2">
                <div className="w-3 h-3 bg-[#1375bd] rounded-full"></div>
                <div className="w-3 h-3 bg-[#018bd2] rounded-full"></div>
                <div className="w-3 h-3 bg-[#1375bd] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 