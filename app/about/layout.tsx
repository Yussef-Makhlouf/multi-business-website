import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "من نحن - القوس الماسي | شركة خدمات متكاملة في جدة",
  description: "تعرف على شركة القوس الماسي في جدة. خبرة أكثر من 10 سنوات في خدمات التكييف والمقاولات والتسويق. شركة معتمدة ومضمونة. اتصل بنا: 0559811925",
  keywords: "القوس الماسي جدة، شركة القوس الماسي، من نحن القوس الماسي، خدمات جدة، شركة معتمدة جدة",
  openGraph: {
    title: "من نحن - القوس الماسي",
    description: "تعرف على شركة القوس الماسي في جدة. خبرة أكثر من 10 سنوات في خدمات التكييف والمقاولات والتسويق",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - القوس الماسي",
    description: "تعرف على شركة القوس الماسي في جدة. خبرة أكثر من 10 سنوات في خدمات التكييف والمقاولات والتسويق",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/about",
  },
  robots: "index, follow",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 