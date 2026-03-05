import { Quote, Order, Vendor, Client, Payment, Product, AuditEntry } from '@/types';

export const quotes: Quote[] = [
  { id: 'Q-2024-041', client: 'Nexus Imports GmbH', amount: '$48,200', status: 'Pending Admin Approval', date: '2024-11-18', items: 3, currency: 'USD' },
  { id: 'Q-2024-040', client: 'Al Farhan Trading', amount: '$92,750', status: 'Negotiation', date: '2024-11-17', items: 7, currency: 'USD' },
  { id: 'Q-2024-039', client: 'Bright Future LLC', amount: '$31,000', status: 'Approved', date: '2024-11-15', items: 2, currency: 'EUR' },
  { id: 'Q-2024-038', client: 'Pacific Rim Traders', amount: '$155,000', status: 'Payment Pending', date: '2024-11-12', items: 12, currency: 'USD' },
  { id: 'Q-2024-037', client: 'Nexus Imports GmbH', amount: '$22,400', status: 'Completed', date: '2024-11-08', items: 4, currency: 'USD' },
  { id: 'Q-2024-036', client: 'Euro Connect BV', amount: '$67,900', status: 'Draft', date: '2024-11-06', items: 5, currency: 'EUR' },
];

export const orders: Order[] = [
  { id: 'ORD-2024-031', vendor: 'Shenzhen ElecCo', product: 'LED Controllers 5000pcs', status: 'In Production', progress: 60, client: 'Al Farhan Trading', value: '$38,500', dispatch: 'Partial' },
  { id: 'ORD-2024-030', vendor: 'Guangzhou Textiles', product: 'Polyester Fabric 2000m', status: 'Partially Dispatched', progress: 80, client: 'Euro Connect BV', value: '$21,000', dispatch: '2 of 3' },
  { id: 'ORD-2024-029', vendor: 'Ningbo Machinery', product: 'Hydraulic Pumps 50u', status: 'Production Pending', progress: 5, client: 'Pacific Rim Traders', value: '$62,000', dispatch: 'None' },
  { id: 'ORD-2024-028', vendor: 'Foshan Hardware', product: 'Stainless Fittings 10000u', status: 'Completed', progress: 100, client: 'Bright Future LLC', value: '$18,200', dispatch: 'Full' },
];

export const vendors: Vendor[] = [
  { id: 'V-001', name: 'Shenzhen ElecCo', category: 'Electronics', products: 24, status: 'Active', payable: '$38,500', paid: '$22,000', rating: 4.8 },
  { id: 'V-002', name: 'Guangzhou Textiles', category: 'Textiles', products: 18, status: 'Active', payable: '$21,000', paid: '$21,000', rating: 4.5 },
  { id: 'V-003', name: 'Ningbo Machinery', category: 'Machinery', products: 9, status: 'Active', payable: '$62,000', paid: '$0', rating: 4.2 },
  { id: 'V-004', name: 'Foshan Hardware', category: 'Hardware', products: 32, status: 'Active', payable: '$18,200', paid: '$18,200', rating: 4.7 },
  { id: 'V-005', name: 'Dongguan Plastics', category: 'Plastics', products: 15, status: 'Pending Review', payable: '$0', paid: '$0', rating: 0 },
];

export const clients: Client[] = [
  { name: 'Nexus Imports GmbH', country: 'Germany', revenue: '$318,400', cost: '$231,200', profit: '$87,200', margin: '27.4%', outstanding: '$0', orders: 12 },
  { name: 'Al Farhan Trading', country: 'UAE', revenue: '$241,000', cost: '$178,500', profit: '$62,500', margin: '25.9%', outstanding: '$92,750', orders: 8 },
  { name: 'Bright Future LLC', country: 'USA', revenue: '$142,300', cost: '$102,100', profit: '$40,200', margin: '28.2%', outstanding: '$0', orders: 6 },
  { name: 'Pacific Rim Traders', country: 'Australia', revenue: '$89,200', cost: '$67,400', profit: '$21,800', margin: '24.4%', outstanding: '$155,000', orders: 4 },
  { name: 'Euro Connect BV', country: 'Netherlands', revenue: '$51,600', cost: '$35,100', profit: '$16,500', margin: '32.0%', outstanding: '$0', orders: 3 },
];

