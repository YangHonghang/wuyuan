import {
  TODO_ACTION_TYPE,
  ITodoAction,
  ITodoState,
  ITodo,
  EDIT_ACTION_TYPE,
  IEditState,
  IEditAction,
} from "./typings";

function todoReducer(state: ITodoState, action: ITodoAction): ITodoState {
  const { type, payload } = action;
  switch (type) {
    case TODO_ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), content: payload as string },
        ],
      };
    case TODO_ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case TODO_ACTION_TYPE.UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === (payload as ITodo).id
            ? {
                ...todo,
                content: (payload as ITodo).content,
              }
            : { ...todo };
        }),
      };
    case TODO_ACTION_TYPE.CHANGE_VISIBLE:
      return {
        ...state,
        todoList: [...state.todoList],
      };
    default:
      return state;
  }
}
function editReducer(state: IEditState, action: IEditAction): IEditState {
  const { type, payload } = action;
  switch (type) {
    case EDIT_ACTION_TYPE.CHANGE_VISIBLE:
      return {
        ...state,
        todo: state.todo,
        isVisivle: !state.isVisivle,
      };
    case EDIT_ACTION_TYPE.SET_MODAL_VALUE:
      return {
        ...state,
        todo: payload as ITodo,
        isVisivle: state.isVisivle,
      };
    default:
      return state;
  }
}

export { todoReducer, editReducer };
