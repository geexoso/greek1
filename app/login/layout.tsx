import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - YO! GREEK",
  description: "Login to your YO! GREEK account",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
