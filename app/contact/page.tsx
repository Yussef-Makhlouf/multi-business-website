"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import FloatingButtons from "@/components/floating-buttons"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#f3f8fc] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#1375bd] mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم ومساعدتكم في جميع احتياجاتكم. تواصلوا معنا اليوم
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">اتصل بنا</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600 font-semibold">0559811925</p>
          
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">موقعنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  جدة، المملكة العربية السعودية
                  <br />
                  نخدم جميع مناطق المملكة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-[#1375bd] mx-auto mb-4" />
                <CardTitle className="text-[#1375bd]">ساعات العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  السبت - الخميس: 8:00 ص - 6:00 م
                  <br />
                  خدمة طوارئ 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#018bd2]">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1375bd] text-center">طرق التواصل السريع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="flex items-center space-x-reverse space-x-4">
                
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg">واتساب</h3>
                      <p className="text-gray-600">تواصل مباشر وسريع</p>
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/966559811925?text=مرحباً، أود الاستفسار عن خدماتكم"
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-3 rounded-lg font-semibold transition-colors"
                  >
                    تواصل عبر واتساب
                  </Link>
                </div>

                {/* Phone Call */}
                <div className="flex items-center justify-between p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="flex items-center space-x-reverse space-x-4">
          
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg">اتصال مباشر</h3>
                      <p className="text-gray-600">اتصل بنا الآن</p>
                    </div>
                  </div>
                  <Link
                    href="tel:0559811925"
                    className="bg-[#1375bd] hover:bg-[#018bd2] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    اتصل الآن
                  </Link>
                </div>

                {/* Email */}
                {/* <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@alqousalmasi.com</p>
                    </div>
                  </div>
                  <Link
                    href="mailto:info@alqousalmasi.com"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    أرسل بريد إلكتروني
                  </Link>
                </div> */}

                {/* Social Media */}
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-colors">
                  <div className="flex items-center space-x-reverse space-x-4">
               
                    <div>
                      <h3 className="font-semibold text-gray-700 text-lg">وسائل التواصل الاجتماعي</h3>
                      <p className="text-gray-600">تابعنا على إنستغرام وفيسبوك</p>
                    </div>
                  </div>
                  <div className="flex space-x-reverse space-x-2">
                    <Link
                      href="https://www.instagram.com/alqawsco?fbclid=IwY2xjawLodQpleHRuA2FlbQIxMABicmlkETF2U3p3REY2VzR5Q1VFcUowAR7Nedp3jv5_J2PU8-8m7cW4GshjqJwLYtMMYUkR_Y6WIjzcqlzCyIEehW6UEA_aem_DkAakpPArmRPIuiD4ybPvA"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61578166932512"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                    >
                      
                      <Facebook className="w-5 h-5" />
                  
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Numbers Section */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1375bd] text-center">أرقام الهواتف المتاحة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-1 gap-6 ">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Phone className="w-8 h-8 text-[#1375bd] mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-700 mb-1">الخط الرئيسي</h4>
                      <p className="text-lg font-bold text-[#1375bd]">0559811925</p>
                    </div>
             
                  </div>
                </CardContent>
              </Card>
            </div>

        
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd]">ما هي مناطق الخدمة؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نقدم خدماتنا في جدة وجميع مناطق المملكة العربية السعودية. مقرنا الرئيسي في جدة ولدينا فرق عمل متنقلة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd]">هل تقدمون خدمة طوارئ؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نعم، نقدم خدمة طوارئ على مدار الساعة طوال أيام الأسبوع، خاصة لخدمات التكييف والمقاولات العاجلة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd]">كيف يمكنني الحصول على عرض سعر؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  يمكنكم التواصل معنا عبر الهاتف أو واتساب، وسنقوم بإرسال عرض سعر مفصل خلال 24 ساعة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1375bd]">هل تقدمون ضمان على الخدمات؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  نعم، نقدم ضمان شامل على جميع خدماتنا وفقاً لطبيعة كل خدمة، مع متابعة دورية لضمان رضاكم الكامل.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <FloatingButtons />
    </div>
  )
}
