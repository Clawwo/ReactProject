import { createRoot } from "react-dom/client";
import HelloWorld from "./Hello";
import Container from "./Container";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Container>
            <HelloWorld></HelloWorld>
            <TodoList></TodoList>
        </Container>
    </StrictMode>
);