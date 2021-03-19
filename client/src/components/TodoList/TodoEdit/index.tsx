import { Input, Modal } from "antd";
import React, { FC, ReactElement } from "react";
import { ITodo } from "../types";
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
  const updateItem = (): void => {
    updateTodo(todo);
    changeVisible();
  };
  const closeModal = (): void => {
    changeVisible();
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
          onChange={(e) => {
            setModalValue({ id: todo.id, content: e.target.value });
          }}
          value={todo.content}
        />
      </Modal>
    </div>
  );
};
export default TodoEdit;
