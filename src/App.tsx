import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CarListings from "./pages/CarListings";
import CarDetails from "./pages/CarDetails";
import Financing from "./pages/Financing";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/cars" element={<Layout><CarListings /></Layout>} />
          <Route path="/cars/:id" element={<Layout><CarDetails /></Layout>} />
          <Route path="/financing" element={<Layout><Financing /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/checkout/:id" element={<Layout><Checkout /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
