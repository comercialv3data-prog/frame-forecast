import { Database, FileText, HardHat, PieChart } from "lucide-react";

const integrations = [
  {
    icon: Database,
    title: "TOTVS (ERP)",
    description: "Dados financeiros, custos, fluxo de caixa. Tudo conectado e atualizado."
  },
  {
    icon: FileText,
    title: "Sienge / Mega",
    description: "Cronograma, produtividade, acompanhamento de etapas em tempo real."
  },
  {
    icon: HardHat,
    title: "Chão de Obra",
    description: "Produtividade, horas, equipamentos. Sem interpretação. Dados brutos e limpos."
  },
  {
    icon: PieChart,
    title: "Orçamento e Planejamento",
    description: "Real vs. Orçado. Desvios identificados automaticamente."
  }
];

const IntegrationSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">
          Sua inteligência conectada com o que você já usa
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div 
                key={index}
                className="bg-muted p-8 rounded-xl text-center border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-5" />
                <h4 className="text-lg font-semibold mb-3 text-primary-dark">
                  {integration.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {integration.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
