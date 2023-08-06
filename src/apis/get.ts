import axios from "axios";

// apis
import { IGetTodos } from "types";

// configs
import { API_URL } from "configs/const";

export const getTodos = async ({ setList, setCheckedId }: IGetTodos) => {
  await axios
    .get(`${API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Access-Control-Allow-Origin": "*",
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
