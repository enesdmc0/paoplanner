"use client";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-4">
      <p className="text-sm text-muted-foreground">Something went wrong</p>
      <button className="px-5 py-2 rounded-md bg-white/50">
        <Link href="/">Back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
