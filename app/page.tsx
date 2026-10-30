import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Doctor from "@/components/sections/Doctor";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import FAQ from "@/components/sections/FAQ";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import TrustMarquee from "@/components/sections/TrustMarquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Doctor />
        <Testimonials />
        <BeforeAfter />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}