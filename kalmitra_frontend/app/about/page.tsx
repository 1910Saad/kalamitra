import { Heart, Users, Award, Globe, Shield, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { label: "Active Artisans", value: "2,500+", icon: Users },
  { label: "Craft Traditions", value: "150+", icon: Award },
  { label: "Products Listed", value: "25,000+", icon: Sparkles },
  { label: "Countries Reached", value: "45+", icon: Globe },
]

const values = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description:
      "We are committed to preserving India's rich craft traditions and ensuring they thrive for future generations.",
  },
  {
    icon: Users,
    title: "Artisan Empowerment",
    description:
      "Our platform empowers artisans with tools, technology, and global market access to grow their businesses.",
  },
  {
    icon: Shield,
    title: "Authenticity Guarantee",
    description:
      "Every product on our platform is verified for authenticity, ensuring customers receive genuine handcrafted items.",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Storytelling",
    description:
      "We use AI to help artisans tell their stories and showcase the cultural significance of their crafts.",
  },
]

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Former tech executive passionate about preserving Indian craft traditions through technology.",
    image: "/team-founder-ceo.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Head of Artisan Relations",
    bio: "Cultural historian with 15 years of experience working with traditional craftspeople.",
    image: "/team-artisan-relations-head.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Chief Technology Officer",
    bio: "AI specialist focused on creating tools that bridge traditional crafts with modern technology.",
    image: "/team-cto-tech-leader.jpg",
  },
  {
    name: "Meera Devi",
    role: "Cultural Advisor",
    bio: "Master weaver and National Award winner guiding our authenticity and quality standards.",
    image: "/team-cultural-advisor.jpg",
  },
]

const milestones = [
  {
    year: "2020",
    title: "KalaMitra Founded",
    description: "Started with a vision to connect traditional artisans with the digital world.",
  },
  {
    year: "2021",
    title: "First 100 Artisans",
    description: "Onboarded our first 100 verified artisans across 10 Indian states.",
  },
  {
    year: "2022",
    title: "AI Integration Launch",
    description: "Introduced AI-powered product descriptions and cultural storytelling features.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to serve customers in 45+ countries worldwide.",
  },
  {
    year: "2024",
    title: "2,500+ Artisans",
    description: "Reached milestone of 2,500+ active artisans and 25,000+ products.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance mb-6">
              Preserving Heritage Through Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty mb-8">
              KalaMitra is an AI-powered marketplace that connects traditional Indian artisans with global customers,
              preserving cultural heritage while empowering craftspeople to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/artisans">
                <Button size="lg" variant="outline" className="border-orange-200 bg-transparent">
                  Meet Our Artisans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-balance mb-6">
                Our Mission: Bridging Tradition and Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 text-pretty">
                India's craft traditions represent thousands of years of cultural heritage, passed down through
                generations of skilled artisans. However, many of these craftspeople struggle to reach modern markets
                and tell their stories effectively.
              </p>
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                KalaMitra bridges this gap by providing artisans with AI-powered tools to showcase their work, share
                their cultural stories, and connect with customers who value authenticity and craftsmanship.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Verified authentic handcrafted products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">AI-enhanced cultural storytelling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Direct support to artisan communities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Global marketplace access</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/traditional-weaving-loom-workshop.jpg"
                  alt="Traditional artisan at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-balance mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Everything we do is guided by our commitment to preserving cultural heritage while empowering artisans
              through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-balance mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              From a small startup to a global platform connecting thousands of artisans with customers worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Card className="border-orange-200">
                      <CardContent className="p-6">
                        <Badge className="bg-orange-600 text-white mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-pretty">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-balance mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Our diverse team combines technology expertise with deep cultural knowledge to serve artisans and
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="border-orange-200 text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 text-pretty">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white text-balance mb-4">Join Our Mission</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto text-pretty mb-8">
            Whether you're an artisan looking to showcase your craft or a customer seeking authentic handmade products,
            join us in preserving India's cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artisan/onboard">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Become an Artisan
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
