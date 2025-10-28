import { LayoutDashboard, Brain, Target, Shield } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Visão 360° em Um Único Dashboard",
    description: "Todas as obras, todos os setores, todos os números. Financeiro, produtividade, estoque, cronograma - tudo em tempo real, claro e preciso."
  },
  {
    icon: Brain,
    title: "IA Como Analista Sênior de Todos os Setores",
    description: "A IA conhece cada detalhe: orçamento, engenharia, compras, RH. É como ter um especialista que sabe de TUDO acompanhando cada decisão."
  },
  {
    icon: Target,
    title: "Acompanha o Direcionamento Projetado",
    description: "A IA monitora se você está seguindo o plano. Quando algo sai da trajetória, avisa NA HORA, mostra o motivo e apresenta soluções viáveis."
  },
  {
    icon: Shield,
    title: "Gestão Sempre no Seu Controle",
    description: "Não perde mais tempo coletando dados. Você tem mais tempo para PENSAR e DECIDIR. A gestão não foge de você, está sempre no seu controle."
  }
];

const DashboardSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary-dark">
          Dashboard Inteligente: Toda a Empresa na Sua Mão
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          Imagine ter um painel único onde você vê TUDO: cada obra, cada setor, cada real investido. 
          E uma IA que entende todos os números, avisa quando algo está errado e sugere o que fazer.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-subtle p-8 rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-primary-dark">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Dashboard Preview */}
        <div className="gradient-primary rounded-xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Como Funciona na Prática
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Você abre o dashboard de manhã e a IA já analisou tudo que aconteceu nas últimas 24h
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-accent-light font-bold mb-2">1. VISÃO COMPLETA</div>
              <p className="text-sm">Gestão à vista (dashboard) do Financeiro, RH, Obras, Suprimentos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-accent-light font-bold mb-2">2. IA IDENTIFICA</div>
              <p className="text-sm">A IA está alinhada com suas metas e padrões, avisa quando tem algum desvio e dá contexto do motivo. Ex: obra C está 15% acima do custo previsto. Não foi feita a compra antecipada de Aço como foi sugerido mês passado</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-accent-light font-bold mb-2">3. SOLUÇÕES PRONTAS</div>
              <p className="text-sm">IA sugere: Fornecedor B tem mesmo produto 18% mais barato. Estimativa de economia: R$ 34k no mês, porém cliente demora para entregar, comprar com prazo maior</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              Você não perde tempo buscando informação. Você tem tempo para <span className="text-accent-light">TOMAR A MELHOR DECISÃO</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
