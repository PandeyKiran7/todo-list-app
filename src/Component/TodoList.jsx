import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      task: "Fan",
      completed: true,
    },
    {
      id: 2,
      task: "Washing Machine",
      completed: false,
    },
  ]);

  const [task, setTask] = useState("");

  // To add new products
  const addProduct = (e) => {
    e.preventDefault();
    if (!task) return; // Prevent adding empty tasks
    const newProduct = {
      id: Date.now(),
      task,
      completed: false,
    };
    setProducts([...products, newProduct]);
    setTask("");
  };

  // To remove Product
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleCompleted = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, completed: !product.completed };
        } else {
          return product;
        }
      })
    );
  };

  return (
    <div className="todo-list p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <TodoItem
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <form onSubmit={addProduct} className="mt-4 flex">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new product"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white mx-10 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default TodoList;
