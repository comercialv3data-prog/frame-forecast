import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";

const alerts = [
  {
    icon: DollarSign,
    label: "💸 Suprimentos",
    title: "R$ 127k em compras não planejadas nos últimos 15 dias",
    details: [
      { label: "Impacto:", value: "Fluxo de caixa comprometido em 18%" }
    ]
  },
  {
    icon: TrendingUp,
    label: "📈 Margem",
    title: "Cliente Incorporadora Horizonte: margem média de 18% vs 12% no contrato atual",
    details: [
      { label: "Custo 22% acima da média histórica:", value: "Investigar custo com aço e cimento" }
    ]
  },
  {
    icon: AlertTriangle,
    label: "⚠️ RH e Produtividade",
    title: "Obra Residencial Norte: turnover de 35% + absenteísmo de 8% no último trimestre",
    details: [
      { label: "Impacto:", value: "Produtividade caiu 23% e prazo atrasou 26 dias" }
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
