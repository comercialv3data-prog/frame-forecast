import { X, Check } from "lucide-react";

const withoutData = [
  {
    title: "Atraso descoberto tarde:",
    description: "Etapa 3 está 28% atrasada. Você só descobre na medição mensal."
  },
  {
    title: "Estoque parado invisível:",
    description: "R$ 47k em material parado há 52 dias. Capital congelado sem uso."
  },
  {
    title: "Decisão local racional = erro global:",
    description: "Engenheiro compra material caro pra não atrasar, estourando o custo total."
  },
  {
    title: "Análise manual e lenta:",
    description: "A operação segue errada enquanto o time de gestão tenta consolidar os dados."
  }
];

const withData = [
  {
    title: "Alerta Imediato:",
    description: "A IA avisa HOJE que há desvio no cronograma, e a janela para correção está aberta."
  },
  {
    title: "Sugestão de Ação:",
    description: "A IA propõe vender/remanejar o estoque parado para a próxima obra."
  },
  {
    title: "Visão 360°:",
    description: "A IA avalia o impacto em toda a cadeia e sugere o fornecedor mais otimizado."
  },
  {
    title: "Decisão Automatizada:",
    description: "Você decide com base em análises, métricas e previsões em tempo real."
  }
];

const ComparisonSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">
          Sem a IA, você está decidindo no escuro.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without V3DATA */}
          <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b-2 border-red-200 text-red-900">
              A Realidade Sem Gestão 4.0
            </h3>
            <div className="space-y-5">
              {withoutData.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-900 text-sm leading-relaxed">
                    <strong className="font-semibold">{item.title}</strong> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* With V3DATA */}
          <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b-2 border-green-200 text-green-900">
              A Solução Com V3DATA (IA)
            </h3>
            <div className="space-y-5">
              {withData.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-900 text-sm leading-relaxed">
                    <strong className="font-semibold">{item.title}</strong> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
