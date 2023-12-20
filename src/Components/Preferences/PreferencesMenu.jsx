import Preference from './Preference.jsx';
import InputPreference from './PreferenceTypes/InputPreference.jsx';
import RadioPreference from './PreferenceTypes/RadioPreference.jsx';
import CheckboxPreference from './PreferenceTypes/CheckboxPreference.jsx';

export default function PreferencesMenu({
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
  const {
    theme,
    sortType,
    showTodos,
    hideBanner,
    hideLastDeletedTodoNotifications,
    hideSearchBar,
    date,
  } = preferences;
  const { firstName } = user;

  return (
    <div className="flex flex-col gap-6">
      <Preference>
        <InputPreference
          firstName={firstName}
          handleFirstName={handleFirstName}
        >
          First name:
        </InputPreference>
      </Preference>
      <p className="dark:text-gray-400 text-sm">Theme:</p>
      <Preference>
        <RadioPreference
          selected={theme === 'os'}
          onClick={(event) => handleTheme(event, 'os')}
        >
          System
        </RadioPreference>
        <RadioPreference
          selected={theme === 'light'}
          onClick={(event) => handleTheme(event, 'light')}
        >
          Light
        </RadioPreference>
        <RadioPreference
          selected={theme === 'dark'}
          onClick={(event) => handleTheme(event, 'dark')}
        >
          Dark
        </RadioPreference>
      </Preference>
      <Preference>
        <CheckboxPreference
          selected={hideBanner}
          onClick={(event) => handleHideBanner(event, !hideBanner)}
        >
          Hide "Created by" banner
        </CheckboxPreference>
      </Preference>
      <Preference>
        <CheckboxPreference
          selected={hideSearchBar}
          onClick={(event) => handleHideSearchBar(event, !hideSearchBar)}
        >
          Hide search bar
        </CheckboxPreference>
      </Preference>
      <Preference>
        <CheckboxPreference
          selected={hideLastDeletedTodoNotifications}
          onClick={(event) =>
            handleHideLastDeletedTodoNotifications(
              event,
              !hideLastDeletedTodoNotifications,
            )
          }
        >
          Hide "Deleted to-do." notifications
        </CheckboxPreference>
      </Preference>
      <p className="dark:text-gray-400 text-sm">
        NOTE: If you hide "Deleted to-do." notifications and delete any to-do by
        mistake, you won't be able to recover your last to-do.
      </p>
      <p className="dark:text-gray-400 text-sm">Date/Time:</p>
      <Preference>
        <RadioPreference
          selected={date === 'hide'}
          onClick={(event) => handleDate(event, 'hide')}
        >
          Hide
        </RadioPreference>
        <RadioPreference
          selected={date === 'date'}
          onClick={(event) => handleDate(event, 'date')}
        >
          Date
        </RadioPreference>
        <RadioPreference
          selected={date === 'time'}
          onClick={(event) => handleDate(event, 'time')}
        >
          Time
        </RadioPreference>
        <RadioPreference
          selected={date === 'full'}
          onClick={(event) => handleDate(event, 'full')}
        >
          Full
        </RadioPreference>
      </Preference>
      <p className="dark:text-gray-400 text-sm">Sort type:</p>
      <Preference>
        <RadioPreference
          selected={sortType === 'date'}
          onClick={(event) => handleSortType(event, 'date')}
        >
          Date
        </RadioPreference>
        <RadioPreference
          selected={sortType === 'name'}
          onClick={(event) => handleSortType(event, 'name')}
        >
          Name
        </RadioPreference>
      </Preference>
      <p className="dark:text-gray-400 text-sm">Show todos:</p>
      <Preference>
        <RadioPreference
          selected={showTodos === 'all'}
          onClick={(event) => handleShowTodos(event, 'all')}
        >
          All
        </RadioPreference>
        <RadioPreference
          selected={showTodos === 'active'}
          onClick={(event) => handleShowTodos(event, 'active')}
        >
          Active
        </RadioPreference>
        <RadioPreference
          selected={showTodos === 'completed'}
          onClick={(event) => handleShowTodos(event, 'completed')}
        >
          Completed
        </RadioPreference>
      </Preference>
    </div>
  );
}
