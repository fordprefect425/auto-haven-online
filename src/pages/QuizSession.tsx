import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { QuizCard } from '@/components/QuizCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/hooks/useQuiz';
import { useProgress } from '@/contexts/ProgressContext';
import { generateQuizForGroup, generateInterleavedQuiz } from '@/data/quizzes';
import { X } from 'lucide-react';

export default function QuizSession() {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { addXP, recordQuizScore, progress } = useProgress();

  const quiz = useMemo(() => {
    if (!quizId) return null;
    if (quizId.startsWith('group-')) {
      const groupId = quizId.replace('group-', '');
      return generateQuizForGroup(groupId);
    }
    // interleaved for stage 2+
    const unlockedGroups = progress.unlockedGroupIds;
    return generateInterleavedQuiz(unlockedGroups, progress.currentStage);
  }, [quizId]);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    isComplete,
    score,
    correctCount,
    answerQuestion,
    nextQuestion,
    restart,
  } = useQuiz(quiz?.questions ?? []);

  const handleAnswer = (questionId: string, optionId: string, correct: boolean) => {
    answerQuestion(questionId, optionId);
    if (correct) addXP(10);
    setTimeout(nextQuestion, 1200);
  };

  if (!quiz || quiz.questions.length === 0) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center gap-4 p-8">
        <p className="text-muted-foreground">No questions available for this quiz.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  if (isComplete) {
    // Record score
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
          <p className="text-6xl">{score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪'}</p>
          <h1 className="text-2xl font-bold">{quiz.title} Complete!</h1>
          <p className="text-muted-foreground">
            {correctCount} / {totalQuestions} correct
          </p>
          <div className="mt-4">
            <ProgressBar value={score} color="teal" label="Score" />
          </div>
          <p className="text-saffron-600 font-semibold">+{correctCount * 10} XP earned</p>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button
            className="w-full bg-saffron-500 hover:bg-saffron-600 text-white"
            onClick={() => navigate(-1)}
          >
            Continue Learning
          </Button>
          <Button variant="outline" className="w-full" onClick={restart}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Quiz header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button
          onClick={() => navigate(-1)}
          aria-label="Exit quiz"
          className="p-1.5 rounded-lg hover:bg-muted"
        >
          <X size={22} />
        </button>
        <div className="flex-1">
          <ProgressBar
            value={Math.round((currentIndex / totalQuestions) * 100)}
            showPercent={false}
            color="saffron"
          />
        </div>
        <span className="text-sm text-muted-foreground shrink-0">
          {currentIndex + 1}/{totalQuestions}
        </span>
      </header>

      {/* Question */}
      <div className="flex-1 px-4 pt-4">
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
