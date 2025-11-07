import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
    }
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('research');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.video
          alt="abstract data video"
          src="https://c.animaapp.com/mhp1rzhwI9IbJX/img/ai_1.mp4"
          poster="https://c.animaapp.com/mhp1rzhwI9IbJX/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight"
        >
          Data-Driven Insights for Modern Research
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Exploring statistical patterns and analytical frameworks to uncover meaningful insights from complex datasets
        </p>
        <div ref={ctaRef}>
          <Button
            size="lg"
            onClick={handleExploreClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base px-10 py-6 h-auto"
          >
            Explore Research
            <ArrowDownIcon className="ml-3 w-5 h-5" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </section>
  );
}
