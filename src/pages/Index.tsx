import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhySection from "@/components/WhySection";
import UrgencySection from "@/components/UrgencySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";
import PurchaseNotifications from "@/components/PurchaseNotifications";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhySection />
      <UrgencySection />
      <GuaranteeSection />
      <Footer />
      <PurchaseNotifications />
    </div>
  );
};

export default Index;