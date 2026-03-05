'use client';

import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { vendors } from '@/lib/data';

export default function VendorsPage() {
  return (
    <>
      <Header title="Vendor Management" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Vendor Management</div>
        <div className="section-sub">Manage vendor profiles, products, and payment status</div>

        <div className="flex gap-2.5 mb-4">
          <input type="text" placeholder="Search vendors..." className="form-control flex-1" />
          <select className="form-control w-auto">
            <option>All</option><option>Active</option><option>Pending Review</option>
          </select>
          <button className="btn btn-ghost">Export</button>
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>ID</th><th>Vendor</th><th>Category</th><th>Products</th><th>Total Payable</th><th>Paid</th><th>Pending</th><th>Status</th></tr>
              </thead>
              <tbody>
                {vendors.map((v) => {
                  const pay = parseFloat(v.payable.replace(/[$,]/g, ''));
                  const paid = parseFloat(v.paid.replace(/[$,]/g, ''));
                  const pending = pay - paid;
                  return (
                    <tr key={v.id}>
                      <td className="text-text3">{v.id}</td>
                      <td className="text-text1 font-medium">{v.name}</td>
                      <td>{v.category}</td>
                      <td>{v.products}</td>
                      <td>{v.payable}</td>
                      <td style={{ color: 'var(--green)' }}>{v.paid}</td>
                      <td style={{ color: pending > 0 ? 'var(--red)' : 'var(--text3)' }}>
                        {pending > 0 ? '$' + pending.toLocaleString() : '$0'}
                      </td>
                      <td><StatusBadge status={v.status} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
