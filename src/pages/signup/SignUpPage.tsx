import React, { useState } from "react";
import styled from "styled-components";

// components
import { Button, Input } from "components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(
        "/auth/signup",
        { email, password },
        { headers: { "Content-Type": `application/json` } }
      )
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <SignUpWrapper>
      <Input
        dataTestid="email-input"
        _placeholder="이메일"
        _value={email}
        setValue={setEmail}
      />
      <Input
        dataTestid="email-input"
        _type="password"
        _placeholder="비밀번호"
        _value={password}
        setValue={setPassword}
      />
      <Button
        dataTestid="signup-button"
        text="회원가입"
        _disabled={!email.includes("@") || password.length < 8}
        _onClick={handleSubmit}
      />
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SignUpPage;
