import { Card } from '@/components/ui/card';

export default function ResultsPlots() {
  return (
    <section id="plots" className="py-24 lg:py-32 bg-gradient-2">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Visual Results & Analysis
          </h2>
          <p className="text-base md:text-lg text-white text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our findings are illustrated through comprehensive visualizations that reveal key patterns 
            and relationships within the data.
          </p>

          <div className="space-y-16">
            {/* Education Analysis Plot */}
            <Card id="plot-education" className="p-8 bg-white border-2 border-primary/20 scroll-mt-24 hover:border-primary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Educational Impact Analysis
              </h3>
              <p className="text-base text-foreground mb-8 leading-relaxed">
                This visualization demonstrates the strong positive correlation between educational 
                attainment levels and economic productivity metrics across various industrial sectors. 
                The scatter plot reveals clear clustering patterns and trend lines that support our 
                primary hypothesis.
              </p>
              
              {/* Placeholder for Python/Pandas Plot */}
              <div className="relative w-full mb-6">
                <div className="bg-gradient-to-br from-neutral to-gray-50 rounded-lg p-12 border-2 border-dashed border-primary/30 min-h-[400px] flex flex-col items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Insert Python/Pandas Visualization Here
                      </h4>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Replace this placeholder with your matplotlib/seaborn plot showing the correlation 
                        between educational attainment and unemployment rates
                      </p>
                    </div>
                    <div className="bg-white rounded-md p-4 max-w-lg">
                      <code className="text-xs text-foreground font-mono block text-left">
                        <span className="text-secondary">import</span> pandas <span className="text-secondary">as</span> pd<br/>
                        <span className="text-secondary">import</span> matplotlib.pyplot <span className="text-secondary">as</span> plt<br/>
                        <span className="text-secondary">import</span> seaborn <span className="text-secondary">as</span> sns<br/>
                        <br/>
                        <span className="text-muted-foreground"># Your plotting code here</span><br/>
                        plt.figure(figsize=(<span className="text-tertiary">12</span>, <span className="text-tertiary">6</span>))<br/>
                        sns.scatterplot(data=df, x=<span className="text-success">'education'</span>, y=<span className="text-success">'unemployment'</span>)
                      </code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-primary/10">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Findings</h4>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-1 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Correlation coefficient of 0.78 indicates strong positive relationship</span>
                  </li>
                <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-2 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Technology and finance sectors show highest sensitivity to education levels</span>
                  </li>
                <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Threshold effects observed at bachelor's degree level</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Industrial Influence Chart */}
            <Card id="plot-industrial" className="p-8 bg-white border-2 border-secondary/20 scroll-mt-24 hover:border-secondary/40 transition-colors">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Industrial Influence Patterns
              </h3>
              <p className="text-base text-foreground mb-8 leading-relaxed">
                This chart illustrates how different industrial sectors mediate the relationship between 
                educational investment and economic outcomes. The visualization highlights sector-specific 
                variations and interaction effects that inform targeted policy interventions.
              </p>
              
              {/* Placeholder for Python/Pandas Plot */}
              <div className="relative w-full mb-6">
                <div className="bg-gradient-to-br from-neutral to-gray-50 rounded-lg p-12 border-2 border-dashed border-secondary/30 min-h-[400px] flex flex-col items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Insert Python/Pandas Visualization Here
                      </h4>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Replace this placeholder with your matplotlib/seaborn plot showing industry-specific 
                        influences on employment outcomes
                      </p>
                    </div>
                    <div className="bg-white rounded-md p-4 max-w-lg">
                      <code className="text-xs text-foreground font-mono block text-left">
                        <span className="text-secondary">import</span> pandas <span className="text-secondary">as</span> pd<br/>
                        <span className="text-secondary">import</span> matplotlib.pyplot <span className="text-secondary">as</span> plt<br/>
                        <span className="text-secondary">import</span> seaborn <span className="text-secondary">as</span> sns<br/>
                        <br/>
                        <span className="text-muted-foreground"># Your plotting code here</span><br/>
                        plt.figure(figsize=(<span className="text-tertiary">12</span>, <span className="text-tertiary">6</span>))<br/>
                        sns.barplot(data=df, x=<span className="text-success">'industry'</span>, y=<span className="text-success">'effect_size'</span>)
                      </code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-br from-secondary/5 to-tertiary/5 rounded-lg border-2 border-secondary/10">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Findings</h4>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-2 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Manufacturing sector shows moderate mediation effect (β = 0.35)</span>
                  </li>
                <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Service industries demonstrate strongest amplification of education benefits</span>
                  </li>
                <li className="flex items-start group">
                    <span className="inline-block w-3 h-3 bg-gradient-1 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-base">Regional variations suggest context-dependent optimization strategies</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Nutshell Summary */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Research in a Nutshell
              </h3>
              <p className="text-base text-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                Our comprehensive analysis confirms that educational investments yield measurable economic 
                returns, with effects amplified or moderated by industrial context. These findings provide 
                actionable insights for evidence-based policy development.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg border-2 border-primary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-1 mb-2">0.78</div>
                  <div className="text-sm text-foreground font-medium">Education-Productivity Correlation</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border-2 border-secondary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-2 mb-2">95%</div>
                  <div className="text-sm text-foreground font-medium">Statistical Confidence Level</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border-2 border-tertiary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-accent mb-2">4</div>
                  <div className="text-sm text-foreground font-medium">Hypotheses Validated</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
