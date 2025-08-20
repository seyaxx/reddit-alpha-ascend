import HeroSection from "@/components/HeroSection";
import CompanyBar from "@/components/CompanyBar";
import WhyRedditSection from "@/components/WhyRedditSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyRedditSection />
      <ProcessSection />
      <ResultsSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
