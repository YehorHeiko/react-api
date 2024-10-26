import axios from "axios";
import React, { useState } from "react";



const url = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";

function App() {
  const [res, serRes] = useState(1);
  

  
  return (
    <div>
      <h1>{res}</h1>
    </div>
  );
}

export default App;
