import { Building2 } from "lucide-react";

const clients = [
  "FORTES ENGENHARIA",
  "MIMITA CONSTRUÇÃO",
  "BLOQUE",
  "STEMMER RODRIGUES",
  "QUARTZO MASSA",
  "ALUNOBRE",
  "Lojas CBL",
  "VVS CONSTRUTORA"
];

const SocialProof = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">
          Confiança de grandes construtoras
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-border h-24 flex items-center justify-center text-center hover:border-accent transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-muted-foreground" />
                <p className="text-sm font-semibold text-muted-foreground">
                  {client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
