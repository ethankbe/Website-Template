import { Card } from '@/components/ui/card';
import { CheckCircle2Icon } from 'lucide-react';

export default function Hypotheses() {
  const hypotheses = [
    {
      id: 'h1',
      title: 'H₁: Educational Attainment Correlation',
      statement: 'Higher levels of educational attainment are positively correlated with increased economic productivity across all industrial sectors.',
      confidence: '95%',
    },
    {
      id: 'h2',
      title: 'H₂: Industrial Development Impact',
      statement: 'Industrial development intensity significantly mediates the relationship between education and socioeconomic outcomes.',
      confidence: '90%',
    },
    {
      id: 'h3',
      title: 'H₃: Sector-Specific Variations',
      statement: 'The strength of education-productivity relationships varies significantly across different industrial classifications.',
      confidence: '95%',
    },
    {
      id: 'h4',
      title: 'H₄: Temporal Consistency',
      statement: 'Observed relationships remain statistically significant across different time periods within the dataset.',
      confidence: '92%',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-1">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Research Hypotheses
          </h2>
          <p className="text-base md:text-lg text-white text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our investigation tests four primary hypotheses, each designed to illuminate specific aspects 
            of the education-industry-economy relationship.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {hypotheses.map((hypothesis, index) => (
              <Card
                key={hypothesis.id}
                className="p-8 bg-white border-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2Icon className="w-6 h-6 text-success flex-shrink-0 mt-1" strokeWidth={2} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {hypothesis.title}
                  </h3>
                </div>
                <p className="text-base text-foreground leading-relaxed mb-6">
                  {hypothesis.statement}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Confidence Interval:</span>
                  <span className="px-4 py-2 bg-success/10 text-success rounded-md font-medium text-sm">
                    {hypothesis.confidence}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
