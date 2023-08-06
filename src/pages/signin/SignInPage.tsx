import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Button, Input } from "components";

// apis
import { handleSignIn } from "apis";

const SignInPage = () => {
  const navigate = useNavigate();

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 리다이렉트
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <SignUpWrapper>
      <Input
        dataTestid="email-input"
        _placeholder="이메일"
        _value={email}
        setValue={setEmail}
      />
      <Input
        dataTestid="password-input"
        _type="password"
        _placeholder="비밀번호"
        _value={password}
        setValue={setPassword}
      />
      <Button
        dataTestid="signin-button"
        text="로그인"
        _onClick={() => {
          handleSignIn({ email, password });
        }}
      />
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SignInPage;
