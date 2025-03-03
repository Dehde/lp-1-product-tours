
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pb-16">
      <div className="container max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="max-w-4xl mx-auto">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Scalable User Onboarding
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
              - for Complex Softeware
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
           Reduce your CSMs' workload. Self-onboarding that works for complex software. More effective guidance than ever before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full max-w-md mx-auto">
            <Button 
              size="lg"
              className="w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* <p className="text-sm text-muted-foreground/80 font-medium">
            
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
