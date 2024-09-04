import React from "react";

const TodoItem = ({ product, removeProduct, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(product.id);
  };

  return (
    <div className="todo-item flex items-center space-x-4 py-2">
      <input
        type="checkbox"
        checked={product.completed}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <p className={`flex-1 ${product.completed ? 'line-through text-gray-500' : ''}`}>
        {product.task}
      </p>
      <button
        onClick={() => removeProduct(product.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
