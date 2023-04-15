import StoreModel from "./models";
import { persist, createStore, action } from "easy-peasy";


const store = createStore<StoreModel>(
    persist({
        count: 0,
        increment: action((state, payload) => {
            state.count += 1
        }),
        decrement: action((state, payload) => {
            state.count -= 1
        }),
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
    }),
    {
        version: 0
    }
)

export default store

