import React, { FC, ReactElement } from "react";
import { List } from "antd";
import Item from "./Item";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  removeTodo: (id: number) => void;
  changeVisible: () => void;
  setModalValue: (todo: ITodo) => void;
}

const TodoItem: FC<IProps> = ({
  todoList,
  removeTodo,
  changeVisible,
  setModalValue,
}): ReactElement => {
  return (
    <div className="todoItem">
      <List
        bordered
        rowKey={(item: ITodo) => {
          return String(item.id);
        }}
        dataSource={todoList}
        renderItem={(item: ITodo) => (
          <List.Item>
            <Item
              todo={item}
              changeVisible={changeVisible}
              removeTodo={removeTodo}
              setModalValue={setModalValue}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoItem;
