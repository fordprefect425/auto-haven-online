
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./pages/Homepage";
import Slots from "./pages/Slots";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import TokenStore from "./pages/TokenStore";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/slots" element={<Layout><Slots /></Layout>} />
          <Route path="/articles" element={<Layout><Articles /></Layout>} />
          <Route path="/articles/:id" element={<Layout><ArticleDetail /></Layout>} />
          <Route path="/token-store" element={<Layout><TokenStore /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
