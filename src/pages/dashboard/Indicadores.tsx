import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

interface ObraIndicadores {
  nome: string;
  idc: number;
  idp: number;
  avancoFisico: number;
  avancoFinanceiro: number;
  desvioAcumulado: number;
  gestor: string;
  status: "verde" | "amarelo" | "vermelho";
}

const obras: ObraIndicadores[] = [
  {
    nome: "Edifício Residencial Alpha",
    idc: 1.05,
    idp: 0.98,
    avancoFisico: 65,
    avancoFinanceiro: 68,
    desvioAcumulado: -2.5,
    gestor: "João Silva",
    status: "verde",
  },
  {
    nome: "Condomínio Vista Verde",
    idc: 0.92,
    idp: 0.95,
    avancoFisico: 48,
    avancoFinanceiro: 52,
    desvioAcumulado: -5.8,
    gestor: "Maria Santos",
    status: "amarelo",
  },
  {
    nome: "Shopping Center Norte",
    idc: 1.08,
    idp: 1.02,
    avancoFisico: 82,
    avancoFinanceiro: 78,
    desvioAcumulado: 3.2,
    gestor: "Pedro Costa",
    status: "verde",
  },
  {
    nome: "Galpão Industrial Beta",
    idc: 0.85,
    idp: 0.88,
    avancoFisico: 35,
    avancoFinanceiro: 42,
    desvioAcumulado: -12.3,
    gestor: "Ana Oliveira",
    status: "vermelho",
  },
  {
    nome: "Residencial Jardim Sul",
    idc: 0.96,
    idp: 1.01,
    avancoFisico: 55,
    avancoFinanceiro: 57,
    desvioAcumulado: -1.5,
    gestor: "Carlos Mendes",
    status: "amarelo",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "verde":
      return "hsl(var(--success))";
    case "amarelo":
      return "#f59e0b";
    case "vermelho":
      return "hsl(var(--destructive))";
    default:
      return "hsl(var(--muted))";
  }
};

const getStatusText = (idc: number, idp: number) => {
  if (idc >= 1.0 && idp >= 1.0) return { status: "verde", text: "Excelente" };
  if (idc >= 0.95 && idp >= 0.95) return { status: "amarelo", text: "Atenção" };
  return { status: "vermelho", text: "Crítico" };
};

const Indicadores = () => {
  const scatterData = obras.map(obra => ({
    x: obra.idc,
    y: obra.idp,
    nome: obra.nome,
    status: obra.status,
  }));

  const obrasVerde = obras.filter(o => o.status === "verde").length;
  const obrasAmarelo = obras.filter(o => o.status === "amarelo").length;
  const obrasVermelho = obras.filter(o => o.status === "vermelho").length;

  return (
    <DashboardLayout title="Indicadores de Desempenho (IDC e IDP)">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IDC Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(obras.reduce((acc, o) => acc + o.idc, 0) / obras.length).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">Índice de Desempenho de Custo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IDP Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(obras.reduce((acc, o) => acc + o.idp, 0) / obras.length).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">Índice de Desempenho de Prazo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obras no Alvo</CardTitle>
            <div className="h-3 w-3 rounded-full bg-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obrasVerde}</div>
            <p className="text-xs text-muted-foreground">Desempenho excelente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obras Críticas</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obrasVermelho}</div>
            <p className="text-xs text-muted-foreground">Requer ação imediata</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Dispersão */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Correlação IDC vs IDP</CardTitle>
          <p className="text-sm text-muted-foreground">
            Quadrante superior direito = desempenho ideal
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="x"
                name="IDC"
                domain={[0.8, 1.15]}
                label={{ value: "IDC (Índice de Desempenho de Custo)", position: "bottom" }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="IDP"
                domain={[0.8, 1.15]}
                label={{ value: "IDP (Índice de Desempenho de Prazo)", angle: -90, position: "left" }}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card p-3 rounded-lg border shadow-lg">
                        <p className="font-semibold">{data.nome}</p>
                        <p className="text-sm">IDC: {data.x.toFixed(2)}</p>
                        <p className="text-sm">IDP: {data.y.toFixed(2)}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter data={scatterData} fill="hsl(var(--primary))">
                {scatterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getStatusColor(entry.status)} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabela de Indicadores */}
      <Card>
        <CardHeader>
          <CardTitle>Indicadores Consolidados por Obra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {obras.map((obra) => {
              const statusInfo = getStatusText(obra.idc, obra.idp);
              return (
                <div
                  key={obra.nome}
                  className={`p-4 rounded-lg border ${
                    obra.status === "vermelho"
                      ? "border-destructive bg-destructive/5"
                      : obra.status === "amarelo"
                      ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
                      : "border-success bg-success/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{obra.nome}</h3>
                      <p className="text-sm text-muted-foreground">Gestor: {obra.gestor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: getStatusColor(obra.status) }}
                      />
                      <span className="text-sm font-medium">{statusInfo.text}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">IDC</p>
                      <p className={`font-bold text-lg ${obra.idc >= 1.0 ? "text-success" : "text-destructive"}`}>
                        {obra.idc.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {obra.idc >= 1.0 ? "Abaixo do custo" : "Acima do custo"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">IDP</p>
                      <p className={`font-bold text-lg ${obra.idp >= 1.0 ? "text-success" : "text-destructive"}`}>
                        {obra.idp.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {obra.idp >= 1.0 ? "Adiantado" : "Atrasado"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Avanço Físico</p>
                      <p className="font-bold text-lg">{obra.avancoFisico}%</p>
                      <Progress value={obra.avancoFisico} className="mt-1" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Avanço Financeiro</p>
                      <p className="font-bold text-lg">{obra.avancoFinanceiro}%</p>
                      <Progress value={obra.avancoFinanceiro} className="mt-1" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Desvio Acumulado</p>
                      <p className={`font-bold text-lg ${obra.desvioAcumulado >= 0 ? "text-success" : "text-destructive"}`}>
                        {obra.desvioAcumulado > 0 ? "+" : ""}
                        {obra.desvioAcumulado.toFixed(1)}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {obra.desvioAcumulado >= 0 ? "Superávit" : "Déficit"}
                      </p>
                    </div>
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

export default Indicadores;
