export type Role = 'admin' | 'staff' | 'vendor' | 'client';

export type QuoteStatus =
  | 'Draft'
  | 'Pending Admin Approval'
  | 'Pending Client Approval'
  | 'Negotiation'
  | 'Approved'
  | 'Payment Pending'
  | 'Completed';

export type OrderStatus =
  | 'Production Pending'
  | 'In Production'
  | 'Partially Dispatched'
  | 'Completed';

export type PaymentStatus = 'Pending Verification' | 'Confirmed' | 'Rejected';
export type VendorStatus = 'Active' | 'Pending Review';
export type PayStatus = 'Unpaid' | 'Partially Paid' | 'Fully Paid';

export interface Quote {
  id: string;
  client: string;
  amount: string;
  status: QuoteStatus;
  date: string;
  items: number;
  currency: string;
}

export interface Order {
  id: string;
  vendor: string;
  product: string;
  status: OrderStatus;
  progress: number;
  client: string;
  value: string;
  dispatch: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  products: number;
  status: VendorStatus;
  payable: string;
  paid: string;
  rating: number;
}

export interface Client {
  name: string;
  country: string;
  revenue: string;
  cost: string;
  profit: string;
  margin: string;
  outstanding: string;
  orders: number;
}

export interface Payment {
  ref: string;
  client: string;
  amount: string;
  quote: string;
  status: PaymentStatus;
  date: string;
  bank: string;
}

export interface Product {
  sku: string;
  name: string;
  vendor: string;
  minPrice: string;
  maxPrice: string;
  moq: number;
  currency: string;
}

export interface AuditEntry {
  action: string;
  detail: string;
  user: string;
  time: string;
  color: string;
}
