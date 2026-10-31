import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import SmileFinder from "@/components/sections/SmileFinder";
import Doctor from "@/components/sections/Doctor";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import FAQ from "@/components/sections/FAQ";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <WhyUs />
        <SmileFinder />
        <Doctor />
        <Testimonials />
        <BeforeAfter />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <BackToTop />
    </>
  );
}