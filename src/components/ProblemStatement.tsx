export default function ProblemStatement() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-1">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            Problem Statement
          </h2>
          <div className="space-y-6 text-base md:text-lg text-white leading-relaxed">
            <p>
              Despite significant advances in data collection and analytical capabilities, there remains a 
              critical gap in understanding how educational investments translate into measurable economic 
              outcomes across different industrial sectors. Traditional approaches often fail to account for 
              the complex interplay between multiple variables, leading to incomplete or misleading conclusions.
            </p>
            <p>
              This research addresses the fundamental challenge of identifying causal relationships within 
              multidimensional datasets, where confounding factors and non-linear interactions obscure clear 
              patterns. The problem is further compounded by data quality issues, sampling biases, and the 
              need for robust statistical validation.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Research Motivation
            </h3>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Understanding these relationships is crucial for policymakers, educators, and industry leaders 
              who must make informed decisions about resource allocation, curriculum development, and workforce 
              planning. Our research provides the analytical rigor needed to support evidence-based strategies 
              that maximize societal benefit and economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
