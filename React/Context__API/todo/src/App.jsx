import "./App.css";
import { TodoProvider } from "./Contexts/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Todo";

function App() {
  return (
    <>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
