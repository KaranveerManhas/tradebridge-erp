import { Header } from '@/components/layout/Header';

export default function VendorDispatchPage() {
  return (
    <>
      <Header title="Dispatch Updates" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Dispatch Updates</div>
        <div className="section-sub">Update dispatch quantities and upload shipping documents</div>
        <div className="card">
          <div className="font-syne font-semibold text-sm text-text1 mb-5">ORD-2024-031 — Dispatch Schedule</div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
            {[
              { num: 1, title: 'Batch 1 — 1,500 units', desc: 'Dispatched Nov 8 · BL#: SHZ-2024-8812 · Docs uploaded', status: 'done' },
              { num: 2, title: 'Batch 2 — 1,500 units (In Transit)', desc: 'ETA Nov 22 · Upload dispatch documents', status: 'active' },
              { num: 3, title: 'Batch 3 — 2,000 units (Pending)', desc: 'Production in progress', status: 'pending' },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 pb-5">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 z-10 border-2 ${
                  item.status === 'done' ? 'bg-[var(--green-dim)] border-emerald text-emerald' :
                  item.status === 'active' ? 'bg-[var(--accent-dim)] border-accent text-accent' :
                  'bg-surface2 border-border2 text-text3'
                }`}>
                  {item.status === 'done' ? '✓' : item.num}
                </div>
                <div className="pt-0.5">
                  <div className="text-xs text-text1">{item.title}</div>
                  <div className="text-[11px] text-text3 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-2">+ Log New Dispatch</button>
        </div>
      </div>
    </>
  );
}
