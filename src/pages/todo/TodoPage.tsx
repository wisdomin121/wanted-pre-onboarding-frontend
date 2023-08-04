/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  }, []);

  return <>todo</>;
};

export default TodoPage;
