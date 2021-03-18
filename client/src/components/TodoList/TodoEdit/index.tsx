import { Input, Modal } from "antd";
import React, { FC, ReactElement, useRef } from "react";
import { ITodo } from "../typings";
interface IProps {
  isVisible: boolean;
  changeVisible: () => void;
  updateTodo: (todo: ITodo) => void;
  todo: ITodo;
}

const TodoEdit: FC<IProps> = ({
  isVisible,
  changeVisible,
  updateTodo,
  todo,
}): ReactElement => {
  const inputRef = useRef<Input>(null);
  const updateItem = (): void => {
    inputRef.current!.setState({ value: todo.content });
    const val: string = inputRef.current!.state.value;
    if (!val) return;
    updateTodo({ id: todo.id, content: val });
    changeVisible();
    inputRef.current?.setState({ value: "" });
  };
  const closeModal = (): void => {
    changeVisible();
    inputRef.current?.setState({ value: "" });
  };
  return (
    <div>
      <Modal
        title="Edit"
        visible={isVisible}
        onOk={updateItem}
        onCancel={closeModal}
      >
        <Input
          placeholder="edit todo item"
          defaultValue={todo.content}
          ref={inputRef}
        />
      </Modal>
    </div>
  );
};
export default TodoEdit;
