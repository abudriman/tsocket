import Image from 'next/image';
import Popper from '../Popper';
import { useStoreActions } from '@/hooks/useStore';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

export const AvatarMenu = () => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const togglePopper = useStoreActions(action => action.togglePopper);
  return (
    <>
      <Image
        onClick={event => {
          togglePopper({
            event,
            tag: 'avatar',
          });
        }}
        width="40"
        height="40"
        src="https://i.pravatar.cc/300"
        alt="avatar"
        className="rounded-full cursor-pointer"
        ref={setReferenceElement}
      />
      <Popper
        referenceElement={referenceElement}
        tag="avatar"
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
