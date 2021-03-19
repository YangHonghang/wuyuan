export interface ITodo {
  id: number;
  content: string;
}

export interface ITodoState {
  todoList: ITodo[];
}

export interface IEditState {
  isVisivle: boolean;
  todo: ITodo;
}

export interface ITodoAction {
  type: TODO_ACTION_TYPE;
  payload: ITodo | number | ITodo[];
}

export enum TODO_ACTION_TYPE {
  INIT_TODO_LIST = "initTodoList",
  CHANGE_VISIBLE = "changeVisible",
}
export interface IEditAction {
  type: EDIT_ACTION_TYPE;
  payload: null | ITodo | string;
}

export enum EDIT_ACTION_TYPE {
  CHANGE_VISIBLE = "changeVisible",
  SET_MODAL_VALUE = "setModalValue",
}

export interface ITEM_INPUT_TYPE {
  content: string;
}
export interface ITEM_DELETE_TYPE {
  id: number;
}
export interface ITEM_UPDATE_TYPE {
  id: number;
  content: string;
}
