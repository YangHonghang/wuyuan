import React, { FC } from "react";
import { Input, Button } from "antd";
const TodoInput: FC = () => {
  return (
    <div className="todoInput">
      <Input placeholder="add todo item" style={{ width: "80%" }} />
      <Button type="primary" size="middle">
        Add
      </Button>
    </div>
  );
};
export default TodoInput;
