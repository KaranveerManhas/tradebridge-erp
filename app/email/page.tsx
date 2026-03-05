import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { emailLog } from '@/lib/data';

export default function EmailPage() {
  return (
    <>
      <Header title="Email Log" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Email Log</div>
        <div className="section-sub">All system-generated emails — no in-app notifications</div>
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>To</th><th>Subject</th><th>Event Type</th><th>Sent</th><th>Status</th></tr>
              </thead>
              <tbody>
                {emailLog.map((e, i) => (
                  <tr key={i}>
                    <td className="text-text2">{e.to}</td>
                    <td className="text-text1">{e.subject}</td>
                    <td><span className="badge badge-blue">{e.event}</span></td>
                    <td className="text-text3">{e.sent}</td>
                    <td><StatusBadge status={e.status} /></td>
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
