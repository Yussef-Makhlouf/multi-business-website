import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "المقاولات والعقارات - القوس الماسي | خدمات المقاولات والاستثمار العقاري في جدة",
  description: "خدمات المقاولات والاستثمار العقاري في جدة. شركة القوس الماسي تقدم خدمات المقاولات العامة والاستثمار العقاري بأسعار منافسة. اتصل بنا: 0559811925",
  keywords: "مقاولات جدة، استثمار عقاري جدة، خدمات المقاولات جدة، مقاولات عامة جدة، القوس الماسي مقاولات",
  openGraph: {
    title: "المقاولات والعقارات - القوس الماسي",
    description: "خدمات المقاولات والاستثمار العقاري في جدة بأسعار منافسة وجودة عالية",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "المقاولات والعقارات - القوس الماسي",
    description: "خدمات المقاولات والاستثمار العقاري في جدة بأسعار منافسة وجودة عالية",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/contracting",
  },
  robots: "index, follow",
}

export default function ContractingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 