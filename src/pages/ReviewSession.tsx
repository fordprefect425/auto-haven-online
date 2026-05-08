import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizCard } from '@/components/QuizCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/hooks/useQuiz';
import { useProgress } from '@/contexts/ProgressContext';
import { generateReviewQuiz } from '@/data/quizzes';
import { X } from 'lucide-react';

export default function ReviewSession() {
  const navigate = useNavigate();
  const { getDueLetterIds, recordReview, addXP, recordQuizScore } = useProgress();

  const dueIds = getDueLetterIds();
  const quiz = useMemo(() => generateReviewQuiz(dueIds), []);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    isComplete,
    score,
    correctCount,
    answerQuestion,
    nextQuestion,
  } = useQuiz(quiz.questions);

  const handleAnswer = (questionId: string, optionId: string, correct: boolean) => {
    answerQuestion(questionId, optionId);
    if (currentQuestion?.relatedLetterId) {
      recordReview(currentQuestion.relatedLetterId, correct);
    }
    if (correct) addXP(10);
    setTimeout(nextQuestion, 1200);
  };

  if (dueIds.length === 0) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center gap-4 p-8">
        <p className="text-5xl">✨</p>
        <h1 className="text-xl font-bold">All caught up!</h1>
        <p className="text-muted-foreground text-center">No letters due for review right now. Check back tomorrow!</p>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  if (isComplete) {
    recordQuizScore({
      quizId: quiz.id,
      score,
      attemptedAt: new Date().toISOString(),
      correctCount,
      totalCount: totalQuestions,
    });

    return (
      <div className="min-h-dvh flex flex-col items-center justify-center gap-6 p-8">
        <div className="text-center space-y-2">
          <p className="text-5xl">{score >= 80 ? '🌟' : '💪'}</p>
          <h1 className="text-2xl font-bold">Review Complete!</h1>
          <p className="text-muted-foreground">{correctCount}/{totalQuestions} correct</p>
          <div className="mt-4 w-full">
            <ProgressBar value={score} color="teal" label="Accuracy" />
          </div>
          <p className="text-saffron-600 font-semibold">+{correctCount * 10} XP</p>
        </div>
        <Button
          className="w-full max-w-sm bg-saffron-500 hover:bg-saffron-600 text-white"
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button onClick={() => navigate('/')} aria-label="Exit review" className="p-1.5 rounded-lg hover:bg-muted">
          <X size={22} />
        </button>
        <div className="flex-1">
          <ProgressBar
            value={Math.round((currentIndex / totalQuestions) * 100)}
            showPercent={false}
            color="teal"
          />
        </div>
        <span className="text-sm text-muted-foreground shrink-0">
          {currentIndex + 1}/{totalQuestions}
        </span>
      </header>

      <div className="px-4 pt-2 pb-1">
        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Daily Review</p>
      </div>

      <div className="flex-1 px-4 pt-2">
        {currentQuestion && (
          <QuizCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}
