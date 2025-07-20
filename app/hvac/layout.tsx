import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات التكييف المركزية - القوس الماسي | صيانة وتركيب المكيفات في جدة",
  description: "خدمات صيانة وتركيب المكيفات المركزية في جدة. شركة القوس الماسي تقدم خدمات التكييف بأسعار منافسة وضمان شامل. اتصل بنا: 0559811925",
  keywords: "صيانة مكيفات مركزية جدة، تركيب مكيفات جدة، خدمات التكييف جدة، صيانة مكيفات جدة، القوس الماسي تكييف",
  openGraph: {
    title: "خدمات التكييف المركزية - القوس الماسي",
    description: "خدمات صيانة وتركيب المكيفات المركزية في جدة بأسعار منافسة وضمان شامل",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات التكييف المركزية - القوس الماسي",
    description: "خدمات صيانة وتركيب المكيفات المركزية في جدة بأسعار منافسة وضمان شامل",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/hvac",
  },
  robots: "index, follow",
}

export default function HVACLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 