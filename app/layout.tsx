import type { Metadata } from 'next';
import './globals.css';
import { RoleProvider } from '@/lib/role-context';
import { Sidebar } from '@/components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'TradeBridge ERP',
  description: 'B2B Trading ERP Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RoleProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden bg-bg">
              {children}
            </main>
          </div>
        </RoleProvider>
      </body>
    </html>
  );
}
