import { expect } from "chai";
import {
  fetchAddTodoItem,
  fetchUpdateTodoItem,
    fetchDeleteTodoItem,
  fetchTodoItemList,
} from "../apis";
var id: number = 0;

describe("TodoList", () => {
  it("查询列表:", async () => {
    const res = await fetchTodoItemList();
    expect(res.data.data.queryTodoItemList).to.be.a("Array");
  });
  it("添加待办:", async () => {
    let res = await fetchAddTodoItem({ content: "我是待办事项" });
    id = res.data.data.saveTodoItem.id;
    expect(res.data.data.saveTodoItem)
      .to.have.property("content")
      .and.equal("我是待办事项");
  });
  it("更新代办:", async () => {
    let res = await fetchUpdateTodoItem({ id: id, content: "我是更新的代办" });
    expect(res.data.data.updateTodoItem)
      .to.have.property("content")
      .and.equal("我是更新的代办");
  });
    it("删除待办:", async () => {
      let res = await fetchDeleteTodoItem({ id });
      expect(res.data.data.deleteTodoItem)
        .to.have.property("id")
        .and.equal(id);
    });
});
