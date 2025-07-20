# القوس الماسي - Multi-Business Website

A modern, responsive website for Al Qous Almasi, a Saudi Arabian company offering HVAC, contracting, and marketing services.

## 🏗️ Project Structure

### Components Organization

```
components/
├── layout/                    # Layout components
│   ├── header.tsx           # Main navigation header
│   └── footer.tsx           # Site footer with links
├── sections/                 # Page sections
│   ├── hero-section.tsx     # Homepage hero with stats
│   ├── service-section.tsx  # Reusable service showcase
│   └── why-choose-us-section.tsx # Benefits showcase
├── ui/                      # shadcn/ui components
├── modern-banner.tsx        # Reusable banner component
├── masonry-gallery.tsx      # Portfolio gallery
├── floating-buttons.tsx     # Contact action buttons
├── faq-section.tsx          # FAQ component
├── success-partners.tsx     # Partners showcase
├── contact-social-section.tsx # Contact & social media
└── service-hero.tsx         # Service page hero
```

### Data Management

```
lib/
├── data/
│   └── services.ts         # Service information and banner data
└── utils.ts               # Utility functions
```

## 🎯 Key Features

### Modular Component System

The website has been refactored into a modular component system for better maintainability:

1. **Layout Components** (`components/layout/`)
   - `Header`: Reusable navigation header
   - `Footer`: Site footer with company info and links

2. **Section Components** (`components/sections/`)
   - `HeroSection`: Homepage hero with company stats
   - `ServiceSection`: Reusable service showcase component
   - `WhyChooseUsSection`: Benefits and features showcase

3. **Data-Driven Content** (`lib/data/services.ts`)
   - Centralized service information
   - Banner data for different sections
   - Easy content management and updates

### Benefits of This Structure

✅ **Maintainability**: Smaller, focused components
✅ **Reusability**: Components can be used across pages
✅ **Consistency**: Centralized data ensures uniform content
✅ **Scalability**: Easy to add new services or sections
✅ **Performance**: Better code splitting and loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

The project uses:
- **Next.js 15** with App Router
- **React 19** 
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Cairo font** for Arabic typography

## 📱 Pages Structure

```
app/
├── page.tsx              # Homepage (refactored)
├── hvac/page.tsx         # HVAC services
├── contracting/page.tsx  # Construction services  
├── marketing/page.tsx    # Marketing services
├── about/page.tsx        # About company
├── contact/page.tsx      # Contact form
├── portfolio/page.tsx    # Portfolio gallery
└── layout.tsx           # Root layout
```

## 🎨 Component Usage

### Using ServiceSection Component

```tsx
import ServiceSection from "@/components/sections/service-section"
import { servicesData } from "@/lib/data/services"

// In your page component
<ServiceSection
  icon={servicesData.hvac.icon}
  title={servicesData.hvac.title}
  subtitle={servicesData.hvac.subtitle}
  description={servicesData.hvac.description}
  features={servicesData.hvac.features}
  buttonText={servicesData.hvac.buttonText}
  buttonLink={servicesData.hvac.buttonLink}
  images={servicesData.hvac.images}
/>
```

### Adding New Services

1. Add service data to `lib/data/services.ts`:
```tsx
export const servicesData = {
  // ... existing services
  newService: {
    icon: <YourIcon className="w-8 h-8 text-white" />,
    title: "Service Title",
    subtitle: "Service Subtitle",
    description: "Service description...",
    features: ["Feature 1", "Feature 2"],
    buttonText: "Learn More",
    buttonLink: "/new-service",
    images: {
      main: "/path/to/main-image.jpg",
      mainAlt: "Main image alt text",
      small1: "/path/to/small1.jpg",
      small1Alt: "Small 1 alt text",
      small2: "/path/to/small2.jpg", 
      small2Alt: "Small 2 alt text"
    }
  }
}
```

2. Use the ServiceSection component with your data

## 🌐 Localization

The website is designed for Arabic (RTL) with:
- RTL layout support (`dir="rtl"`)
- Cairo font for Arabic typography
- Arabic content and messaging
- Saudi Arabian market focus

## 📞 Contact Information

- **Phone**: 0559811925, 0534363845, 0562939917
- **Location**: Jeddah, Saudi Arabia
- **Services**: HVAC, Contracting, Marketing

## 🛠️ Development

### Code Style

- Use TypeScript for all components
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain RTL support for Arabic

### Adding New Components

1. Create component in appropriate directory
2. Export as default function
3. Add TypeScript interfaces for props
4. Use consistent styling patterns
5. Test with RTL layout

### Performance Optimization

- Use Next.js Image component for images
- Implement proper loading states
- Optimize bundle size with code splitting
- Use React.memo for expensive components

## 📄 License

This project is private and proprietary to Al Qous Almasi.

---

**Built with Next.js, React, TypeScript, and Tailwind CSS** 