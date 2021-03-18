import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { todoReducer } from "./reducer";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { ACTION_TYPE, IState, ITodo } from "./typings";

const initState: IState = {
  todoList: [],
};
const TodoList: FC = (): ReactElement => {
  const [state, dispath] = useReducer(todoReducer, initState);
  useEffect(() => {
    console.log(state.todoList);
  }, [state.todoList]);

  const addTodo = useCallback((content: string) => {
    dispath({ type: ACTION_TYPE.ADD_TODO, payload: content });
  }, []);

  return (
    <div>
      <TodoInput addTodo={addTodo} todoList={state.todoList} />
      <TodoItem />
    </div>
  );
};
export default TodoList;
