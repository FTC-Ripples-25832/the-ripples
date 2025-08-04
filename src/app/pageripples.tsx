"use client"

import { Canvas } from "@react-three/fiber"

// import Image from "next/image"
import { Scene } from "./(three)/water-matcap/scene"
import { eventManagerFactory } from "./(three)/water-matcap/scene/event-manager"

export default function TeamHeroPage() {
  return (
    <div className="w-full via-[#1c1c1c] text-white overflow-hidden flex justify-center">
      {/* WaterMatCapBackground (full-page) */}
      <div className="absolute inset-0 z-0">
        <Canvas
          events={eventManagerFactory}
          dpr={[1, 2]}
          gl={{ antialias: true }}
          className="!absolute top-0 left-0 !w-full !h-full"
        >
          <Scene />
        </Canvas>
      </div>
      {/* Hero Content - compact and centered */}
      <div className="absolute top-1/2 left-1/2 z-10 w-full max-w-2xl px-4 pointer-events-none flex flex-col items-center justify-center gap-8 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center gap-2">
          {/* <Image
            src="/images/team-number.svg"
            alt="Team 23251"
            width={96}
            height={96}
            className="w-24 h-auto opacity-80 mb-2"
          /> */}
          <div className="relative flex items-center justify-center">
            {/* <Image
              src="/images/robot-silhouette.png"
              alt="Robot Silhouette"
              width={224}
              height={224}
              className="w-56 h-auto opacity-10 object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ zIndex: 0 }}
            /> */}
            <h1 className="text-5xl text-center font-extrabold relative z-10 select-none drop-shadow-lg">
              <span
                className="hero-text border-b-4 border-tiffany pb-1"
                style={{ "--delay": "0s" } as React.CSSProperties}
              >
                Ripples
              </span>
            </h1>
          </div>
        </div>
        {/* Sponsors Section - compact */}
        {/* <div className="w-full flex flex-col items-center justify-center mt-4 gap-4">
          <h2 className="text-2xl font-bold mb-2">Sponsors</h2>
          <div className="flex flex-row items-center justify-center gap-8">
            <a
              href="https://www.oneinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition brightness-[1000%] hover:brightness-200 flex items-center justify-center p-2 pointer-events-auto"
            >
              <Image
                src="/images/sponsor-oneinc.svg"
                alt="One Inc Sponsor"
                width={100}
                height={40}
                className="max-w-[100px] h-10"
              />
            </a>
            <div className="grayscale hover:grayscale-0 transition brightness-[1000%] hover:brightness-200 flex items-center justify-center p-2">
              <Image
                src="/images/sponsor-hdn.svg"
                alt="HDN Sponsor"
                width={100}
                height={40}
                className="max-w-[100px] h-10"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
