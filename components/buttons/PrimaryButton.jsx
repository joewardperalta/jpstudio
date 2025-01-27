export default function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={
        className + " w-fit rounded-full px-14 py-5 text-medium font-medium"
      }
    >
      {children}
    </button>
  );
}
