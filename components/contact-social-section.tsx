"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactSocialSection() {
  const phoneNumbers = ["0559811925", "0534363845", "0562939917"]

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم")
    window.open(`https://wa.me/966${number.substring(1)}?text=${message}`, "_blank")
  }

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1375bd] mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا عبر القنوات المتاحة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1375bd] mb-6">معلومات التواصل</h3>

            {/* Phone Numbers */}
            <Card className="border-2 border-[#018bd2]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-[#1375bd] ml-3" />
                  <h4 className="text-lg font-semibold text-[#1375bd]">أرقام الهواتف</h4>
                </div>
                <div className="space-y-3">
                  {phoneNumbers.map((number, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#f3f8fc] rounded-lg">
                      <span className="font-semibold text-gray-700">{number}</span>
                      <div className="flex space-x-reverse space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleCall(number)}
                          className="bg-[#1375bd] hover:bg-[#018bd2]"
                        >
                          <Phone className="w-4 h-4 ml-1" />
                          اتصال
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleWhatsApp(number)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <MessageCircle className="w-4 h-4 ml-1" />
                          واتساب
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1375bd] ml-3" />
                  <h4 className="text-lg font-semibold text-[#1375bd]">موقعنا</h4>
                </div>
                <p className="text-gray-700">
                  جدة، المملكة العربية السعودية
                  <br />
                  نخدم جميع مناطق المملكة
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-[#1375bd] ml-3" />
                  <h4 className="text-lg font-semibold text-[#1375bd]">البريد الإلكتروني</h4>
                </div>
                <p className="text-gray-700">info@alqousalmasi.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1375bd] mb-6">تابعونا على وسائل التواصل</h3>

            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="https://www.facebook.com/profile.php?id=61578166932512" target="_blank">
                <CardContent className="p-6 text-center">
                  
                  <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
               
                  <h4 className="font-semibold text-gray-700">فيسبوك</h4>
                  <p className="text-sm text-gray-500 mt-1">تابع أحدث أعمالنا</p>
                </CardContent>
                </Link>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="https://www.instagram.com/alqawsco?fbclid=IwY2xjawLodQpleHRuA2FlbQIxMABicmlkETF2U3p3REY2VzR5Q1VFcUowAR7Nedp3jv5_J2PU8-8m7cW4GshjqJwLYtMMYUkR_Y6WIjzcqlzCyIEehW6UEA_aem_DkAakpPArmRPIuiD4ybPvA" target="_blank">
                <CardContent className="p-6 text-center">
                  
                  <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                 
                  <h4 className="font-semibold text-gray-700">إنستغرام</h4>
                  <p className="text-sm text-gray-500 mt-1">صور مشاريعنا</p>
                </CardContent>
                </Link>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="https://www.tiktok.com/@alqawsco?fbclid=IwY2xjawLodMlleHRuA2FlbQIxMABicmlkETF2U3p3REY2VzR5Q1VFcUowAR78lWQyDXCEU30A5wgNYaXRcT51wBlsNr2GeRSJzU4BJCFV0u4QY2Rh39L6Kg_aem_CYo2PiK8c9bJVK0wFOFusA" target="_blank">
                <CardContent className="p-6 text-center">
                  
                  <svg
                    className="w-12 h-12 text-blue-700 mx-auto mb-3 group-hover:scale-110 transition-transform"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <rect width="48" height="48" rx="12" fill="white" />
                      <path
                        d="M32.5 17.5c-1.7 0-3.1-1.4-3.1-3.1V12h-4.1v18.2c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8c.3 0 .6 0 .9.1v-4.2c-.3 0-.6-.1-.9-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V23c1.1.7 2.4 1.1 3.8 1.1h1.1v-4.1h-1.1z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  
                  <h4 className="font-semibold text-gray-700">تيك توك</h4>
                  <p className="text-sm text-gray-500 mt-1">آخر الأخبار</p>
                </CardContent>
                </Link>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="https://www.snapchat.com/add/alqawsco?share_id=sg6qwmdMzbc&locale=ar-EG" target="_blank">
                <CardContent className="p-6 text-center">
                  
                <Image src="/snapchat.svg" alt="snapchat" width={48} height={48} className="w-12 h-12 text-blue-700 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  
                  <h4 className="font-semibold text-gray-700">سناب شات</h4>
                  <p className="text-sm text-gray-500 mt-1">آخر الأخبار</p>
                </CardContent>
                </Link>
                </Card>
            </div>

            {/* Call to Action */}
            <Card className="bg-[#1375bd] text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-3">مستعدون لخدمتكم</h4>
                <p className="mb-4">تواصلوا معنا الآن للحصول على استشارة مجانية</p>
                <Button
                  className="bg-white text-[#1375bd] hover:bg-gray-100"
                  onClick={() => handleWhatsApp(phoneNumbers[0])}
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  تواصل عبر واتساب
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
