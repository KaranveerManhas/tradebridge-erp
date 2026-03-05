import { Header } from '@/components/layout/Header';

export default function VendorInvoicesPage() {
  return (
    <>
      <Header title="Final Invoices" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Final Invoices</div>
        <div className="section-sub">Generated per dispatch batch</div>
        <div className="card">
          <table className="w-full data-table">
            <thead><tr><th>Invoice</th><th>Order</th><th>Dispatch Batch</th><th>Qty</th><th>Amount</th><th>Date</th><th>Download</th></tr></thead>
            <tbody>
              <tr>
                <td className="text-accent">FI-2024-018</td>
                <td>ORD-2024-031</td>
                <td>Batch 1</td>
                <td>1,500u</td>
                <td>$11,550</td>
                <td>2024-11-08</td>
                <td><button className="btn btn-ghost btn-sm">PDF</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
