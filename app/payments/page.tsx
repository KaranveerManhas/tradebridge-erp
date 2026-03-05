'use client';

import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { payments } from '@/lib/data';
import { Wallet, CreditCard, TrendingUp } from 'lucide-react';

export default function PaymentsPage() {
  const handleConfirm = (ref: string) => {
    if (confirm(`Confirm payment ${ref} as received? This action will be logged in the audit trail.`)) {
      alert('Payment confirmed. Order moved to Production. Audit log created.');
    }
  };

  return (
    <>
      <Header title="Payment Management" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Payment Management</div>
        <div className="section-sub">Offline payment verification — all transactions confirmed manually</div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <KpiCard label="Confirmed This Month"   value="$98,400"   icon={<Wallet size={16} />}     variant="green" />
          <KpiCard label="Pending Verification"   value="$155,000"  icon={<CreditCard size={16} />} variant="orange" />
          <KpiCard label="Total Outstanding"      value="$247,750"  icon={<TrendingUp size={16} />} variant="blue" />
        </div>

        <div className="card">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">Payment Records</div>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>Reference</th><th>Client</th><th>Quote</th><th>Amount</th><th>Bank</th><th>Date</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.ref}>
                    <td className="text-accent">{p.ref}</td>
                    <td>{p.client}</td>
                    <td>{p.quote}</td>
                    <td className="text-text1">{p.amount}</td>
                    <td>{p.bank}</td>
                    <td>{p.date}</td>
                    <td><StatusBadge status={p.status} /></td>
                    <td>
                      {p.status === 'Pending Verification' ? (
                        <button onClick={() => handleConfirm(p.ref)} className="btn btn-success btn-sm">✓ Confirm</button>
                      ) : (
                        <span className="text-text3 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
