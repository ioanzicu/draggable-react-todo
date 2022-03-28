import { stat } from "fs";
import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean
}

// type Actions =
//     | { type: 'add', payload: string }
//     | { type: 'remove', payload: number }
//     | { type: 'done', payload: number }

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case 'add':
//             return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
//         case 'remove':
//             return state.filter(todo => todo.id !== action.payload);
//         case 'done':
//             return state.map(todo => todo.id === action.payload ? { ...todo, isDone: true } : todo);
//         default:
//             return state;
//     }
// };

// const ReducerExample: React.FC = () => {

//     const [state, dispatch] = useReducer(TodoReducer, []);

//     return ''
// }