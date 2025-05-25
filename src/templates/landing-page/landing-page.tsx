import { CallToAction, HeroSection, SupportSection,CustomerStorySection, FeatureSection } from "./sections";


export function LadingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}