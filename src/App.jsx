import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import ArchitectureSection from './components/ArchitectureSection';
import BenefitsSection from './components/BenefitsSection';
import WorkerEmpowermentSection from './components/WorkerEmpowermentSection';
import TrustSection from './components/TrustSection';
import RoadmapSection from './components/RoadmapSection';
import MetricsSection from './components/MetricsSection';
import VisionSection from './components/VisionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WaterDropCursor from './components/WaterDropCursor';

function App() {
  return (
    <div className="bg-[#050816] min-h-screen text-white font-inter selection:bg-primary/30">
      <WaterDropCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ArchitectureSection />
        <BenefitsSection />
        <WorkerEmpowermentSection />
        <TrustSection />
        <RoadmapSection />
        <MetricsSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
