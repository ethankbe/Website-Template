import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';

export default function ResearchQuestions() {
  const questions = [
    {
      id: 'question-1',
      number: '01',
      title: 'Educational Impact Analysis',
      question: 'How do variations in educational attainment correlate with economic productivity across different industrial sectors?',
      anchor: 'plot-education',
    },
    {
      id: 'question-2',
      number: '02',
      title: 'Industrial Influence Patterns',
      question: 'What are the key factors that mediate the relationship between industrial development and socioeconomic outcomes?',
      anchor: 'plot-industrial',
    },
  ];

  const handleQuestionClick = (anchor: string) => {
    const element = document.getElementById(anchor);
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
    <section className="py-24 lg:py-32 bg-gradient-2">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Research Questions
          </h2>
          <p className="text-base md:text-lg text-white text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our investigation centers on two fundamental questions that drive our analytical approach.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {questions.map((item) => (
              <Card
                key={item.id}
                onClick={() => handleQuestionClick(item.anchor)}
                className="p-8 bg-white border-0 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-1 opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
                <div className="flex items-start gap-6 mb-6 relative z-10">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-1 font-heading">
                    {item.number}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground pt-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-foreground leading-relaxed mb-6">
                  {item.question}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-4 transition-all duration-300 gap-2">
                  <span className="text-base">View Results</span>
                  <ArrowRightIcon className="w-5 h-5" strokeWidth={2} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
