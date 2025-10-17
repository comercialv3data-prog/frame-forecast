import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="gradient-primary text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pare de perder margem. Solicite o Diagnóstico Gratuito.
        </h2>
        <p className="text-lg mb-12 opacity-95 leading-relaxed max-w-3xl mx-auto">
          Vamos conectar o V3DATA aos seus sistemas e mostrar exatamente onde sua operação está 
          sangrando e como podemos recuperar sua margem em 30 dias. <br />
          <strong>Vagas limitadas por mês.</strong>
        </p>

        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mb-8"
        >
          Quero Meu Diagnóstico Gratuito
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
