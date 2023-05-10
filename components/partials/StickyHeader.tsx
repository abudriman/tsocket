import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { BsBellFill, BsChevronRight, BsList } from 'react-icons/bs';
import { useState } from 'react';
// import Popper from '../Popper';
import Image from 'next/image';
import Menu from '../Menu';
import MenuButton from '../MenuButton';

export const StickyHeader = () => {
  const toggleSidebar = useStoreActions(actions => actions.toggleSidebar);

  return (
    <div className="sticky flex justify-center py-2 border-b-2 bg-white top-0 w-full font-bold text-2xl capitalize px-2 space-x-2">
      <div className="w-full h-full flex justify-between max-w-[1800px] items-center">
        {/* left side */}
        <span className="items-center flex">
          <span
            title="toggle navbar"
            onClick={() => toggleSidebar()}
            className="hover:bg-red-500 hover:text-white text-red-500 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer transition-all"
          >
            <BsList size="26px" />
          </span>
          <span className="pl-4">Header</span>
        </span>
        {/* right side */}
        <span className="flex items-center space-x-4">
          <NotificationMenu />
          <AvatarMenu />
        </span>
      </div>
    </div>
  );
};

const NotificationMenu = () => {
  return (
    <div className="relative max-h-10">
      <MenuButton tag="notification">
        <span className="hover:bg-slate-400 hover:text-white text-slate-400 h-10 w-10 p-2 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <BsBellFill size="26px" />
        </span>
      </MenuButton>
      <Menu
        className="right-0 top-[100%] mt-4 min-w-[250px]"
        tag="notification"
      >
        <div className=" bg-white border-[1px]border-slate-200 rounded-xl shadow-xl p-3 text-base font-normal">
          <span className="w-[700px]">
            <p>Notification</p>
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
      </Menu>
    </div>
  );
};

const AvatarMenu = () => {
  return (
    <div className="relative max-h-10">
      <MenuButton tag="avatar">
        <Image
          width="40"
          height="40"
          src="https://i.pravatar.cc/300"
          alt="avatar"
          className="rounded-full cursor-pointer "
        />
      </MenuButton>
      <Menu
        autoDismiss
        className="right-0 top-[100%] mt-4 min-w-[250px]"
        tag="avatar"
      >
        <div className=" bg-white border-[1px]border-slate-200 rounded-xl shadow-xl p-3 text-base font-normal">
          <span className="w-[700px]">
            <p>Avatar</p>
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
      </Menu>
    </div>
  );
};
