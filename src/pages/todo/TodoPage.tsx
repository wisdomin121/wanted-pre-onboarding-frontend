import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { TodoInput, TodoList } from "components";

// apis
import { getTodos } from "apis";

const TodoPage = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<any[]>([]);
  const [checkedId, setCheckedId] = useState<number[]>([]);

  // access_token 없으면 리다이렉트
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  }, [navigate]);

  // 페이지 로드시 저장되어 있는 투두리스트 불러오기
  // 이미 체크 되어 있는 투두 checkedId로 분리
  useEffect(() => {
    getTodos(setList, setCheckedId);
  }, []);

  return (
    <TodoWrapper>
      <TodoInput todo={todo} setTodo={setTodo} list={list} setList={setList} />

      <TodoList
        list={list}
        setList={setList}
        checkedId={checkedId}
        setCheckedId={setCheckedId}
      />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  width: 425px;
`;

export default TodoPage;
