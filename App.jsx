import React from "react";
import ToDo from "./ToDo";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>React To-Do List</h1>
      <ToDo />
    </div>
  );
};

export default App;