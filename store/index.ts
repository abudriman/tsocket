import StoreModel from "./models";
import { persist, createStore, action } from "easy-peasy";
import { ExampleModelStore } from "./models/ExampleModel";
import { UIModelStore } from "./models/UIModel";


const store = createStore<StoreModel>(
    persist({
        ...ExampleModelStore,
        ...UIModelStore
    }),
    {
        version: 0
    }
)

export default store

