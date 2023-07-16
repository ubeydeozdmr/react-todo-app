import { useState, useEffect } from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
import CheckSquare from '../Icons/CheckSquare.jsx';
import Square from '../Icons/Square.jsx';
import Trash from '../Icons/Trash.jsx';

import Notification from '../Notification.jsx';

export default function TodoTableContent({
  todos,
  datePref,
  searchContent,
  sortType,
  sortDesc,
  showTodos,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
  handleRecoverTodo,
  hideLastDeletedTodoNotifications,
}) {
  const [deletedTodo, setDeletedTodo] = useState(null);
  const [showLastDeletedTodoNotification, setShowLastDeletedTodoNotification] =
    useState(false);

  useEffect(() => {
    if (deletedTodo) {
      setShowLastDeletedTodoNotification(true);

      setTimeout(() => {
        setShowLastDeletedTodoNotification(false);
        setDeletedTodo(null);
      }, 7000);
    }
  }, [deletedTodo]);

  const dateConditions =
    datePref === 'date' || datePref === 'time' || datePref === 'full';

  function formatDate(date) {
    switch (datePref) {
      case 'date':
        return new Date(date).toLocaleDateString();
      case 'time':
        return new Date(date).toLocaleTimeString();
      case 'full':
        return new Date(date).toLocaleString();
      default:
        return '';
    }
  }

  function handleRearrangeTodos(todos, sortType, sortDesc) {
    if (sortType === 'date') {
      if (sortDesc) {
        return todos.sort((a, b) => b.date - a.date);
      } else {
        return todos.sort((a, b) => a.date - b.date);
      }
    } else if (sortType === 'name') {
      if (sortDesc) {
        return todos.sort((a, b) => b.content.localeCompare(a.content));
      } else {
        return todos.sort((a, b) => a.content.localeCompare(b.content));
      }
    }
  }

  function handleFilterTodos(todos, searchContent) {
    if (searchContent === '') {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(searchContent.toLowerCase()),
      );
    }
  }

  function handleFilterCompletedTodos(todos, showTodos) {
    if (showTodos === 'completed') {
      return todos.filter((todo) => todo.completed);
    } else if (showTodos === 'active') {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos;
    }
  }

  const sortedTodos = handleRearrangeTodos(todos, sortType, sortDesc);
  const filteredTodos = handleFilterTodos(sortedTodos, searchContent);
  const filteredCompletedTodos = handleFilterCompletedTodos(
    filteredTodos,
    showTodos,
  );

  const finalTodos = filteredCompletedTodos;

  return (
    <div className='w-full flex flex-col gap-3'>
      {finalTodos.map((todo) => {
        return (
          <div className='w-full flex gap-3 md:gap-6' key={todo.id}>
            <div
              className={`w-1/12 flex justify-center${
                dateConditions ? ' mt-2' : ' mt-0'
              }`}
            >
              <a
                href='#'
                onClick={(event) => handleCompleteTodo(event, todo.id)}
                className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200'
              >
                {todo.completed ? <CheckSquare /> : <Square />}
              </a>
            </div>
            <div className='w-10/12'>
              <input
                type='text'
                name={todo.id}
                id={todo.id}
                value={todo.content}
                onChange={(e) => handleEditTodo(e, todo.id, e.target.value)}
                className={`w-full dark:bg-gray-800 dark:text-gray-300${
                  todo.completed
                    ? ' line-through text-gray-400 dark:text-gray-600'
                    : ''
                }`}
              />
              {dateConditions && (
                <p
                  className={`text-xs text-gray-800 dark:text-gray-400 ${
                    todo.completed ? 'text-gray-300 dark:text-gray-700' : ''
                  }}`}
                >
                  {formatDate(todo.date)}
                </p>
              )}
            </div>
            <div
              className={`w-1/12 flex gap-3 justify-center${
                dateConditions ? ' mt-2' : ' mt-0'
              }`}
            >
              <a
                href='#'
                onClick={(event) => {
                  setDeletedTodo(todo);
                  handleDeleteTodo(event, todo.id);
                }}
                className='text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200'
              >
                <Trash />
              </a>
            </div>
          </div>
        );
      })}
      {!hideLastDeletedTodoNotifications && showLastDeletedTodoNotification && (
        <Notification
          showLastDeletedTodoNotification={setShowLastDeletedTodoNotification}
          handleRecoverTodo={handleRecoverTodo}
          deletedTodo={deletedTodo}
        />
      )}
    </div>
  );
}
