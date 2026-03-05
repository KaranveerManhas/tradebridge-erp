import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { auditEntries } from '@/lib/data';
import { FileText, Package, CreditCard } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <>
      <Header title="Client Overview" action={<button className="btn btn-primary btn-sm">+ Request Quote</button>} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Welcome, Al Farhan Trading</div>
        <div className="section-sub">Track your orders, quotes, and invoices</div>
        <div className="grid grid-cols-3 gap-4 mb-5">
          <KpiCard label="Active Quotes"      value="2"        icon={<FileText size={16} />}   variant="accent" />
          <KpiCard label="Orders in Production" value="3"      icon={<Package size={16} />}    variant="blue" />
          <KpiCard label="Outstanding Payment" value="$92,750" icon={<CreditCard size={16} />} variant="orange" />
        </div>
        <div className="card">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">Recent Activity</div>
          {auditEntries.slice(0, 4).map((a, i) => (
            <div key={i} className="flex gap-3 py-3 border-b border-border last:border-b-0">
              <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: a.color }} />
              <div>
                <div className="text-xs text-text1">{a.action}</div>
                <div className="text-[10px] text-text3 mt-0.5">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
