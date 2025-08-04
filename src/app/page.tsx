"use client"

import { Canvas } from "@react-three/fiber"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const Scene = dynamic(
  () => import("./(three)/svg-displacement/scene").then((m) => m.Scene),
  { ssr: false }
)

export default function HomePage() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure the filter is applied after mount
    if (bgRef.current) {
      bgRef.current.style.filter = "url(#reflection-filter)"
      bgRef.current.style.willChange = "filter"
    }
  }, [])

  return (
    <div className="relative bg-black text-white">
      {/* Displacement Canvas (hidden, for SVG filter) */}
      <div
        className="pointer-events-none opacity-0 absolute top-0 left-0 w-full h-full"
        id="displacementCanvasContainer"
      >
        <Canvas dpr={0.5}>
          <Scene />
        </Canvas>
      </div>

      {/* SVG Filter Definition */}
      <svg width="0" height="0">
        <filter id="reflection-filter">
          <feImage id="displacementMapImage" result="displacementMap" />
          <feDisplacementMap
            scale="50"
            in="SourceGraphic"
            in2="displacementMap"
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
        </filter>
      </svg>

      {/* The background that gets distorted */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/textures/Abstract5.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* The foreground content, not distorted */}
      <div className="relative z-10 mx-4">
        <HeroSection />
        <AboutSection />
        <SponsorsSection />
      </div>
    </div>
  )
}

// Hero section component with team number and robot silhouette
function HeroSection() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 min-h-[calc(100vh-6rem)] items-center relative">
      {/* Team Number - positioned on the right */}
      <div className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2 z-10">
        <Image
          src="/images/team-number.svg"
          alt="Team 23251"
          width={256}
          height={256}
          className="w-32 h-auto md:w-48 lg:w-64 opacity-80"
        />
      </div>

      {/* Robot Silhouette - positioned behind the title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <Image
          src="/images/robot-silhouette.png"
          alt="Robot Silhouette"
          width={600}
          height={600}
          className="w-96 h-auto md:w-[500px] lg:w-[600px] opacity-10 object-contain"
        />
      </div>

      {/* Main Title */}
      <h1 className="text-7xl text-center sm:text-[7rem] md:text-left md:text-[20vh] lg:text-[31vh] md:leading-[0.9] font-extrabold col-start-1 row-start-1 select-none relative z-20">
        <span
          className="hero-text"
          style={{ "--delay": "0s" } as React.CSSProperties}
        >
          Triple
        </span>
        <br />
        <span
          className="relative z-20 italic hero-text"
          style={{ "--delay": "0.1s" } as React.CSSProperties}
        >
          Fault
        </span>
        <br />
        <span
          className="hero-text"
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          Robotics
        </span>
      </h1>
    </div>
  )
}

// About section component
function AboutSection() {
  return (
    <section className="mt-16">
      <h2 className="text-5xl md:text-7xl lg:text-8xl [text-wrap:balance]">
        We&apos;re a <span className="italic">passionate</span>{" "}
        <Link
          href="/team"
          className="text-orange-200 hover:underline transition"
        >
          team of makers
        </Link>{" "}
        from{" "}
        <a
          className="text-orange-200 hover:underline transition"
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/wppixHc8DqTZcEc2A"
        >
          San Diego
        </a>
        .
      </h2>

      <Link
        className="block mt-4 text-xl transition lg:text-2xl hover:underline hover:translate-x-4 w-fit"
        href="/resources"
      >
        Check out our free resources for FTC
      </Link>

      <Link
        className="block mt-2 text-xl transition lg:text-2xl hover:underline hover:translate-x-4 w-fit"
        href="/contact"
      >
        Contact us at{" "}
        <span className="px-1 font-mono rounded bg-orange-200/20">
          team@3fault.com
        </span>
      </Link>
    </section>
  )
}

// Sponsors section component with real logos
function SponsorsSection() {
  return (
    <section className="mt-8">
      <h1 className="mb-8 text-6xl font-extrabold text-center">Sponsors</h1>
      <div className="grid grid-rows-2 mx-4 sm:grid-rows-1 sm:grid-cols-2 max-w-[65rem] sm:m-auto items-center">
        <a
          href="https://www.oneinc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="grayscale hover:grayscale-0 transition brightness-[1000%] hover:brightness-200 flex items-center justify-center p-8"
        >
          <Image
            src="/images/sponsor-oneinc.svg"
            alt="One Inc Sponsor"
            width={320}
            height={80}
            className="max-w-full h-16 md:h-20"
          />
        </a>
        <div className="grayscale hover:grayscale-0 transition brightness-[1000%] hover:brightness-200 flex items-center justify-center p-8">
          <Image
            src="/images/sponsor-hdn.svg"
            alt="HDN Sponsor"
            width={320}
            height={80}
            className="max-w-full h-16 md:h-20"
          />
        </div>
      </div>
    </section>
  )
}
