'use client';

import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { PnLChart } from '@/components/charts/PnLChart';
import { clients, vendors } from '@/lib/data';
import { Wallet, Package, TrendingUp } from 'lucide-react';

export default function PnLPage() {
  return (
    <>
      <Header title="P&L Report" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Profit & Loss Report</div>
        <div className="section-sub">Simplified financial overview — no double-entry accounting</div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <KpiCard label="Total Revenue (Invoiced)" value="$842,500" icon={<Wallet size={16} />}     variant="accent" />
          <KpiCard label="Total Vendor Cost"        value="$614,300" icon={<Package size={16} />}    variant="red" />
          <KpiCard label="Gross Profit"             value="$228,200" icon={<TrendingUp size={16} />} variant="green" />
        </div>

        <div className="card mb-4">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">Profit Trend</div>
          <div className="h-60"><PnLChart /></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card">
            <div className="font-syne font-semibold text-sm text-text1 mb-4">Revenue by Client</div>
            {clients.map((c) => (
              <div key={c.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-b-0">
                <div>
                  <div className="text-xs text-text1">{c.name}</div>
                  <div className="text-[10px] text-text3">{c.country}</div>
                </div>
                <div className="text-right">
                  <div className="text-accent text-sm font-semibold font-syne">{c.revenue}</div>
                  <div className="text-[10px] text-text3">Margin: {c.margin}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="font-syne font-semibold text-sm text-text1 mb-4">Cost by Vendor</div>
            {vendors.filter((v) => v.payable !== '$0').map((v) => (
              <div key={v.id} className="flex items-center justify-between py-2.5 border-b border-border last:border-b-0">
                <div>
                  <div className="text-xs text-text1">{v.name}</div>
                  <div className="text-[10px] text-text3">{v.category}</div>
                </div>
                <div className="text-right">
                  <div className="text-crimson text-sm font-semibold font-syne">{v.payable}</div>
                  <div className="text-[10px]" style={{ color: v.paid === v.payable ? 'var(--green)' : 'var(--orange)' }}>
                    Paid: {v.paid}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
