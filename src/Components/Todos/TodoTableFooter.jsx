import { useState } from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
import PlusCircle from '../Icons/PlusCircle.jsx';

export default function TodoTableFooter({ handleAddTodo }) {
  const [todoContent, setTodoContent] = useState('');

  function handleAddTodoLocal(event, todoContent) {
    handleAddTodo(event, todoContent);
    setTodoContent('');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddTodoLocal(event, todoContent);
    }
  }

  return (
    <div className="w-full flex gap-3 md:gap-6">
      <div className="w-1/12 flex justify-center"></div>
      <div className="w-10/12">
        <input
          type="text"
          name="todoContent"
          id="todoContent"
          className="rounded w-full bg-gray-100 dark:bg-gray-700 dark:text-white px-3"
          placeholder="Add new todo from here..."
          value={todoContent}
          onChange={(event) => setTodoContent(event.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="w-1/12 flex gap-3 justify-center">
        <a
          href="#"
          onClick={(event) => handleAddTodoLocal(event, todoContent)}
          className="text-gray-700 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-200 transition-all duration-200"
        >
          <PlusCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
