import { Header } from '@/components/layout/Header';
import { auditEntries } from '@/lib/data';

export default function AuditPage() {
  const ipMap = auditEntries.map((_, i) => `192.168.${i + 1}.${10 + i}`);
  return (
    <>
      <Header title="Audit Trail" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Audit Trail</div>
        <div className="section-sub">Immutable log of all system actions — records cannot be deleted</div>

        <div className="bg-[var(--red-dim)] border border-crimson/20 rounded-lg px-4 py-2.5 mb-4 text-xs text-crimson">
          🔒 Audit records are permanent and cannot be edited or deleted per system policy.
        </div>

        <div className="flex gap-2.5 mb-4 flex-wrap">
          <input type="text" placeholder="Search actions, users..." className="form-control flex-1 min-w-48" />
          <select className="form-control w-auto">
            <option>All Actions</option>
            <option>Price Changes</option>
            <option>Payment Confirmation</option>
            <option>Quote Edits</option>
            <option>Invoice Generation</option>
          </select>
          <input type="date" className="form-control w-auto" />
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>Timestamp</th><th>User</th><th>Action</th><th>Details</th><th>IP Address</th></tr>
              </thead>
              <tbody>
                {auditEntries.map((a, i) => (
                  <tr key={i}>
                    <td className="text-text3 whitespace-nowrap">{a.time}</td>
                    <td><span className="badge badge-gray">{a.user}</span></td>
                    <td><span style={{ color: a.color }}>{a.action}</span></td>
                    <td className="text-text2">{a.detail}</td>
                    <td className="text-text3">{ipMap[i]}</td>
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
