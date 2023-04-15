import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState, useRef } from 'react';
import {
  BsChatLeft,
  BsChevronRight,
  BsClipboardData,
  BsDot,
  BsFillFileEarmarkTextFill,
  BsSearch,
  BsX,
} from 'react-icons/bs';

export const SidebarElement = ({
  path,
  name,
  children,
  icon,
}: {
  path: string;
  name: string;
  icon: ReactNode;
  children?: Array<any>;
}) => {
  const router = useRouter();
  const isActive = path.indexOf(router.route) !== -1;
  const [showChildren, setShowChildren] = useState(isActive);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col w-full border-collapse overflow-hidden  ">
      <Link
        href={children ? '#' : path}
        onClick={() => {
          setShowChildren(old => !old);
        }}
        className={`py-1 mb-1 mx-4 ${
          isActive ? 'bg-slate-600 rounded-xl' : ''
        }`}
      >
        <div
          className={`flex px-4 justify-between items-baseline hover:text-white ${
            isActive ? '!text-white' : ''
          }`}
        >
          <div className="flex items-center">
            {icon ?? <BsFillFileEarmarkTextFill />}
            <span className="pl-5 line-clamp-1">{name}</span>
          </div>
          {children && (
            <span
              className={`${
                showChildren ? 'rotate-90' : 'rotate-0'
              } transition-all`}
            >
              <BsChevronRight size={'16px'} />
            </span>
          )}
        </div>
      </Link>

      {children && (
        <div
          className={`w-full duration-500 overflow-y-hidden transition-all justify-end`}
          style={{
            maxHeight: showChildren
              ? ref.current
                ? ref.current.clientHeight
                : 999
              : 0,
            opacity: showChildren ? 1 : 0,
          }}
        >
          <div ref={ref} className={`flex flex-col min-h-fit `}>
            {children.map((child, index) => (
              <div
                key={'children' + index}
                className="flex border-l-[1px] border-l-slate-600 ml-10 last:mb-2"
              >
                <Link
                  href={child.path}
                  className={`${
                    router.route === child.path
                      ? '!text-white bg-slate-600'
                      : ''
                  } ml-2 py-1 mb-1 mr-4 rounded-xl hover:text-white w-full`}
                >
                  <div className={`pl-4 flex items-center`}>
                    <BsDot />
                    <span className=" pl-5 line-clamp-1">{child.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const isShow = useStoreState(state => state.showSidebar);
  const menuSearchString = useStoreState(state => state.menuSearchString);
  const setMenuSearchString = useStoreActions(
    actions => actions.setMenuSearchString,
  );
  const debouncedSetMenuSearchString = debounce(setMenuSearchString, 500);
  const inputRef = useRef<HTMLInputElement>(null);
  const pages: Record<string, any> = {
    nochild: {
      path: '/',
      name: 'Home',
    },
    one: {
      path: '/one',
      name: 'One',
      icon: <BsChatLeft />,
    },
    two: {
      path: '/two',
      name: 'Two',
      icon: <BsClipboardData />,
    },
  };
  const menus = [
    {
      key: 'one',
      children: [
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'one',
        'nochild',
      ],
    },
    {
      title: 'Home group',
    },
    {
      key: 'nochild',
      children: ['two', 'nochild'],
    },
    {
      key: 'two',
    },
    {
      title: 'Two group',
    },
    {
      key: 'two',
    },
  ];
  return (
    <div
      className={`bg-slate-800 text-neutral-400 transition-all ${
        !isShow
          ? 'w-[20px] min-w-0'
          : 'hidden lg:block lg:opacity-100 lg:w-[20vw] lg:min-w-[20vw] xl:w-[15vw] xl:min-w-[15vw]'
      } hidden lg:hover:w-[20vw] lg:hover:min-w-[20vw] xl:hover:w-[15vw] xl:hover:min-w-[15vw] lg:flex flex-col items-end overflow-x-hidden min-h-screen duration-500`}
    >
      <div className="flex w-[20vw] xl:w-[15vw] overflow-hidden">
        <div className="flex-1 min-h-screen overflow-y-auto pb-10 tso-scrollbar">
          <div className="w-full max-h-28 bg-slate-300 border-dashed border-[1px] border-slate-600">
            <span className="flex h-28 justify-center items-center">
              <p>logo</p>
            </span>
          </div>
          <div className="w-full p-2 relative text-black">
            <BsSearch className="ml-2 absolute top-[50%] translate-y-[-50%]" />
            <input
              ref={inputRef}
              onChange={e =>
                debouncedSetMenuSearchString(e.currentTarget.value)
              }
              className="rounded-full pl-8 pr-8 py-2 w-full"
              type="text"
              placeholder="Cari menu"
            />
            {menuSearchString !== '' && (
              <BsX
                size="20px"
                className="mr-5 cursor-pointer absolute top-[50%] right-0 translate-y-[-50%]"
                onClick={e => {
                  setMenuSearchString('');
                  if (inputRef.current) {
                    inputRef.current.value = '';
                  }
                }}
              />
            )}
          </div>
          {menus
            .map(item => {
              if (item.title) {
                return item;
              }
              return {
                ...pages[item.key!],
                ...(item.children
                  ? { children: item.children.map(key => pages[key]) }
                  : {}),
              };
            })
            .filter(item => {
              if (item.title) {
                return (
                  item.title.toLowerCase().indexOf(menuSearchString) !== -1
                );
              }
              return (
                item.name.toLowerCase().indexOf(menuSearchString) !== -1 ||
                item.children?.find(
                  (child: any) =>
                    child.name.toLowerCase().indexOf(menuSearchString) !== -1,
                )
              );
            })
            .map((item, index) => {
              if (item.title) {
                return (
                  <p
                    className="mx-4 mt-4 mb-1 text-sm font-bold text-white border-b-[1px] border-b-red-500 w-fit uppercase"
                    key={`title-${index}`}
                  >
                    {item.title}
                  </p>
                );
              }

              return (
                <SidebarElement
                  key={index}
                  path={item.path}
                  name={item.name}
                  icon={item.icon}
                  // eslint-disable-next-line
                  children={item.children}
                />
              );
            })}
        </div>
        <div
          className={`h-full bg-slate-400 transition-all duration-1000 ${
            isShow ? 'w-0' : 'w-[20px] '
          } flex flex-col justify-center items-center overflow-x-hidden`}
        >
          <span className="text-white">
            <BsChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};
