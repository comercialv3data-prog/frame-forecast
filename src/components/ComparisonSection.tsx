import { X, Check } from "lucide-react";

const withoutData = [
  {
    title: "Dados espalhados, sem visão do todo:",
    description: "Cada sistema tem uma informação. Você não consegue ver o panorama completo da empresa."
  },
  {
    title: "Descobre tarde demais:",
    description: "Problema já virou prejuízo quando chega até você. Não há tempo para correção."
  },
  {
    title: "Gestão te escapa das mãos:",
    description: "Você perde tempo coletando dados, não sobrando tempo para pensar e decidir."
  },
  {
    title: "Ninguém que conheça todos os setores:",
    description: "Cada especialista sabe da sua área, mas ninguém tem visão 360° como você precisa."
  }
];

const withData = [
  {
    title: "Dashboard com Visão 360° da Empresa:",
    description: "Todas as obras, todos os setores, todos os números em um único lugar. Claro, preciso, em tempo real."
  },
  {
    title: "IA como Analista Sênior 24/7:",
    description: "Conhece financeiro, engenharia, compras, RH. Monitora TUDO e avisa quando algo sai da trajetória."
  },
  {
    title: "Avisa + Explica + Soluciona:",
    description: "Detectou problema? Avisa NA HORA, mostra o motivo e apresenta 3 soluções viáveis prontas para você escolher."
  },
  {
    title: "Mais Tempo para Decidir Melhor:",
    description: "Você não coleta dados, você DECIDE. A gestão não foge do seu controle, está sempre na sua mão."
  }
];

const ComparisonSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">
          Gestão Tradicional vs. Gestão com V3DATA
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without V3DATA */}
          <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b-2 border-red-200 text-red-900">
              Sem Dashboard Inteligente
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
              Com V3DATA (Dashboard + IA)
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
