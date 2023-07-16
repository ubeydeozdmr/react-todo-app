import { useState } from 'react';

import TodoTableHeader from './TodoTableHeader.jsx';
import TodoTableContent from './TodoTableContent.jsx';
import TodoTableFooter from './TodoTableFooter.jsx';

export default function TodoTable({
  firstName,
  hideSearchBar,
  todos,
  sortType,
  sortDesc,
  showTodos,
  handleSortDesc,
  datePref,
  handleAddTodo,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
  handleRecoverTodo,
  hideLastDeletedTodoNotifications,
}) {
  const [searchContent, setSearchContent] = useState('');

  function handleSearchContent(event) {
    setSearchContent(event.target.value);
  }

  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-4xl font-bold dark:text-gray-200'>
          {firstName ? `Hello, ${firstName}` : 'Crema To-Do'}
        </h1>
      </div>
      {todos.length === 0 ? (
        <p className='dark:text-gray-300'>
          You didn't add any to-do. To create your first to-do, type below then
          hit enter or the + sign.
        </p>
      ) : (
        <TodoTableHeader
          hideSearchBar={hideSearchBar}
          handleSearchContent={handleSearchContent}
          sortDesc={sortDesc}
          handleSortDesc={handleSortDesc}
        />
      )}

      <TodoTableContent
        todos={todos}
        datePref={datePref}
        searchContent={searchContent}
        sortType={sortType}
        sortDesc={sortDesc}
        showTodos={showTodos}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleRecoverTodo={handleRecoverTodo}
        hideLastDeletedTodoNotifications={hideLastDeletedTodoNotifications}
      />
      <TodoTableFooter handleAddTodo={handleAddTodo} />
    </div>
  );
}
