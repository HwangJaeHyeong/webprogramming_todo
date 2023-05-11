import React from "react";
import { Root, StyledInput, SubmitButton } from "./styled";

/**
 * @prop inputValue: input의 value state
 * @prop onChange: input의 value가 변경될 때 실행되는 function
 * @prop onCreateTodoItem: todoItem을 생성할 때 실행되는 function
 */
export const Input = ({ inputValue, onChange, onCreateTodoItem }) => {
  const onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      onCreateTodoItem();
    }
  };

  return (
    <Root>
      <StyledInput
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyPressEnter}
      />
      <SubmitButton onClick={onCreateTodoItem}>추가</SubmitButton>
    </Root>
  );
};
