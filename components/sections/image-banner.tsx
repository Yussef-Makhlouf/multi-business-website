"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, CheckCircle, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

interface ImageBannerProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
  overlayColor?: string
  reverse?: boolean
  icon?: React.ReactNode
}

export default function ImageBanner({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  overlayColor = "from-black/60 to-black/40",
  reverse = false,
  icon
}: ImageBannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={`space-y-8 text-white ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Service Icon and Title */}
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              {/* {icon && (
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  {icon}
                </div>
              )} */}
              <div>
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <p className="text-xl text-white/90 font-semibold">{subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/90 leading-relaxed">{description}</p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={buttonLink}>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  {buttonText}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-gray-900 text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-reverse space-x-3 mb-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">لماذا تختار خدماتنا؟</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>أسعار منافسة</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>ضمان شامل</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>فريق متخصص</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>خدمة 24/7</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Visual Side */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* 4 Images in Square Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="relative overflow-hidden shadow-lg group"
                style={{
                  borderTopLeftRadius: '40px',
                  borderBottomRightRadius: '40px',
                }}
              >
                <img
                  src={imageSrc}
                  alt={`${imageAlt} - صورة 1`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Image 2 */}
              <div className="relative overflow-hidden shadow-lg group"
                style={{
                  borderTopRightRadius: '40px',
                  borderBottomLeftRadius: '40px',
                }}
              >
                <img
                  src={imageSrc}
                  alt={`${imageAlt} - صورة 2`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Image 3 */}
              <div className="relative overflow-hidden shadow-lg group"
                style={{
                  borderTopRightRadius: '40px',
                  borderBottomLeftRadius: '40px',
                }}
              >
                <img
                  src={imageSrc}
                  alt={`${imageAlt} - صورة 3`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Image 4 */}
              <div className="relative overflow-hidden shadow-lg group"
                style={{
                  borderTopLeftRadius: '40px',
                  borderBottomRightRadius: '40px',
                }}
              >
                <img
                  src={imageSrc}
                  alt={`${imageAlt} - صورة 4`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 