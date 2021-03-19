import { TodoItem } from "../graphql/entities/TodoItem";
import {
  ItemInput,
  ItemDelete,
  ItemUpdate,
} from "../graphql/resolvers/TodoItemResolver";

const db = new Array<TodoItem>();
db.push({
  id: 0,
  content: "内容1",
});

export const insertItem = function(item: ItemInput): TodoItem {
  const todo = new TodoItem();
  todo.id = new Date().getTime();
  todo.content = item.content;
  db.push(todo);
  return todo;
};

export const deleteItem = function(item: ItemDelete): TodoItem {
  let preDelete;
  db.forEach((value, index) => {
    if (value.id === item.id) {
      preDelete = db.splice(index, 1);
    }
  });
  preDelete = preDelete ? preDelete[0] : new TodoItem();
  return preDelete;
};

export const updateItem = function(newItem: ItemUpdate): TodoItem {
  const preUpdate = db.find((item) => {
    return item.id === newItem.id;
  });
  if (preUpdate) preUpdate.content = newItem.content;
  return preUpdate ?? new TodoItem();
};

export default db;
