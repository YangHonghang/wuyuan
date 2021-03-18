import React from "react";
import { List } from "antd";
const TodoItem = () => {
  const data = [
    { id: 0, title: "第一件事" },
    { id: 1, title: "第二件事" },
  ];
  return (
    <div className="todoItem">
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <span></span>
            {item.title}
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoItem;
