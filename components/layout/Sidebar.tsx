'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole, roleConfig } from '@/lib/role-context';
import { Role } from '@/types';
import clsx from 'clsx';
import {
  LayoutGrid, TrendingUp, Wallet, FileText, Package, CreditCard,
  Truck, Users, UserCircle, Tag, ShieldCheck, Mail,
} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: string;
}

interface NavSection {
  section: string;
  items: NavItem[];
}

const adminNav: NavSection[] = [
  { section: 'Overview', items: [
    { icon: <LayoutGrid size={14} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <TrendingUp size={14} />, label: 'P&L Report', href: '/pnl' },
    { icon: <Wallet size={14} />, label: 'Cash Flow', href: '/cashflow' },
  ]},
  { section: 'Operations', items: [
    { icon: <FileText size={14} />, label: 'Quotes', href: '/quotes', badge: '5' },
    { icon: <Package size={14} />, label: 'Orders', href: '/orders' },
    { icon: <CreditCard size={14} />, label: 'Payments', href: '/payments', badge: '1' },
    { icon: <Truck size={14} />, label: 'Dispatch', href: '/dispatch' },
  ]},
  { section: 'Master Data', items: [
    { icon: <Users size={14} />, label: 'Vendors', href: '/vendors' },
    { icon: <UserCircle size={14} />, label: 'Clients', href: '/clients' },
    { icon: <Tag size={14} />, label: 'Products', href: '/products' },
  ]},
  { section: 'System', items: [
    { icon: <ShieldCheck size={14} />, label: 'Audit Trail', href: '/audit' },
    { icon: <Mail size={14} />, label: 'Email Log', href: '/email' },
  ]},
];

const staffNav: NavSection[] = [
  { section: 'Operations', items: [
    { icon: <FileText size={14} />, label: 'Quotes', href: '/quotes', badge: '5' },
    { icon: <Package size={14} />, label: 'Orders', href: '/orders' },
    { icon: <CreditCard size={14} />, label: 'Payments', href: '/payments', badge: '1' },
    { icon: <Truck size={14} />, label: 'Dispatch', href: '/dispatch' },
  ]},
  { section: 'Data', items: [
    { icon: <Users size={14} />, label: 'Vendors', href: '/vendors' },
    { icon: <UserCircle size={14} />, label: 'Clients', href: '/clients' },
    { icon: <Tag size={14} />, label: 'Products', href: '/products' },
  ]},
  { section: 'System', items: [
    { icon: <Mail size={14} />, label: 'Email Log', href: '/email' },
  ]},
];

const vendorNav: NavSection[] = [
  { section: 'My Portal', items: [
    { icon: <LayoutGrid size={14} />, label: 'Overview', href: '/vendor/dashboard' },
    { icon: <Tag size={14} />, label: 'My Products', href: '/vendor/products' },
    { icon: <Package size={14} />, label: 'Production Orders', href: '/vendor/orders' },
    { icon: <Truck size={14} />, label: 'Dispatch', href: '/vendor/dispatch' },
    { icon: <FileText size={14} />, label: 'Final Invoices', href: '/vendor/invoices' },
  ]},
];

const clientNav: NavSection[] = [
  { section: 'My Portal', items: [
    { icon: <LayoutGrid size={14} />, label: 'Overview', href: '/client/dashboard' },
    { icon: <FileText size={14} />, label: 'My Quotes', href: '/client/quotes' },
    { icon: <Package size={14} />, label: 'My Orders', href: '/client/orders' },
    { icon: <CreditCard size={14} />, label: 'Invoices', href: '/client/invoices' },
  ]},
];

const navByRole: Record<Role, NavSection[]> = {
  admin: adminNav,
  staff: staffNav,
  vendor: vendorNav,
  client: clientNav,
};

export function Sidebar() {
  const { role, setRole } = useRole();
  const pathname = usePathname();
  const nav = navByRole[role];

  return (
    <aside className="w-60 bg-surface border-r border-border flex flex-col flex-shrink-0 overflow-y-auto">
      {/* Brand */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center text-bg font-syne font-extrabold text-sm">TB</div>
          <div>
            <div className="font-syne font-bold text-sm text-text1">TradeBridge</div>
            <div className="text-[10px] text-text3">ERP Platform</div>
          </div>
        </div>
      </div>

      {/* Role switcher */}
      <div className="px-4 py-3 border-b border-border">
        <div className="text-[9px] text-text3 uppercase tracking-widest mb-2">Active Role</div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="w-full bg-surface2 border border-border2 text-text1 px-2.5 py-1.5 rounded-md font-mono text-xs cursor-pointer focus:outline-none focus:border-accent"
        >
          <option value="admin">👤 Admin</option>
          <option value="staff">👤 Admin Staff</option>
          <option value="vendor">🏭 Vendor</option>
          <option value="client">🏢 Client</option>
        </select>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {nav.map((section) => (
          <div key={section.section} className="px-3 mb-1">
            <div className="text-[9px] text-text3 uppercase tracking-widest px-2 py-2">{section.section}</div>
            {section.items.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <div className={clsx('nav-item', active && 'active')}>
                    <span style={{ opacity: active ? 1 : 0.7 }}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-accent text-bg rounded-full px-1.5 py-px text-[9px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
