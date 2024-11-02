import SearchHeader from '@/components/SearchHeader';
import './../globals.css';
import { ReactNode } from 'react'

export default function layout({ children } : {children: ReactNode}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
