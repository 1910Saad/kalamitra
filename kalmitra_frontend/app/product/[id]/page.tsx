import { ArrowLeft, Heart, Share2, Star, MapPin, Sparkles, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AIRecommendations from "@/components/ai-recommendations"
import Link from "next/link"

// Mock product data - in real app this would come from database
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Handwoven Banarasi Silk Saree",
      artisan: {
        name: "Meera Devi",
        avatar: "/placeholder.svg?height=100&width=100",
        location: "Varanasi, Uttar Pradesh",
        experience: "25 years",
        specialization: "Banarasi Silk Weaving",
        story:
          "Meera Devi learned the art of Banarasi weaving from her grandmother at the age of 12. She has been preserving the traditional techniques of zari work and intricate pattern weaving for over two decades, training young women in her community to continue this ancient craft.",
      },
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      reviews: 24,
      images: [
        "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
        "/placeholder.svg?height=600&width=600&text=Detail+View+1",
        "/placeholder.svg?height=600&width=600&text=Detail+View+2",
        "/placeholder.svg?height=600&width=600&text=Detail+View+3",
      ],
      aiDescription:
        "This exquisite Banarasi silk saree showcases centuries-old weaving traditions, featuring intricate golden zari work that tells stories of Mughal heritage. Each thread is carefully woven to create patterns that have been passed down through generations of master weavers in Varanasi.",
      category: "Textiles",
      isAIEnhanced: true,
      culturalContext:
        "Banarasi sarees originated during the Mughal period and are considered one of the finest sarees in India. The intricate brocade work, known as 'zari', uses gold and silver threads to create elaborate patterns inspired by Mughal art and architecture.",
      craftingProcess:
        "This saree takes approximately 15-20 days to complete. The process involves setting up the loom, creating the design pattern, and carefully weaving each thread. The zari work is done by hand, requiring exceptional skill and patience.",
      materials: "Pure silk threads, genuine gold zari, silver threads",
      dimensions: "Length: 6.5 meters, Width: 1.2 meters",
      careInstructions: "Dry clean only. Store in a cool, dry place wrapped in muslin cloth.",
      inStock: true,
      stockCount: 3,
    },
  }
  return products[id as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
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
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              {product.isAIEnhanced && (
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Enhanced
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 2}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-orange-900 mb-2 text-balance">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-orange-900">{product.rating}</span>
                  <span className="text-orange-600">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-orange-700">
                  <MapPin className="w-4 h-4" />
                  <span>{product.artisan.location}</span>
                </div>
              </div>
            </div>

            {/* AI Description */}
            <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-900">AI-Generated Story</h3>
                </div>
                <p className="text-orange-800 text-pretty leading-relaxed">{product.aiDescription}</p>
              </CardContent>
            </Card>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-orange-900">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-orange-600 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <Badge variant="destructive" className="bg-green-100 text-green-700">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>

              {product.inStock ? (
                <p className="text-green-700 font-medium">✓ In Stock ({product.stockCount} available)</p>
              ) : (
                <p className="text-red-600 font-medium">Out of Stock</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 py-6 bg-transparent"
              >
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-orange-200">
              <div className="text-center">
                <Shield className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-orange-700 font-medium">Authentic</p>
                <p className="text-xs text-orange-600">Verified Artisan</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-orange-700 font-medium">Free Shipping</p>
                <p className="text-xs text-orange-600">On orders ₹2000+</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-orange-700 font-medium">Easy Returns</p>
                <p className="text-xs text-orange-600">7-day policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-orange-100">
              <TabsTrigger value="story" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Cultural Story
              </TabsTrigger>
              <TabsTrigger value="artisan" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Meet the Artisan
              </TabsTrigger>
              <TabsTrigger value="craft" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Crafting Process
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Product Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="mt-6">
              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Cultural Heritage & Significance</h3>
                  <p className="text-orange-800 leading-relaxed text-pretty mb-6">{product.culturalContext}</p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Did You Know?</h4>
                    <p className="text-orange-700 text-sm">
                      Banarasi sarees are often passed down as family heirlooms and are considered auspicious for
                      weddings and special occasions in Indian culture.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artisan" className="mt-6">
              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={product.artisan.avatar || "/placeholder.svg"} alt={product.artisan.name} />
                      <AvatarFallback className="bg-orange-200 text-orange-800 text-xl">
                        {product.artisan.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-900">{product.artisan.name}</h3>
                      <p className="text-orange-700 mb-2">{product.artisan.specialization}</p>
                      <div className="flex items-center gap-4 text-sm text-orange-600">
                        <span>📍 {product.artisan.location}</span>
                        <span>🎯 {product.artisan.experience} experience</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-orange-800 leading-relaxed text-pretty">{product.artisan.story}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="craft" className="mt-6">
              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">The Art of Creation</h3>
                  <p className="text-orange-800 leading-relaxed text-pretty mb-6">{product.craftingProcess}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Materials Used</h4>
                      <p className="text-orange-700 text-sm">{product.materials}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Time to Create</h4>
                      <p className="text-orange-700 text-sm">15-20 days of meticulous handwork</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <Card className="border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-900 mb-6">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-3">Dimensions</h4>
                      <p className="text-orange-700 mb-4">{product.dimensions}</p>

                      <h4 className="font-semibold text-orange-900 mb-3">Materials</h4>
                      <p className="text-orange-700">{product.materials}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-3">Care Instructions</h4>
                      <p className="text-orange-700 mb-4">{product.careInstructions}</p>

                      <h4 className="font-semibold text-orange-900 mb-3">Origin</h4>
                      <p className="text-orange-700">{product.artisan.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Recommendations */}
        <div className="mt-16">
          <AIRecommendations currentProduct={product} />
        </div>
      </div>
    </div>
  )
}
