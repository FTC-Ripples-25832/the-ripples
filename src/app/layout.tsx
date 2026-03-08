import "./globals.css"

import type { Metadata } from "next"

import { Header } from "~/components/header/header"

import { AppHooks } from "./app-hooks"
import { HtmlOut } from "./gl/tunnel"

export const metadata: Metadata = {
  title: "Ripples | 25832",
  description: "FTC Team 25832 Ripples",
  icons: {
    icon: [{ url: "/images/Ripples.png" }]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppHooks />
        <Header />
        <HtmlOut />
        {children}
      </body>
    </html>
  )
}
