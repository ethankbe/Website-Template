import { Card } from '@/components/ui/card';
import { CheckCircle2Icon, XCircleIcon } from 'lucide-react';

export default function HypothesesTesting() {
  const results = [
    {
      hypothesis: 'H₁: Educational Attainment Correlation',
      result: 'Accepted',
      pValue: 'p < 0.001',
      effect: 'Strong positive correlation (r = 0.78)',
      status: 'success',
    },
    {
      hypothesis: 'H₂: Industrial Development Impact',
      result: 'Accepted',
      pValue: 'p < 0.01',
      effect: 'Significant mediation effect (β = 0.42)',
      status: 'success',
    },
    {
      hypothesis: 'H₃: Sector-Specific Variations',
      result: 'Accepted',
      pValue: 'p < 0.001',
      effect: 'Significant interaction effects observed',
      status: 'success',
    },
    {
      hypothesis: 'H₄: Temporal Consistency',
      result: 'Partially Accepted',
      pValue: 'p < 0.05',
      effect: 'Moderate consistency across time periods',
      status: 'warning',
    },
  ];

  return (
    <section id="results" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Hypotheses Testing Results
          </h2>
          <p className="text-base md:text-lg text-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Statistical analysis reveals strong support for our primary hypotheses, with all tests 
            achieving significance at conventional thresholds.
          </p>

          <div className="space-y-6">
            {results.map((result, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-2 border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="grid md:grid-cols-4 gap-6 items-center relative z-10">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-3">
                      {result.status === 'success' ? (
                        <CheckCircle2Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" strokeWidth={2} />
                      )}
                      <h3 className="text-lg font-semibold text-foreground">
                        {result.hypothesis}
                      </h3>
                    </div>
                    <p className="text-base text-foreground ml-10">
                      {result.effect}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Statistical Significance</div>
                    <div className="font-mono text-base font-medium text-foreground">
                      {result.pValue}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Decision</div>
                    <span
                      className={`inline-block px-4 py-2 rounded-md font-medium text-sm border-2 ${
                        result.status === 'success'
                          ? 'bg-primary/10 text-primary border-primary/20'
                          : 'bg-tertiary/10 text-tertiary border-tertiary/20'
                      }`}
                    >
                      {result.result}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-neutral rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Statistical Methodology
            </h3>
            <p className="text-base text-foreground leading-relaxed">
              All hypothesis tests employed appropriate statistical methods including t-tests, ANOVA, 
              and regression analysis. Multiple comparison corrections were applied using the Bonferroni 
              method to control for Type I error inflation. Effect sizes were calculated using Cohen's d 
              and partial eta-squared to assess practical significance alongside statistical significance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
