import axios from "axios";

// apis
import { IDeleteTodo } from "types";

// configs
import { API_URL } from "configs/const";

export const deleteTodo = async ({ id, list, setList }: IDeleteTodo) => {
  await axios
    .delete(`${API_URL}/todos/${id}`, {
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
