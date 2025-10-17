import { BarChart3, Clock, DollarSign, TrendingDown } from "lucide-react";

const realityCards = [
  {
    icon: BarChart3,
    title: "Dados espalhados",
    description: "TOTVS, Sienge, Mega, planilhas. Cada um tem uma versão da realidade. A verdade está em lugar nenhum."
  },
  {
    icon: Clock,
    title: "Decisão lenta",
    description: "Precisa coletar informação manualmente. Até ter a resposta consolidada, a janela de correção já fechou."
  },
  {
    icon: DollarSign,
    title: "Margem invisível",
    description: "O custo por m² está estourando em uma etapa. Você só percebe semanas depois, sem tempo para correção."
  },
  {
    icon: TrendingDown,
    title: "O padrão: 10-15% abaixo",
    description: "Empresas operando 10-15% abaixo do potencial em cada obra, pagando por desperdício e atrasos não rastreados."
  }
];

const RealitySection = () => {
  return (
    <section className="gradient-subtle py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary-dark">
          Por que a gestão te escapa das mãos?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          Você passa mais tempo coletando informação do que decidindo. Quando finalmente tem os dados, 
          a janela de correção já fechou. O problema não é falta de esforço - é falta de visão do todo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft border-l-4 border-destructive hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-primary-dark">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RealitySection;
