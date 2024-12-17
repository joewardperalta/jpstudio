import Button from "./Button";
import Image from "next/image";

export default function SecondaryButton({ children }) {
  return (
    <Button>
      <div className="flex gap-x-4 items-center">
        {children}
        <Image
          src="/vectors/arrow-right-long.svg"
          width={25}
          height={16}
          alt="arrow right long icon"
        />
      </div>
    </Button>
  );
}
