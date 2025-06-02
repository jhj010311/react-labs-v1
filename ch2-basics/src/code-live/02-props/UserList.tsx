const users = [
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
    { id: 3, name: "박유저" },
];

export default function UserList() {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            {/* forEach는 반환값이 없기 때문에 이런 용도로는 사용 불가 */}
            {/* key={user.id}가 있어야 식별값이 생김 >> 리엑트에서 성능 저하 같은 이슈 방지 */}
        </ul>
    );
}
