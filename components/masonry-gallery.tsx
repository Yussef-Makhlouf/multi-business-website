"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    id: 1,
    title: "صيانة نظام تكييف مركزي - فيلا فاخرة",
    category: "hvac",
    categoryName: "التكييف",
    image: "/placeholder.svg?height=400&width=300&text=صيانة+تكييف+فيلا+فاخرة",
    height: "h-80",
    year: "2024",
  },
  {
    id: 2,
    title: "مجمع سكني متطور - 50 وحدة",
    category: "contracting",
    categoryName: "المقاولات",
    image: "/placeholder.svg?height=500&width=300&text=مجمع+سكني+متطور",
    height: "h-96",
    year: "2024",
  },
  {
    id: 3,
    title: "حملة إعلانية متكاملة - مطعم فاخر",
    category: "marketing",
    categoryName: "التسويق",
    image: "/placeholder.svg?height=350&width=300&text=حملة+إعلانية+مطعم",
    height: "h-72",
    year: "2024",
  },
  {
    id: 4,
    title: "تنظيف مجاري تكييف - مبنى تجاري",
    category: "hvac",
    categoryName: "التكييف",
    image: "/placeholder.svg?height=300&width=300&text=تنظيف+مجاري+تكييف",
    height: "h-64",
    year: "2024",
  },
  {
    id: 5,
    title: "فيلا تراثية مجددة - جدة التاريخية",
    category: "contracting",
    categoryName: "المقاولات",
    image: "/placeholder.svg?height=450&width=300&text=فيلا+تراثية+مجددة",
    height: "h-88",
    year: "2023",
  },
  {
    id: 6,
    title: "لوحات إعلانية خارجية - مجمع تجاري",
    category: "marketing",
    categoryName: "التسويق",
    image: "/placeholder.svg?height=320&width=300&text=لوحات+إعلانية+خارجية",
    height: "h-68",
    year: "2024",
  },
  {
    id: 7,
    title: "تركيب نظام تكييف موفر للطاقة",
    category: "hvac",
    categoryName: "التكييف",
    image: "/placeholder.svg?height=380&width=300&text=تركيب+تكييف+موفر+طاقة",
    height: "h-76",
    year: "2024",
  },
  {
    id: 8,
    title: "مبنى إداري حديث - 8 طوابق",
    category: "contracting",
    categoryName: "المقاولات",
    image: "/placeholder.svg?height=520&width=300&text=مبنى+إداري+حديث",
    height: "h-104",
    year: "2023",
  },
  {
    id: 9,
    title: "هوية بصرية متكاملة - شركة تقنية",
    category: "marketing",
    categoryName: "التسويق",
    image: "/placeholder.svg?height=280&width=300&text=هوية+بصرية+شركة+تقنية",
    height: "h-60",
    year: "2024",
  },
  {
    id: 10,
    title: "صيانة طوارئ - مجمع تجاري كبير",
    category: "hvac",
    categoryName: "التكييف",
    image: "/placeholder.svg?height=360&width=300&text=صيانة+طوارئ+مجمع+تجاري",
    height: "h-72",
    year: "2024",
  },
  {
    id: 11,
    title: "مشروع إسكان متوسط - 100 وحدة",
    category: "contracting",
    categoryName: "المقاولات",
    image: "/placeholder.svg?height=480&width=300&text=مشروع+إسكان+متوسط",
    height: "h-92",
    year: "2023",
  },
  {
    id: 12,
    title: "حملة تسويق رقمي - متجر إلكتروني",
    category: "marketing",
    categoryName: "التسويق",
    image: "/placeholder.svg?height=340&width=300&text=تسويق+رقمي+متجر",
    height: "h-68",
    year: "2024",
  },
]

export default function MasonryGallery() {
  const [filter, setFilter] = useState("all")

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hvac":
        return "bg-blue-100 text-blue-800"
      case "contracting":
        return "bg-green-100 text-green-800"
      case "marketing":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === "all"
              ? "bg-[#1375bd] text-white shadow-lg"
              : "bg-white text-[#1375bd] border-2 border-[#1375bd] hover:bg-[#1375bd] hover:text-white"
          }`}
        >
          جميع الأعمال
        </button>
        <button
          onClick={() => setFilter("hvac")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === "hvac"
              ? "bg-[#1375bd] text-white shadow-lg"
              : "bg-white text-[#1375bd] border-2 border-[#1375bd] hover:bg-[#1375bd] hover:text-white"
          }`}
        >
          خدمات التكييف
        </button>
        <button
          onClick={() => setFilter("contracting")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === "contracting"
              ? "bg-[#1375bd] text-white shadow-lg"
              : "bg-white text-[#1375bd] border-2 border-[#1375bd] hover:bg-[#1375bd] hover:text-white"
          }`}
        >
          المقاولات والعقارات
        </button>
        <button
          onClick={() => setFilter("marketing")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === "marketing"
              ? "bg-[#1375bd] text-white shadow-lg"
              : "bg-white text-[#1375bd] border-2 border-[#1375bd] hover:bg-[#1375bd] hover:text-white"
          }`}
        >
          الإعلان والتسويق
        </button>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="break-inside-avoid hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={400}
                  className={`w-full ${item.height} object-cover group-hover:scale-110 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(item.category)}>{item.categoryName}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 left-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-white text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                  >
                    {item.year}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">لا توجد مشاريع في هذا التصنيف حالياً</p>
        </div>
      )}
    </div>
  )
}
