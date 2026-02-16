import { ProctorApp, getStatistics } from "react_proctoring_library";


function Test() {
  return (
    <div>
      <h1>Proctoring Window</h1>
    </div>
  );
}

function App() {
  const proctoringIdentifier = "unique-proctoring-identifier";

  const handleGetStats = (e) => {
    e.preventDefault();
    const stats = getStatistics(proctoringIdentifier);
    console.log(stats);
  };

  return (
    <div className="App">
      <ProctorApp proctoringIdentifier={proctoringIdentifier}>
        <Test />
      </ProctorApp>

      <button onClick={handleGetStats}>Get Statistics</button>
    </div>
  );
}

export default App;
