import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// components
import { Button, Input, Li } from "components";

// apis
import { getTodos, createTodo } from "apis";
import { updateTodo } from "apis/put";
import { deleteTodo } from "apis/delete";

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
      <TodoInputWrapper>
        <Input
          dataTestid="new-todo-input"
          _placeholder="오늘의 할 일을 적어주세요"
          _value={todo}
          setValue={setTodo}
          _width="100%"
        />
        <Button
          dataTestid="new-todo-add-button"
          text="등록하기"
          _width="125px"
          _onClick={() => {
            createTodo({ todo, setTodo, setList });
          }}
        />
      </TodoInputWrapper>

      <TodoListWrapper>
        <TodoScrollWrapper>
          {list.length > 0 &&
            list.map((v: any, i: number) => {
              return (
                <Li
                  key={i}
                  text={v.todo}
                  _checked={checkedId.includes(v.id)}
                  _onChange={(e) => {
                    updateTodo({
                      id: v.id,
                      todo: v.todo,
                      isCompleted: !v.isCompleted,
                      checkedId,
                      setCheckedId,
                    });
                  }}
                  deleteOnClick={() => {
                    deleteTodo({ id: v.id, list, setList });
                  }}
                />
              );
            })}
        </TodoScrollWrapper>
      </TodoListWrapper>
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

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 4px;

  width: 100%;
`;

const TodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 60px);
  height: 400px;
  padding: 20px 30px;

  border: 0.5px solid #cccac8;
  border-radius: 20px;
`;

const TodoScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export default TodoPage;
