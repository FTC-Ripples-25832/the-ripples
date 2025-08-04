import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Header } from "~/components/header/header"

import { AppHooks } from "./app-hooks"
import { HtmlOut } from "./gl/tunnel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ripples | 25832",
  description: "FTC Team 25832 Ripples",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppHooks />
        <Header />
        <HtmlOut />
        {children}
      </body>
    </html>
  )
}
