import React from "react";
import { DeleteButton, Root, StyledCheckbox, TodoTypo } from "./styled";
import { useNavigate } from "react-router-dom";

/**
 * @prop id: TodoItem id(pk)
 * @prop isChecked: TodoItem 토글 여부(boolean)
 * @prop onToggleTodoItem: TodoItem 토글시 호출하는 function
 * @prop todoValue: todoItem value(string)
 * @prop onDeleteTodoItem: TodoItem 삭제시 호출하는 function
 */
export const TodoItem = ({
  id,
  isChecked,
  onToggleTodoItem,
  todoValue,
  onDeleteTodoItem,
}) => {
  const navigate = useNavigate();

  const onClickTodoTypo = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Root>
      <StyledCheckbox
        checked={isChecked}
        onChange={onToggleTodoItem}
        type="checkbox"
      />
      <TodoTypo onClick={onClickTodoTypo}>{todoValue}</TodoTypo>
      <DeleteButton onClick={onDeleteTodoItem}>삭제</DeleteButton>
    </Root>
  );
};
