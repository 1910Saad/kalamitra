import AuthGuard from "@/components/auth-guard"
import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Eye,
  Download,
  ShoppingBag,
  TrendingUp,
  Star,
  Package,
  DollarSign,
  BarChart3,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

// Mock data for admin dashboard
const stats = [
  { label: "Total Revenue", value: "₹12.5L", icon: DollarSign, color: "text-green-600", change: "+12.5%" },
  { label: "Active Products", value: 1247, icon: Package, color: "text-blue-600", change: "+8.2%" },
  { label: "Total Users", value: 3542, icon: Users, color: "text-purple-600", change: "+15.3%" },
  { label: "Pending Orders", value: 23, icon: Clock, color: "text-yellow-600", change: "-5.1%" },
  { label: "Active Artisans", value: 156, icon: Star, color: "text-orange-600", change: "+22.1%" },
  { label: "Customer Reviews", value: 892, icon: TrendingUp, color: "text-indigo-600", change: "+18.7%" },
]

const pendingApplications = [
  {
    id: 1,
    name: "Kavita Sharma",
    email: "kavita.sharma@email.com",
    phone: "+91 9876543210",
    location: "Jaipur, Rajasthan",
    craft: "Blue Pottery",
    experience: 12,
    submittedAt: "2024-01-20",
    status: "pending",
    documents: ["ID Proof", "Craft Certificate", "Work Samples"],
    bio: "Third-generation potter specializing in traditional Jaipur blue pottery with modern designs.",
    portfolio: [
      "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
      "/placeholder.svg?key=port1",
      "/placeholder.svg?key=port2",
    ],
  },
  {
    id: 2,
    name: "Ravi Kumar",
    email: "ravi.kumar@email.com",
    phone: "+91 8765432109",
    location: "Mysore, Karnataka",
    craft: "Sandalwood Carving",
    experience: 18,
    submittedAt: "2024-01-19",
    status: "pending",
    documents: ["ID Proof", "Craft Certificate", "Work Samples", "Business License"],
    bio: "Master craftsman in sandalwood carving with expertise in traditional South Indian motifs.",
    portfolio: ["/placeholder.svg?key=port3", "/placeholder.svg?key=port4", "/placeholder.svg?key=port5"],
  },
  {
    id: 3,
    name: "Anjali Devi",
    email: "anjali.devi@email.com",
    phone: "+91 7654321098",
    location: "Lucknow, Uttar Pradesh",
    craft: "Chikankari Embroidery",
    experience: 15,
    submittedAt: "2024-01-18",
    status: "under_review",
    documents: ["ID Proof", "Craft Certificate", "Work Samples"],
    bio: "Skilled in traditional Lucknowi chikankari embroidery with contemporary applications.",
    portfolio: ["/placeholder.svg?key=port6", "/placeholder.svg?key=port7", "/placeholder.svg?key=port8"],
  },
]

const recentlyApproved = [
  {
    id: 4,
    name: "Meera Devi",
    craft: "Banarasi Weaving",
    location: "Varanasi, UP",
    approvedAt: "2024-01-15",
    status: "approved",
  },
  {
    id: 5,
    name: "Rajesh Patel",
    craft: "Block Printing",
    location: "Ahmedabad, Gujarat",
    approvedAt: "2024-01-14",
    status: "approved",
  },
]

const recentProducts = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    artisan: "Meera Devi",
    price: "₹15,000",
    status: "active",
    orders: 12,
    rating: 4.8,
    image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
  },
  {
    id: 2,
    name: "Blue Pottery Dinner Set",
    artisan: "Kavita Sharma",
    price: "₹3,500",
    status: "pending",
    orders: 8,
    rating: 4.6,
    image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
  },
  {
    id: 3,
    name: "Kashmiri Papier Mache Box",
    artisan: "Anjali Devi",
    price: "₹2,200",
    status: "active",
    orders: 15,
    rating: 4.9,
    image: "/ornate-kashmiri-papier-mache-decorative-box.jpg",
  },
]

const recentUsers = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    type: "customer",
    joinDate: "2024-01-15",
    orders: 5,
    spent: "₹25,000",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    type: "customer",
    joinDate: "2024-01-10",
    orders: 3,
    spent: "₹12,500",
  },
  {
    id: 3,
    name: "Meera Devi",
    email: "meera.devi@email.com",
    type: "artisan",
    joinDate: "2024-01-05",
    products: 8,
    revenue: "₹45,000",
  },
]

