import axios from "axios";

// apis
import { IUpdateTodo } from "types";

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
  checkedId,
  setCheckedId,
  list,
  setList,
}: IUpdateTodo) => {
  await axios
    .put(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      // 체크 관련 로직
      if (checkedId != null && setCheckedId != null) {
        if (!checkedId.includes(res.data.id)) {
          setCheckedId([...checkedId, res.data.id]);
        } else {
          setCheckedId(checkedId.filter((v: number) => v !== res.data.id));
        }
      }

      // 수정 관련 로직
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
