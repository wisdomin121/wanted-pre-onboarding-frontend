import axios from "axios";

interface IDeleteTodo {
  id: number;
  list: any[];
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const deleteTodo = ({ id, list, setList }: IDeleteTodo) => {
  axios
    .delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(() => {
      setList(list.filter((v) => v.id !== id));
    })
    .catch((err) => console.error(err));
};
