import type { QuizOption as QuizOptionType } from '@/types/kannada';

type OptionState = 'idle' | 'selected-correct' | 'selected-wrong' | 'revealed-correct';

interface QuizOptionProps {
  option: QuizOptionType;
  state: OptionState;
  onClick: () => void;
  disabled?: boolean;
}

const stateClasses: Record<OptionState, string> = {
  idle: 'border-border bg-card hover:border-saffron-400 hover:bg-saffron-50 active:scale-95',
  'selected-correct': 'border-teal-500 bg-teal-50 text-teal-800',
  'selected-wrong': 'border-red-400 bg-red-50 text-red-800',
  'revealed-correct': 'border-teal-300 bg-teal-50/50 text-teal-700',
};

export function QuizOption({ option, state, onClick, disabled }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || state !== 'idle'}
      aria-label={option.display}
      className={`w-full min-h-[64px] px-4 py-3 rounded-xl border-2 font-semibold text-center transition-all select-none ${
        option.isKannada ? 'font-kannada text-3xl' : 'text-base'
      } ${stateClasses[state]} ${disabled && state === 'idle' ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span lang={option.isKannada ? 'kn' : undefined}>{option.display}</span>
    </button>
  );
}
