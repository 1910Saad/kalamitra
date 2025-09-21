"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requiredRole?: "customer" | "artisan" | "admin"
  redirectTo?: string
}

export default function AuthGuard({
  children,
  requireAuth = true,
  requiredRole,
  redirectTo = "/auth/login",
}: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    try {
      const userStr = localStorage.getItem("kalamitra_user")

      if (!requireAuth) {
        setIsAuthorized(true)
        setIsLoading(false)
        return
      }

      if (!userStr) {
        router.push(redirectTo)
        return
      }

      const user = JSON.parse(userStr)

      if (requiredRole && user.role !== requiredRole) {
        router.push("/unauthorized")
        return
      }

      setIsAuthorized(true)
    } catch (error) {
      console.error("Auth check error:", error)
      router.push(redirectTo)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-orange-600 animate-spin mx-auto mb-4" />
          <p className="text-orange-700">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
