import { Action, action } from 'easy-peasy'

export interface ExampleModel {
    count: number;
    increment: (Action<ExampleModel>);
    decrement: (Action<ExampleModel>);
}


export const ExampleModelStore: ExampleModel = {
    count: 0,
    increment: action((state, payload) => {
        state.count += 1
    }),
    decrement: action((state, payload) => {
        state.count -= 1
    }),
}