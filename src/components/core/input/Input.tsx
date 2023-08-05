import React from "react";
import styled from "styled-components";

// type
import type { Dispatch, SetStateAction } from "react";

interface IInput {
  dataTestid: string;
  _type?: "text" | "password";
  _placeholder: string;
  _value: string;
  setValue: Dispatch<SetStateAction<string>>;
  _width?: string;
  _height?: string;
}

const InputComponent = ({
  dataTestid,
  _type = "text",
  _value,
  setValue,
  _placeholder,
  _width = "385px",
  _height = "55px",
}: IInput) => {
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <InputWrapper
      data-testid={dataTestid}
      type={_type}
      placeholder={_placeholder}
      value={_value}
      _width={_width}
      _height={_height}
      onChange={handleChange}
    />
  );
};

const InputWrapper = styled.input<{ _width: string; _height: string }>`
  color: #333835;
  font-size: 17px;
  font-weight: 400;

  width: ${({ _width }) => `${_width}`};
  height: ${({ _height }) => `${_height}`};
  padding: 0 20px;

  border-radius: 20px;
  border: 0.5px solid #cccac8;

  &:focus {
    outline: none;
  }
`;

export default InputComponent;
