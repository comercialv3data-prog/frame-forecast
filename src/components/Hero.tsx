import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-primary text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="text-sm font-semibold mb-4 text-accent-light">
          Gestão 4.0 para Construção Civil
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-accent-light">IA + Gestão de Obras:</span> Transforme dados em{" "}
          <span className="text-accent-light">decisões executivas</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
          Descubra AGORA onde o custo da sua construção está sangrando e recupere 15% da sua margem. 
          A IA vira seu Gerente de Projetos Sênior 24/7.
        </p>

        <div className="relative max-w-4xl mx-auto mb-12 aspect-video bg-black/20 rounded-xl overflow-hidden border-2 border-accent/30 group cursor-pointer">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition-all duration-300">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
            <p className="text-sm opacity-80">
              ► Veja case real: Como Gestão 4.0 melhorou tomada de decisão
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('final-cta')}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Agendar Diagnóstico Grátis
          </Button>
          <Button 
            onClick={() => scrollToSection('alerts')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-base font-semibold transition-all duration-300"
          >
            Ver Exemplos de Alertas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
