export default function SwitchVertical({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className || 'w-6 h-6'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  );
}
