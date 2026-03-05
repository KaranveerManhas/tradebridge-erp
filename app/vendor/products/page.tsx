import { Header } from '@/components/layout/Header';
import { products } from '@/lib/data';

export default function VendorProductsPage() {
  const myProducts = products.filter((p) => p.vendor === 'Shenzhen ElecCo');
  return (
    <>
      <Header title="My Products" action={<button className="btn btn-primary btn-sm">+ Upload Product</button>} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="section-title">My Products</div>
        <div className="section-sub">Manage your listed products and minimum prices — you cannot see client selling prices</div>

        <div className="bg-[var(--accent-dim)] border border-accent/20 rounded-lg px-4 py-2.5 mb-4 text-xs text-accent">
          ℹ️ Only your minimum price and MOQ are visible. Client selling prices and margins are managed by admin.
        </div>

        <div className="card">
          <table className="w-full data-table">
            <thead><tr><th>SKU</th><th>Product Name</th><th>Min Price (Your Floor)</th><th>MOQ</th><th>Currency</th><th>Documents</th></tr></thead>
            <tbody>
              {myProducts.map((p) => (
                <tr key={p.sku}>
                  <td className="text-text3">{p.sku}</td>
                  <td className="text-text1">{p.name}</td>
                  <td className="text-accent">{p.minPrice}</td>
                  <td>{p.moq.toLocaleString()}</td>
                  <td>{p.currency}</td>
                  <td><button className="btn btn-ghost btn-sm">Upload Docs</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
