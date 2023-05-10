import { useStoreActions } from '@/hooks/useStore';
import { FunctionComponent, ReactNode } from 'react';
interface MenuButtonProps {
  children: ReactNode;
  tag: string;
}

const MenuButton: FunctionComponent<MenuButtonProps> = props => {
  const togglePopper = useStoreActions(action => action.togglePopper);
  return (
    <button
      className="
      min-h-fit h-fit max-h-fit 
      min-w-fit w-fit max-w-fit
      p-0 m-0 inline-block"
      onClick={event => {
        togglePopper({
          event,
          tag: props.tag,
        });
      }}
      onKeyUp={e => {
        if (e.key === 'Escape') {
          togglePopper();
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default MenuButton;
