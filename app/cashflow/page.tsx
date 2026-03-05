'use client';

import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { CashFlowChart } from '@/components/charts/CashFlowChart';
import { Wallet, Truck, TrendingUp } from 'lucide-react';

export default function CashflowPage() {
  return (
    <>
      <Header title="Cash Flow" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Cash Flow Tracker</div>
        <div className="section-sub">Net position based on client receipts vs vendor payments</div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <KpiCard label="Total Cash Inflow"  value="$842,500"  icon={<Wallet size={16} />}     variant="green" />
          <KpiCard label="Total Cash Outflow" value="$614,300"  icon={<Truck size={16} />}       variant="red" />
          <KpiCard label="Net Cash Position"  value="+$228,200" icon={<TrendingUp size={16} />}  variant="accent" />
        </div>

        <div className="card mb-4">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">Monthly Inflow vs Outflow</div>
          <div className="h-60"><CashFlowChart /></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <div className="font-syne font-semibold text-sm text-text1 mb-4">Outstanding Receivables</div>
            {[
              { name: 'Al Farhan Trading', amount: '$92,750' },
              { name: 'Pacific Rim Traders', amount: '$155,000' },
            ].map((r) => (
              <div key={r.name} className="flex justify-between py-2.5 border-b border-border last:border-b-0">
                <span className="text-text2 text-xs">{r.name}</span>
                <span className="text-crimson text-xs font-semibold">{r.amount}</span>
              </div>
            ))}
            <div className="flex justify-between py-2.5 mt-1 border-t border-border2">
              <span className="text-text1 font-semibold text-xs">Total</span>
              <span className="text-crimson font-semibold text-sm font-syne">$247,750</span>
            </div>
          </div>

          <div className="card">
            <div className="font-syne font-semibold text-sm text-text1 mb-4">Outstanding Payables (Vendors)</div>
            {[
              { name: 'Shenzhen ElecCo', amount: '$16,500' },
              { name: 'Ningbo Machinery', amount: '$62,000' },
            ].map((p) => (
              <div key={p.name} className="flex justify-between py-2.5 border-b border-border last:border-b-0">
                <span className="text-text2 text-xs">{p.name}</span>
                <span className="text-tangerine text-xs font-semibold">{p.amount}</span>
              </div>
            ))}
            <div className="flex justify-between py-2.5 mt-1 border-t border-border2">
              <span className="text-text1 font-semibold text-xs">Total</span>
              <span className="text-tangerine font-semibold text-sm font-syne">$78,500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
