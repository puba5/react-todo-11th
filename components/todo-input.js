import React, { useState } from "react";
import styled from "styled-components";

export default function TodoInput(props) {
  const { date, todo, onChangeTodo, onChangeDate, addItem } = props;

  return (
    <Wrapper onSubmit={addItem}>
      <Time>
        <TimeText>시간</TimeText>
        <TimeInput
          placeholder="날짜를 입력하세요(ex.20200425)"
          type="number"
          value={date}
          onChange={onChangeDate}
        ></TimeInput>
      </Time>
      <Todo>
        <TodoText>TODO</TodoText>
        <TodoInputText value={todo} onChange={onChangeTodo}></TodoInputText>
      </Todo>
      <RegisterBtn>등록</RegisterBtn>
    </Wrapper>
  );
}

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

const Time = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const TimeText = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const TimeInput = styled.input.attrs({})`
  width: 80%;
  border: 1px solid rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const Todo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const TodoText = styled.p`
  font-size: 1.5rem;
  padding: 0px;
  margin: 0px;
`;

const TodoInputText = styled.input.attrs({
  placeholder: "할 일을 입력하세요(ex.현우 생일)",
})`
  textalign: "right";
  width: 80%;
  height: 30vh;
  resize: none;
  border: 1px solid rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const RegisterBtn = styled.button.attrs({})`
  color: white;
  background: rgb(97, 97, 97);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
`;
