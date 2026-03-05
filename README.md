# TradeBridge ERP

A web-based ERP system built with Next.js 14 for B2B trading companies acting as intermediaries between vendors (primarily from China) and global clients. It covers the full trade lifecycle — from vendor product uploads and quote negotiation, through offline payment confirmation and production tracking, to dispatch management and profit reporting.

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

Other available scripts:

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Project Structure

```
tradebridge-erp/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (sidebar + role provider)
│   ├── page.tsx                # Redirects to /dashboard
│   ├── globals.css             # Global styles + Tailwind base
│   │
│   ├── dashboard/              # Admin overview with KPIs and charts
│   ├── quotes/                 # Quote lifecycle management
│   ├── orders/                 # Production order tracking
│   ├── payments/               # Offline payment verification
│   ├── dispatch/               # Dispatch and shipment log
│   ├── vendors/                # Vendor profiles and payables
│   ├── clients/                # Client profitability analysis
│   ├── products/               # Product catalog and pricing engine
│   ├── pnl/                    # Profit & loss report
│   ├── cashflow/               # Cash flow tracker
│   ├── audit/                  # Immutable audit trail
│   ├── email/                  # System email log
│   │
│   ├── vendor/                 # Vendor portal (role-restricted)
│   │   ├── dashboard/          # Vendor overview
│   │   ├── products/           # Vendor's own product listings
│   │   ├── orders/             # Production orders (post-payment only)
│   │   ├── dispatch/           # Dispatch batch updates
│   │   └── invoices/           # Final invoices per dispatch
│   │
│   └── client/                 # Client portal (role-restricted)
│       ├── dashboard/          # Client overview
│       ├── quotes/             # View and approve quotes
│       ├── orders/             # Order and production tracking
│       └── invoices/           # Proforma and final invoices
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx         # Navigation sidebar with role-aware menus
│   │   └── Header.tsx          # Page header with title and actions
│   ├── ui/
│   │   ├── KpiCard.tsx         # Metric display card with color variants
│   │   ├── Modal.tsx           # Accessible modal dialog
│   │   ├── StatusBadge.tsx     # Color-coded status label
│   │   └── ProgressBar.tsx     # Production progress indicator
│   ├── charts/
│   │   ├── RevenueChart.tsx    # Revenue vs cost bar chart
│   │   ├── PnLChart.tsx        # Profit/loss trend line chart
│   │   ├── CashFlowChart.tsx   # Inflow vs outflow bar chart
│   │   └── ProductionChart.tsx # Order status donut chart
│   └── modals/
│       └── QuoteModals.tsx     # New quote form + quote detail view
│
├── lib/
│   ├── data.ts                 # All mock data (quotes, orders, vendors, etc.)
│   └── role-context.tsx        # React context for active role state
│
├── types/
│   └── index.ts                # TypeScript interfaces for all data models
│
├── tailwind.config.ts          # Tailwind config with custom design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## User Roles

The system supports four distinct roles, switchable via the dropdown in the sidebar. Each role has its own navigation and restricted access to data.

| Role | Access |
|---|---|
| **Admin** | Full access — pricing control, financial reports, all modules, audit trail |
| **Admin Staff** | Operational access — quotes, orders, payments, dispatch, vendors, clients |
| **Vendor** | Restricted portal — own products (no margins/selling prices), assigned production orders, dispatch updates, final invoices |
| **Client** | Restricted portal — own quotes (approval/negotiation), order tracking, invoices |

Role state is managed via React Context (`lib/role-context.tsx`) and persists client-side across navigation.

---

## Key Modules

### Quote & Negotiation Workflow
Quotes follow a linear status flow:

```
Draft → Pending Admin Approval → Pending Client Approval → Negotiation → Approved → Payment Pending → Completed
```

Quotes are created by Admin/Staff, approved by both sides, and trigger proforma invoice generation. All communication is logged via the email system — there are no in-app notifications.

### Pricing Engine
- Vendors set a **minimum price** (floor) for each product
- Admin sets a **maximum selling price** and **margin %**
- The system enforces that selling prices cannot go below the vendor minimum
- Prices and exchange rates are **snapshotted** at the quote stage and never retroactively changed
- All price edits are logged in the audit trail

### Payment Management (Offline)
There is no payment gateway. The flow is:
1. Client transfers funds via bank
2. Staff manually verifies the transfer
3. Staff marks the payment as **Confirmed**
4. An audit log entry is created automatically
5. The order moves to Production

### Production & Dispatch
After payment confirmation, vendors gain access to the order and can:
- Update produced and dispatched quantities
- Upload dispatch documents
- Log partial dispatches (multiple batches per order)
- Generate a final invoice per dispatch batch

Order statuses: `Production Pending → In Production → Partially Dispatched → Completed`

### Order Revision System
Clients may request changes (additional products, quantity increases) during production. The system creates a revision record requiring admin approval, while preserving the original confirmed order snapshot.

### Financial Reporting
The system tracks simplified financials — no double-entry accounting:

```
Gross Profit  = (Selling Price × Qty) − (Vendor Min Price × Qty)
Net Cash      = Total Client Payments − Total Vendor Payments
```

Reports include P&L trends, client-wise profitability, vendor payables, and cash flow — all exportable to PDF/Excel (to be wired to backend).

### Audit Trail
Every significant action is logged with: user, action type, old value, new value, timestamp, and IP address. Audit records are immutable and cannot be deleted.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Charts | [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Syne (headings), DM Mono (body), Instrument Serif |
| State | React Context API |

---

## Design System

The UI uses a dark theme built on CSS custom properties, extended into Tailwind via `tailwind.config.ts`.

**Core colors:**

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0c10` | Page background |
| `--surface` | `#111318` | Cards, sidebar |
| `--surface2` | `#181c24` | Inputs, hover states |
| `--accent` | `#e8c84a` | Primary actions, highlights |
| `--green` | `#3ecf8e` | Positive states, confirmed |
| `--red` | `#f04b4b` | Errors, danger, overdue |
| `--blue` | `#4b8ef0` | Informational, in-progress |
| `--orange` | `#f07a4b` | Warnings, partial states |
| `--purple` | `#9b6cf0` | Approved, special states |

