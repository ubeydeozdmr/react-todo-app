import SwitchVertical from '../Icons/SwitchVertical.jsx';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function TodoTableHeader({
  hideSearchBar,
  handleSearchContent,
  sortDesc,
  handleSortDesc,
}) {
  return (
    <div className="w-full flex gap-3 md:gap-6">
      <div className="w-1/12 flex justify-center"></div>
      <div className="w-10/12 flex justify-end">
        {!hideSearchBar && (
          <input
            type="text"
            name="searchTodo"
            id="searchTodo"
            className="rounded px-3 bg-gray-100 dark:bg-gray-700 dark:text-white w-full md:w-auto"
            placeholder="Search todo"
            onChange={handleSearchContent}
          />
        )}
      </div>
      <div className="w-1/12 flex gap-3 justify-center">
        <a
          href="#"
          onClick={(event) => handleSortDesc(event, !sortDesc)}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200"
        >
          <SwitchVertical className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
