import CheckSquare from '../../Icons/CheckSquare.jsx';
import Square from '../../Icons/Square.jsx';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function CheckboxPreference({ children, selected, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 flex gap-3 text-sm"
    >
      {selected ? <CheckSquare /> : <Square />}
      <p>{children}</p>
    </a>
  );
}
