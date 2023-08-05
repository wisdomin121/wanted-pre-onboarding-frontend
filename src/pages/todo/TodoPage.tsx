import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Li } from "components";

const TodoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <TodoWrapper>
      <Li text="test" />
      <Li text="test" />
      <Li text="test" />
      <Li text="test" />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default TodoPage;
