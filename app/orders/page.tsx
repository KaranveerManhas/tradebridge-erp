'use client';

import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { orders } from '@/lib/data';

export default function OrdersPage() {
  return (
    <>
      <Header title="Production Orders" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Production Orders</div>
        <div className="section-sub">Track production and dispatch across all active orders</div>

        <div className="flex gap-2.5 mb-4">
          <input type="text" placeholder="Search orders..." className="form-control flex-1 min-w-48" />
          <select className="form-control w-auto">
            <option value="">All Status</option>
            <option>Production Pending</option>
            <option>In Production</option>
            <option>Partially Dispatched</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          {orders.map((o) => {
            const color = o.status === 'Completed' ? 'var(--green)' : o.status === 'In Production' ? 'var(--blue)' : 'var(--accent)';
            return (
              <div key={o.id} className="card p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-accent font-semibold text-sm">{o.id}</span>
                      <StatusBadge status={o.status} />
                    </div>
                    <div className="text-text1 mb-1">{o.product}</div>
                    <div className="text-text3 text-xs">Vendor: {o.vendor} · Client: {o.client} · Value: {o.value}</div>
                    <div className="mt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] text-text3">Production Progress</span>
                        <span className="text-[10px] text-text2">{o.progress}%</span>
                      </div>
                      <ProgressBar value={o.progress} color={color} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end">
                    <div className="text-[10px] text-text3">Dispatch: {o.dispatch}</div>
                    <button className="btn btn-ghost btn-sm">View Details</button>
                    {o.status !== 'Completed' && (
                      <button className="btn btn-success btn-sm">Update Status</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
