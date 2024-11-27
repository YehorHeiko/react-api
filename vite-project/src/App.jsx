import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState(0);


  useEffect(() => {
  console.log('useEffect');
  
  }, []);

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState((prevCount) => prevCount + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setState((prevCount) => prevCount - 1);
        }}
      >
        Minus
      </button>
    </div>
  );
}
export default App;
