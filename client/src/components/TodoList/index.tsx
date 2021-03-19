import React, {
  FC,
  ReactElement,
  useCallback,
  useReducer,
  useEffect,
} from "react";
import { todoReducer, editReducer } from "./reducer";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoEdit from "./TodoEdit";
import { message } from "antd";
import {
  fetchAddTodoItem,
  fetchDeleteTodoItem,
  fetchTodoItemList,
  fetchUpdateTodoItem,
} from "../../apis";
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

  const init = () => {
    fetchTodoItemList()
      .then((res) =>
        res.data.data.queryTodoItemList
          ? res.data.data.queryTodoItemList
          : Promise.reject("error")
      )
      .then((res) => {
        todoDispath({ type: TODO_ACTION_TYPE.INIT_TODO_LIST, payload: res });
      })
      .catch((error) => {
        message.error(JSON.stringify(error));
      });
  };
  useEffect(init, []);
  const addTodo = useCallback((content: string) => {
    fetchAddTodoItem({ content }).catch((error) =>
      message.error(JSON.stringify(error))
    );
    init();
  }, []);

  const updateTodo = useCallback((todo: ITodo) => {
    fetchUpdateTodoItem(todo).catch((error) =>
      message.error(JSON.stringify(error))
    );
    init();
  }, []);
  const removeTodo = useCallback((id: number) => {
    fetchDeleteTodoItem({ id }).catch((error) =>
      message.error(JSON.stringify(error))
    );
    init();
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
        setModalValue={setModalValue}
      />
    </div>
  );
};
export default TodoList;