export default function AdminDashboard() {
  return (
    <AuthGuard requireAuth={true} requiredRole="admin">
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        {/* Header */}
        <div className="bg-white border-b border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">Comprehensive marketplace management and oversight</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-orange-200 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" className="border-orange-200 bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Badge className="bg-green-100 text-green-800 border-green-200">Admin Access</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"} mt-1`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList className="grid w-full max-w-4xl grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="artisans">Artisans</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search..." className="pl-10 w-64 border-orange-200" />
                </div>
              </div>
            </div>

            {/* Overview tab with quick stats and recent activity */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Products */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-orange-600" />
                      Recent Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentProducts.map((product) => (
                      <div key={product.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                          <p className="text-xs text-gray-600">by {product.artisan}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-semibold text-green-600">{product.price}</span>
                            <Badge variant={product.status === "active" ? "default" : "secondary"} className="text-xs">
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{product.orders} orders</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Users */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Recent Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{user.name}</h4>
                            <p className="text-xs text-gray-600">{user.email}</p>
                            <Badge variant="outline" className="text-xs mt-1">
                              {user.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {user.type === "customer" ? `${user.orders} orders` : `${user.products} products`}
                          </p>
                          <p className="text-xs text-green-600 font-semibold">
                            {user.type === "customer" ? user.spent : user.revenue}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Artisan Management */}
            <TabsContent value="artisans" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Artisan Management</h3>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Existing artisan application management code */}
              {pendingApplications.map((application) => (
                <Card key={application.id} className="border-orange-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="h-8 w-8 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900">{application.name}</CardTitle>
                          <div className="space-y-1 mt-2">
                            <p className="text-sm text-gray-600">{application.email}</p>
                            <p className="text-sm text-gray-600">{application.phone}</p>
                            <p className="text-sm text-gray-600">{application.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={application.status === "pending" ? "secondary" : "outline"}
                          className={
                            application.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "border-blue-200 text-blue-700"
                          }
                        >
                          {application.status === "pending" ? "Pending Review" : "Under Review"}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-2">
                          Submitted: {new Date(application.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Craft Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Craft Information</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Specialization:</span>
                            <Badge variant="outline" className="border-orange-200 text-orange-700">
                              {application.craft}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Experience:</span>
                            <span className="text-sm font-medium">{application.experience} years</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Bio:</h5>
                          <p className="text-sm text-gray-600 text-pretty">{application.bio}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Documents Submitted</h4>
                        <div className="space-y-2">
                          {application.documents.map((doc) => (
                            <div key={doc} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-700">{doc}</span>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Work Portfolio</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {application.portfolio.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Portfolio ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform cursor-pointer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <Link href={`/admin/application/${application.id}`}>
                        <Button variant="outline" className="border-orange-200 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Product Management */}
            <TabsContent value="products" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Product Management</h3>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending Review</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Package className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentProducts.map((product) => (
                  <Card key={product.id} className="border-orange-200">
                    <CardContent className="p-4">
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <Badge
                          className={`absolute top-2 right-2 ${
                            product.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">by {product.artisan}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-green-600">{product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{product.orders} orders</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* User Management */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="customers">Customers</SelectItem>
                    <SelectItem value="artisans">Artisans</SelectItem>
                    <SelectItem value="admins">Admins</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card className="border-orange-200">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left p-4 font-medium text-gray-900">User</th>
                          <th className="text-left p-4 font-medium text-gray-900">Type</th>
                          <th className="text-left p-4 font-medium text-gray-900">Join Date</th>
                          <th className="text-left p-4 font-medium text-gray-900">Activity</th>
                          <th className="text-left p-4 font-medium text-gray-900">Value</th>
                          <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-semibold text-xs">
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{user.name}</p>
                                  <p className="text-sm text-gray-600">{user.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge variant="outline" className="capitalize">
                                {user.type}
                              </Badge>
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              {new Date(user.joinDate).toLocaleDateString()}
                            </td>
                            <td className="p-4 text-sm text-gray-600">
                              {user.type === "customer" ? `${user.orders} orders` : `${user.products} products`}
                            </td>
                            <td className="p-4 text-sm font-semibold text-green-600">
                              {user.type === "customer" ? user.spent : user.revenue}
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Settings className="h-3 w-3" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Order Management */}
            <TabsContent value="orders" className="space-y-6">
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Order Management</h3>
                <p className="text-gray-600">Order management system coming soon.</p>
              </div>
            </TabsContent>

            {/* Analytics Dashboard */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="text-center py-12">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Detailed analytics and reporting coming soon.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AuthGuard>
  )
}
