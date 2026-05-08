interface MatraDisplayProps {
  matras: string[];
  baseRomanization: string;
}

const matraLabels = ['a', 'aa', 'i', 'ii', 'u', 'uu', 'e', 'ee', 'ai', 'o', 'oo', 'au'];

export function MatraDisplay({ matras, baseRomanization }: MatraDisplayProps) {
  if (!matras || matras.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-muted-foreground">With vowels</h3>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {matras.map((matra, i) => (
          <div
            key={i}
            className="flex flex-col items-center shrink-0 p-2 rounded-xl bg-clay-50 border border-clay-100 min-w-[52px]"
          >
            <span lang="kn" className="font-kannada text-2xl font-bold text-foreground">
              {matra}
            </span>
            <span className="text-[10px] text-muted-foreground mt-0.5">
              {baseRomanization}{matraLabels[i] === 'a' ? '' : matraLabels[i] ?? ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
