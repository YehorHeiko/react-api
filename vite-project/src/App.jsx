import React, { useState, useEffect } from "react";
import axios from "axios"; // Подключаем Axios

function App() {
  const [statiy, setStatiy] = useState([]);
  const [newStatiy, setNewStatiy] = useState({ title: "", body: "" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setStatiy(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <h1>
        {statiy.map((e) => (
          <h1 key={e.id}>{e.id}</h1>
          <div>{e.value}</div>
          <div>{e.target}</div>
        ))}
      </h1>
    </div>
  );
}
export default App;
