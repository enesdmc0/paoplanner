import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2">
      <p className="text-[#e3e4e6] font-bold">Pao Planner</p>
      <div className="flex gap-3 md:gap-5">
        <a
          target="_blank"
          href=""
          className="text-xs sm:text-sm text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
        >
          App Store
        </a>
        <a
          target="_blank"
          href="mailto:enesdmc@icloud.com"
          className="text-xs sm:text-sm text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
        >
          İletişim
        </a>
        <Link
          href="/privacy-policy"
          className="text-xs sm:text-sm text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
        >
          Privecy Policy
        </Link>
        <Link
          href="/terms-of-use"
          className="text-xs sm:text-sm text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
        >
          Terms of Use
        </Link>
      </div>
      <a href="https://enesdmc.com" target="_blank" className="flex gap-5 ">
        <p className="text-xs sm:text-sm text-[#979699] hover:underline font-semibold">
          Enes Demirci
        </p>
        <p className="text-xs sm:text-sm text-[#979699] hover:underline font-semibold">© 2025</p>
      </a>
    </footer>
  );
};
