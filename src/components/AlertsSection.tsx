import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    label: "⚠️ Produtividade e Prazo",
    title: "Etapa 3 (Estrutura) 28% abaixo do cronograma",
    details: [
      { label: "Motivo:", value: "Falta de insumo X desde ontem" },
      { label: "Impacto:", value: "Atraso de 5 dias se não corrigir hoje" },
      { label: "Ação sugerida:", value: "Revisar compra com Fornecedor (já está preparada no sistema)" }
    ]
  },
  {
    icon: DollarSign,
    label: "💸 Fluxo de Caixa / Desperdício",
    title: "R$ 47 mil em argamassa parado há 52 dias",
    details: [
      { label: "Motivo:", value: "Obra B paralisada por licença ambiental" },
      { label: "Impacto:", value: "Capital congelado. Necessidade de realocação imediata." },
      { label: "Ação sugerida:", value: "Vender ou remanejar estoque para Obra C que inicia semana que vem" }
    ]
  },
  {
    icon: TrendingUp,
    label: "📈 Margem por m²",
    title: "Custo m² do Bloco Y 7% acima do orçado",
    details: [
      { label: "Motivo:", value: "Produtividade da equipe 15% maior. Custo/benefício melhor que o previsto." },
      { label: "Impacto:", value: "O custo total será otimizado, mantendo a qualidade." },
      { label: "Ação sugerida:", value: "Manter processo e analisar a expansão para outros blocos." }
    ]
  }
];

const AlertsSection = () => {
  return (
    <section id="alerts" className="gradient-subtle py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">
          Exemplos reais de Alertas Inteligentes da IA
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <div 
              key={index}
              className="gradient-primary text-white p-6 rounded-xl border-l-4 border-accent hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-block bg-accent px-3 py-1.5 rounded text-xs font-bold mb-4 uppercase">
                {alert.label}
              </div>
              <h4 className="text-base font-semibold mb-4 leading-snug">
                {alert.title}
              </h4>
              <div className="space-y-2">
                {alert.details.map((detail, idx) => (
                  <div key={idx} className="text-sm opacity-95">
                    <strong className="text-accent-light">{detail.label}</strong> {detail.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlertsSection;
