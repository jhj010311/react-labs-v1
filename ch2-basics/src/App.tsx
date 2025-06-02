import "./App.css";
import CounterLive from "./code-live/03-state-events/Counter";
import LIveShowInputLive from "./code-live/03-state-events/LiveShowInput";
import Button from "./labs/02-props/Button";
import Greeting from "./labs/02-props/Greeting";
import Profile from "./labs/02-props/Profile";
import UserList from "./labs/02-props/UserList";
import Welcome from "./labs/02-props/Welcome";
import Wrapper from "./labs/02-props/Wrapper";
import TodoListLab from "./labs/03-state-events/TodoListLab";

function App() {
    return (
        <>
            <h1>lab2-1 Greeting</h1>
            <Greeting name="홍길동" />

            <h1>lab2-2 Profile</h1>
            <Profile name="홍길동" age={30} />

            <h1>lab2-3 Welcome</h1>
            <Welcome nickname="jazzjack" />
            <Welcome />

            <h1>lab2-4 Wrapper</h1>
            <Wrapper children={<h6>child1</h6>} />
            <Wrapper children={<p>child2</p>} />

            <h1>lab2-5 Button</h1>
            <Button title="버튼1" onClick={() => alert("버튼1")} />

            <h1>lab2-6 UserList</h1>
            <UserList
                userList={[
                    { id: 1, name: "윤유저" },
                    { id: 2, name: "김유저" },
                    { id: 3, name: "이유저" },
                ]}
            />

            <hr />

            <h1>live3-1 Count</h1>
            <CounterLive />

            <h1>live3-2 LiveShowInput</h1>
            <LIveShowInputLive />

            <hr />

            <h1>lab3-3 TodoList</h1>
            <TodoListLab />
        </>
    );
}

export default App;
