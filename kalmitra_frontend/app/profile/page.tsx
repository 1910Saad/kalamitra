"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, User, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import AuthGuard from "@/components/auth-guard"
import Link from "next/link"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    const userStr = localStorage.getItem("kalamitra_user")
    if (userStr) {
      const userData = JSON.parse(userStr)
      setUser(userData)
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
      })
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem("kalamitra_user", JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("kalamitra_user")
    window.location.href = "/"
  }

  if (!user) return null

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Marketplace
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-orange-900">My Profile</h1>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
              >
                Logout
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Profile Card */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-900">Profile Information</CardTitle>
                  {!isEditing ? (
                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      size="sm"
                      className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/user-profile-avatar.jpg" alt={user.name} />
                    <AvatarFallback className="bg-orange-200 text-orange-800 text-xl">
                      {user.name
                        ?.split(" ")
                        .map((n: string) => n[0])
                        .join("") || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-900">{user.name}</h3>
                    <Badge
                      className={`${
                        user.role === "artisan" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role === "artisan" ? "Artisan" : "Customer"}
                    </Badge>
                  </div>
                </div>

                {/* Profile Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-orange-200 focus:border-orange-400"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md">
                        <User className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-800">{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-orange-200 focus:border-orange-400"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md">
                        <Mail className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-800">{user.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-orange-200 focus:border-orange-400"
                        placeholder="Enter phone number"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md">
                        <Phone className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-800">{user.phone || "Not provided"}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    {isEditing ? (
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="border-orange-200 focus:border-orange-400"
                        placeholder="Enter address"
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-800">{user.address || "Not provided"}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Account Actions */}
                {user.role === "artisan" && (
                  <div className="pt-6 border-t border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3">Artisan Actions</h4>
                    <div className="flex gap-3">
                      <Link href="/artisan/dashboard">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white">Go to Dashboard</Button>
                      </Link>
                      <Link href="/artisan/onboard">
                        <Button
                          variant="outline"
                          className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                        >
                          Update Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
