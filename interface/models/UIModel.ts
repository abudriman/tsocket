import { Action } from 'easy-peasy'

interface UIModel {
    showSidebar: boolean;
    toggleSidebar: (Action<UIModel>);
    menuSearchString: string;
    setMenuSearchString: (Action<UIModel, string>);
    showPopper: null | string;
    setShowPopper: (Action<UIModel, string>);
    togglePopper: (Action<UIModel, { event?: MouseEvent, id?: string } | undefined | void>);
}


export default UIModel