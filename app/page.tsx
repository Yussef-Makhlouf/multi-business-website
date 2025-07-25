import { Button } from "@/components/ui/button"
import { Eye, Wind, Home, Megaphone, Star } from "lucide-react"
import Link from "next/link"
import FloatingButtons from "@/components/floating-buttons"
import MasonryGallery from "@/components/masonry-gallery"
import FAQSection from "@/components/faq-section"
import SuccessPartners from "@/components/success-partners"
import ContactSocialSection from "@/components/contact-social-section"
import ModernBanner from "@/components/modern-banner"
import ServiceBanner from "@/components/sections/service-banner"
import FeaturedBanner from "@/components/sections/featured-banner"
import ImageBanner from "@/components/sections/image-banner"
import ContentBanner from "@/components/sections/content-banner"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import ServiceSection from "@/components/sections/service-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import Footer from "@/components/layout/footer"
import { servicesData, bannerData } from "@/lib/data/services"
import { ContentCard, ContentCardGrid } from "@/components/ui/content-card"
import ContentCardsSection from "@/components/sections/content-cards-section"

// Icon mapping
const iconMap = {
  Wind: <Wind className="w-8 h-8 text-white" />,
  Home: <Home className="w-8 h-8 text-white" />,
  Megaphone: <Megaphone className="w-8 h-8 text-white" />
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f8fc]" dir="rtl">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

 

      {/* HVAC Services Content Banner */}
      {/* <ContentBanner
        icon={iconMap[servicesData.hvac.iconName as keyof typeof iconMap]}
        title={servicesData.hvac.title}
        subtitle={servicesData.hvac.subtitle}
        description={servicesData.hvac.description}
        longDescription={servicesData.hvac.longDescription}
        features={servicesData.hvac.features}
        highlights={[
          "فنيون معتمدون ومدربون على أعلى المستويات",
          "خدمة صيانة دورية ووقائية شاملة",
          "تركيب أنظمة موفرة للطاقة بأحدث التقنيات",
          "تنظيف وتعقيم متخصص لضمان جودة الهواء",
          "خدمة طوارئ على مدار الساعة لضمان راحتكم",
          "ضمان شامل على جميع الخدمات المقدمة"
        ]}
        buttonText={servicesData.hvac.buttonText}
        buttonLink={servicesData.hvac.buttonLink}
        backgroundColor="bg-white"
      /> */}
  {/* Contracting & Real Estate Banner */}
  <ServiceBanner
        icon={iconMap[servicesData.contracting.iconName as keyof typeof iconMap]}
        title={servicesData.contracting.title}
        subtitle={servicesData.contracting.subtitle}
        description={servicesData.contracting.description}
        features={servicesData.contracting.features}
        buttonText={servicesData.contracting.buttonText}
        buttonLink={servicesData.contracting.buttonLink}
        images={servicesData.contracting.images}
        backgroundColor="bg-[#f3f8fc]"
        reverse={true}
      />

      {/* Modern Banner 2 */}
      <ModernBanner
        title={bannerData[1].title}
        subtitle={bannerData[1].subtitle}
        description={bannerData[1].description}
        buttonText={bannerData[1].buttonText}
        buttonLink={bannerData[1].buttonLink}
        imageSrc={bannerData[1].imageSrc}
        imageAlt={bannerData[1].imageAlt}
        backgroundColor={bannerData[1].backgroundColor}
        reverse={bannerData[1].reverse}
      />

      {/* HVAC Services Banner */}
      <ServiceBanner
        icon={iconMap[servicesData.hvac.iconName as keyof typeof iconMap]}
        title={servicesData.hvac.title}
        subtitle={servicesData.hvac.subtitle}
        description={servicesData.hvac.description}
        features={servicesData.hvac.features}
        buttonText={servicesData.hvac.buttonText}
        buttonLink={servicesData.hvac.buttonLink}
        images={servicesData.hvac.images}
        backgroundColor="bg-white"
        reverse={false}
      />

      {/* Modern Banner 1 */}
      <ModernBanner
        title={bannerData[0].title}
        subtitle={bannerData[0].subtitle}
        description={bannerData[0].description}
        buttonText={bannerData[0].buttonText}
        buttonLink={bannerData[0].buttonLink}
        imageSrc={bannerData[0].imageSrc}
        imageAlt={bannerData[0].imageAlt}
        backgroundColor={bannerData[0].backgroundColor}
      />

    
      {/* Marketing & Advertising Banner */}
      <ServiceBanner
        icon={iconMap[servicesData.marketing.iconName as keyof typeof iconMap]}
        title={servicesData.marketing.title}
        subtitle={servicesData.marketing.subtitle}
        description={servicesData.marketing.description}
        features={servicesData.marketing.features}
        buttonText={servicesData.marketing.buttonText}
        buttonLink={servicesData.marketing.buttonLink}
        images={servicesData.marketing.images}
        backgroundColor="bg-[#f3f8fc]"
        reverse={true}
      />

      {/* Modern Banner 3 */}
      <ModernBanner
        title={bannerData[2].title}
        subtitle={bannerData[2].subtitle}
        description={bannerData[2].description}
        buttonText={bannerData[2].buttonText}
        buttonLink={bannerData[2].buttonLink}
        imageSrc={bannerData[2].imageSrc}
        imageAlt={bannerData[2].imageAlt}
        backgroundColor={bannerData[2].backgroundColor}
      />

      {/* Masonry Gallery Section */}
      {/* <section className="py-20 bg-[#f3f8fc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1375bd] mb-4">معرض أعمالنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              استكشفوا مجموعة متنوعة من مشاريعنا الناجحة عبر جميع مجالات عملنا. كل مشروع يحكي قصة نجاح وإبداع تعكس
              التزامنا بالتميز والجودة في خدمة عملائنا الكرام
            </p>
          </div>

          <MasonryGallery />

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="bg-[#1375bd] hover:bg-[#018bd2] text-lg px-8 shadow-lg">
                <Eye className="ml-2 w-5 h-5" />
                اطلع على جميع أعمالنا
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
     <FeaturedBanner
        icon={<Star className="w-10 h-10 text-white" />}
        title="القوس الماسي"
        subtitle="شريكك الموثوق في الحلول المتكاملة"
        description="نفخر بتقديم خدمات متميزة ومتكاملة في ثلاثة مجالات حيوية: صيانة وتركيب أنظمة التكييف المركزي، والمقاولات والاستثمار العقاري، والدعايه والاعلان والتسويق. خبرة سعودية رائدة من قلب مدينة جدة لخدمة المملكة العربية السعودية بأعلى معايير الجودة والاحترافية والابتكار."
        features={[
          "صيانة وتركيب المكيفات المركزية",
          "المقاولات والاستثمار العقاري",
          "الدعايه والاعلان والتسويق",
          "خدمة 24/7 طوال أيام الأسبوع"
        ]}
        buttonText="استكشف خدماتنا المتميزة"
        buttonLink="/contact"
        backgroundColor="bg-gradient-to-br from-[#1375bd] to-[#018bd2]"
      />
      {/* Success Partners */}
      {/* <SuccessPartners /> */}
{/* خدمات متنوعة */}
<ContentCardsSection
  title="خدماتنا المتميزة"
  subtitle="حلول شاملة ومتكاملة لجميع احتياجاتكم"
  cards={[
    {
      id: "hvac-1",
      image: "/3.png",
      imageAlt: "  فحص شامل للمكيفات المركزية",
      title: "فحص شامل للمكيفات المركزية",
      description: "نستطيع فحص المكيفات المركزية بكفاءة و جودة عالية",
      href: "/hvac"
    },
    {
      id: "contracting-1",
      image: "/art1.png",
      imageAlt: "المقاولات والبناء",
      title: "المقاولات والبناء",
      description: "مشاريع بناء متطورة تشمل المنازل والمباني التجارية بأحدث التقنيات",
      href: "/contracting"
    },
    {
      id: "marketing-1",
      image: "/6.png",
      imageAlt: "الدعاية والإعلان",
      title: "الدعاية والإعلان",
      description: "خدمات دعاية وإعلان متكاملة تشمل الطباعة والكلادينج والشاشات الرقمية",
      href: "/marketing"
    },
    {
      id: "hvac-2",
      image: "/4.png",
      imageAlt: "  مكيفات مركزية بعناية و صيانة",
      title: "تركيب و صيانة المكيفات المركزية",
      description: "نستطيع تركيب و صيانة المكيفات المركزية بكفاءة و جودة عالية",
      href: "/hvac"
    },
    {
      id: "contracting-2",
      image: "/art2.png",
      imageAlt: "الاستثمار العقاري",
      title: "الاستثمار العقاري",
      description: "استشارات متخصصة في الاستثمار العقاري وتطوير المشاريع العقارية",
      href: "/contracting"
    },
    {
      id: "marketing-2",
      image: "/5.png",
      imageAlt: "الشاشات الرقمية",
      title: "الشاشات الرقمية",
      description: "تركيب وإدارة شاشات LED عالية الدقة للعرض الرقمي والإعلانات التفاعلية",
      href: "/marketing"
    }
  ]}
  cols={3}
/>  
      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* FAQ Section */}
      <FAQSection />
     {/* Featured Banner */}

      {/* Contact & Social Media Section */}
      <ContactSocialSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  )
}
