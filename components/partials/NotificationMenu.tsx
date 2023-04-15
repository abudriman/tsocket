import { BsBellFill, BsChevronRight } from 'react-icons/bs';
import Popper from '../Popper';
import { useStoreActions } from '@/hooks/useStore';
import { useState } from 'react';

export const NotificationMenu = () => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const togglePopper = useStoreActions(action => action.togglePopper);
  return (
    <>
      <span
        onClick={event => {
          togglePopper({
            event,
            tag: 'notification',
          });
        }}
        ref={setReferenceElement}
        className="hover:bg-slate-400 hover:text-white text-slate-400 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer transition-all"
      >
        <BsBellFill size="26px" />
      </span>
      <Popper
        referenceElement={referenceElement}
        tag="notification"
        position="bottom-end"
      >
        <div className=" bg-white border-[1px]border-slate-200 rounded-xl shadow-xl p-3 text-base font-normal">
          <span className="w-[700px]">
            <p>mantap</p>
          </span>
          <span className="flex items-center justify-between cursor-pointer space-x-20 hover:bg-slate-300 p-1 rounded-lg">
            <span className="flex items-center space-x-2">
              <span className="h-5 w-5 bg-red-500 rounded-full"></span>
              <p>Settings</p>
            </span>
            <BsChevronRight />
          </span>
          <span className="flex items-center justify-between cursor-pointer space-x-20 hover:bg-slate-300 p-1 rounded-lg">
            <span className="flex items-center space-x-2">
              <span className="h-5 w-5 bg-red-500 rounded-full"></span>
              <p>Profile</p>
            </span>
            <BsChevronRight />
          </span>
          <span className="flex items-center justify-between cursor-pointer space-x-20 hover:bg-slate-300 p-1 rounded-lg">
            <span className="flex items-center space-x-2">
              <span className="h-5 w-5 bg-red-500 rounded-full"></span>
              <p>Log Out</p>
            </span>
            <BsChevronRight />
          </span>
        </div>
      </Popper>
    </>
  );
};
