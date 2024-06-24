"use client"
import { isAuthenticated } from "@/lib/auth"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login")
    }
  })

  return <>{children}</>
}
