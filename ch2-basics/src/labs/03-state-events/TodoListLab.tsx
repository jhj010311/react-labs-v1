import React, { useState } from "react";

type Todo = {
    id: number;
    text: string;
};

export default function TodoListLab() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState("");
    const [todoId, setTodoId] = useState(1);

    const addTodo = () => {
        setTodos([...todos, { id: todoId, text: inputText }]);
        setTodoId(todoId + 1);
        setInputText("");
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input
                placeholder="해야할 일"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.length === 0 ? (
                    <p>할 일이 없습니다</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>
                                삭제
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
