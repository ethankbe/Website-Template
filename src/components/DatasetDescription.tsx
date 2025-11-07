export default function DatasetDescription() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Dataset Description
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                Our primary dataset comprises comprehensive records spanning multiple years, encompassing 
                demographic information, educational metrics, industrial classifications, and economic indicators. 
                The data was sourced from authoritative government databases and validated academic repositories.
              </p>
              <p>
                Data preprocessing involved rigorous cleaning procedures, including outlier detection, missing 
                value imputation using multiple imputation techniques, and normalization of variables to ensure 
                comparability across different scales and units of measurement.
              </p>
              <p>
                The final dataset contains over 50,000 observations across 120 variables, providing sufficient 
                statistical power for robust multivariate analysis. Quality assurance protocols were implemented 
                throughout the data collection and preparation phases.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-neutral rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-foreground">Observations</div>
                </div>
                <div className="p-6 bg-neutral rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">120</div>
                  <div className="text-sm text-foreground">Variables</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://c.animaapp.com/mhp1rzhwI9IbJX/img/ai_2.png"
                alt="dataset visualization"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
