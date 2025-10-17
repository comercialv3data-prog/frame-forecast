import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 gradient-primary shadow-lg">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tight">
          V3DATA
        </div>
        <Button 
          onClick={() => scrollToSection('final-cta')}
          className="bg-accent hover:bg-accent-light text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Agendar Diagnóstico
        </Button>
      </div>
    </header>
  );
};

export default Header;
