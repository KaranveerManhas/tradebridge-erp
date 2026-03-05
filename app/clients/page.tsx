import { Header } from '@/components/layout/Header';
import { clients } from '@/lib/data';

export default function ClientsPage() {
  return (
    <>
      <Header title="Client Profitability" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Client Profitability</div>
        <div className="section-sub">Revenue, cost, and margin analysis per client</div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>Client</th><th>Country</th><th>Orders</th><th>Revenue</th><th>Cost</th><th>Gross Profit</th><th>Margin</th><th>Outstanding</th></tr>
              </thead>
              <tbody>
                {clients.map((c) => (
                  <tr key={c.name}>
                    <td className="text-text1 font-medium">{c.name}</td>
                    <td>{c.country}</td>
                    <td>{c.orders}</td>
                    <td>{c.revenue}</td>
                    <td className="text-text2">{c.cost}</td>
                    <td style={{ color: 'var(--green)' }}>{c.profit}</td>
                    <td><span className="text-accent font-semibold">{c.margin}</span></td>
                    <td style={{ color: c.outstanding !== '$0' ? 'var(--red)' : 'var(--text3)' }}>{c.outstanding}</td>
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
