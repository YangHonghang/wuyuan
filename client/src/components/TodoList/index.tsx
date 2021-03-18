import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { todoReducer, editReducer } from "./reducer";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoEdit from "./TodoEdit";
import {
  TODO_ACTION_TYPE,
  ITodoState,
  ITodo,
  IEditState,
  EDIT_ACTION_TYPE,
} from "./typings";

const initTodoState: ITodoState = {
  todoList: [],
};
const initEditState: IEditState = {
  isVisivle: false,
  todo: { id: NaN, content: "" },
};
const TodoList: FC = (): ReactElement => {
  const [todoState, todoDispath] = useReducer(todoReducer, initTodoState);
  const [editState, editDispath] = useReducer(editReducer, initEditState);

  useEffect(() => {
    console.log(todoState.todoList);
  }, [todoState.todoList]);

  const addTodo = useCallback((content: string) => {
    todoDispath({ type: TODO_ACTION_TYPE.ADD_TODO, payload: content });
  }, []);

  const updateTodo = useCallback((todo: ITodo) => {
    todoDispath({ type: TODO_ACTION_TYPE.UPDATE_TODO, payload: todo });
  }, []);
  const removeTodo = useCallback((id: number) => {
    todoDispath({ type: TODO_ACTION_TYPE.REMOVE_TODO, payload: id });
  }, []);

  const changeVisible = useCallback(() => {
    editDispath({ type: EDIT_ACTION_TYPE.CHANGE_VISIBLE, payload: null });
  }, []);
  const setModalValue = useCallback((todo: ITodo) => {
    editDispath({ type: EDIT_ACTION_TYPE.SET_MODAL_VALUE, payload: todo });
  }, []);
  return (
    <div>
      <TodoInput addTodo={addTodo} todoList={todoState.todoList} />
      <TodoItem
        todoList={todoState.todoList}
        changeVisible={changeVisible}
        removeTodo={removeTodo}
        setModalValue={setModalValue}
      />
      <TodoEdit
        updateTodo={updateTodo}
        changeVisible={changeVisible}
        isVisible={editState.isVisivle}
        todo={editState.todo}
      />
    </div>
  );
};
export default TodoList;
