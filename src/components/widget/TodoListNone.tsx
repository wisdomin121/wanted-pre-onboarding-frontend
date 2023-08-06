import React from "react";
import styled from "styled-components";

const TodoListNone = () => {
  return (
    <TodoListNoneWrapper>
      ! 새로운 todoList를 작성해주세요 !
    </TodoListNoneWrapper>
  );
};

const TodoListNoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #cccac8;

  width: 100%;
  height: 100%;
`;

export default TodoListNone;
