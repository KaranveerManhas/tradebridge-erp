'use client';

import { useRole, roleConfig } from '@/lib/role-context';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  action?: React.ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const { role } = useRole();
  const cfg = roleConfig[role];

  return (
    <header className="h-[60px] bg-surface border-b border-border flex items-center px-6 gap-4 flex-shrink-0">
      <h1 className="font-syne font-bold text-base flex-1 text-text1">{title}</h1>
      <div className="flex items-center gap-2.5">
        {action}
        <div className="relative">
          <Bell size={18} className="text-text3 hover:text-text1 cursor-pointer transition-colors" />
          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-crimson rounded-full border-2 border-surface" />
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold border"
          style={{ background: `${cfg.accentColor}20`, borderColor: cfg.accentColor, color: cfg.accentColor }}
        >
          {cfg.avatar}
        </div>
      </div>
    </header>
  );
}
