"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { homeData } from "@/constants";

export const HomeClient = () => {
  const images = useMemo(() => Array.from({ length: 10 }, (_, i) => `/${i}.jpg`), []);

  const [activeImage, setActiveImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const selectRandomImage = () => {
      const unusedImages = images.filter((img) => img !== activeImage);
      const randomIndex = Math.floor(Math.random() * unusedImages.length);
      setImageLoaded(false);
      setActiveImage(unusedImages[randomIndex]);
    };

    if (!activeImage && images.length > 0) {
      setActiveImage(images[0]);
    }

    const interval = setInterval(selectRandomImage, 30000);
    return () => clearInterval(interval);
  }, [images, activeImage]);

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] flex flex-col font-next-mono">
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 p-5 sm:p-10 md:p-16">
        <Header />

        <p className="font-bold text-xl sm:text-3xl md:text-4xl text-[#e3e4e6] md:tracking-wider text-center max-w-3xl">
          {homeData.text1}
        </p>

        <button className="flex items-center gap-3 bg-[#e3e4e6] hover:bg-[#d1d2d4] transition-colors py-3 px-4 md:px-6 rounded-xl font-bold text-lg md:text-xl text-[#33363d]">
          <Image
            className="hidden md:block"
            alt="Apple Logo"
            src="/apple.svg"
            width={30}
            height={30}
            priority={true}
            loading="eager"
          />
          <Image
            className="block md:hidden"
            alt="Apple Logo"
            src="/apple.svg"
            width={20}
            height={20}
            priority={true}
            loading="eager"
          />
          Download for IOS
        </button>

        <Image
          alt="Pao Planner Phone Image"
          src="/phone.png"
          width={800}
          height={800}
          priority={true}
          loading="eager"
          quality={90}
        />

        <p className="font-semibold sm:text-lg md:text-xl text-[#e3e4e6] text-center max-w-3xl">
          {homeData.text2}
        </p>

        <Footer />
      </div>

      {/* Background Image with optimized loading */}
      {activeImage && (
        <div
          className={`fixed size-full inset-0 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={activeImage}
            alt="Background Image"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-center"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhQdFB4lGhQaJSEeISUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      )}

      {/* Noise effect overlay */}
      <svg
        className="pointer-events-none fixed isolate z-50 mix-blend-soft-light size-full opacity-50"
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
      <div className="fixed inset-0 size-full bg-gradient-to-b from-black/80 via-black/80 to-black/80" />
    </div>
  );
};
