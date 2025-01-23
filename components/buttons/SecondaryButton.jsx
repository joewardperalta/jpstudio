import Image from "next/image";

export default function SecondaryButton({ children }) {
  return (
    <button className="text-[1rem] w-fit font-medium">
      <div className="flex gap-x-4 items-center">
        {children}
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
