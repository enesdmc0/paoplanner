import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center font-next-mono">
      <h2 className="text-white">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="bg-white/20 rounded-md p-2 text-white" href="/">
        Return Home
      </Link>
    </div>
  );
}
