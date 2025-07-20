"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  const phoneNumbers = ["0559811925", "0534363845", "0562939917"]

  const handlePhoneCall = () => {
    // Use the first number as primary
    window.location.href = `tel:${phoneNumbers[0]}`
  }

  const handleWhatsApp = () => {
    // Use the first number for WhatsApp
    const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم")
    window.open(`https://wa.me/966${phoneNumbers[0].substring(1)}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        title="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Phone Call Button */}
      <Button
        onClick={handlePhoneCall}
        className="w-12 h-12 rounded-full bg-[#1375bd] hover:bg-[#018bd2] shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        title="اتصل بنا"
      >
        <Phone className="w-6 h-6 text-white" />
      </Button>
    </div>
  )
}
