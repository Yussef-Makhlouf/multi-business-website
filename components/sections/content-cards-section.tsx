import { ContentCard, ContentCardGrid } from "@/components/ui/content-card"

interface ContentCardData {
  id: string
  image: string
  imageAlt: string
  title: string
  description: string
  href?: string
}

interface ContentCardsSectionProps {
  title?: string
  subtitle?: string
  cards: ContentCardData[]
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export default function ContentCardsSection({
  title = "Our Services",
  subtitle = "Discover what we can do for you",
  cards,
  cols = 3,
  className
}: ContentCardsSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 py-16">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-[#1375bd] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <ContentCardGrid cols={cols}>
          {cards.map((card) => (
            <ContentCard
              key={card.id}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </ContentCardGrid>
      </div>
    </section>
  )
}

// Example usage with sample data
export function ExampleContentCardsSection() {
  const sampleCards: ContentCardData[] = [
    {
      id: "1",
      image: "/build.jpg",
      imageAlt: "Construction Services",
      title: "Construction Services",
      description: "Professional construction and building services for residential and commercial projects.",
      href: "/contracting"
    },
    {
      id: "2",
      image: "/air.jpg",
      imageAlt: "HVAC Services",
      title: "HVAC Services",
      description: "Complete heating, ventilation, and air conditioning solutions for your comfort.",
      href: "/hvac"
    },
    {
      id: "3",
      image: "/market.jpg",
      imageAlt: "Marketing Services",
      title: "Marketing Services",
      description: "Strategic marketing solutions to grow your business and reach your target audience.",
      href: "/marketing"
    },
    {
      id: "4",
      image: "/estate.jpg",
      imageAlt: "Real Estate",
      title: "Real Estate",
      description: "Comprehensive real estate services including buying, selling, and property management.",
      href: "/portfolio"
    },
    {
      id: "5",
      image: "/maintain.jpg",
      imageAlt: "Maintenance Services",
      title: "Maintenance Services",
      description: "Regular maintenance and repair services to keep your systems running smoothly.",
      href: "/about"
    },
    {
      id: "6",
      image: "/panel.jpg",
      imageAlt: "Panel Installation",
      title: "Panel Installation",
      description: "Professional electrical panel installation and upgrade services for safety and efficiency.",
      href: "/contact"
    }
  ]

  return (
    <ContentCardsSection
      title="Our Services"
      subtitle="Comprehensive solutions for all your needs"
      cards={sampleCards}
      cols={3}
    />
  )
} 