"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import first from "@/public/first.png";
import Link from "next/link";
const Home = () => {
  const images = useMemo(() => Array.from({ length: 10 }, (_, i) => `/${i}.jpg`), []);

  const [activeImage, setActiveImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const selectRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveImage(images[randomIndex]);
    };

    selectRandomImage();

    const interval = setInterval(selectRandomImage, 30000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] flex flex-col font-next-mono">
      <div className="relative z-10 flex flex-col items-center gap-10 p-20">
        <div className="flex items-center gap-5">
          <Image
            alt="Pao Planner Logo"
            src="/logo.svg"
            className="rounded-lg"
            width={60}
            height={60}
          />
          <h1 className="font-bold text-2xl text-[#e3e4e6]">Pao Planner</h1>
        </div>

        <p className="font-bold text-5xl text-[#e3e4e6] tracking-wider text-center max-w-3xl">
          Günlük, toplantı ve görevlerinizi tek bir yerde yönetin!
        </p>
        <button className="flex items-center gap-3 bg-[#e3e4e6] hover:bg-[#d1d2d4] transition-colors py-3 px-6 rounded-xl font-bold text-xl text-[#33363d]">
          <Image alt="Apple Logo" src="/apple.svg" width={30} height={30} priority={true} />
          Download for IOS
        </button>
          {/* <Image alt="" src={second} width={700} height={1000} /> */}
          {/* <Image alt="" src={first}  width={700} height={1000} /> */}
          <Image alt="" src={first} width={1000} height={1000} />
        <p className="font-semibold text-xl text-[#e3e4e6] text-center max-w-3xl">
          Pao Planner ile yapılacaklar listenizi oluşturun, saat ekleyin ve yaklaşan görevlerinizi
          anında görün. Tüm verileriniz cihazınızda şifrelenmiş olarak saklanır, internet
          gerektirmez ve üçüncü taraflarla paylaşılmaz. Basit, güvenli ve hızlı bir deneyim için
          şimdi keşfedin!
        </p>

        <footer className="flex flex-col items-center gap-2">
          <p className="text-[#e3e4e6] font-bold">Pao Planner</p>
          <div className="flex gap-5">
            <a
              target="_blank"
              href=""
              className="text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
            >
              App Store
            </a>
            <a
              target="_blank"
              href="mailto:enesdmc@icloud.com"
              className="text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
            >
              İletişim
            </a>
            <Link
              href="/privacy-policy"
              className="text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
            >
              Privecy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-[#e3e4e6] hover:underline hover:text-[#979699] font-semibold cursor-pointer"
            >
              Terms of Use
            </Link>
          </div>
          <a href="https://enesdmc.com" target="_blank" className="flex gap-5 ">
            <p className="text-[#979699] hover:underline font-semibold">Enes Demirci</p>
            <p className="text-[#979699] hover:underline font-semibold">© 2025</p>
          </a>
        </footer>
      </div>

      {/* Background Image with preload and fade transition */}
      {activeImage && (
        <div
          className={`fixed w-full h-full inset-0 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={activeImage}
            alt="Background Image"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center "
            onLoad={() => setImageLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhQdFB4lGhQaJSEeISUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      )}

      {/* Noise effect overlay */}
      <svg
        className="pointer-events-none fixed isolate z-50 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Gradient overlay */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-black/80 via-black/80 to-black/80" />
    </div>
  );
};

export default Home;
