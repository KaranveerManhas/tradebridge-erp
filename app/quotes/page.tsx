'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { NewQuoteModal, QuoteDetailModal } from '@/components/modals/QuoteModals';
import { quotes } from '@/lib/data';

export default function QuotesPage() {
  const [showNew, setShowNew] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = quotes.filter((q) => {
    const matchSearch = !search || q.id.includes(search) || q.client.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || q.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <>
      <Header
        title="Quotes & Negotiations"
        action={<button onClick={() => setShowNew(true)} className="btn btn-primary btn-sm">+ New Quote</button>}
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Quotes & Negotiations</div>
        <div className="section-sub">Manage the full quote lifecycle from draft to payment</div>

        <div className="flex gap-2.5 mb-4 flex-wrap">
          <input
            type="text"
            placeholder="Search quotes, clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control flex-1 min-w-48"
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="form-control w-auto">
            <option value="">All Statuses</option>
            <option>Draft</option>
            <option>Pending Admin Approval</option>
            <option>Negotiation</option>
            <option>Approved</option>
            <option>Payment Pending</option>
            <option>Completed</option>
          </select>
          <button onClick={() => setShowNew(true)} className="btn btn-primary">+ New Quote</button>
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>Quote ID</th><th>Client</th><th>Amount</th><th>Items</th><th>Date</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {filtered.map((q) => (
                  <tr key={q.id}>
                    <td className="text-accent font-medium">{q.id}</td>
                    <td>{q.client}</td>
                    <td className="text-text1">{q.amount}</td>
                    <td>{q.items} items</td>
                    <td>{q.date}</td>
                    <td><StatusBadge status={q.status} /></td>
                    <td>
                      <button onClick={() => setSelectedQuote(q.id)} className="btn btn-ghost btn-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <NewQuoteModal open={showNew} onClose={() => setShowNew(false)} />
      <QuoteDetailModal quoteId={selectedQuote} onClose={() => setSelectedQuote(null)} />
    </>
  );
}
