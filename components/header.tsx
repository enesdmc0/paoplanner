import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Link href="/" className="flex items-center gap-5">
      <Image
        alt="Pao Planner Logo"
        src="/logo.svg"
        className="rounded-lg hidden md:block"
        width={60}
        height={60}
      />
      <Image
        alt="Pao Planner Logo"
        src="/logo.svg"
        className="rounded-lg block md:hidden"
        width={40}
        height={40}
      />
      <h1 className="font-bold md:text-2xl text-[#e3e4e6]">Pao Planner</h1>
    </Link>
  );
};

export default Header;
