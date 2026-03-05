'use client';

import { Header } from '@/components/layout/Header';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Package, Wallet, Tag } from 'lucide-react';

export default function VendorDashboard() {
  return (
    <>
      <Header title="Vendor Overview" action={<button className="btn btn-primary btn-sm">+ Upload Product</button>} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Welcome, Shenzhen ElecCo</div>
        <div className="section-sub">Your vendor portal — production orders and dispatch management</div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <KpiCard label="Active Production Orders" value="3"       icon={<Package size={16} />} variant="accent" />
          <KpiCard label="Pending Payment"          value="$16,500" icon={<Wallet size={16} />}  variant="orange" />
          <KpiCard label="Listed Products"          value="24"      icon={<Tag size={16} />}      variant="green" />
        </div>

        <div className="card">
          <div className="font-syne font-semibold text-sm text-text1 mb-4">My Production Orders</div>
          <table className="w-full data-table">
            <thead><tr><th>Order</th><th>Product</th><th>Qty</th><th>Produced</th><th>Dispatched</th><th>Status</th></tr></thead>
            <tbody>
              <tr>
                <td className="text-accent">ORD-2024-031</td>
                <td>LED Controllers Type A</td>
                <td>5,000</td><td>3,000</td><td>0</td>
                <td><StatusBadge status="In Production" /></td>
              </tr>
              <tr>
                <td className="text-accent">ORD-2024-025</td>
                <td>Power Supply 12V</td>
                <td>1,000</td><td>1,000</td><td>1,000</td>
                <td><StatusBadge status="Completed" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
