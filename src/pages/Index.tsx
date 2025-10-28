import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RealitySection from "@/components/RealitySection";
import DashboardSection from "@/components/DashboardSection";
import ComparisonSection from "@/components/ComparisonSection";
import AlertsSection from "@/components/AlertsSection";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RealitySection />
        <DashboardSection />
        <ComparisonSection />
        <AlertsSection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
