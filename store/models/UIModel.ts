import { Action, action } from 'easy-peasy'
import { MouseEvent } from 'react';

export interface UIModel {
    showSidebar: boolean;
    toggleSidebar: (Action<UIModel>);
    menuSearchString: string;
    setMenuSearchString: (Action<UIModel, string>);
    showPopper: null | string;
    setShowPopper: (Action<UIModel, string>);
    togglePopper: (Action<UIModel, { event?: MouseEvent<HTMLElement>, tag?: string } | undefined | void>);
}

export const UIModelStore: UIModel = {
    showSidebar: true,
    toggleSidebar: action((state, payload) => {
        state.showSidebar = !state.showSidebar
    }),
    menuSearchString: "",
    setMenuSearchString: action((state, payload) => {
        state.menuSearchString = payload.toLowerCase().trim()
    }),
    showPopper: null,
    setShowPopper: action((state, payload) => {
        state.showPopper = payload
    }),
    togglePopper: action((state, payload) => {
        if (!payload) {
            state.showPopper = null
        } else {
            payload.event!.stopPropagation()
            state.showPopper = payload.tag!
        }
    })
}




