import { Calendar, Clock, User, Heart, Share2, ArrowLeft, Tag, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

// Mock data for individual story
const story = {
  id: 1,
  title: "The Golden Threads of Varanasi: A Journey Through Banarasi Silk Weaving",
  content: `
    <p>In the narrow lanes of Varanasi, where the Ganges flows with eternal grace, lies a tradition that has been woven into the very fabric of Indian culture for over two millennia. The art of Banarasi silk weaving is not merely a craft; it is a living testament to the skill, patience, and artistic vision of generations of weavers who have dedicated their lives to creating some of the world's most exquisite textiles.</p>

    <h2>A Legacy Written in Gold</h2>
    <p>The history of Banarasi silk can be traced back to the Mughal era, when Persian motifs and techniques were introduced to the traditional Indian weaving practices. This fusion created a unique style that combined the best of both worlds – the intricate patterns and metallic threads of Persian design with the rich colors and spiritual symbolism of Indian art.</p>

    <p>Today, master weavers like Meera Devi continue this ancient tradition, working on handlooms that have remained virtually unchanged for centuries. Each saree takes anywhere from 15 days to 6 months to complete, depending on the complexity of the design and the fineness of the work.</p>

    <h2>The Art of Creation</h2>
    <p>The process begins with the selection of the finest silk threads, often imported from Karnataka and Kashmir. The warp and weft are carefully prepared, with the golden and silver zari threads being wound onto separate bobbins. The weaver then begins the painstaking process of creating the design, working from memory or following traditional patterns that have been passed down through generations.</p>

    <p>What makes Banarasi silk truly special is the use of real gold and silver threads, known as zari. These metallic threads are woven into intricate patterns that catch and reflect light, creating a luminous quality that has made Banarasi sarees the preferred choice for brides and special occasions across India.</p>

    <h2>Preserving Tradition in Modern Times</h2>
    <p>Despite the challenges posed by machine-made alternatives and changing fashion trends, the artisans of Varanasi remain committed to preserving their craft. Organizations like KalaMitra are working to connect these skilled weavers with a global audience, ensuring that their art continues to thrive in the digital age.</p>

    <p>The revival of interest in handcrafted textiles, driven by a growing appreciation for sustainable and authentic products, has brought new hope to the weaving community. Young designers are collaborating with traditional weavers to create contemporary interpretations of classic designs, ensuring that this ancient art form remains relevant for future generations.</p>
  `,
  author: "Priya Sharma",
  authorRole: "Cultural Historian",
  authorBio:
    "Priya Sharma is a cultural historian specializing in Indian textile traditions. She has spent over a decade documenting the stories of artisans across India.",
  publishedAt: "2024-01-15",
  readTime: 8,
  category: "Craft Traditions",
  tags: ["Banarasi", "Silk", "Weaving", "Varanasi", "Heritage", "Traditional Crafts"],
  image: "/beautiful-banarasi-silk-saree-with-golden-threads.jpg",
  likes: 234,
  shares: 45,
  comments: 18,
}

const relatedStories = [
  {
    id: 2,
    title: "Blue Magic: The Revival of Jaipur's Blue Pottery",
    image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
    category: "Artisan Profiles",
    readTime: 6,
  },
  {
    id: 3,
    title: "Kashmir's Paper Dreams: The Art of Papier Mache",
    image: "/ornate-kashmiri-papier-mache-decorative-box.jpg",
    category: "Craft Traditions",
    readTime: 7,
  },
]

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/stories">
            <Button variant="outline" className="border-orange-200 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="bg-orange-600 text-white mb-4">{story.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-white text-balance">{story.title}</h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{story.author}</p>
                  <p className="text-sm text-gray-600">{story.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(story.publishedAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {story.readTime} min read
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {story.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    {story.shares}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {story.comments}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 lg:p-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-orange-200 text-orange-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">About {story.author}</h3>
                  <p className="text-gray-600 text-sm">{story.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Social Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="border-orange-200 bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Like ({story.likes})
                  </Button>
                  <Button variant="outline" size="sm" className="border-orange-200 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="border-orange-200 bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Comment ({story.comments})
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {relatedStories.map((relatedStory) => (
              <Card key={relatedStory.id} className="group hover:shadow-lg transition-shadow border-orange-100">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedStory.image || "/placeholder.svg"}
                      alt={relatedStory.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90">
                        {relatedStory.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{relatedStory.readTime} min read</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-balance">
                    {relatedStory.title}
                  </h3>
                  <Link href={`/stories/${relatedStory.id}`} className="mt-3 inline-block">
                    <Button size="sm" variant="outline" className="border-orange-200 hover:bg-orange-50 bg-transparent">
                      Read Story
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
