'use client';

import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { quotes } from '@/lib/data';

export default function ClientQuotesPage() {
  const myQuotes = quotes.filter((q) => q.client === 'Al Farhan Trading');
  return (
    <>
      <Header title="My Quotes" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">My Quotes</div>
        <div className="section-sub">View, approve, or request modifications on your quotes</div>
        <div className="bg-[var(--blue-dim)] border border-cobalt/20 rounded-lg px-4 py-2.5 mb-4 text-xs text-cobalt">
          ℹ️ All communication is handled via email. You will be notified of changes at your registered email.
        </div>
        <div className="card">
          <table className="w-full data-table">
            <thead><tr><th>Quote</th><th>Items</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {myQuotes.map((q) => (
                <tr key={q.id}>
                  <td className="text-accent">{q.id}</td>
                  <td>{q.items} items</td>
                  <td className="text-text1">{q.amount}</td>
                  <td>{q.date}</td>
                  <td><StatusBadge status={q.status} /></td>
                  <td className="flex gap-1.5">
                    {q.status === 'Negotiation' ? (
                      <>
                        <button className="btn btn-success btn-sm">Approve</button>
                        <button className="btn btn-ghost btn-sm">Comment</button>
                      </>
                    ) : (
                      <button className="btn btn-ghost btn-sm">View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
