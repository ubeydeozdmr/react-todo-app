/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Notification({
  showLastDeletedTodoNotification,
  handleRecoverTodo,
  deletedTodo,
}) {
  function handleCloseNotification(event) {
    event.preventDefault();
    showLastDeletedTodoNotification(false);
  }

  function handleUndo(event) {
    handleRecoverTodo(event, deletedTodo);
    showLastDeletedTodoNotification(false);
  }

  return (
    <div className='absolute flex justify-between content-center bottom-8 left-3 right-3 md:left-1/3 md:right-1/3 bg-red-300 px-5 py-3 rounded'>
      <p className='inline-block py-1'>Deleted to-do.</p>
      <div className='flex gap-3'>
        <button className='bg-white rounded px-2 py-1' onClick={handleUndo}>
          UNDO
        </button>
        <a
          href='#'
          className='px-2 py-1 font-bold'
          onClick={handleCloseNotification}
        >
          &#9587;
        </a>
      </div>
    </div>
  );
}
