import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

interface ObraRH {
  nome: string;
  turnover: number;
  absenteismo: number;
  custoM2: number;
  funcionarios: number;
  empresa: "Matriz" | "Terceirizada" | "Filial";
}

const obrasRH: ObraRH[] = [
  {
    nome: "Edifício Residencial Alpha",
    turnover: 8.5,
    absenteismo: 3.2,
    custoM2: 145,
    funcionarios: 42,
    empresa: "Matriz",
  },
  {
    nome: "Condomínio Vista Verde",
    turnover: 12.3,
    absenteismo: 5.8,
    custoM2: 168,
    funcionarios: 35,
    empresa: "Terceirizada",
  },
  {
    nome: "Shopping Center Norte",
    turnover: 6.8,
    absenteismo: 2.9,
    custoM2: 152,
    funcionarios: 68,
    empresa: "Matriz",
  },
  {
    nome: "Galpão Industrial Beta",
    turnover: 15.2,
    absenteismo: 7.5,
    custoM2: 189,
    funcionarios: 28,
    empresa: "Terceirizada",
  },
  {
    nome: "Residencial Jardim Sul",
    turnover: 9.1,
    absenteismo: 4.1,
    custoM2: 156,
    funcionarios: 38,
    empresa: "Filial",
  },
];

const tendenciaMensal = [
  { mes: "Jan", turnover: 9.2, absenteismo: 4.5 },
  { mes: "Fev", turnover: 10.1, absenteismo: 5.2 },
  { mes: "Mar", turnover: 11.5, absenteismo: 5.8 },
  { mes: "Abr", turnover: 10.8, absenteismo: 4.9 },
  { mes: "Mai", turnover: 9.5, absenteismo: 4.2 },
  { mes: "Jun", turnover: 8.7, absenteismo: 3.8 },
];

const comparativoEmpresas = [
  { empresa: "Matriz", turnover: 7.8, absenteismo: 3.1, custoM2: 148 },
  { empresa: "Filial", turnover: 9.1, absenteismo: 4.1, custoM2: 156 },
  { empresa: "Terceirizada", turnover: 13.8, absenteismo: 6.7, custoM2: 179 },
];

const RH = () => {
  const turnoverMedio = (obrasRH.reduce((acc, o) => acc + o.turnover, 0) / obrasRH.length).toFixed(1);
  const absenteismoMedio = (obrasRH.reduce((acc, o) => acc + o.absenteismo, 0) / obrasRH.length).toFixed(1);
  const totalFuncionarios = obrasRH.reduce((acc, o) => acc + o.funcionarios, 0);
  const obrasAlerta = obrasRH.filter(o => o.turnover > 12 || o.absenteismo > 6).length;

  return (
    <DashboardLayout title="Indicadores de RH">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Turnover Médio</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{turnoverMedio}%</div>
            <p className="text-xs text-muted-foreground">-1.2% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absenteísmo</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{absenteismoMedio}%</div>
            <p className="text-xs text-muted-foreground">-0.8% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funcionários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFuncionarios}</div>
            <p className="text-xs text-muted-foreground">Todas as obras ativas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Obras em Alerta</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obrasAlerta}</div>
            <p className="text-xs text-muted-foreground">Turnover ou absenteísmo alto</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Tendência Mensal */}
        <Card>
          <CardHeader>
            <CardTitle>Tendência Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tendenciaMensal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="turnover" stroke="hsl(var(--destructive))" strokeWidth={2} name="Turnover %" />
                <Line type="monotone" dataKey="absenteismo" stroke="#f59e0b" strokeWidth={2} name="Absenteísmo %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Comparativo por Empresa */}
        <Card>
          <CardHeader>
            <CardTitle>Comparativo por Empresa</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparativoEmpresas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="empresa" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="turnover" fill="hsl(var(--destructive))" name="Turnover %" />
                <Bar dataKey="absenteismo" fill="#f59e0b" name="Absenteísmo %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tabela Detalhada */}
      <Card>
        <CardHeader>
          <CardTitle>Indicadores por Obra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {obrasRH.map((obra) => {
              const isAlerta = obra.turnover > 12 || obra.absenteismo > 6;
              return (
                <div
                  key={obra.nome}
                  className={`p-4 rounded-lg border ${
                    isAlerta
                      ? "border-destructive bg-destructive/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{obra.nome}</h3>
                      <p className="text-sm text-muted-foreground">Empresa: {obra.empresa}</p>
                    </div>
                    {isAlerta && (
                      <span className="flex items-center gap-1 text-sm text-destructive font-medium">
                        <AlertCircle className="h-4 w-4" />
                        Atenção
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Turnover</p>
                      <p className={`font-bold text-lg ${obra.turnover > 12 ? "text-destructive" : "text-success"}`}>
                        {obra.turnover.toFixed(1)}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {obra.turnover > 12 ? "Acima do ideal" : "Dentro do esperado"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Absenteísmo</p>
                      <p className={`font-bold text-lg ${obra.absenteismo > 6 ? "text-destructive" : "text-success"}`}>
                        {obra.absenteismo.toFixed(1)}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {obra.absenteismo > 6 ? "Acima do ideal" : "Dentro do esperado"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Custo por m²</p>
                      <p className="font-bold text-lg">R$ {obra.custoM2}</p>
                      <p className="text-xs text-muted-foreground">Custo com pessoal</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Funcionários</p>
                      <p className="font-bold text-lg">{obra.funcionarios}</p>
                      <p className="text-xs text-muted-foreground">Total na obra</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Card de Análise */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Análise Consolidada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <TrendingUp className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="font-medium">Ponto Positivo</p>
                <p className="text-sm text-muted-foreground">
                  Obras da matriz apresentam os melhores indicadores, com turnover médio de {comparativoEmpresas[0].turnover}% 
                  e absenteísmo de {comparativoEmpresas[0].absenteismo}%
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <p className="font-medium">Atenção Necessária</p>
                <p className="text-sm text-muted-foreground">
                  Empresas terceirizadas apresentam turnover {comparativoEmpresas[2].turnover}% superior ao da matriz. 
                  Recomenda-se revisão de processos e benefícios.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default RH;
