import axios from "axios";

// types
import { ICreateTodo, ISignUpIn } from "types";

// configs
import { API_URL } from "configs/const";

export const createTodo = async ({
  todo,
  setTodo,
  list,
  setList,
}: ICreateTodo) => {
  await axios
    .post(
      `${API_URL}/todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      setTodo("");
      setList([...list, res.data]);
    })
    .catch((err) => console.error(err));
};

export const handleSignUp = async ({
  email,
  password,
  setErrorText,
}: ISignUpIn) => {
  await axios
    .post(
      `${API_URL}/auth/signup`,
      { email, password },
      {
        headers: {
          "Content-Type": `application/json`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then(() => {
      window.location.href = "/signin";
    })
    .catch((err) => setErrorText(err.response.data.message));
};

export const handleSignIn = async ({
  email,
  password,
  setErrorText,
}: ISignUpIn) => {
  await axios
    .post(
      `${API_URL}/auth/signin`,
      { email, password },
      {
        headers: {
          "Content-Type": `application/json`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      window.location.href = "/todo";
    })
    .catch((err) => {
      setErrorText(err.response.data.message);
    });
};
