import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// components
import { Button } from "components";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <Button
        text="로그인"
        _onClick={() => {
          navigate("signin");
        }}
      />
      <Button
        text="회원가입"
        _onClick={() => {
          navigate("signup");
        }}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default MainPage;
