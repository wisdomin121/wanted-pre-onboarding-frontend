import axios from "axios";

// apis
import { IDeleteTodo } from "types";

export const deleteTodo = ({ id, list, setList }: IDeleteTodo) => {
  axios
    .delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(() => {
      setList(list.filter((v) => v.id !== id));
    })
    .catch((err) => console.error(err));
};
