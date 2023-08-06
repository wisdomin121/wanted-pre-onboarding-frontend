import React, { useState } from "react";
import styled from "styled-components";

// components
import { Li } from "components";

// apis
import { updateTodo } from "apis/put";
import { deleteTodo } from "apis/delete";

// type
import { ICheckTodo } from "types";

const TodoList = ({ list, setList, checkedId, setCheckedId }: ICheckTodo) => {
  const [nowEditId, setNowEditId] = useState<number | undefined>();
  const [editTodo, setEditTodo] = useState<string>("");

  return (
    <TodoListWrapper>
      <TodoScrollWrapper>
        {list.length > 0 &&
          list.map((v: any, i: number) => {
            return (
              <Li
                key={i}
                text={v.todo}
                _checked={checkedId.includes(v.id)}
                isEdit={nowEditId != null && nowEditId === v.id}
                _onChange={() => {
                  updateTodo({
                    id: v.id,
                    todo: v.todo,
                    isCompleted: !v.isCompleted,
                    checkedId,
                    setCheckedId,
                  });
                }}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                editOnClick={() => {
                  setEditTodo(v.todo);
                  setNowEditId(v.id);
                }}
                deleteOnClick={() => {
                  deleteTodo({ id: v.id, list, setList });
                }}
                submitOnClick={() => {
                  updateTodo({
                    id: v.id,
                    todo: editTodo,
                    isCompleted: v.isCompleted,
                    list,
                    setList,
                  });
                  setNowEditId(undefined);
                }}
                cancelOnClick={() => {
                  setNowEditId(undefined);
                }}
              />
            );
          })}
      </TodoScrollWrapper>
    </TodoListWrapper>
  );
};

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

export default TodoList;
