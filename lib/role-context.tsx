'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Role } from '@/types';

interface RoleContextType {
  role: Role;
  setRole: (r: Role) => void;
}

const RoleContext = createContext<RoleContextType>({
  role: 'admin',
  setRole: () => {},
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('admin');
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
}

export const useRole = () => useContext(RoleContext);

export const roleConfig: Record<Role, { label: string; avatar: string; accentColor: string }> = {
  admin:  { label: 'Admin',         avatar: 'AD', accentColor: '#e8c84a' },
  staff:  { label: 'Admin Staff',   avatar: 'SF', accentColor: '#4b8ef0' },
  vendor: { label: 'Vendor Portal', avatar: 'VN', accentColor: '#f07a4b' },
  client: { label: 'Client Portal', avatar: 'CL', accentColor: '#9b6cf0' },
};
