'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Modal } from '@/components/ui/Modal';
import { StatusBadge } from '@/components/ui/StatusBadge';

function UpdateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Update Production Progress">
      <div className="mb-3">
        <div className="form-label">Order: ORD-2024-031</div>
        <div className="text-text2 text-xs">LED Controllers Type A — 5,000 units</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div><label className="form-label">Qty Produced</label><input className="form-control" type="number" defaultValue={3000} /></div>
        <div><label className="form-label">Qty Dispatched</label><input className="form-control" type="number" defaultValue={1500} /></div>
      </div>
      <div className="mb-4">
        <label className="form-label">Upload Dispatch Documents</label>
        <input className="form-control" type="file" />
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={onClose} className="btn btn-ghost">Cancel</button>
        <button onClick={onClose} className="btn btn-primary">Save Update</button>
      </div>
    </Modal>
  );
}

export default function VendorOrdersPage() {
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <Header title="Production Orders" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Production Orders</div>
        <div className="section-sub">Orders are visible only after payment confirmation</div>
        <div className="card">
          <table className="w-full data-table">
            <thead><tr><th>Order ID</th><th>Product</th><th>Qty Ordered</th><th>Produced</th><th>Status</th><th>Update</th></tr></thead>
            <tbody>
              <tr>
                <td className="text-accent">ORD-2024-031</td>
                <td>LED Controllers Type A</td>
                <td>5,000</td><td>3,000</td>
                <td><StatusBadge status="In Production" /></td>
                <td><button onClick={() => setShowUpdate(true)} className="btn btn-primary btn-sm">Update Progress</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <UpdateModal open={showUpdate} onClose={() => setShowUpdate(false)} />
    </>
  );
}
