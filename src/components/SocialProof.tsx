import clientsLogos from "@/assets/clients-logos.png";

const SocialProof = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos clientes
          </h2>
          <p className="text-white/90 text-lg max-w-xl">
            Estes são alguns dos parceiros do setor que acreditam na qualidade do nosso trabalho!
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <img 
            src={clientsLogos} 
            alt="Logos dos clientes: Fortes Engenharia, Mimita Construtora, Bloque, Stemmer Rodrigues, Quartzo Massa, Alunobre, Private, Lojas CBL, VVS Construtora" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
