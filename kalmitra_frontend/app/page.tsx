import { Search, Heart, Star, MapPin, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data for products
const featuredProducts = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    artisan: "Meera Devi",
    location: "Varanasi, Uttar Pradesh",
    price: 12500,
    originalPrice: 15000,
    rating: 4.8,
    reviews: 24,
    image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
    aiDescription:
      "This exquisite Banarasi silk saree showcases centuries-old weaving traditions, featuring intricate golden zari work that tells stories of Mughal heritage.",
    category: "Textiles",
    isAIEnhanced: true,
  },
  {
    id: 2,
    name: "Blue Pottery Dinner Set",
    artisan: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    price: 3200,
    originalPrice: 4000,
    rating: 4.6,
    reviews: 18,
    image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
    aiDescription:
      "Crafted using traditional Persian techniques, this blue pottery set brings royal Rajasthani elegance to your dining experience.",
    category: "Ceramics",
    isAIEnhanced: true,
  },
  {
    id: 3,
    name: "Kashmiri Papier Mâché Box",
    artisan: "Fatima Begum",
    location: "Srinagar, Kashmir",
    price: 1800,
    originalPrice: 2200,
    rating: 4.9,
    reviews: 31,
    image: "/ornate-kashmiri-papier-mache-decorative-box.jpg",
    aiDescription:
      "This delicate papier mâché box represents Kashmir's artistic soul, hand-painted with traditional chinar leaf motifs passed down through generations.",
    category: "Decorative",
    isAIEnhanced: true,
  },
  {
    id: 4,
    name: "Madhubani Painting",
    artisan: "Sunita Jha",
    location: "Madhubani, Bihar",
    price: 2500,
    originalPrice: 3000,
    rating: 4.7,
    reviews: 15,
    image: "/colorful-madhubani-folk-art-painting.jpg",
    aiDescription:
      "This vibrant Madhubani painting captures ancient folklore through bold colors and intricate patterns, celebrating Bihar's rich artistic heritage.",
    category: "Art",
    isAIEnhanced: true,
  },
]

const categories = [
  { name: "Textiles", icon: "🧵", count: 156 },
  { name: "Ceramics", icon: "🏺", count: 89 },
  { name: "Jewelry", icon: "💎", count: 234 },
  { name: "Art", icon: "🎨", count: 67 },
  { name: "Woodwork", icon: "🪵", count: 45 },
  { name: "Metalwork", icon: "⚒️", count: 78 },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-card to-muted">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">KalaMitra</h1>
              <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                AI-Powered
              </Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/marketplace" className="text-foreground hover:text-primary font-medium">
                Marketplace
              </Link>
              <Link href="/artisans" className="text-foreground hover:text-primary font-medium">
                Artisans
              </Link>
              <Link href="/stories" className="text-foreground hover:text-primary font-medium">
                Stories
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-foreground">
                <Heart className="w-4 h-4" />
              </Button>
              <Link href="/profile">
                <Button variant="ghost" size="sm" className="text-foreground">
                  <User className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/artisan/onboard">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join as Artisan</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Discover Authentic Indian Crafts
            <span className="block text-3xl text-muted-foreground mt-2">Enhanced by AI Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Connect with master artisans and discover the stories behind every handcrafted piece. Our AI helps you
            understand the cultural heritage and craftsmanship of each creation.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <Input
                placeholder="Search for crafts, artisans, or regions..."
                className="pl-12 pr-4 py-4 text-lg border-border focus:border-primary focus:ring-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer border-border">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-card-foreground text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Featured Crafts</h3>
              <p className="text-muted-foreground">Handpicked by our AI curator based on cultural significance</p>
            </div>
            <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              <Link href="/marketplace">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isAIEnhanced && (
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Enhanced
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-card-foreground mb-1 text-balance">{product.name}</h4>

                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-sm text-muted-foreground">{product.artisan}</span>
                    <span className="text-xs text-muted-foreground">• {product.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 text-pretty">{product.aiDescription}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-muted to-card">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">AI-Powered Cultural Stories</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our AI analyzes each craft's cultural significance, techniques, and heritage to provide you with rich
              stories that connect you to India's artistic traditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/60 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Cultural Context</h4>
                <p className="text-sm text-muted-foreground">
                  Learn about the historical and cultural significance of each craft
                </p>
              </div>
              <div className="bg-background/60 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Artisan Stories</h4>
                <p className="text-sm text-muted-foreground">
                  Discover the personal journey and techniques of master craftspeople
                </p>
              </div>
              <div className="bg-background/60 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Smart Recommendations</h4>
                <p className="text-sm text-muted-foreground">
                  Get personalized suggestions based on your interests and preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold">KalaMitra</h4>
              </div>
              <p className="text-background/70 text-sm">
                Connecting artisans with the world through AI-enhanced storytelling and authentic craftsmanship.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Marketplace</h5>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/marketplace" className="hover:text-background">
                    Browse Crafts
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="hover:text-background">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/artisans" className="hover:text-background">
                    Featured Artists
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="hover:text-background">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">For Artisans</h5>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/artisan/onboard" className="hover:text-background">
                    Join Platform
                  </Link>
                </li>
                <li>
                  <Link href="/artisan/onboard" className="hover:text-background">
                    Seller Guide
                  </Link>
                </li>
                <li>
                  <Link href="/artisan/onboard" className="hover:text-background">
                    AI Tools
                  </Link>
                </li>
                <li>
                  <Link href="/artisan/onboard" className="hover:text-background">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link href="/about" className="hover:text-background">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-background">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-background">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-background">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2024 KalaMitra. Preserving traditions through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
