import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn React",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn React",
      isCompleted: true,
    },
    {
      id: 5,
      text: "Learn React",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo}/>
      ))}
    </ul>
  );
}
