import { Search, MapPin, Star, Award, Users, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"

// Mock data for artisans
const artisans = [
  {
    id: 1,
    name: "Meera Devi",
    location: "Varanasi, Uttar Pradesh",
    specialization: "Banarasi Weaving",
    experience: 25,
    rating: 4.9,
    reviews: 156,
    products: 23,
    followers: 1240,
    avatar: "/indian-woman-artisan-weaver.jpg",
    coverImage: "/traditional-weaving-loom-workshop.jpg",
    isVerified: true,
    bio: "Master weaver specializing in traditional Banarasi silk sarees with intricate gold thread work.",
    achievements: ["National Award Winner 2019", "UNESCO Recognition"],
    craftTradition: "Banarasi Weaving",
    joinedYear: 2018,
    languages: ["Hindi", "English"],
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    specialization: "Blue Pottery",
    experience: 18,
    rating: 4.7,
    reviews: 89,
    products: 45,
    followers: 890,
    avatar: "/indian-man-potter-artisan.jpg",
    coverImage: "/blue-pottery-workshop-ceramic.jpg",
    isVerified: true,
    bio: "Third-generation potter creating authentic Jaipur blue pottery with traditional techniques.",
    achievements: ["State Craft Award 2020"],
    craftTradition: "Blue Pottery",
    joinedYear: 2019,
    languages: ["Hindi", "Rajasthani", "English"],
  },
  {
    id: 3,
    name: "Fatima Sheikh",
    location: "Srinagar, Kashmir",
    specialization: "Papier Mache",
    experience: 22,
    rating: 4.8,
    reviews: 67,
    products: 31,
    followers: 650,
    avatar: "/kashmiri-woman-artisan-painter.jpg",
    coverImage: "/papier-mache-painting-workshop-kashmir.jpg",
    isVerified: true,
    bio: "Kashmiri artisan preserving the ancient art of papier mache with contemporary designs.",
    achievements: ["Heritage Craft Excellence Award"],
    craftTradition: "Papier Mache",
    joinedYear: 2017,
    languages: ["Urdu", "Kashmiri", "Hindi", "English"],
  },
  {
    id: 4,
    name: "Sunita Jha",
    location: "Madhubani, Bihar",
    specialization: "Madhubani Painting",
    experience: 15,
    rating: 4.6,
    reviews: 124,
    products: 67,
    followers: 1100,
    avatar: "/madhubani-woman-artist-painter.jpg",
    coverImage: "/madhubani-folk-art-painting-colorful.jpg",
    isVerified: true,
    bio: "Contemporary Madhubani artist blending traditional motifs with modern storytelling.",
    achievements: ["Folk Art Innovation Award 2021"],
    craftTradition: "Madhubani Painting",
    joinedYear: 2020,
    languages: ["Hindi", "Maithili", "English"],
  },
  {
    id: 5,
    name: "Arjun Patel",
    location: "Kutch, Gujarat",
    specialization: "Block Printing",
    experience: 12,
    rating: 4.5,
    reviews: 78,
    products: 29,
    followers: 420,
    avatar: "/gujarati-man-block-printing-artisan.jpg",
    coverImage: "/block-printing-textile-workshop-gujarat.jpg",
    isVerified: false,
    bio: "Young artisan reviving traditional Kutch block printing with sustainable practices.",
    achievements: ["Emerging Artist Award 2022"],
    craftTradition: "Block Printing",
    joinedYear: 2021,
    languages: ["Gujarati", "Hindi", "English"],
  },
  {
    id: 6,
    name: "Lakshmi Nair",
    location: "Kochi, Kerala",
    specialization: "Coir Craft",
    experience: 20,
    rating: 4.7,
    reviews: 92,
    products: 38,
    followers: 780,
    avatar: "/kerala-woman-coir-craft-artisan.jpg",
    coverImage: "/coir-weaving-coconut-fiber-craft-kerala.jpg",
    isVerified: true,
    bio: "Eco-friendly artisan creating beautiful home decor items from coconut coir.",
    achievements: ["Sustainable Craft Award 2020"],
    craftTradition: "Coir Craft",
    joinedYear: 2018,
    languages: ["Malayalam", "Tamil", "English"],
  },
]

const craftTraditions = [
  "Banarasi Weaving",
  "Blue Pottery",
  "Madhubani Painting",
  "Papier Mache",
  "Block Printing",
  "Coir Craft",
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
  "Kerala",
  "West Bengal",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Punjab",
]

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-balance mb-4">Meet Our Artisans</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Discover the skilled craftspeople preserving India's rich cultural heritage through their exceptional
              artistry
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search artisans by name or craft..."
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>
              <Button variant="outline" className="border-orange-200 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="products">Most Products</SelectItem>
                  <SelectItem value="followers">Most Followed</SelectItem>
                </SelectContent>
              </Select>
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
                <h3 className="font-semibold text-gray-900">Filter Artisans</h3>
              </CardHeader>
              <CardContent className="space-y-6">
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

                {/* Experience Level */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Experience</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beginner" />
                      <label htmlFor="beginner" className="text-sm text-gray-700 cursor-pointer">
                        0-5 years
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="intermediate" />
                      <label htmlFor="intermediate" className="text-sm text-gray-700 cursor-pointer">
                        6-15 years
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expert" />
                      <label htmlFor="expert" className="text-sm text-gray-700 cursor-pointer">
                        15+ years
                      </label>
                    </div>
                  </div>
                </div>

                {/* Verification Status */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" />
                      <label htmlFor="verified" className="text-sm text-gray-700 cursor-pointer">
                        Verified Artisans
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="award-winners" />
                      <label htmlFor="award-winners" className="text-sm text-gray-700 cursor-pointer">
                        Award Winners
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artisans Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">1-6</span> of <span className="font-medium">124</span> artisans
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {artisans.map((artisan) => (
                <Card
                  key={artisan.id}
                  className="group hover:shadow-lg transition-shadow border-orange-100 overflow-hidden"
                >
                  <div className="relative h-32 bg-gradient-to-r from-orange-100 to-amber-100">
                    <Image
                      src={artisan.coverImage || "/placeholder.svg"}
                      alt={`${artisan.name}'s workshop`}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute top-4 right-4">
                      {artisan.isVerified && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Image
                          src={artisan.avatar || "/placeholder.svg"}
                          alt={artisan.name}
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-white shadow-md"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {artisan.name}
                            </h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">{artisan.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3">
                          <Badge variant="outline" className="border-orange-200 text-orange-700">
                            {artisan.specialization}
                          </Badge>
                        </div>

                        <p className="text-gray-600 text-sm mt-3 line-clamp-2">{artisan.bio}</p>

                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="font-medium">{artisan.rating}</span>
                            <span className="ml-1">({artisan.reviews})</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium">{artisan.experience}</span>
                            <span className="ml-1">years exp.</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{artisan.followers}</span>
                          </div>
                        </div>

                        {artisan.achievements.length > 0 && (
                          <div className="mt-3">
                            <div className="flex items-center text-xs text-amber-700">
                              <Award className="h-3 w-3 mr-1" />
                              <span>{artisan.achievements[0]}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{artisan.products}</span> products available
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Follow
                        </Button>
                        <Link href={`/artisan/${artisan.id}`}>
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            View Profile
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
                <Button variant="outline">8</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
