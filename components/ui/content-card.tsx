import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  image: string
  imageAlt: string
  title: string
  description?: string
  className?: string
  imageClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  onClick?: () => void
  href?: string
}

const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ 
    image, 
    imageAlt, 
    title, 
    description, 
    className,
    imageClassName,
    titleClassName,
    descriptionClassName,
    onClick,
    href,
    ...props 
  }, ref) => {
    const CardWrapper = href ? 'a' : 'div'
    const cardProps = href ? { href } : {}
    
    return (
      <CardWrapper
        ref={ref}
        className={cn(
          "group block rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...cardProps}
        {...props}
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={cn(
              "object-cover transition-transform duration-300 group-hover:scale-105",
              imageClassName
            )}
          />
        </div>
        <div className="p-4">
          <h3 className={cn(
            "text-lg font-semibold leading-tight tracking-tight mb-2 text-gray-900",
            titleClassName
          )}>
            {title}
          </h3>
          {description && (
            <p className={cn(
              "text-sm text-muted-foreground leading-relaxed",
              descriptionClassName
            )}>
              {description}
            </p>
          )}
        </div>
      </CardWrapper>
    )
  }
)
ContentCard.displayName = "ContentCard"

interface ContentCardGridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
}

const ContentCardGrid = React.forwardRef<HTMLDivElement, ContentCardGridProps>(
  ({ children, className, cols = 3, ...props }, ref) => {
    const gridCols = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-6",
          gridCols[cols],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ContentCardGrid.displayName = "ContentCardGrid"

export { ContentCard, ContentCardGrid } 