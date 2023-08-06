import axios from "axios";

// apis
import { IGetTodos } from "types";

export const getTodos = ({ setList, setCheckedId }: IGetTodos) => {
  axios
    .get("/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((res) => {
      setList(res.data);

      if (setCheckedId != null) {
        const checkedId: number[] = [];

        res.data
          .filter((v: { isCompleted: boolean }) => v.isCompleted === true)
          .map((v: { id: number }) => checkedId.push(v.id));

        setCheckedId(checkedId);
      }
    })
    .catch((err) => console.error(err));
};
