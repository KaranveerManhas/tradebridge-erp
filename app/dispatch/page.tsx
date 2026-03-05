import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Truck, Package, Box, FileText } from 'lucide-react';

const dispatches = [
  { order: 'ORD-2024-030', product: 'Polyester Fabric 300gsm', batch: '2 of 3', qty: '800m', docs: true, date: '2024-11-14', status: 'Partially Dispatched' },
  { order: 'ORD-2024-028', product: 'SS Compression Fittings', batch: '1 of 1', qty: '10,000u', docs: true, date: '2024-11-10', status: 'Completed' },
  { order: 'ORD-2024-025', product: 'LED Controllers (Type A)', batch: '3 of 3', qty: '5,000u', docs: true, date: '2024-11-02', status: 'Completed' },
];

export default function DispatchPage() {
  return (
    <>
      <Header title="Dispatch Management" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Dispatch Management</div>
        <div className="section-sub">Track partial and full shipments across all orders</div>

        <div className="grid grid-cols-4 gap-4 mb-5">
          <KpiCard label="Dispatched This Month" value="4"  icon={<Truck size={16} />}    variant="green" />
          <KpiCard label="Partial Dispatches"    value="2"  icon={<Package size={16} />}  variant="orange" />
          <KpiCard label="Awaiting Dispatch"     value="17" icon={<Package size={16} />}  variant="blue" />
          <KpiCard label="Final Invoices Issued" value="8"  icon={<FileText size={16} />} variant="accent" />
        </div>

        <div className="card">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">Dispatch Log</div>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>Order</th><th>Product</th><th>Batch</th><th>Qty Dispatched</th><th>Documents</th><th>Date</th><th>Status</th></tr>
              </thead>
              <tbody>
                {dispatches.map((d) => (
                  <tr key={d.order + d.batch}>
                    <td className="text-accent">{d.order}</td>
                    <td>{d.product}</td>
                    <td>{d.batch}</td>
                    <td>{d.qty}</td>
                    <td>
                      {d.docs
                        ? <span style={{ color: 'var(--green)' }}>✓ Uploaded</span>
                        : <span className="text-text3">Pending</span>}
                    </td>
                    <td>{d.date}</td>
                    <td><StatusBadge status={d.status as any} /></td>
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
