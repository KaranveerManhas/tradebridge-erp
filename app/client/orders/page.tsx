import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { orders } from '@/lib/data';

export default function ClientOrdersPage() {
  const myOrders = orders.filter((o) => o.client === 'Al Farhan Trading');
  return (
    <>
      <Header title="My Orders" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">My Orders</div>
        <div className="section-sub">Track production and dispatch status in real-time</div>
        <div className="card">
          {myOrders.map((o) => (
            <div key={o.id} className="py-4 border-b border-border last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-accent font-semibold text-sm">{o.id}</div>
                  <div className="text-text1 mt-1">{o.product}</div>
                  <div className="text-text3 text-xs mt-0.5">Value: {o.value}</div>
                </div>
                <StatusBadge status={o.status} />
              </div>
              <div className="mt-3">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] text-text3">Progress</span>
                  <span className="text-[10px] text-text2">{o.progress}%</span>
                </div>
                <ProgressBar value={o.progress} color="var(--blue)" />
              </div>
              <div className="flex gap-2 mt-3">
                <button className="btn btn-ghost btn-sm">Request Modification</button>
                <button className="btn btn-ghost btn-sm">Track Dispatch</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
