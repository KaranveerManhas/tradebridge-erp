import { ReactNode } from 'react';
import clsx from 'clsx';

type ColorVariant = 'accent' | 'green' | 'red' | 'blue' | 'orange' | 'purple';

interface KpiCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  variant?: ColorVariant;
  change?: string;
  changeDir?: 'up' | 'down';
}

const iconBg: Record<ColorVariant, string> = {
  accent:  'bg-[var(--accent-dim)] text-[var(--accent)]',
  green:   'bg-[var(--green-dim)] text-[var(--green)]',
  red:     'bg-[var(--red-dim)] text-[var(--red)]',
  blue:    'bg-[var(--blue-dim)] text-[var(--blue)]',
  orange:  'bg-[var(--orange-dim)] text-[var(--orange)]',
  purple:  'bg-[var(--purple-dim)] text-[var(--purple)]',
};

const changeCls: Record<'up' | 'down', string> = {
  up:   'bg-[var(--green-dim)] text-[var(--green)]',
  down: 'bg-[var(--red-dim)] text-[var(--red)]',
};

export function KpiCard({ label, value, icon, variant = 'accent', change, changeDir = 'up' }: KpiCardProps) {
  return (
    <div className="kpi-card">
      <div className={clsx('kpi-icon', iconBg[variant])}>
        {icon}
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
      {change && (
        <div className={clsx('inline-flex items-center gap-1 text-[10px] mt-2 px-2 py-0.5 rounded-full', changeCls[changeDir])}>
          {changeDir === 'up' ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  );
}
