import { Input, Modal } from "antd";
import React, { FC, ReactElement, useRef } from "react";
import { ITodo } from "../typings";
interface IProps {
  isVisible: boolean;
  changeVisible: () => void;
  updateTodo: (todo: ITodo) => void;
  todo: ITodo;
  setModalValue: (todo: ITodo) => void;
}

const TodoEdit: FC<IProps> = ({
  isVisible,
  changeVisible,
  updateTodo,
  todo,
  setModalValue,
}): ReactElement => {
  const inputRef = useRef<Input>(null);
  // const inputRef = useRef<HTMLInputElement>(null);
  const updateItem = (): void => {
    // inputRef.current!.setState({ value: todo.content });
    // const val: string = inputRef.current!.state.value;
    // if (!val) return;
    updateTodo(todo);
    changeVisible();
    // inputRef.current?.setState({ value: "" });
  };
  const closeModal = (): void => {
    changeVisible();
    // inputRef.current?.setState({ value: "" });
  };

  return (
    <div>
      <Modal
        title="Edit"
        visible={isVisible}
        onOk={updateItem}
        onCancel={closeModal}
      >
        {JSON.stringify(todo)}
        {/* <input
          type="text"
          onChange={(e) => (inputRef.current!.value = e.target.value)}
          value={todo.content}
          ref={inputRef}
        /> */}
        <Input
          placeholder="edit todo item"
          onChange={(e) => {
            setModalValue({ id: todo.id, content: e.target.value });
          }}
          value={todo.content}
          ref={inputRef}
        />
      </Modal>
    </div>
  );
};
export default TodoEdit;
