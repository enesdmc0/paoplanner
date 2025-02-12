"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [active, setActive] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Server ve client arasındaki hydration uyumsuzluğunu önlemek için
    // Component mount olduktan sonra random sayıyı set et
    setActive(Math.floor(Math.random() * 10));
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] flex flex-col">
      <div className="relative z-10 flex flex-col items-center gap-10 p-20">
        <h1 className="font-bold text-2xl text-[#e3e4e6]">Pao Planner</h1>
        <button className="flex items-center gap-3 bg-[#e3e4e6] py-3 px-6 rounded-xl font-bold text-xl text-[#33363d]">
          <Image 
            alt="Apple Logo" 
            src="/apple.svg" 
            width={30} 
            height={30} 
          />
          Download for IOS
        </button>
        
        <button className="flex items-center gap-3 bg-[#e3e4e6] py-3 px-6 rounded-xl font-bold text-xl text-[#33363d]">
          <Image 
            alt="Apple Logo" 
            src="/apple.svg" 
            width={30} 
            height={30} 
          />
          Download for IOS
        </button>
        <p>Pao</p>
      </div>

      {/* Background Image with fade transition */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={`/${active}.jpg`}
          alt="Background Image"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80" />
    </div>
  );
};

export default Home;