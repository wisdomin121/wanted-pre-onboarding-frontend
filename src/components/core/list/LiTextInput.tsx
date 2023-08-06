import React from "react";

// types
import { ILiTextInput } from "types";

// components
import { Input } from "components";
import styled from "styled-components";

const LiTextInput = ({ text, isEdit, editTodo, setEditTodo }: ILiTextInput) => {
  return isEdit ? (
    <Input
      dataTestid="modify-input"
      _placeholder="어떤 내용으로 수정하시겠어요 ?"
      _width="160px"
      _height="33px"
      _value={editTodo}
      setValue={setEditTodo}
    />
  ) : (
    <TextWrapper>{text}</TextWrapper>
  );
};

const TextWrapper = styled.p`
  width: 180px;
  overflow: auto;
`;

export default LiTextInput;
