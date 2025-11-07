import { Card } from '@/components/ui/card';

export default function ResearchIntroduction() {
  return (
    <section id="research" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start animate-section">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Research Introduction
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                This research project investigates the complex relationships between educational attainment, 
                industrial development, and socioeconomic outcomes across diverse populations. Our study 
                employs advanced statistical methodologies to analyze large-scale datasets, revealing patterns 
                that inform policy decisions and strategic planning.
              </p>
              <p>
                The scope of this investigation encompasses multiple dimensions of data analysis, including 
                regression modeling, hypothesis testing, and predictive analytics. By leveraging modern 
                computational tools and rigorous statistical frameworks, we aim to provide actionable insights 
                that bridge the gap between theoretical research and practical application.
              </p>
              <p>
                Our findings contribute to the broader understanding of how data-driven approaches can 
                illuminate complex social phenomena, offering evidence-based recommendations for stakeholders 
                across education, industry, and public policy sectors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 border-2">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Key Statistical Areas
              </h3>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start group">
                  <span className="inline-block w-3 h-3 bg-gradient-1 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base">Multivariate regression analysis</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-block w-3 h-3 bg-gradient-2 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base">Hypothesis testing frameworks</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-block w-3 h-3 bg-gradient-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base">Predictive modeling techniques</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-block w-3 h-3 bg-gradient-1 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base">Data visualization and interpretation</span>
                </li>
                <li className="flex items-start group">
                  <span className="inline-block w-3 h-3 bg-gradient-2 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base">Statistical significance testing</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
