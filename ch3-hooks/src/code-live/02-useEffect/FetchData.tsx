import { useEffect, useState } from "react";

type Todo = {
    userId: number;
    title: string;
    completed: boolean;
};

export default function FetchData() {
    const [todo, setTodo] = useState<Todo | null>();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((data) => setTodo(data));
    }, []);

    return (
        <div>
            <ul>
                {todo ? (
                    <div>
                        <p>id: {todo.userId}</p>
                        <p>title: {todo.title}</p>
                    </div>
                ) : (
                    <p>로딩중...</p>
                )}
            </ul>
        </div>
    );
}
