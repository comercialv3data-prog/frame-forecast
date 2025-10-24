import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Package, TrendingUp, TrendingDown, AlertCircle, Clock } from "lucide-react";

const resumoCompras = {
  pedidosSolicitados: 342,
  pedidosCotados: 298,
  ordensEmitidas: 276,
  pedidosUrgentes: 45,
  saving: 8.5,
};

const evolucaoCompras = [
  { mes: "Jan", volume: 1200000, economia: 85000, urgentes: 12 },
  { mes: "Fev", volume: 1450000, economia: 102000, urgentes: 18 },
  { mes: "Mar", volume: 1680000, economia: 125000, urgentes: 15 },
  { mes: "Abr", volume: 1920000, economia: 148000, urgentes: 22 },
  { mes: "Mai", volume: 2100000, economia: 168000, urgentes: 28 },
  { mes: "Jun", volume: 2350000, economia: 195000, urgentes: 19 },
];

const compraPorCategoria = [
  { categoria: "Estrutura", valor: 2800000, pedidos: 48 },
  { categoria: "Alvenaria", valor: 1950000, pedidos: 85 },
  { categoria: "Acabamento", valor: 1620000, pedidos: 124 },
  { categoria: "Instalações", valor: 1380000, pedidos: 67 },
  { categoria: "Outros", valor: 850000, pedidos: 18 },
];

const fornecedores = [
  { nome: "Construtora ABC Materiais", atrasos: 2, entregas: 45, economia: 12.5, nota: 9.2 },
  { nome: "Delta Suprimentos", atrasos: 8, entregas: 38, economia: 8.3, nota: 7.8 },
  { nome: "Mega Distribuidora", atrasos: 1, entregas: 52, economia: 15.2, nota: 9.5 },
  { nome: "Sigma Materiais", atrasos: 12, entregas: 35, economia: 6.8, nota: 6.5 },
  { nome: "Omega Suprimentos", atrasos: 3, entregas: 41, economia: 11.3, nota: 8.9 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--success))", "#f59e0b", "#94a3b8"];

const Suprimentos = () => {
  const taxaCotacao = ((resumoCompras.pedidosCotados / resumoCompras.pedidosSolicitados) * 100).toFixed(1);
  const taxaEmissao = ((resumoCompras.ordensEmitidas / resumoCompras.pedidosCotados) * 100).toFixed(1);
  const percentualUrgente = ((resumoCompras.pedidosUrgentes / resumoCompras.pedidosSolicitados) * 100).toFixed(1);
  const totalVolume = compraPorCategoria.reduce((acc, c) => acc + c.valor, 0);

  return (
    <DashboardLayout title="Suprimentos e Compras">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Solicitados</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoCompras.pedidosSolicitados}</div>
            <p className="text-xs text-muted-foreground">Total no período</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Cotação</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{taxaCotacao}%</div>
            <p className="text-xs text-muted-foreground">{resumoCompras.pedidosCotados} cotados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ordens Emitidas</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoCompras.ordensEmitidas}</div>
            <p className="text-xs text-muted-foreground">{taxaEmissao}% dos cotados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saving</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoCompras.saving}%</div>
            <p className="text-xs text-muted-foreground">Economia nas cotações</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Urgentes</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoCompras.pedidosUrgentes}</div>
            <p className="text-xs text-muted-foreground">{percentualUrgente}% do total</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos de Evolução */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Evolução do Volume de Compras</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={evolucaoCompras}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => `R$ ${Number(value).toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="volume" stroke="hsl(var(--primary))" strokeWidth={2} name="Volume" />
                <Line type="monotone" dataKey="economia" stroke="hsl(var(--success))" strokeWidth={2} name="Economia" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={compraPorCategoria}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ categoria, percent }) => `${categoria} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {compraPorCategoria.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `R$ ${Number(value).toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pedidos Urgentes e Impactos */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tendência de Pedidos Urgentes</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={evolucaoCompras}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="urgentes" fill="hsl(var(--destructive))" name="Pedidos Urgentes" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <p className="font-medium text-destructive">Impacto Financeiro dos Urgentes</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Pedidos urgentes representam custo adicional estimado de 15-20% devido à necessidade de 
                  fornecedores express e falta de tempo para cotações comparativas.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance de Fornecedores */}
      <Card>
        <CardHeader>
          <CardTitle>Performance de Fornecedores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fornecedores.map((fornecedor) => {
              const taxaAtraso = ((fornecedor.atrasos / fornecedor.entregas) * 100).toFixed(1);
              const isProblematico = Number(taxaAtraso) > 15;
              return (
                <div
                  key={fornecedor.nome}
                  className={`p-4 rounded-lg border ${
                    isProblematico
                      ? "border-destructive bg-destructive/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{fornecedor.nome}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Nota:</span>
                      <span className={`font-bold ${fornecedor.nota >= 8 ? "text-success" : fornecedor.nota >= 7 ? "text-yellow-600" : "text-destructive"}`}>
                        {fornecedor.nota}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Entregas Totais</p>
                      <p className="font-bold text-lg">{fornecedor.entregas}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Atrasos</p>
                      <p className={`font-bold text-lg ${isProblematico ? "text-destructive" : "text-success"}`}>
                        {fornecedor.atrasos} ({taxaAtraso}%)
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Economia Média</p>
                      <p className="font-bold text-lg text-success">{fornecedor.economia}%</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className={`font-bold text-sm ${isProblematico ? "text-destructive" : "text-success"}`}>
                        {isProblematico ? "Revisar" : "Confiável"}
                      </p>
                    </div>
                  </div>

                  {isProblematico && (
                    <div className="mt-3 pt-3 border-t flex items-center gap-2 text-sm text-destructive">
                      <Clock className="h-4 w-4" />
                      <span>Alta taxa de atraso - considerar alternativas</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Alertas e Recomendações */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Alertas e Recomendações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <p className="font-medium">Pedidos sem Cotação</p>
                <p className="text-sm text-muted-foreground">
                  {resumoCompras.pedidosSolicitados - resumoCompras.pedidosCotados} pedidos aguardando cotação há mais de 3 dias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <TrendingUp className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="font-medium">Oportunidade de Economia</p>
                <p className="text-sm text-muted-foreground">
                  Fornecedores com melhor desempenho geram até {Math.max(...fornecedores.map(f => f.economia))}% de economia. 
                  Considere priorizar esses parceiros.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Suprimentos;
