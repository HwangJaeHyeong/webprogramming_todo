import { useState } from "react";
import { Input } from "../../components/Input";
import { TodoItem } from "../../components/TodoItem";
import { Root } from "./styled";

let count = 1;

export const MainPage = () => {
  const [todoListData, setTodoListData] = useState([{ id: 0, title: "투두1" }]);
  const [inputValue, setInputValue] = useState(0);
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const onCreateTodoItem = () => {
    setTodoListData((prev) => prev.concat({ id: count, title: inputValue }));
    setInputValue("");
    count++;
  };
  return (
    <Root>
      <Input
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        onCreateTodoItem={onCreateTodoItem}
      />
      {todoListData.map((todoItemData) => (
        <TodoItem
          title={todoItemData.title}
          key={`todo_item_${todoItemData.id}`}
        />
      ))}
    </Root>
  );
};
