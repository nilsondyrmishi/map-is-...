import runAccessTest from "./exercises/accessingData";
import runDataMappingTest from "./exercises/mappingData";
import MappingComponents from "./exercises/MappingComponents";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/practice")
      .then((r) => r.json())
      .then((res) => {
        setState(res);
      });
  }, []);

  if (!state) return null;
  runAccessTest(state);
  runDataMappingTest(state);

  return (
    <main className="App">
      <MappingComponents practiceShape={state} />
    </main>
  );
}

export default App;
