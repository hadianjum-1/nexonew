import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import TechStack from '../components/TechStack';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import { useEffect } from 'react';

export default function HomePage() {

    useEffect(() => {
    document.title = "NexGenByte - Premium Web Development Agency | Next-Gen Solutions";
  }, []);
  
  return (
    <main id="main-content">
      <Hero />
      <TrustedBy />
      <FeaturedWork />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <Industries />
      <Testimonials />
      <Statistics />
      <TechStack />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
