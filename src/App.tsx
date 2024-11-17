import "./App.css";
import { Header } from "@/components/common/Header.tsx";
import HeroSection from "@/components/common/Hero.tsx";
import { Skills } from "@/components/common/Skills.tsx";
import { Projects } from "@/components/common/Projects.tsx";
import { Experiance } from "@/components/common/Experiance.tsx";
import { Testimonials } from "@/components/common/Testimonials.tsx";
import Contact from "@/components/common/Contact.tsx";
import { Footer } from "@/components/common/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Experiance />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
