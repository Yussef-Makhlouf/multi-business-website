import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تواصل معنا - القوس الماسي | خدمات التكييف والمقاولات والتسويق في جدة",
  description: "تواصل مع شركة القوس الماسي في جدة للحصول على خدمات التكييف والمقاولات والتسويق. اتصل بنا: 0559811925، 0534363845، 0562939917. خدمة 24/7",
  keywords: "تواصل القوس الماسي، اتصل بنا جدة، خدمات التكييف جدة، مقاولات جدة، تسويق جدة، القوس الماسي جدة",
  openGraph: {
    title: "تواصل معنا - القوس الماسي",
    description: "تواصل مع شركة القوس الماسي في جدة للحصول على خدمات التكييف والمقاولات والتسويق",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - القوس الماسي",
    description: "تواصل مع شركة القوس الماسي في جدة للحصول على خدمات التكييف والمقاولات والتسويق",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/contact",
  },
  robots: "index, follow",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 