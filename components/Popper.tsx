import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { Placement } from '@popperjs/core';
import { FunctionComponent, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

interface PopperProps {
  children: ReactNode;
  referenceElement: Element | null;
  tag: string;
  position: Placement;
}

const Popper: FunctionComponent<PopperProps> = ({
  children,
  referenceElement,
  tag,
  position,
}) => {
  const showPopper = useStoreState(state => state.showPopper);
  const togglePopper = useStoreActions(action => action.togglePopper);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: 'arrow',
          options: { element: arrowElement },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'flip',
          options: {
            altBoundary: true,
            rootBoundary: 'document',
            padding: 8,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: 'document',
            padding: 0,
          },
        },
      ],
      placement: position,
    },
  );
  return (
    <>
      <div
        className={`${showPopper === tag ? '' : 'hidden'}`}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};

export default Popper;
