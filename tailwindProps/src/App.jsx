import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "hitesh",
    age: 22,
  };

  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl">Tailwid test</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        <Card username="chai aur code" btnText="Follow" />
        <Card username="kusum" />
        <Card username="rajesh" age="21" />
      </div>
    </>
  );
}

export default App;
