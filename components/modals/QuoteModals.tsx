'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { quotes, clients, products } from '@/lib/data';
import { StatusBadge } from '@/components/ui/StatusBadge';

interface NewQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function NewQuoteModal({ open, onClose }: NewQuoteModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Create New Quote">
      <div className="space-y-3">
        <div>
          <label className="form-label">Client</label>
          <select className="form-control">
            <option>Select client...</option>
            {clients.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="form-label">Currency</label>
            <select className="form-control"><option>USD</option><option>EUR</option><option>GBP</option></select>
          </div>
          <div>
            <label className="form-label">Exchange Rate Snapshot</label>
            <input className="form-control" defaultValue="1.00" type="number" />
          </div>
        </div>
        <div>
          <label className="form-label">Bank Account</label>
          <select className="form-control">
            <option>HSBC — USD Account (...4421)</option>
            <option>Deutsche Bank — EUR Account (...8812)</option>
          </select>
        </div>
        <div>
          <label className="form-label">Add Products</label>
          <select className="form-control">
            <option>Select product to add...</option>
            {products.map((p) => <option key={p.sku}>{p.name} ({p.sku})</option>)}
          </select>
        </div>
        <div>
          <label className="form-label">Notes / Terms</label>
          <textarea className="form-control" rows={3} placeholder="Payment terms, delivery notes..." />
        </div>
        <div className="flex gap-2 justify-end pt-2">
          <button onClick={onClose} className="btn btn-ghost">Cancel</button>
          <button onClick={onClose} className="btn btn-ghost">Save Draft</button>
          <button onClick={() => { onClose(); alert('Quote submitted for admin approval. Email sent.'); }} className="btn btn-primary">
            Submit for Approval
          </button>
        </div>
      </div>
    </Modal>
  );
}

interface QuoteDetailModalProps {
  quoteId: string | null;
  onClose: () => void;
}

const STEPS = [
  'Draft', 'Pending Admin Approval', 'Pending Client Approval',
  'Negotiation', 'Approved', 'Payment Pending', 'Completed',
];

export function QuoteDetailModal({ quoteId, onClose }: QuoteDetailModalProps) {
  const q = quotes.find((x) => x.id === quoteId);
  if (!q) return null;

  const si = STEPS.indexOf(q.status);

  return (
    <Modal open={!!quoteId} onClose={onClose} title={q.id} width="max-w-2xl">
      <p className="text-text3 text-xs mb-4">{q.client} · {q.date}</p>

      {/* Flow steps */}
      <div className="flex items-center overflow-x-auto pb-2 mb-5 gap-0">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-shrink-0">
            <div className={`px-3 py-1.5 text-[10px] border ${
              i < si ? 'bg-[var(--green-dim)] text-[var(--green)] border-green/20' :
              i === si ? 'bg-[var(--accent-dim)] text-accent border-accent/30' :
              'bg-surface2 text-text3 border-border'
            } ${i === 0 ? 'rounded-l-md' : ''} ${i === STEPS.length - 1 ? 'rounded-r-md' : ''}`}>
              {s}
            </div>
            {i < STEPS.length - 1 && <span className="text-text3 text-xs px-0.5">›</span>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="form-label">Total Amount</div>
          <div className="font-syne font-bold text-2xl text-accent">{q.amount}</div>
        </div>
        <div>
          <div className="form-label">Status</div>
          <div className="mt-1"><StatusBadge status={q.status} /></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="form-label">Products ({q.items} items)</div>
        <table className="w-full data-table">
          <thead><tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
          <tbody>
            <tr><td>LED Controllers Type A</td><td>5,000</td><td>$4.85</td><td>$24,250</td></tr>
            <tr><td>Power Supply 12V</td><td>200</td><td>$9.80</td><td>$1,960</td></tr>
            <tr>
              <td colSpan={2} />
              <td className="text-right font-semibold text-text1">Grand Total</td>
              <td className="text-accent font-semibold">{q.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <div className="form-label">Negotiation Comments</div>
        <div className="bg-surface2 rounded-md p-3 text-text3 text-xs">
          Client requested 5% discount on LED Controllers. Admin reviewing.
        </div>
      </div>

      <div className="flex gap-2 justify-end flex-wrap">
        <button onClick={onClose} className="btn btn-ghost">Close</button>
        {q.status === 'Pending Admin Approval' && (
          <button onClick={onClose} className="btn btn-success">✓ Approve</button>
        )}
        <button onClick={onClose} className="btn btn-primary">Generate Proforma</button>
      </div>
    </Modal>
  );
}
