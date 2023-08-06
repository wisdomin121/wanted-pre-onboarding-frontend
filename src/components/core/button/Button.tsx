import React from "react";
import styled from "styled-components";

interface IButton {
  dataTestid?: string;
  text: string;
  _disabled?: boolean;
  _width?: string;
  _height?: string;
  _onClick: () => void;
}

const ButtonComponent = ({
  dataTestid,
  text,
  _disabled = false,
  _width = "425px",
  _height = "55px",
  _onClick,
}: IButton) => {
  return (
    <ButtonWrapper
      data-testid={dataTestid}
      disabled={_disabled}
      $_width={_width}
      $_height={_height}
      onClick={_onClick}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ $_width: string; $_height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2fdf6;
  border-radius: 20px;

  color: #07beb8;
  font-size: 17px;
  font-weight: 400;

  width: ${({ $_width }) => `${$_width}`};
  height: ${({ $_height }) => `${$_height}`};

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
