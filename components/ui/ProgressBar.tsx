interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = 'var(--blue)' }: ProgressBarProps) {
  return (
    <div className="h-1.5 bg-surface3 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
}
