import { Card } from '@/components/ui/card';
import { DatabaseIcon, TrendingUpIcon, CodeIcon, BarChart3Icon } from 'lucide-react';

export default function SolutionMethodology() {
  const methodologies = [
    {
      icon: DatabaseIcon,
      title: 'Data Sources',
      description: 'Comprehensive datasets from government databases, academic institutions, and industry reports',
    },
    {
      icon: TrendingUpIcon,
      title: 'Analytical Framework',
      description: 'Advanced statistical modeling including regression analysis, time-series forecasting, and clustering',
    },
    {
      icon: CodeIcon,
      title: 'Tools & Technologies',
      description: 'Python (pandas, scikit-learn), R (tidyverse, ggplot2), and SQL for data processing and analysis',
    },
    {
      icon: BarChart3Icon,
      title: 'Validation Methods',
      description: 'Cross-validation, bootstrap resampling, and sensitivity analysis to ensure robust findings',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Solution & Methodology
          </h2>
          <p className="text-base md:text-lg text-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our approach combines rigorous statistical methods with modern computational tools to extract 
            meaningful insights from complex datasets.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-base text-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
