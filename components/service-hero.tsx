import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  imageSrc: string
  imageAlt: string
  badges: string[]
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
  badges,
}: ServiceHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f3f8fc] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-[#1375bd] mb-4 leading-tight">{title}</h1>
                <p className="text-xl text-[#018bd2] font-semibold mb-4">{subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {badges.map((badge, index) => (
                    <Badge key={index} className="bg-[#018bd2] text-white px-3 py-1">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={primaryButtonLink}>
                  <Button size="lg" className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8">
                    {primaryButtonText}
                  </Button>
                </Link>
                <Link href={secondaryButtonLink}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#1375bd] text-[#1375bd] hover:bg-[#1375bd] hover:text-white text-lg px-8 bg-transparent"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
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
