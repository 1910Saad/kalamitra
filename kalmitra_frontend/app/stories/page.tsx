import { Search, Calendar, Clock, User, ArrowRight, Heart, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

// Mock data for stories
const featuredStory = {
  id: 1,
  title: "The Golden Threads of Varanasi: A Journey Through Banarasi Silk Weaving",
  excerpt:
    "Discover the ancient art of Banarasi silk weaving, where golden threads tell stories of tradition, craftsmanship, and cultural heritage that spans over 2000 years.",
  content:
    "In the narrow lanes of Varanasi, where the Ganges flows with eternal grace, lies a tradition that has been woven into the very fabric of Indian culture...",
  author: "Priya Sharma",
  authorRole: "Cultural Historian",
  publishedAt: "2024-01-15",
  readTime: 8,
  category: "Craft Traditions",
  tags: ["Banarasi", "Silk", "Weaving", "Varanasi", "Heritage"],
  image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
  likes: 234,
  shares: 45,
  featured: true,
}

const stories = [
  {
    id: 2,
    title: "Blue Magic: The Revival of Jaipur's Blue Pottery",
    excerpt:
      "How contemporary artisans are breathing new life into the traditional blue pottery of Jaipur while preserving its authentic techniques.",
    author: "Amit Gupta",
    authorRole: "Craft Journalist",
    publishedAt: "2024-01-12",
    readTime: 6,
    category: "Artisan Profiles",
    tags: ["Blue Pottery", "Jaipur", "Revival", "Contemporary"],
    image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
    likes: 189,
    shares: 32,
  },
  {
    id: 3,
    title: "Kashmir's Paper Dreams: The Art of Papier Mache",
    excerpt:
      "Exploring the delicate art of Kashmiri papier mache, where paper transforms into poetry through skilled hands and vibrant colors.",
    author: "Fatima Khan",
    authorRole: "Art Curator",
    publishedAt: "2024-01-10",
    readTime: 7,
    category: "Craft Traditions",
    tags: ["Kashmir", "Papier Mache", "Traditional Art", "Heritage"],
    image: "/ornate-kashmiri-papier-mache-decorative-box.jpg",
    likes: 156,
    shares: 28,
  },
  {
    id: 4,
    title: "Madhubani: Where Walls Tell Stories",
    excerpt:
      "The vibrant folk art of Madhubani continues to evolve, carrying forward ancient stories while embracing contemporary themes.",
    author: "Sunita Devi",
    authorRole: "Madhubani Artist",
    publishedAt: "2024-01-08",
    readTime: 5,
    category: "Artist Stories",
    tags: ["Madhubani", "Folk Art", "Bihar", "Storytelling"],
    image: "/colorful-madhubani-folk-art-painting.jpg",
    likes: 201,
    shares: 41,
  },
  {
    id: 5,
    title: "Sustainable Crafts: The Future of Traditional Arts",
    excerpt:
      "How modern artisans are integrating sustainable practices with traditional crafts to create eco-friendly masterpieces.",
    author: "Dr. Rajesh Mehta",
    authorRole: "Sustainability Expert",
    publishedAt: "2024-01-05",
    readTime: 9,
    category: "Innovation",
    tags: ["Sustainability", "Eco-friendly", "Innovation", "Future"],
    image: "/sustainable-crafts-eco-friendly-artisan-workshop.jpg",
    likes: 278,
    shares: 67,
  },
  {
    id: 6,
    title: "The Digital Artisan: Technology Meets Tradition",
    excerpt:
      "Exploring how digital platforms are helping traditional artisans reach global markets while preserving their cultural authenticity.",
    author: "Neha Agarwal",
    authorRole: "Tech Writer",
    publishedAt: "2024-01-03",
    readTime: 6,
    category: "Technology",
    tags: ["Digital", "Technology", "Global Market", "Authenticity"],
    image: "/artisan-using-tablet-technology-traditional-craft.jpg",
    likes: 145,
    shares: 23,
  },
]

const categories = [
  { name: "All Stories", count: 156 },
  { name: "Craft Traditions", count: 45 },
  { name: "Artisan Profiles", count: 38 },
  { name: "Artist Stories", count: 29 },
  { name: "Innovation", count: 22 },
  { name: "Technology", count: 15 },
  { name: "Heritage", count: 7 },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-balance mb-4">Stories & Traditions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Discover the rich narratives behind India's craft traditions, meet the artisans, and explore the cultural
              heritage that shapes our marketplace
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search stories and articles..."
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-end">
              <Select defaultValue="latest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest Stories</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="featured">Featured</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Story */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
          </div>

          <Card className="overflow-hidden border-orange-200 shadow-lg">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] lg:h-full">
                  <Image
                    src={featuredStory.image || "/placeholder.svg"}
                    alt={featuredStory.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white">Featured</Badge>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    {featuredStory.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredStory.readTime} min read
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-balance">{featuredStory.title}</h3>

                <p className="text-gray-600 mb-6 text-pretty">{featuredStory.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredStory.author}</p>
                      <p className="text-sm text-gray-500">{featuredStory.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {featuredStory.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        {featuredStory.shares}
                      </div>
                    </div>
                    <Link href={`/stories/${featuredStory.id}`}>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Read Story
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-80">
            <Card className="border-orange-200">
              <CardHeader>
                <h3 className="font-semibold text-gray-900">Categories</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full p-2 text-left rounded-md hover:bg-orange-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{category.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stories Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Stories</h2>
              <p className="text-gray-600">
                Showing <span className="font-medium">1-6</span> of <span className="font-medium">156</span> stories
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="group hover:shadow-lg transition-shadow border-orange-100">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90">
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(story.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{story.readTime} min read</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors text-balance">
                      {story.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 text-pretty">{story.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-orange-200 text-orange-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{story.author}</p>
                          <p className="text-xs text-gray-500">{story.authorRole}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {story.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="h-4 w-4" />
                            {story.shares}
                          </div>
                        </div>
                        <Link href={`/stories/${story.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-200 hover:bg-orange-50 bg-transparent"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
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
