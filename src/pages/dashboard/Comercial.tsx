import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const funilVendas = [
  { etapa: "Leads", quantidade: 450, valor: 0 },
  { etapa: "Oportunidades", quantidade: 180, valor: 0 },
  { etapa: "Propostas", quantidade: 85, valor: 32500000 },
  { etapa: "Vendas", quantidade: 42, valor: 18900000 },
];

const conversaoPorCanal = [
  { canal: "Meta Ads", leads: 180, conversoes: 18, roi: 3.2, gasto: 45000 },
  { canal: "Google Ads", leads: 150, conversoes: 22, roi: 4.5, gasto: 38000 },
  { canal: "Indicação", leads: 80, conversoes: 28, roi: 12.8, gasto: 5000 },
  { canal: "Site Direto", leads: 40, conversoes: 15, roi: 0, gasto: 0 },
];

const vendedores = [
  { nome: "Carlos Silva", vendas: 12, ticket: 450000, meta: 5000000, realizado: 5400000 },
  { nome: "Ana Santos", vendas: 10, ticket: 520000, meta: 5000000, realizado: 5200000 },
  { nome: "Pedro Costa", vendas: 8, ticket: 380000, meta: 4000000, realizado: 3040000 },
  { nome: "Maria Oliveira", vendas: 7, ticket: 470000, meta: 3500000, realizado: 3290000 },
  { nome: "João Mendes", vendas: 5, ticket: 410000, meta: 2500000, realizado: 2050000 },
];

const projecaoMensal = [
  { mes: "Jul", meta: 8000000, realizado: 8500000, projetado: 9200000 },
  { mes: "Ago", meta: 8500000, realizado: 7800000, projetado: 8800000 },
  { mes: "Set", meta: 9000000, realizado: 9400000, projetado: 10100000 },
  { mes: "Out", meta: 9500000, realizado: 0, projetado: 9800000 },
  { mes: "Nov", meta: 10000000, realizado: 0, projetado: 10500000 },
  { mes: "Dez", meta: 11000000, realizado: 0, projetado: 11800000 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--success))", "#f59e0b"];

const Comercial = () => {
  const totalLeads = funilVendas[0].quantidade;
  const totalVendas = funilVendas[3].quantidade;
  const taxaConversao = ((totalVendas / totalLeads) * 100).toFixed(1);
  const ticketMedio = funilVendas[3].valor / totalVendas;
  const totalGastoMarketing = conversaoPorCanal.reduce((acc, c) => acc + c.gasto, 0);
  const custoLead = totalGastoMarketing / totalLeads;
  const custoVenda = totalGastoMarketing / totalVendas;

  return (
    <DashboardLayout title="Funil Comercial e ROI de Marketing">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxaConversao}%</div>
            <p className="text-xs text-muted-foreground">Leads → Vendas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(ticketMedio / 1000).toFixed(0)}k
            </div>
            <p className="text-xs text-muted-foreground">Por unidade vendida</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custo por Lead</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {custoLead.toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">Gasto em marketing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custo por Venda</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(custoVenda / 1000).toFixed(1)}k
            </div>
            <p className="text-xs text-muted-foreground">CAC (Custo de Aquisição)</p>
          </CardContent>
        </Card>
      </div>

      {/* Funil de Vendas e Performance por Canal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Funil de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={funilVendas} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="etapa" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="quantidade" fill="hsl(var(--primary))" name="Quantidade" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {funilVendas.map((item, index) => {
                if (index === 0) return null;
                const anterior = funilVendas[index - 1];
                const taxa = ((item.quantidade / anterior.quantidade) * 100).toFixed(1);
                return (
                  <div key={item.etapa} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{anterior.etapa} → {item.etapa}</span>
                    <span className="font-medium">{taxa}%</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROI por Canal de Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversaoPorCanal.map((canal) => (
                <div key={canal.canal} className="p-3 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{canal.canal}</h4>
                    <span className="text-sm font-bold text-success">
                      ROI: {canal.roi > 0 ? canal.roi.toFixed(1) + "x" : "N/A"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Leads</p>
                      <p className="font-medium">{canal.leads}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversões</p>
                      <p className="font-medium">{canal.conversoes}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Gasto</p>
                      <p className="font-medium">R$ {(canal.gasto / 1000).toFixed(0)}k</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Taxa de conversão</span>
                      <span className="font-medium">
                        {((canal.conversoes / canal.leads) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projeção de Vendas */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Projeção de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projecaoMensal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${(Number(value) / 1000000).toFixed(1)}M`} />
              <Legend />
              <Line type="monotone" dataKey="meta" stroke="#94a3b8" strokeWidth={2} name="Meta" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="realizado" stroke="hsl(var(--success))" strokeWidth={2} name="Realizado" />
              <Line type="monotone" dataKey="projetado" stroke="hsl(var(--primary))" strokeWidth={2} name="Projetado" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance por Vendedor */}
      <Card>
        <CardHeader>
          <CardTitle>Performance por Vendedor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vendedores.map((vendedor) => {
              const atingimento = ((vendedor.realizado / vendedor.meta) * 100).toFixed(1);
              const isAcimaMeta = vendedor.realizado >= vendedor.meta;
              return (
                <div
                  key={vendedor.nome}
                  className={`p-4 rounded-lg border ${
                    isAcimaMeta ? "border-success bg-success/5" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{vendedor.nome}</h3>
                    <span className={`font-bold ${isAcimaMeta ? "text-success" : "text-muted-foreground"}`}>
                      {atingimento}% da meta
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Vendas</p>
                      <p className="font-bold text-lg">{vendedor.vendas}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Ticket Médio</p>
                      <p className="font-bold text-lg">R$ {(vendedor.ticket / 1000).toFixed(0)}k</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Meta</p>
                      <p className="font-bold text-lg">R$ {(vendedor.meta / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Realizado</p>
                      <p className="font-bold text-lg">R$ {(vendedor.realizado / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${isAcimaMeta ? "bg-success" : "bg-primary"}`}
                      style={{ width: `${Math.min(Number(atingimento), 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Comercial;
