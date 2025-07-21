import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cairo } from "next/font/google"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "القوس الماسي - خدمات التكييف والمقاولات والتسويق في جدة",
  description:
    "شركة القوس الماسي في جدة تقدم خدمات متميزة في صيانة وتركيب المكيفات المركزية، والمقاولات والعقارات، والإعلان والتسويق الرقمي. اتصل بنا: 0559811925",
  keywords: "صيانة مكيفات مركزية جدة، مقاولات جدة، تسويق رقمي جدة، القوس الماسي",
  authors: [{ name: "القوس الماسي" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/logoh.png",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
