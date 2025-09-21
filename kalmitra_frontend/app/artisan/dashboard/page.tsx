"use client"

import { useState } from "react"
import { ArrowLeft, Plus, Edit, Eye, Trash2, TrendingUp, Users, ShoppingBag, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"

// Mock data for artisan dashboard
const artisanData = {
  name: "Meera Devi",
  avatar: "/placeholder.svg?height=100&width=100",
  location: "Varanasi, Uttar Pradesh",
  specialization: "Banarasi Silk Weaving",
  joinDate: "March 2024",
  verified: true,
  stats: {
    totalProducts: 12,
    totalSales: 45,
    totalRevenue: 156750,
    avgRating: 4.8,
  },
}

const products = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    price: 12500,
    status: "active",
    views: 234,
    likes: 18,
    sales: 3,
    image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
    aiEnhanced: true,
  },
  {
    id: 2,
    name: "Traditional Silk Dupatta",
    price: 4500,
    status: "active",
    views: 156,
    likes: 12,
    sales: 7,
    image: "/placeholder.svg?height=200&width=200",
    aiEnhanced: true,
  },
  {
    id: 3,
    name: "Zari Work Table Runner",
    price: 2800,
    status: "draft",
    views: 0,
    likes: 0,
    sales: 0,
    image: "/placeholder.svg?height=200&width=200",
    aiEnhanced: false,
  },
]

export default function ArtisanDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <AuthGuard requireAuth={true} requiredRole="artisan">
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Marketplace
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-orange-900">KalaMitra</h1>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Artisan Dashboard
              </Badge>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <Card className="border-orange-200 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={artisanData.avatar || "/placeholder.svg"} alt={artisanData.name} />
                  <AvatarFallback className="bg-orange-200 text-orange-800 text-xl">
                    {artisanData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-orange-900">{artisanData.name}</h2>
                    {artisanData.verified && <Badge className="bg-green-100 text-green-700">✓ Verified</Badge>}
                  </div>
                  <p className="text-orange-700 mb-1">{artisanData.specialization}</p>
                  <p className="text-orange-600 text-sm mb-3">
                    📍 {artisanData.location} • Joined {artisanData.joinDate}
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{artisanData.stats.avgRating}</span>
                      <span className="text-orange-600">rating</span>
                    </div>
                    <div className="text-orange-700">
                      <span className="font-semibold">{artisanData.stats.totalSales}</span> sales
                    </div>
                    <div className="text-orange-700">
                      <span className="font-semibold">{artisanData.stats.totalProducts}</span> products
                    </div>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Total Revenue</p>
                    <p className="text-2xl font-bold text-orange-900">
                      ₹{artisanData.stats.totalRevenue.toLocaleString()}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Total Sales</p>
                    <p className="text-2xl font-bold text-orange-900">{artisanData.stats.totalSales}</p>
                  </div>
                  <ShoppingBag className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Products Listed</p>
                    <p className="text-2xl font-bold text-orange-900">{artisanData.stats.totalProducts}</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-600 text-sm font-medium">Avg Rating</p>
                    <p className="text-2xl font-bold text-orange-900">{artisanData.stats.avgRating}</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 bg-orange-100">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Products
              </TabsTrigger>
              <TabsTrigger value="orders" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Orders
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">New order received</p>
                          <p className="text-xs text-gray-600">Handwoven Banarasi Silk Saree - ₹12,500</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">Product viewed 15 times</p>
                          <p className="text-xs text-gray-600">Traditional Silk Dupatta</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">AI description updated</p>
                          <p className="text-xs text-gray-600">Zari Work Table Runner</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      AI Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Trending Keywords</h4>
                        <p className="text-sm text-orange-700">
                          Products with "handwoven" and "traditional" are getting 40% more views this month.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Pricing Suggestion</h4>
                        <p className="text-sm text-blue-700">
                          Consider pricing your silk products 15% higher based on market trends.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Cultural Story Impact</h4>
                        <p className="text-sm text-green-700">
                          Products with detailed cultural stories have 60% higher engagement.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-orange-900">Your Products</h3>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="border-orange-200 overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 flex gap-2">
                        <Badge
                          className={`text-xs ${
                            product.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {product.status}
                        </Badge>
                        {product.aiEnhanced && (
                          <Badge className="bg-orange-600 text-white text-xs">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-900 mb-2 text-balance">{product.name}</h4>
                      <p className="text-lg font-bold text-orange-900 mb-3">₹{product.price.toLocaleString()}</p>

                      <div className="grid grid-cols-3 gap-2 text-xs text-orange-600 mb-4">
                        <div className="text-center">
                          <Eye className="w-4 h-4 mx-auto mb-1" />
                          <span>{product.views} views</span>
                        </div>
                        <div className="text-center">
                          <Star className="w-4 h-4 mx-auto mb-1" />
                          <span>{product.likes} likes</span>
                        </div>
                        <div className="text-center">
                          <ShoppingBag className="w-4 h-4 mx-auto mb-1" />
                          <span>{product.sales} sales</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-orange-300 text-orange-700 bg-transparent"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-orange-300 text-orange-700 bg-transparent"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-300 text-red-700 bg-transparent">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <ShoppingBag className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                    <p className="text-orange-600">No recent orders to display</p>
                    <p className="text-sm text-orange-500">
                      Orders will appear here once customers start purchasing your products
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900">Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <TrendingUp className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                    <p className="text-orange-600">Analytics coming soon</p>
                    <p className="text-sm text-orange-500">
                      Detailed insights about your sales, views, and customer engagement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AuthGuard>
  )
}
