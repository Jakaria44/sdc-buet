"use client"

import { EnhancedHeroSection } from "@/components/sections/enhanced-hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { EnhancedFeaturesSection } from "@/components/sections/enhanced-features-section"
import { ActivitiesSection } from "@/components/sections/activities-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/ui/navbar"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { InnovationSection } from "@/components/sections/innovation-section"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-grid-cyan/[0.03] bg-[size:60px_60px]" />
      <div className="relative">
        <Navbar />
        <EnhancedHeroSection />
        <AboutSection />
        <EnhancedFeaturesSection />
        <ActivitiesSection />
        <StatsSection />
        <TestimonialsSection />
        <ShowcaseSection />
        <NewsletterSection />
        <InnovationSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
