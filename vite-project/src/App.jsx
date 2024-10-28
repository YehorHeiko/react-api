import React, { useState, useEffect } from "react";
import axios from "axios"; // Подключаем Axios

function App() {
  const [statiy, setStatiy] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setStatiy(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
      <div>
          {statiy.map((e) => (
            <span key={e.id}>{e.id} love Taisiia </span>
          ))}
      </div>
  )
}
export default App;
