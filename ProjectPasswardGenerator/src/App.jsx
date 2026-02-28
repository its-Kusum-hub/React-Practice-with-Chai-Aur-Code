import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  const passwardGenerator = () => {};

  return (
    <>
      <h1 className="text-4xl text-center text-white">Passward Generator</h1>
    </>
  );
}

export default App;
