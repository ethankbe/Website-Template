import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ResearchIntroduction from '../components/ResearchIntroduction';
import ProblemStatement from '../components/ProblemStatement';
import SolutionMethodology from '../components/SolutionMethodology';
import ResearchQuestions from '../components/ResearchQuestions';
import DatasetDescription from '../components/DatasetDescription';
import Hypotheses from '../components/Hypotheses';
import HypothesesTesting from '../components/HypothesesTesting';
import ResultsPlots from '../components/ResultsPlots';
import AboutUs from '../components/AboutUs';
import ContactFooter from '../components/ContactFooter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ResearchIntroduction />
        <ProblemStatement />
        <SolutionMethodology />
        <ResearchQuestions />
        <DatasetDescription />
        <Hypotheses />
        <HypothesesTesting />
        <ResultsPlots />
        <AboutUs />
        <ContactFooter />
      </main>
    </div>
  );
}
