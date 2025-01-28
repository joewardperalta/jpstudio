import Image from "next/image";

export default function SecondaryButton({ children, onClick, ref, className }) {
  return (
    <button
      className={`secondary-button ${className}`}
      onClick={onClick}
      ref={ref}
    >
      <div className="secondary-button-body flex gap-x-4 items-center">
        <p>{children}</p>
        <Image
          src="/vectors/arrow-right-long.svg"
          width={25}
          height={16}
          alt="arrow right long icon"
        />
      </div>
    </button>
  );
}
