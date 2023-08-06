import React from "react";
import styled from "styled-components";

// components
import { LiButton, LiTextInput, LiCheckBox } from "components";

// types
import { ILi } from "types";

const LiComponent = ({
  text,
  _checked,
  isEdit,
  _onChange,
  editTodo,
  setEditTodo,
  editOnClick,
  deleteOnClick,
  submitOnClick,
  cancelOnClick,
}: ILi) => {
  return (
    <ListWrapper>
      <LiCheckBox _checked={_checked} _onChange={_onChange} />

      <LiTextInput
        text={text}
        isEdit={isEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <LiButton
        isEdit={isEdit}
        editOnClick={editOnClick}
        deleteOnClick={deleteOnClick}
        submitOnClick={submitOnClick}
        cancelOnClick={cancelOnClick}
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #333835;
  font-size: 15px;
  font-weight: 400;

  list-style-type: none;
`;

export default LiComponent;
