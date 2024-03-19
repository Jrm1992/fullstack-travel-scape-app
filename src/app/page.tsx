import NavBar from "@/components/common/NavBar";
import Footer from "@/components/sections/landing/Footer";
import HeroSection from "@/components/sections/landing/HeroSection";
import Newsletter from "@/components/sections/landing/Newsletter";
import Testimonials from "@/components/sections/landing/Testimonials";
import WhyChooseUs from "@/components/sections/landing/WhyChooseUs";

export default function Home() {
  return (
  <main>
    <NavBar />
    <HeroSection />
    <WhyChooseUs />
    <Testimonials />
    <Newsletter />
    <Footer />
  </main>);
}
