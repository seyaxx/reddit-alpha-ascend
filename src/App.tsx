import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import AudienceProfiling from "./pages/services/AudienceProfiling";
import SubredditStrategy from "./pages/services/SubredditStrategy";
import ContentCrafting from "./pages/services/ContentCrafting";
import CommunityEngagement from "./pages/services/CommunityEngagement";
import PerformanceAnalytics from "./pages/services/PerformanceAnalytics";
import RapidScaling from "./pages/services/RapidScaling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services/audience-profiling" element={<AudienceProfiling />} />
          <Route path="/services/subreddit-strategy" element={<SubredditStrategy />} />
          <Route path="/services/content-crafting" element={<ContentCrafting />} />
          <Route path="/services/community-engagement" element={<CommunityEngagement />} />
          <Route path="/services/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/services/rapid-scaling" element={<RapidScaling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
