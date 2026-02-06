import { ComponentA as EntriApp, ComponentB, ComponentC, ComponentD } from "./componentA";

function App() {
  const status = "working";
  // JS Statement - Iteral(String)
  console.log(`JS ${status}..`);

  // JSX Expression - {}

  // const greetings = 5 + 5;

  function Greetings() {
    return <h1>Say Hello To everyone</h1>;
  }

  return (
    <div>
      {/* React Element */}
      <Greetings />
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </div>
  );
}

export default App;
