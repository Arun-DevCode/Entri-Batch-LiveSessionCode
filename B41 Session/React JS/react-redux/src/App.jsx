import CounterInput from "./components/CounterDisplay";
import CounterProvider from "./context/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <CounterInput />
    </CounterProvider>
  );
}

export default App;
