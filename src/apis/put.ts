import axios from "axios";

interface IUpdateTodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  checkedId?: number[];
  setCheckedId?: React.Dispatch<React.SetStateAction<number[]>>;
  list?: any[];
  setList?: React.Dispatch<React.SetStateAction<any[]>>;
}

export const updateTodo = ({
  id,
  todo,
  isCompleted,
  checkedId,
  setCheckedId,
  list,
  setList,
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
      if (checkedId != null && setCheckedId != null) {
        if (!checkedId.includes(res.data.id)) {
          setCheckedId([...checkedId, res.data.id]);
        } else {
          setCheckedId(checkedId.filter((v: number) => v !== res.data.id));
        }
      }

      if (list != null && setList != null) {
        const newList = [...list].map((v: { id: number }) => {
          if (v.id === res.data.id) {
            return { ...v, todo: res.data.todo };
          }

          return v;
        });

        setList(newList);
      }
    })
    .catch((err) => console.error(err));
};
