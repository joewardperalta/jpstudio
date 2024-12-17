export default function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={`py-5 px-14 rounded-full text-medium w-fit font-medium ${className}`}
    >
      {children}
    </button>
  );
}
