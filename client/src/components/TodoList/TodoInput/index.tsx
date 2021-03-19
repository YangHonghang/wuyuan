import React, { FC, useRef, ReactElement } from "react";
import { Input, Button, message } from "antd";
import { ITodo } from "../types";
interface IProps {
  addTodo: (content: string) => void;
  todoList: ITodo[];
}
const TodoInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<Input>(null);
  const addItem = (): void => {
    const val: string = inputRef.current!.state.value;
    if (!val) return;
    if (val.length) {
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        message.error("该项已存在");
        return;
      }
      addTodo(val);
      inputRef.current?.setState({ value: "" });
    }
  };
  return (
    <div className="todoInput">
      <Input
        placeholder="add todo item"
        ref={inputRef}
        style={{ width: "80%" }}
      />
      <Button type="primary" onClick={addItem} size="middle">
        Add
      </Button>
    </div>
  );
};
export default TodoInput;
