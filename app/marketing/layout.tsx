import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "الإعلان والتسويق الرقمي - القوس الماسي | خدمات التسويق والإعلان في جدة",
  description: "خدمات الإعلان والتسويق الرقمي في جدة. شركة القوس الماسي تقدم خدمات التسويق الإلكتروني والإعلانات الرقمية لتعزيز حضورك في السوق. اتصل بنا: 0559811925",
  keywords: "تسويق رقمي جدة، إعلانات جدة، تسويق إلكتروني جدة، إعلانات رقمية جدة، القوس الماسي تسويق",
  openGraph: {
    title: "الإعلان والتسويق الرقمي - القوس الماسي",
    description: "خدمات الإعلان والتسويق الرقمي في جدة لتعزيز حضورك في السوق",
    type: "website",
    locale: "ar_SA",
    siteName: "القوس الماسي",
  },
  twitter: {
    card: "summary_large_image",
    title: "الإعلان والتسويق الرقمي - القوس الماسي",
    description: "خدمات الإعلان والتسويق الرقمي في جدة لتعزيز حضورك في السوق",
  },
  alternates: {
    canonical: "https://alqousalmasi.com/marketing",
  },
  robots: "index, follow",
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 