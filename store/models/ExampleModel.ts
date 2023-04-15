import { Action } from 'easy-peasy'

interface ExampleModel {
    count: number;
    increment: (Action<ExampleModel>);
    decrement: (Action<ExampleModel>);
}


export default ExampleModel