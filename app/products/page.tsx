'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Modal } from '@/components/ui/Modal';
import { products, vendors } from '@/lib/data';
import { Product } from '@/types';

function PriceModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  if (!product) return null;
  return (
    <Modal open={!!product} onClose={onClose} title={`Edit Price — ${product.sku}`}>
      <div className="bg-[var(--red-dim)] border border-crimson/20 rounded-md p-2.5 mb-4 text-xs text-crimson">
        ⚠️ Selling price cannot go below vendor minimum price. All price changes are audit-logged.
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="form-label">Vendor Min Price (Floor)</label>
          <input className="form-control opacity-60" defaultValue={product.minPrice} disabled />
        </div>
        <div>
          <label className="form-label">Max Selling Price</label>
          <input className="form-control" defaultValue={product.maxPrice} />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Margin %</label>
        <input className="form-control" defaultValue="27.6%" placeholder="Auto-calculated" />
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={onClose} className="btn btn-ghost">Cancel</button>
        <button onClick={onClose} className="btn btn-primary">Save & Log Change</button>
      </div>
    </Modal>
  );
}

export default function ProductsPage() {
  const [editing, setEditing] = useState<Product | null>(null);

  return (
    <>
      <Header title="Product Catalog" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">Product Catalog</div>
        <div className="section-sub">All vendor products with pricing engine</div>

        <div className="flex gap-2.5 mb-4">
          <input type="text" placeholder="Search products, SKUs..." className="form-control flex-1" />
          <select className="form-control w-auto">
            <option>All Vendors</option>
            {vendors.map((v) => <option key={v.id}>{v.name}</option>)}
          </select>
          <button className="btn btn-ghost">Export</button>
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr><th>SKU</th><th>Product</th><th>Vendor</th><th>Min Price</th><th>Max Sell Price</th><th>MOQ</th><th>Currency</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.sku}>
                    <td className="text-text3 text-[11px]">{p.sku}</td>
                    <td className="text-text1 font-medium">{p.name}</td>
                    <td>{p.vendor}</td>
                    <td style={{ color: 'var(--red)' }}>{p.minPrice}</td>
                    <td style={{ color: 'var(--green)' }}>{p.maxPrice}</td>
                    <td>{p.moq.toLocaleString()}</td>
                    <td>{p.currency}</td>
                    <td><button onClick={() => setEditing(p)} className="btn btn-ghost btn-sm">Edit Price</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PriceModal product={editing} onClose={() => setEditing(null)} />
    </>
  );
}
