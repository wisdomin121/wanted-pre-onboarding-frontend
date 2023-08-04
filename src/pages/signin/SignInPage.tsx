/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Button, Input } from "components";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(
        "/auth/signin",
        { email, password },
        { headers: { "Content-Type": `application/json` } }
      )
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

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
        dataTestid="signin-button"
        text="로그인"
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

export default SignInPage;
