import { Card } from '@/components/ui/card';
import { MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

export default function AboutUs() {
  const researchers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead Researcher',
      bio: 'Specializes in econometric modeling and statistical analysis with 15+ years of experience in data science research.',
      email: 'sarah.chen@research.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Data Scientist',
      bio: 'Expert in machine learning applications and predictive analytics, focusing on educational and industrial datasets.',
      email: 'michael.rodriguez@research.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Statistical Analyst',
      bio: 'Focuses on hypothesis testing and experimental design, with extensive background in social science research.',
      email: 'emily.watson@research.edu',
      linkedin: '#',
      github: '#',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            About the Research Team
          </h2>
          <p className="text-base md:text-lg text-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our interdisciplinary team brings together expertise in statistics, economics, and data science 
            to deliver rigorous, actionable research insights.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {researchers.map((researcher, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-2 border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="w-24 h-24 bg-gradient-1 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground text-center mb-2">
                  {researcher.name}
                </h3>
                <p className="text-sm text-primary text-center mb-4 font-medium">
                  {researcher.role}
                </p>
                <p className="text-base text-foreground text-center mb-6 leading-relaxed">
                  {researcher.bio}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={`mailto:${researcher.email}`}
                    className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center hover:bg-gradient-1 hover:text-white transition-all duration-200 border-2 border-primary/20"
                    aria-label="Email"
                  >
                    <MailIcon className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a
                    href={researcher.linkedin}
                    className="w-10 h-10 bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-full flex items-center justify-center hover:bg-gradient-2 hover:text-white transition-all duration-200 border-2 border-secondary/20"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" strokeWidth={2} />
                  </a>
                  <a
                    href={researcher.github}
                    className="w-10 h-10 bg-gradient-to-br from-tertiary/10 to-primary/10 rounded-full flex items-center justify-center hover:bg-gradient-accent hover:text-white transition-all duration-200 border-2 border-tertiary/20"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" strokeWidth={2} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
