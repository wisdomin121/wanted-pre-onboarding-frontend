import axios from "axios";

export const getTodos = (
  setList: React.Dispatch<React.SetStateAction<any[]>>
) => {
  axios
    .get("/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((res) => {
      setList(res.data);
    })
    .catch((err) => console.error(err));
};
