import { useEffect, useState } from "react";
import styles from "./ff.module.css"
function App() {
  const [state, setState] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => {
        setAnimate(false)
        
    }, 300);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <div>
      <h1 
       className={animate ? styles.animate : ''}
      >{state}</h1>
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
