import clsx from 'clsx';

type Status = string;

const statusMap: Record<string, string> = {
  'Draft': 'badge-gray',
  'Pending Admin Approval': 'badge-yellow',
  'Pending Client Approval': 'badge-blue',
  'Negotiation': 'badge-orange',
  'Approved': 'badge-purple',
  'Payment Pending': 'badge-orange',
  'Completed': 'badge-green',
  'Confirmed': 'badge-green',
  'Rejected': 'badge-red',
  'Pending Verification': 'badge-yellow',
  'Active': 'badge-green',
  'Pending Review': 'badge-yellow',
  'In Production': 'badge-blue',
  'Partially Dispatched': 'badge-orange',
  'Production Pending': 'badge-yellow',
  'Fully Paid': 'badge-green',
  'Partially Paid': 'badge-orange',
  'Unpaid': 'badge-red',
  'Delivered': 'badge-green',
};

export function StatusBadge({ status }: { status: Status }) {
  const cls = statusMap[status] ?? 'badge-gray';
  return <span className={clsx('badge', cls)}>{status}</span>;
}
