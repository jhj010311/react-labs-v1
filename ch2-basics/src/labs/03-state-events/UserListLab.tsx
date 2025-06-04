import { useState } from "react";
import UserItemLab from "./UserItemLab";

type User = {
    id: number;
    name: string;
};

export default function UserListLab() {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "윤유저" },
        { id: 2, name: "김유저" },
    ]);
    const [inputId, setInputId] = useState(1);
    const [inputName, setInputName] = useState("");

    const addUser = () => {
        setUsers([...users, { id: inputId, name: inputName }]);
        setInputId(inputId + 1);
        setInputName("");
    };

    const deleteUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>UserList 컴포넌트</h2>
            <input
                placeholder="유저명"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
            <button onClick={addUser}>추가</button>
            <ul>
                {users.length === 0 ? (
                    <p>유저가 존재하지 않습니다</p>
                ) : (
                    users.map((user) => (
                        <UserItemLab
                            key={user.id}
                            user={user}
                            onDelete={deleteUser}
                        />
                    ))
                )}
            </ul>
        </div>
    );
}
