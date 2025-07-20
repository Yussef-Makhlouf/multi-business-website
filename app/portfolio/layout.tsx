import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "أعمالنا - القوس الماسي | معرض مشاريعنا المتميزة في جدة",
  description: "استكشف معرض أعمال شركة القوس الماسي في جدة. مشاريع متميزة في التكييف والمقاولات والتسويق. شاهد إنجازاتنا ونجاحاتنا. اتصل بنا: 0559811925",
  keywords: "أعمال القوس الماسي، مشاريع جدة، معرض أعمال جدة، مشاريع التكييف جدة، مشاريع المقاولات جدة",
  openGraph: {
    title: "أعمالنا - القوس الماسي",
    description: "استكشف معرض أعمال شركة القوس الماسي في جدة. مشاريع متميزة في التكييف والمقاولات والتسويق",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "أعمالنا - القوس الماسي",
    description: "استكشف معرض أعمال شركة القوس الماسي في جدة. مشاريع متميزة في التكييف والمقاولات والتسويق",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/portfolio",
  },
  robots: "index, follow",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 