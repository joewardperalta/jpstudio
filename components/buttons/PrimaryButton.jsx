import Button from "./button";

export default function PrimaryButton({ children, className = "" }) {
  return (
    <Button
      className={`py-5 px-14 rounded-full text-medium w-fit font-medium ${className}`}
    >
      {children}
    </Button>
  );
}
