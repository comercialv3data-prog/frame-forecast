const Footer = () => {
  return (
    <footer className="bg-primary-dark text-muted-foreground py-10 px-4 text-center text-sm">
      <div className="container mx-auto max-w-6xl">
        <p className="mb-2">V3DATA - Gestão Inteligente para Construção Civil</p>
        <p>
          © 2025 Todos os direitos reservados. |{" "}
          <a href="#" className="text-accent-light hover:underline">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a href="#" className="text-accent-light hover:underline">
            Termos de Uso
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
