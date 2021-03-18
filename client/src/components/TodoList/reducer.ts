import { ACTION_TYPE, IAction, IState, ITodo } from "./typings";

function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, { id: 0, content: payload as string }],
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case ACTION_TYPE.UPDATE_TODO:
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
    default:
      return state;
  }
}

export { todoReducer };
