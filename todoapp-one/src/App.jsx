import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
    return (
        <div className="todo-container">
            <AppName></AppName>
            <AddTodo></AddTodo>
            <div>
              <TodoItem1></TodoItem1>
              <TodoItem2></TodoItem2>
            </div>

            <div className="container"></div>
        </div>
    );
}

export default App;
