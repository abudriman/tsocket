import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  tag: string;
  className?: string | undefined;
  autoDismiss?: boolean;
}

const Menu = (props: MenuProps) => {
  const showPopper = useStoreState(state => state.showPopper);
  const togglePopper = useStoreActions(action => action.togglePopper);
  return (
    <div
      className={`absolute transition-all delay-100 ${
        showPopper === props.tag ? 'visible opacity-100' : 'invisible opacity-0'
      } ${props.className} `}
      data-tag={props.tag}
      onClick={e => {
        if (props.autoDismiss) {
          return;
        } else {
          e.stopPropagation();
        }
      }}
    >
      {props.children}
    </div>
  );
};

export default Menu;
