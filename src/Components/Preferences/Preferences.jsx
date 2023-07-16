import { useState } from 'react';

import ChevronBottom from '../Icons/ChevronBottom.jsx';
import ChevronRight from '../Icons/ChevronRight.jsx';
import PreferencesMenu from './PreferencesMenu.jsx';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Preferences({
  preferences,
  user,
  handleFirstName,
  handleTheme,
  handleHideBanner,
  handleHideSearchBar,
  handleHideLastDeletedTodoNotifications,
  handleDate,
  handleSortType,
  handleShowTodos,
}) {
  const [expandPreferences, setExpandPreferences] = useState(false);

  function handleExpandPreferences(event) {
    event.preventDefault();

    setExpandPreferences((status) => !status);
  }

  return (
    <div className='flex flex-col gap-6'>
      <a href='#' onClick={handleExpandPreferences}>
        <h2 className='text-md text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 flex gap-3'>
          {expandPreferences ? <ChevronBottom /> : <ChevronRight />} Preferences
        </h2>
      </a>
      {expandPreferences && (
        <PreferencesMenu
          preferences={preferences}
          user={user}
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
      )}
    </div>
  );
}
