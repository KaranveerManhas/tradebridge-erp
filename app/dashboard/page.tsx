'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { NewQuoteModal, QuoteDetailModal } from '@/components/modals/QuoteModals';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { ProductionChart } from '@/components/charts/ProductionChart';
import { quotes, auditEntries } from '@/lib/data';
import { Wallet, Package, TrendingUp, Tag } from 'lucide-react';

export default function DashboardPage() {
  const [showNew, setShowNew] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  return (
    <>
      <Header
        title="Dashboard"
        action={<button onClick={() => setShowNew(true)} className="btn btn-primary btn-sm">+ New Quote</button>}
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Overview</div>
        <div className="section-sub">Last 30 days performance — Nov 2024</div>

        {/* Primary KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <KpiCard label="Total Revenue"   value="$842.5K" icon={<Wallet size={16} />}   variant="accent"  change="14.2%" changeDir="up" />
          <KpiCard label="Total Cost"      value="$614.3K" icon={<Package size={16} />}  variant="red"     change="11.8%" changeDir="up" />
          <KpiCard label="Gross Profit"    value="$228.2K" icon={<TrendingUp size={16} />} variant="green" change="21.3%" changeDir="up" />
          <KpiCard label="Avg Margin"      value="27.1%"   icon={<Tag size={16} />}       variant="blue"   change="1.6pp" changeDir="up" />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <KpiCard label="Pending Quotes"          value="5"        icon={<Tag size={16} />}     variant="accent" />
          <KpiCard label="Active Orders"           value="23"       icon={<Package size={16} />} variant="orange" />
          <KpiCard label="Outstanding Receivables" value="$247.8K"  icon={<Wallet size={16} />}  variant="purple" />
          <KpiCard label="Vendor Payables"         value="$100.5K"  icon={<TrendingUp size={16} />} variant="red" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-syne font-semibold text-sm text-text1">Revenue vs Cost Trend</div>
                <div className="text-[11px] text-text3">Last 6 months</div>
              </div>
              <select className="bg-surface2 border border-border2 text-text2 px-2 py-1 rounded text-[11px] focus:outline-none focus:border-accent">
                <option>6 Months</option><option>3 Months</option><option>12 Months</option>
              </select>
            </div>
            <div className="h-48"><RevenueChart /></div>
          </div>
          <div className="card">
            <div className="mb-4">
              <div className="font-syne font-semibold text-sm text-text1">Production Status</div>
              <div className="text-[11px] text-text3">Active orders by stage</div>
            </div>
            <div className="h-48"><ProductionChart /></div>
          </div>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="font-syne font-semibold text-sm text-text1">Recent Quotes</div>
              <a href="/quotes" className="btn btn-ghost btn-sm">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full data-table">
                <thead><tr><th>Quote</th><th>Client</th><th>Amount</th><th>Status</th></tr></thead>
                <tbody>
                  {quotes.slice(0, 4).map((q) => (
                    <tr key={q.id} onClick={() => setSelectedQuote(q.id)} className="cursor-pointer">
                      <td className="text-accent font-medium">{q.id}</td>
                      <td>{q.client}</td>
                      <td>{q.amount}</td>
                      <td><StatusBadge status={q.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="font-syne font-semibold text-sm text-text1">Audit Activity</div>
              <a href="/audit" className="btn btn-ghost btn-sm">View All</a>
            </div>
            {auditEntries.slice(0, 5).map((a, i) => (
              <div key={i} className="flex gap-3.5 py-3 border-b border-border last:border-b-0">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: a.color }} />
                <div>
                  <div className="text-xs text-text1">{a.action}</div>
                  <div className="text-[11px] text-text3 mt-0.5">{a.detail}</div>
                  <div className="text-[10px] text-text3 mt-0.5">{a.user} · {a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewQuoteModal open={showNew} onClose={() => setShowNew(false)} />
      <QuoteDetailModal quoteId={selectedQuote} onClose={() => setSelectedQuote(null)} />
    </>
  );
}