export const payments: Payment[] = [
  { ref: 'PAY-2024-019', client: 'Pacific Rim Traders', amount: '$155,000', quote: 'Q-2024-038', status: 'Pending Verification', date: '2024-11-12', bank: 'HSBC' },
  { ref: 'PAY-2024-018', client: 'Al Farhan Trading', amount: '$45,000', quote: 'Q-2024-040', status: 'Confirmed', date: '2024-11-10', bank: 'Emirates NBD' },
  { ref: 'PAY-2024-017', client: 'Nexus Imports GmbH', amount: '$22,400', quote: 'Q-2024-037', status: 'Confirmed', date: '2024-11-06', bank: 'Deutsche Bank' },
  { ref: 'PAY-2024-016', client: 'Bright Future LLC', amount: '$31,000', quote: 'Q-2024-039', status: 'Confirmed', date: '2024-11-15', bank: 'Wells Fargo' },
];

export const products: Product[] = [
  { sku: 'SKU-EL-001', name: 'LED Controllers (Type A)', vendor: 'Shenzhen ElecCo', minPrice: '$3.80', maxPrice: '$5.20', moq: 500, currency: 'USD' },
  { sku: 'SKU-EL-002', name: 'Power Supply Units 12V', vendor: 'Shenzhen ElecCo', minPrice: '$8.50', maxPrice: '$11.00', moq: 200, currency: 'USD' },
  { sku: 'SKU-TX-001', name: 'Polyester Fabric 300gsm', vendor: 'Guangzhou Textiles', minPrice: '$4.20/m', maxPrice: '$5.80/m', moq: 500, currency: 'USD' },
  { sku: 'SKU-MC-001', name: 'Hydraulic Pump HP-200', vendor: 'Ningbo Machinery', minPrice: '$980', maxPrice: '$1,340', moq: 10, currency: 'USD' },
  { sku: 'SKU-HW-001', name: 'SS Compression Fittings 1/2"', vendor: 'Foshan Hardware', minPrice: '$1.20', maxPrice: '$1.85', moq: 1000, currency: 'USD' },
];

export const auditEntries: AuditEntry[] = [
  { action: 'Price Updated', detail: 'Q-2024-041 — LED Controllers: $4.20 → $4.85', user: 'Admin', time: '2 min ago', color: '#e8c84a' },
  { action: 'Payment Confirmed', detail: 'Q-2024-038 — $155,000 received from Pacific Rim Traders', user: 'Staff01', time: '1hr ago', color: '#3ecf8e' },
  { action: 'Quote Approved', detail: 'Q-2024-039 — Approved by client: Bright Future LLC', user: 'Client', time: '3hr ago', color: '#4b8ef0' },
  { action: 'Order Revision', detail: 'ORD-2024-030 — Qty increased from 1800m to 2000m', user: 'Client', time: '5hr ago', color: '#f07a4b' },
  { action: 'Invoice Generated', detail: 'INV-2024-028 — Final invoice for Foshan Hardware dispatch', user: 'Vendor', time: '1d ago', color: '#9b6cf0' },
  { action: 'Dispatch Updated', detail: 'ORD-2024-030 — Batch 2 of 3 dispatched, docs uploaded', user: 'Vendor', time: '1d ago', color: '#3ecf8e' },
  { action: 'New Vendor Registered', detail: 'Dongguan Plastics — Pending admin review', user: 'System', time: '2d ago', color: '#5c6478' },
];

export const emailLog = [
  { to: 'client@nexusimports.de', subject: 'Quote Q-2024-041 Requires Your Approval', event: 'Quote Approval', sent: '2 min ago', status: 'Delivered' },
  { to: 'client@alfarhan.ae', subject: 'Proforma Invoice — Q-2024-040', event: 'Proforma Sent', sent: '1hr ago', status: 'Delivered' },
  { to: 'ops@pacific-rim.au', subject: 'Payment Reminder — $155,000 Outstanding', event: 'Payment Reminder', sent: '3hr ago', status: 'Delivered' },
  { to: 'info@shenzhen-elec.cn', subject: 'Production Order ORD-2024-031 Confirmed', event: 'Order Confirmed', sent: '1d ago', status: 'Delivered' },
  { to: 'client@brightfuture.com', subject: 'Your Order Has Been Dispatched — ORD-2024-028', event: 'Dispatch Notification', sent: '2d ago', status: 'Delivered' },
];

export const chartData = {
  months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  revenue: [98000, 112000, 104000, 128000, 135000, 145000],
  cost: [72000, 81000, 76000, 93000, 97000, 105000],
  profit: [26000, 31000, 28000, 35000, 38000, 40000],
};
