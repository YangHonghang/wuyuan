import { Button } from "antd";
import React, { FC, ReactElement } from "react";
import { ITodo } from "../types";
interface IProps {
  todo: ITodo;
  removeTodo: (id: number) => void;
  changeVisible: () => void;
  setModalValue: (todo: ITodo) => void;
}

const Item: FC<IProps> = ({
  todo,
  changeVisible,
  removeTodo,
  setModalValue,
}): ReactElement => {
  const { id, content } = todo;
  return (
    <div style={{ width: "100%" }}>
      {/* {JSON.stringify(todo)} */}
      <span style={{ fontSize: "16px" }}>{content}</span>
      <div className="operation">
        <Button
          style={{ float: "right" }}
          onClick={() => {
            changeVisible();
            setModalValue(todo);
          }}
          size="middle"
        >
          Edit
        </Button>
        <Button
          type="primary"
          onClick={() => {
            removeTodo(id);
          }}
          danger
          size="middle"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
export default Item;
