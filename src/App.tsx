import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Financeiro from "./pages/dashboard/Financeiro";
import Indicadores from "./pages/dashboard/Indicadores";
import RH from "./pages/dashboard/RH";
import Comercial from "./pages/dashboard/Comercial";
import Suprimentos from "./pages/dashboard/Suprimentos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard/financeiro" element={<Financeiro />} />
          <Route path="/dashboard/indicadores" element={<Indicadores />} />
          <Route path="/dashboard/rh" element={<RH />} />
          <Route path="/dashboard/comercial" element={<Comercial />} />
          <Route path="/dashboard/suprimentos" element={<Suprimentos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
