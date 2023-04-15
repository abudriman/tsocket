import { ReactNode } from 'react';
import { useStoreActions } from '@/hooks/useStore';
import { Sidebar } from './partials';
import { StickyHeader } from './partials/StickyHeader';

export default function Layout({ children }: { children: ReactNode }) {
  const togglePopper = useStoreActions(actions => actions.togglePopper);
  return (
    <>
      <div
        className="flex max-h-screen overflow-hidden"
        onClick={() => togglePopper()}
      >
        <Sidebar />
        {/* ini yang nyecroll 👇 */}
        <div className="min-h-screen overflow-x-hidden flex flex-col w-full items-center bg-slate-100">
          {/* 👆 ini yang nyecroll */}
          <StickyHeader />
          <div className="container flex-1">
            <div className="p-4">{children}</div>
          </div>
          <div>this is footer</div>
        </div>
      </div>
    </>
  );
}
