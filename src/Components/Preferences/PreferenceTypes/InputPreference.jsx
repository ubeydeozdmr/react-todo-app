export default function InputPreference({
  children,
  firstName,
  handleFirstName,
}) {
  return (
    <>
      <label htmlFor="firstName" className="dark:text-gray-400 text-sm">
        {children}
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        className="rounded bg-gray-100 dark:bg-gray-700 dark:text-white px-3"
        placeholder="Your first name"
        value={firstName}
        onChange={handleFirstName}
      />
    </>
  );
}
