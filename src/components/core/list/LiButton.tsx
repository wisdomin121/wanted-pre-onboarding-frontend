import React from "react";
import styled from "styled-components";

// types
import type { ILiButton } from "types";

// components
import { Button } from "components";

const LiButton = ({
  isEdit,
  submitOnClick,
  editOnClick,
  cancelOnClick,
  deleteOnClick,
}: ILiButton) => {
  return (
    <ButtonWrapper>
      <Button
        dataTestid={isEdit ? "submit-button" : "modify-button"}
        text={isEdit ? "제출" : "수정"}
        _width="fit-content"
        _height="fit-content"
        _onClick={isEdit ? submitOnClick : editOnClick}
      />
      <Button
        dataTestid={isEdit ? "cancel-button" : "delete-button"}
        text={isEdit ? "취소" : "삭제"}
        _width="fit-content"
        _height="fit-content"
        _onClick={isEdit ? cancelOnClick : deleteOnClick}
      />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;

  margin: 0 0 0 auto;
`;

export default LiButton;
