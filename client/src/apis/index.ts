import Axios from "axios";
import {
  ITEM_INPUT_TYPE,
  ITEM_DELETE_TYPE,
  ITEM_UPDATE_TYPE,
} from "../components/TodoList/types";
const axios = Axios.create();
axios.defaults.baseURL = "http://localhost:4000/graphql";
export default axios;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const fetchAddTodoItem = (data: ITEM_INPUT_TYPE) => {
  const query = `
    mutation ($data: ItemInput!) {
        saveTodoItem(data: $data){
                id
                content
            }
    }`;
  return axios({
    method: "post",
    headers,
    data: JSON.stringify({
      query,
      variables: { data },
    }),
  });
};

export const fetchDeleteTodoItem = (data: ITEM_DELETE_TYPE) => {
  const query = `
      mutation ($data: ItemDelete!) {
        deleteTodoItem(data: $data){
                  id
                  content
              }
      }`;
  return axios({
    method: "post",
    headers,
    data: JSON.stringify({
      query,
      variables: { data },
    }),
  });
};

export const fetchUpdateTodoItem = (data: ITEM_UPDATE_TYPE) => {
  const query = `
        mutation ($data: ItemUpdate!) {
          updateTodoItem(data: $data){
                    id
                    content
                }
        }`;
  return axios({
    method: "post",
    headers,
    data: JSON.stringify({
      query,
      variables: { data },
    }),
  });
};
export const fetchTodoItemList = () => {
  const query = `
        query{
          queryTodoItemList{
            id
            content
          }
        }`;
  return axios({
    method: "post",
    headers,
    data: JSON.stringify({
      query,
      variables: {},
    }),
  });
};
