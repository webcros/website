import Hero from "../components/Hero"
import WearYourStory from "../components/WearYourStory"
import FeatureCarousel from "../components/FeatureCarousel"
import PortfolioGrid from "../components/PortfolioGrid"
import Timeline from "../components/Timeline"
import Marquee from "../components/Marquee"
import ContactForm from "../components/ContactForm"

import { useEffect } from "react"


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on page load or refresh
  }, []);
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
    </>
  )
}

