import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

const obras = [
  {
    nome: "Edifício Residencial Alpha",
    receita: 2500000,
    custosDiretos: 1800000,
    margemBruta: 700000,
    despesasGA: 150000,
    margemLiquida: 550000,
    orcado: 2400000,
    status: "positivo"
  },
  {
    nome: "Condomínio Vista Verde",
    receita: 3200000,
    custosDiretos: 2600000,
    margemBruta: 600000,
    despesasGA: 180000,
    margemLiquida: 420000,
    orcado: 3300000,
    status: "neutro"
  },
  {
    nome: "Shopping Center Norte",
    receita: 5800000,
    custosDiretos: 4900000,
    margemBruta: 900000,
    despesasGA: 320000,
    margemLiquida: 580000,
    orcado: 6000000,
    status: "positivo"
  },
  {
    nome: "Galpão Industrial Beta",
    receita: 1800000,
    custosDiretos: 1600000,
    margemBruta: 200000,
    despesasGA: 120000,
    margemLiquida: 80000,
    orcado: 1700000,
    status: "alerta"
  },
];

const tendenciaMensal = [
  { mes: "Jan", receita: 1200000, custos: 980000 },
  { mes: "Fev", receita: 1450000, custos: 1150000 },
  { mes: "Mar", receita: 1680000, custos: 1320000 },
  { mes: "Abr", receita: 1920000, custos: 1540000 },
  { mes: "Mai", receita: 2250000, custos: 1780000 },
  { mes: "Jun", receita: 2580000, custos: 2050000 },
];

const Financeiro = () => {
  const totalReceita = obras.reduce((acc, obra) => acc + obra.receita, 0);
  const totalCustos = obras.reduce((acc, obra) => acc + obra.custosDiretos, 0);
  const totalMargemLiquida = obras.reduce((acc, obra) => acc + obra.margemLiquida, 0);
  const margemPercentual = ((totalMargemLiquida / totalReceita) * 100).toFixed(1);

  return (
    <DashboardLayout title="Visão Financeira por Obra">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(totalReceita / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">Todas as obras</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custos Diretos</CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(totalCustos / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">Materiais + MO + Terceiros</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Margem Líquida</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(totalMargemLiquida / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">{margemPercentual}% da receita</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obras em Alerta</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {obras.filter(o => o.status === "alerta").length}
            </div>
            <p className="text-xs text-muted-foreground">Abaixo do planejado</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Tendência */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Evolução Mensal - Receita vs Custos</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={tendenciaMensal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${Number(value).toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="receita" stroke="hsl(var(--success))" strokeWidth={2} name="Receita" />
              <Line type="monotone" dataKey="custos" stroke="hsl(var(--destructive))" strokeWidth={2} name="Custos" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabela de Obras */}
      <Card>
        <CardHeader>
          <CardTitle>Análise por Obra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {obras.map((obra) => (
              <div
                key={obra.nome}
                className={`p-4 rounded-lg border ${
                  obra.status === "alerta"
                    ? "border-destructive bg-destructive/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{obra.nome}</h3>
                  {obra.status === "alerta" && (
                    <span className="flex items-center gap-1 text-sm text-destructive font-medium">
                      <AlertCircle className="h-4 w-4" />
                      Atenção
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Receita</p>
                    <p className="font-semibold">R$ {(obra.receita / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Custos Diretos</p>
                    <p className="font-semibold">R$ {(obra.custosDiretos / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Margem Bruta</p>
                    <p className="font-semibold text-success">R$ {(obra.margemBruta / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Despesas G&A</p>
                    <p className="font-semibold">R$ {(obra.despesasGA / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Margem Líquida</p>
                    <p className="font-semibold text-success">
                      R$ {(obra.margemLiquida / 1000).toFixed(0)}k ({((obra.margemLiquida / obra.receita) * 100).toFixed(1)}%)
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Orçado vs Realizado:</span>
                    <span className={obra.receita >= obra.orcado ? "text-success" : "text-destructive"}>
                      {obra.receita >= obra.orcado ? "+" : ""}
                      {((obra.receita - obra.orcado) / 1000).toFixed(0)}k
                      ({(((obra.receita - obra.orcado) / obra.orcado) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Financeiro;
