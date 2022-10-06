import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  const names = [
    "Product Development",
    "Project Management",
    "QA Testing",
    "DevOps Engineering",
    "UI/UX Design",
  ];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Code your Future at Archi's Academy 🚀" />
      <h3>Available Content</h3>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
