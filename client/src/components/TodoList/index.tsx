import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { ITodo } from "./typings";
const TodoList: FC = (): ReactElement => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const addTodo = useCallback((todo: ITodo) => {
    setTodoList((todoList) => [...todoList, todo]);
  }, []);

  return (
    <div>
      <TodoInput addTodo={addTodo} todoList={todoList} />
      <TodoItem />
    </div>
  );
};
export default TodoList;
