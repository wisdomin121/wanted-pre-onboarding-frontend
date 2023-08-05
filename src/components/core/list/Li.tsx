import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";

interface ILi {
  text: string;
  _checked: boolean;
  isEdit: boolean;
  _onChange: (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => void;
  editTodo: string;
  setEditTodo: React.Dispatch<React.SetStateAction<string>>;
  editOnClick: () => void;
  deleteOnClick: () => void;
  submitOnClick: () => void;
  cancelOnClick: () => void;
}

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
      <CheckBoxWrapper
        type="checkbox"
        checked={_checked}
        onChange={_onChange}
      />

      {isEdit ? (
        <Input
          dataTestid="modify-input"
          _placeholder="어떤 내용으로 수정하시겠어요 ?"
          _width="160px"
          _height="33px"
          _value={editTodo}
          setValue={setEditTodo}
        />
      ) : (
        text
      )}

      {isEdit ? (
        <ButtonWrapper>
          <Button
            dataTestid="submit-button"
            text="제출"
            _width="fit-content"
            _height="fit-content"
            _onClick={submitOnClick}
          />
          <Button
            dataTestid="cancel-button"
            text="취소"
            _width="fit-content"
            _height="fit-content"
            _onClick={cancelOnClick}
          />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button
            dataTestid="modify-button"
            text="수정"
            _width="fit-content"
            _height="fit-content"
            _onClick={editOnClick}
          />
          <Button
            dataTestid="delete-button"
            text="삭제"
            _width="fit-content"
            _height="fit-content"
            _onClick={deleteOnClick}
          />
        </ButtonWrapper>
      )}
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

const CheckBoxWrapper = styled.input`
  appearance: none;
  cursor: pointer;

  width: 32px;
  height: 32px;

  border-radius: 10px;

  background-color: #fffdfa;
  border: 1px solid #57a775;

  &:hover {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  }

  &:checked {
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(87, 167, 117)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;

  margin: 0 0 0 auto;
`;

export default LiComponent;
