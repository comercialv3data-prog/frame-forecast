import { Link, useLocation } from "react-router-dom";
import { BarChart3, TrendingUp, Users, DollarSign, Package } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Visão Financeira", href: "/dashboard/financeiro", icon: DollarSign },
  { name: "IDC e IDP", href: "/dashboard/indicadores", icon: TrendingUp },
  { name: "RH", href: "/dashboard/rh", icon: Users },
  { name: "Comercial", href: "/dashboard/comercial", icon: BarChart3 },
  { name: "Suprimentos", href: "/dashboard/suprimentos", icon: Package },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
            
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
