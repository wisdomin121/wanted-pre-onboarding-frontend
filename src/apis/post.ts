import axios from "axios";

// types
import { ICreateTodo } from "types";

export const createTodo = ({ todo, setTodo, list, setList }: ICreateTodo) => {
  axios
    .post(
      "/todos",
      { todo },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      setTodo("");
      setList([...list, res.data]);
    })
    .catch((err) => console.error(err));
};
