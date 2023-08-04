import React from "react";
import styled from "styled-components";

interface IButton {
  dataTestid?: string;
  text: string;
  _disabled?: boolean;
  _onClick: () => void;
}

const ButtonComponent = ({
  dataTestid,
  text,
  _disabled = false,
  _onClick,
}: IButton) => {
  return (
    <ButtonWrapper
      data-testid={dataTestid}
      disabled={_disabled}
      onClick={_onClick}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2fdf6;
  border-radius: 20px;

  color: #07beb8;
  font-size: 17px;
  font-weight: 400;

  width: 425px;
  height: 55px;

  cursor: pointer;
  border: 0.5px solid #a3f4c1;

  &:hover {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background-color: #eef1f1;
    color: #99a29d;

    cursor: auto;
    border: none;
    box-shadow: none;
  }
`;

export default ButtonComponent;
