import React from "react";
import styled from "styled-components";

export default function TodoInput(props) {
  const { date, todo, onChangeTodo, onChangeDate, addItem } = props;
  // value 값이 처음에 없어서 undefined가 되면 오류가 발생할 수 있다고하므로, || ""을 추가해준다.
  return (
    <Wrapper onSubmit={addItem}>
      <DateWrapper>
        <DateDesc>시간</DateDesc>
        <DateInput
          placeholder="날짜를 입력하세요 (ex.20200425)"
          type="number"
          value={date || ""}
          onChange={onChangeDate}
        ></DateInput>
      </DateWrapper>
      <TodoWrapper>
        <TodoDesc>TODO</TodoDesc>
        <TodoInputText
          placeholder="할 일을 입력하세요 (ex.현우 생일 파티)"
          value={todo || ""}
          onChange={onChangeTodo}
        ></TodoInputText>
      </TodoWrapper>
      <RegisterBtn>등록</RegisterBtn>
    </Wrapper>
  );
}
export const MemoizedTodoInput = React.memo(TodoInput);

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 37rem;
  flex: 1 1 0%;
  padding: 1rem 2rem;
  border: solid 1px black;
  font-size: 18px;
  flex: 1;
`;

const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const DateDesc = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const DateInput = styled.input`
  width: 80%;
  border: 1px solid rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const TodoDesc = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const TodoInputText = styled.textarea.attrs({})`
  width: 80%;
  height: 30vh;
  border: 1px solid rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const RegisterBtn = styled.button`
  color: white;
  background: rgb(97, 97, 97);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
`;
