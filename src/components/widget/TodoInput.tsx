import React from "react";
import styled from "styled-components";

// components
import { Button, Input } from "components";

// apis
import { createTodo } from "apis";

// types
import { ICreateTodo } from "types";

const TodoInput = ({ todo, setTodo, list, setList }: ICreateTodo) => {
  return (
    <TodoInputWrapper>
      <Input
        dataTestid="new-todo-input"
        _placeholder="오늘의 할 일을 적어주세요"
        _value={todo}
        setValue={setTodo}
        _width="100%"
      />

      <Button
        dataTestid="new-todo-add-button"
        text="등록하기"
        _width="125px"
        _onClick={() => {
          createTodo({ todo, setTodo, list, setList });
        }}
      />
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 4px;

  width: 100%;
`;

export default TodoInput;