**Reusable CSS component classes** (defined in `globals.css`):
`btn`, `btn-primary`, `btn-ghost`, `btn-success`, `btn-danger`, `card`, `badge`, `badge-{color}`, `form-control`, `form-label`, `kpi-card`, `kpi-icon`, `nav-item`, `data-table`, `tab`, `section-title`, `section-sub`

---

## Adding a Backend

This project is a fully functional frontend prototype. All data lives in `lib/data.ts`. To connect to a real backend:

1. Replace imports from `lib/data.ts` in each page with API calls (e.g. using `fetch`, SWR, or React Query)
2. Add server-side data fetching in page components using Next.js `async` page functions or route handlers in `app/api/`
3. Implement authentication (e.g. NextAuth.js) and replace the role switcher with session-based role assignment
4. Wire the export buttons (PDF/Excel) to a backend generation endpoint
5. Connect the email log to a real transactional email service (e.g. Resend, SendGrid)

The recommended backend stack per the original SRS is Laravel (PHP) with Redis for report caching and queued email sending.

---

## Notes

- **No payment gateway** — all payments are confirmed manually by staff per the SRS specification
- **Vendor data isolation** — vendors cannot see selling prices, margins, or other vendors' data (enforced at the role/nav level; enforce again at the API layer when adding a backend)
- **Audit logs** — must be treated as append-only at the database level; never expose a delete endpoint for audit records
- **Financial records** — the SRS requires a minimum 8-year data retention policy for financial records
- **Soft deletes only** — no hard deletes anywhere in the system
