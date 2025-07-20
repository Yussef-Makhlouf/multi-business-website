import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServiceSectionProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  images: {
    main: string
    mainAlt: string
    small1: string
    small1Alt: string
    small2: string
    small2Alt: string
  }
  reverse?: boolean
}

export default function ServiceSection({
  icon,
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink,
  images,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={reverse ? "lg:col-start-2" : ""}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1375bd] to-[#018bd2] rounded-full flex items-center justify-center ml-4">
                {icon}
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#1375bd] mb-2">{title}</h2>
                <p className="text-lg text-[#018bd2] font-semibold">{subtitle}</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link href={buttonLink}>
              <Button className="bg-[#018bd2] hover:bg-[#1375bd] text-lg px-8 shadow-lg">
                <ArrowLeft className="ml-2 w-5 h-5" />
                {buttonText}
              </Button>
            </Link>
          </div>

          <div className={`space-y-4 ${reverse ? "lg:col-start-1" : ""}`}>
            <Image
              src={images.main}
              alt={images.mainAlt}
              width={500}
              height={300}
                className="w-full h-72 object-cover rounded-xl  border-gray-200 shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={images.small1}
                alt={images.small1Alt}
                width={240}
                height={150}
                className="w-full h-36 object-cover rounded-lg shadow-md"
              />
              <Image
                src={images.small2}
                alt={images.small2Alt}
                width={240}
                height={150}
                className="w-full h-36 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 