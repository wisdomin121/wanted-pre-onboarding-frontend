import axios from "axios";

// types
import { ICreateTodo, ISignUpIn } from "types";

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

export const handleSignUp = ({ email, password, setErrorText }: ISignUpIn) => {
  axios
    .post(
      "/auth/signup",
      { email, password },
      { headers: { "Content-Type": `application/json` } }
    )
    .then(() => {
      window.location.href = "/signin";
    })
    .catch((err) => setErrorText(err.response.data.message));
};

export const handleSignIn = ({ email, password, setErrorText }: ISignUpIn) => {
  axios
    .post(
      "/auth/signin",
      { email, password },
      { headers: { "Content-Type": `application/json` } }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      window.location.href = "/todo";
    })
    .catch((err) => {
      setErrorText(err.response.data.message);
    });
};
