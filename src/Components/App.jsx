import { useState, useEffect } from 'react';

import TodoTable from './Todos/TodoTable.jsx';
import Preferences from './Preferences/Preferences.jsx';
import Banner from './Banner.jsx';

const STARTER_DATA = {
  version: 2,
  // todos: [
  //   // NOTE: This is just a test object for development.
  //   {
  //     id: 929307412003,
  //     content: 'Run for 5 kilometers',
  //     date: 1660329584961,
  //     completed: false,
  //   },
  //   {
  //     id: 162381830310,
  //     content: 'Check emails',
  //     date: 1660329438631,
  //     completed: true,
  //   },
  //   {
  //     id: 325332161656,
  //     content: 'Pay for rent',
  //     date: 1660329420947,
  //     completed: false,
  //   },
  //   {
  //     id: 526919297563,
  //     content: 'Drink a glass of water',
  //     date: 1659808439557,
  //     completed: false,
  //   },
  //   {
  //     id: 552267099247,
  //     content: 'Wash the dishes',
  //     date: 1659808434612,
  //     completed: true,
  //   },
  //   {
  //     id: 393829242937,
  //     content: 'Buy Minecraft Java&Bedrock Edition',
  //     date: 1659808426168,
  //     completed: false,
  //   },
  //   {
  //     id: 864336467614,
  //     content: "Finish Plato's Republic",
  //     date: 1659808404208,
  //     completed: false,
  //   },
  //   {
  //     id: 604908128095,
  //     content: "Finish Sofie's World",
  //     date: 1659808379333,
  //     completed: true,
  //   },
  // ],
  todos: [],
  preferences: {
    theme: 'os' /* light, dark, os */,
    sortType: 'date' /* date, name */,
    showTodos: 'all' /* all, active, completed */,
    sortDesc: false,
    hideBanner: false,
    hideLastDeletedTodoNotifications: false,
    hideSearchBar: false,
    date: 'hide' /* hide, date, time, full */,
  },
  user: {
    firstName: null,
  },
};

export default function App() {
  const [data, setData] = useState(() => {
    const localStorageData = JSON.parse(localStorage.getItem('data'));

    if (localStorageData) {
      if (localStorageData.version === STARTER_DATA.version) {
        return localStorageData;
      } else {
        return STARTER_DATA;
      }
    } else {
      return STARTER_DATA;
    }
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));

    switch (data.preferences.theme) {
      case 'os':
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? document.querySelector('html').classList.add('dark')
          : document.querySelector('html').classList.remove('dark');
        break;
      case 'light':
        document.querySelector('html').classList.remove('dark');
        break;
      case 'dark':
        document.querySelector('html').classList.add('dark');
        break;
      default:
        break;
    }
  }, [data]);

  function handleFirstName(event) {
    setData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        firstName: event.target.value,
      },
    }));
  }

  const handleTheme = (event, theme) => {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme,
      },
    }));
  };

  function handleHideBanner(event, hideBanner) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        hideBanner,
      },
    }));
  }

  function handleHideSearchBar(event, hideSearchBar) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        hideSearchBar,
      },
    }));
  }

  function handleHideLastDeletedTodoNotifications(
    event,
    hideLastDeletedTodoNotifications,
  ) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        hideLastDeletedTodoNotifications,
      },
    }));
  }

  function handleDate(event, date) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        date,
      },
    }));
  }

  function handleSortType(event, sortType) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        sortType,
      },
    }));
  }

  function handleShowTodos(event, showTodos) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        showTodos,
      },
    }));
  }

  function handleSortDesc(event, sortDesc) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        sortDesc,
      },
    }));
  }

  function handleAddTodo(event, content) {
    event.preventDefault();

    if (content.trim() === '') content = 'Blank to-do';

    const newTodo = {
      id: Math.round(Math.random() * 1000000000000),
      content,
      date: Date.now(),
      completed: false,
    };

    setData((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  }

  function handleCompleteTodo(event, id) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  }

  function handleEditTodo(event, id, content) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, content } : todo,
      ),
    }));
  }

  function handleDeleteTodo(
    event,
    id,
    // showLastDeletedTodoNotification = false,
  ) {
    event.preventDefault();

    setData((prev) => ({
      ...prev,
      todos: prev.todos.filter((todo) => todo.id !== id),
      // lastDeletedTodo: prev.todos.find((todo) => todo.id === id),
      // showLastDeletedTodoNotification,
    }));
  }

  function handleRecoverTodo(event, deletedTodo) {
    event.preventDefault();

    const recoverTodo = {
      id: deletedTodo.id,
      content: deletedTodo.content,
      date: deletedTodo.date,
      completed: deletedTodo.completed,
    };

    setData((prev) => ({
      ...prev,
      todos: [...prev.todos, recoverTodo],
    }));
  }

  return (
    <>
      <div className='p-6 md:p-12 gap-6 md:gap-12 flex flex-col'>
        <TodoTable
          firstName={data.user.firstName}
          hideSearchBar={data.preferences.hideSearchBar}
          todos={data.todos}
          sortType={data.preferences.sortType}
          sortDesc={data.preferences.sortDesc}
          showTodos={data.preferences.showTodos}
          handleSortDesc={handleSortDesc}
          datePref={data.preferences.date}
          handleAddTodo={handleAddTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleRecoverTodo={handleRecoverTodo}
          hideLastDeletedTodoNotifications={
            data.preferences.hideLastDeletedTodoNotifications
          }
        />
        <Preferences
          preferences={data.preferences}
          user={data.user}
          handleFirstName={handleFirstName}
          handleTheme={handleTheme}
          handleHideBanner={handleHideBanner}
          handleHideSearchBar={handleHideSearchBar}
          handleHideLastDeletedTodoNotifications={
            handleHideLastDeletedTodoNotifications
          }
          handleDate={handleDate}
          handleSortType={handleSortType}
          handleShowTodos={handleShowTodos}
        />
      </div>
      <div className='mt-4'></div>
      {!data.preferences.hideBanner && <Banner />}
    </>
  );
}
