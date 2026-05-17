import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { Layout } from '@/components/Layout';

import Dashboard from '@/pages/Dashboard';
import AlphabetsOverview from '@/pages/AlphabetsOverview';
import AlphabetGroupDetail from '@/pages/AlphabetGroupDetail';
import LetterDetail from '@/pages/LetterDetail';
import WordsOverview from '@/pages/WordsOverview';
import SentencesPractice from '@/pages/SentencesPractice';
import ParagraphsReading from '@/pages/ParagraphsReading';
import QuizSession from '@/pages/QuizSession';
import ReviewSession from '@/pages/ReviewSession';
import ProgressPage from '@/pages/ProgressPage';
import NotFound from '@/pages/NotFound';
import Onboarding, { hasOnboarded } from '@/pages/Onboarding';

function OnboardingGuard({ children }: { children: ReactNode }) {
  if (!hasOnboarded()) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              {/* First-visit onboarding (no nav, no guard) */}
              <Route path="/welcome" element={<Onboarding />} />

              {/* Full-screen routes (no bottom nav) */}
              <Route path="/quiz/:quizId" element={<OnboardingGuard><QuizSession /></OnboardingGuard>} />
              <Route path="/review" element={<OnboardingGuard><ReviewSession /></OnboardingGuard>} />

              {/* Main app shell with bottom nav — gated by onboarding */}
              <Route element={<OnboardingGuard><Layout /></OnboardingGuard>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/learn/alphabets" element={<AlphabetsOverview />} />
                <Route path="/learn/alphabets/:groupId" element={<AlphabetGroupDetail />} />
                <Route path="/learn/letter/:letterId" element={<LetterDetail />} />
                <Route path="/learn/words" element={<WordsOverview />} />
                <Route path="/learn/sentences" element={<SentencesPractice />} />
                <Route path="/learn/paragraphs" element={<ParagraphsReading />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ProgressProvider>
    </QueryClientProvider>
  );
}
