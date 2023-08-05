import axios from "axios";

// apis
import { getTodos } from "./get";

interface ICreateTodo {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const createTodo = ({ todo, setTodo, setList }: ICreateTodo) => {
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
    .then(() => {
      setTodo("");
      getTodos(setList);
    })
    .catch((err) => console.error(err));
};
