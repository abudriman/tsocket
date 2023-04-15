import { Action } from 'easy-peasy'
import { MouseEvent } from 'react';

interface UIModel {
    showSidebar: boolean;
    toggleSidebar: (Action<UIModel>);
    menuSearchString: string;
    setMenuSearchString: (Action<UIModel, string>);
    showPopper: null | string;
    setShowPopper: (Action<UIModel, string>);
    togglePopper: (Action<UIModel, { event?: MouseEvent<HTMLElement>, tag?: string } | undefined | void>);
}




export default UIModel