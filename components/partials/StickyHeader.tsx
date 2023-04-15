import { useStoreActions } from '@/hooks/useStore';
import { BsList } from 'react-icons/bs';
import { AvatarMenu } from './AvatarMenu';
import { NotificationMenu } from './NotificationMenu';

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
