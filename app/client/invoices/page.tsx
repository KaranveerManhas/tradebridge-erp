import { Header } from '@/components/layout/Header';

export default function ClientInvoicesPage() {
  return (
    <>
      <Header title="Invoices" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">My Invoices</div>
        <div className="section-sub">Proforma and final invoices for all orders</div>
        <div className="card">
          <table className="w-full data-table">
            <thead><tr><th>Invoice</th><th>Type</th><th>Order</th><th>Amount</th><th>Date</th><th>Download</th></tr></thead>
            <tbody>
              <tr>
                <td className="text-accent">PI-2024-040</td>
                <td><span className="badge badge-blue">Proforma</span></td>
                <td>Q-2024-040</td>
                <td className="text-text1">$92,750</td>
                <td>2024-11-17</td>
                <td><button className="btn btn-ghost btn-sm">PDF</button></td>
              </tr>
              <tr>
                <td className="text-accent">FI-2024-037</td>
                <td><span className="badge badge-green">Final</span></td>
                <td>ORD-2024-025</td>
                <td className="text-text1">$38,500</td>
                <td>2024-11-02</td>
                <td><button className="btn btn-ghost btn-sm">PDF</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
