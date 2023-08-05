import axios from "axios";

interface IUpdateTodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  checkedId: number[];
  setCheckedId: React.Dispatch<React.SetStateAction<number[]>>;
}

export const updateTodo = ({
  id,
  todo,
  isCompleted,
  checkedId,
  setCheckedId,
}: IUpdateTodo) => {
  axios
    .put(
      `/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data.isCompleted);
      if (!checkedId.includes(res.data.id)) {
        setCheckedId([...checkedId, res.data.id]);
      } else {
        setCheckedId(checkedId.filter((v: number) => v !== res.data.id));
      }
    })
    .catch((err) => console.error(err));
};
