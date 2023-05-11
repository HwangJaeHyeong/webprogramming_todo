import { useState } from "react";
import { Input } from "../../components/Input";
import { TodoItem } from "../../components/TodoItem";
import { Root, TodoItemContainer } from "./styled";

let count = +localStorage.getItem("todo_list_last_key") ?? 1;

export const MainPage = () => {
  const [todoListData, setTodoListData] = useState(
    JSON.parse(localStorage.getItem("todo_list_data")) ?? []
  );
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const onCreateTodoItem = () => {
    setTodoListData((prev) => {
      const newTodoListData = prev.concat({
        id: count,
        value: inputValue,
        isChecked: false,
      });
      count++;
      setInputValue("");
      localStorage.removeItem("todo_list_data");
      localStorage.removeItem("todo_list_last_key");
      localStorage.setItem("todo_list_data", JSON.stringify(newTodoListData));
      localStorage.setItem("todo_list_last_key", count);
      return newTodoListData;
    });
  };
  const onDeleteTodoItem = (id) => () => {
    setTodoListData((prev) => {
      const newTodoListData = prev.filter(
        (todoItemValue) => todoItemValue.id !== id
      );
      localStorage.removeItem("todo_list_data");
      localStorage.setItem("todo_list_data", JSON.stringify(todoListData));
      return newTodoListData;
    });
  };
  const onToggleTodoItem = (id) => () => {
    setTodoListData((prev) => {
      const newTodoListData = prev.map((todoItemValue) =>
        todoItemValue.id === id
          ? { ...todoItemValue, isChecked: !todoItemValue.isChecked }
          : todoItemValue
      );
      localStorage.removeItem("todo_list_data");
      localStorage.setItem("todo_list_data", JSON.stringify(todoListData));
      return newTodoListData;
    });
  };
  return (
    <Root>
      <Input
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        onCreateTodoItem={onCreateTodoItem}
      />
      <TodoItemContainer>
        {todoListData.map((todoItemData) => (
          <TodoItem
            id={todoItemData.id}
            todoValue={todoItemData.value}
            isChecked={todoItemData.isChecked}
            onDeleteTodoItem={onDeleteTodoItem(todoItemData.id)}
            onToggleTodoItem={onToggleTodoItem(todoItemData.id)}
            key={`todo_item_${todoItemData.id}`}
          />
        ))}
      </TodoItemContainer>
    </Root>
  );
};
