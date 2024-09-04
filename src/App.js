import React from "react"
import "./index.css"
import TodoList from "./Component/TodoList";
function App() {
  return (
    <div  className="flex flex-col max-w-4xl h-auto items-center justify-center my-10 mx-auto px-20 py-10 shadow-md bg-white rounded-lg">
      <h3 className="text-4xl text-center mb-6 font-serif font-bold">TODO List</h3>
      <TodoList/>
    </div>
  );
}

export default App;
