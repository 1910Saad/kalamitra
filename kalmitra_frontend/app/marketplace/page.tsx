import { Search, Grid, List, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import Image from "next/image"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 15000,
    originalPrice: 18000,
    artisan: "Meera Devi",
    location: "Varanasi, Uttar Pradesh",
    category: "Textiles",
    subcategory: "Sarees",
    rating: 4.8,
    reviews: 124,
    image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
    tags: ["Handwoven", "Pure Silk", "Traditional"],
    craftTradition: "Banarasi Weaving",
    isVerified: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Blue Pottery Dinner Set",
    price: 3500,
    originalPrice: 4200,
    artisan: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    category: "Pottery",
    subcategory: "Dinnerware",
    rating: 4.6,
    reviews: 89,
    image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
    tags: ["Handmade", "Lead-free", "Traditional"],
    craftTradition: "Blue Pottery",
    isVerified: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Kashmiri Papier Mache Box",
    price: 2800,
    originalPrice: 3200,
    artisan: "Fatima Sheikh",
    location: "Srinagar, Kashmir",
    category: "Home Decor",
    subcategory: "Storage",
    rating: 4.9,
    reviews: 67,
    image: "/ornate-kashmiri-papier-mache-decorative-box.jpg",
    tags: ["Hand-painted", "Traditional", "Decorative"],
    craftTradition: "Papier Mache",
    isVerified: true,
    inStock: false,
  },
  {
    id: 4,
    name: "Madhubani Folk Art Painting",
    price: 1200,
    originalPrice: 1500,
    artisan: "Sunita Jha",
    location: "Madhubani, Bihar",
    category: "Art",
    subcategory: "Paintings",
    rating: 4.7,
    reviews: 156,
    image: "/colorful-madhubani-folk-art-painting.jpg",
    tags: ["Hand-painted", "Natural Colors", "Folk Art"],
    craftTradition: "Madhubani Painting",
    isVerified: true,
    inStock: true,
  },
]

const categories = [
  { name: "Textiles", count: 245 },
  { name: "Pottery", count: 189 },
  { name: "Home Decor", count: 167 },
  { name: "Art", count: 134 },
  { name: "Jewelry", count: 98 },
  { name: "Woodwork", count: 76 },
]

const craftTraditions = [
  "Banarasi Weaving",
  "Blue Pottery",
  "Madhubani Painting",
  "Papier Mache",
  "Warli Art",
  "Kalamkari",
  "Chikankari",
  "Phulkari",
]

const states = [
  "Uttar Pradesh",
  "Rajasthan",
  "Bihar",
  "Kashmir",
  "Gujarat",
  "West Bengal",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Punjab",
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 text-balance">Discover Authentic Crafts</h1>
              <p className="text-gray-600 mt-1">Explore handcrafted treasures from skilled artisans across India</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products, artisans, or traditions..."
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <Button variant="outline" size="icon" className="border-orange-200 bg-transparent">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="border-orange-200">
              <CardHeader className="pb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-2">
                        <Checkbox id={category.name} />
                        <label htmlFor={category.name} className="text-sm text-gray-700 flex-1 cursor-pointer">
                          {category.name}
                        </label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-4">
                    <Slider defaultValue={[500, 20000]} max={50000} min={100} step={100} className="w-full" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>₹500</span>
                      <span>₹20,000</span>
                    </div>
                  </div>
                </div>

                {/* Craft Traditions */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Craft Traditions</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {craftTraditions.map((tradition) => (
                      <div key={tradition} className="flex items-center space-x-2">
                        <Checkbox id={tradition} />
                        <label htmlFor={tradition} className="text-sm text-gray-700 cursor-pointer">
                          {tradition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">State</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" defaultChecked />
                      <label htmlFor="in-stock" className="text-sm text-gray-700 cursor-pointer">
                        In Stock
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified-artisan" />
                      <label htmlFor="verified-artisan" className="text-sm text-gray-700 cursor-pointer">
                        Verified Artisan
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">1-12</span> of <span className="font-medium">248</span> products
              </p>
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border border-gray-200 rounded-md">
                  <Button variant="ghost" size="sm" className="border-r">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow border-orange-100">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary" className="bg-white text-gray-900">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        {product.isVerified && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">Verified</Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-balance">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        by {product.artisan} • {product.location}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {product.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Link href={`/product/${product.id}`}>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700" disabled={!product.inStock}>
                          {product.inStock ? "View Details" : "Notify Me"}
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-orange-600 text-white">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline">12</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
