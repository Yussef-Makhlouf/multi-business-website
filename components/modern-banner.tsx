import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ModernBannerProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  imageSrc: string
  imageAlt: string
  backgroundColor?: string
  reverse?: boolean
}

export default function ModernBanner({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  backgroundColor = "bg-[#f3f8fc]",
  reverse = false,
}: ModernBannerProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={reverse ? "lg:col-start-2" : ""}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#1375bd] mb-2">{title}</h3>
                <p className="text-lg text-[#018bd2] font-semibold">{subtitle}</p>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
              <Link href={buttonLink}>
                <Button className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8">
                  <ArrowLeft className="ml-2 w-5 h-5" />
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
          <div className={reverse ? "lg:col-start-1" : ""}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-80 object-cover shadow-lg shadow-gray-200"
              style={{
                borderTopLeftRadius: '40px',
                borderBottomRightRadius: '40px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
