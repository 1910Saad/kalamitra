"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, TrendingUp } from "lucide-react"

interface Recommendation {
  id: number
  name: string
  artisan: string
  location: string
  price: number
  rating: number
  category: string
  image: string
  reason: string
  aiScore: number
  culturalMatch: string
}

interface AIRecommendationsProps {
  userId?: string
  currentProduct?: any
  className?: string
}

export default function AIRecommendations({ userId, currentProduct, className }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [insights, setInsights] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecommendations()
  }, [userId, currentProduct])

  const fetchRecommendations = async () => {
    try {
      const response = await fetch("/api/ai/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId || "anonymous",
          viewedProducts: currentProduct ? [currentProduct] : [],
          purchaseHistory: [],
          preferences: {},
        }),
      })

      const result = await response.json()

      if (result.success) {
        setRecommendations(result.recommendations)
        setInsights(result.insights)
      }
    } catch (error) {
      console.error("Recommendations Error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card className={`border-orange-200 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse mr-2" />
            <span className="text-orange-600">Generating personalized recommendations...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* AI Insights */}
      {insights && (
        <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900">
              <TrendingUp className="w-5 h-5" />
              Your Cultural Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Top Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {insights.topCategories.map((category: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Price Range</h4>
                <p className="text-orange-700 text-sm">{insights.preferredPriceRange}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-orange-900 mb-2">Cultural Interests</h4>
              <div className="flex flex-wrap gap-2">
                {insights.culturalInterests.map((interest: string, index: number) => (
                  <Badge key={index} className="bg-orange-600 text-white text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-900">
            <Sparkles className="w-5 h-5" />
            AI-Curated Recommendations
          </CardTitle>
          <p className="text-orange-700 text-sm">
            {insights?.recommendationReason || "Personalized suggestions based on your interests"}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((product) => (
              <Card key={product.id} className="border-orange-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <Badge className="bg-orange-600 text-white text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Pick
                    </Badge>
                    <Badge
                      className={`text-xs ${
                        product.culturalMatch === "High" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {product.culturalMatch} Match
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-semibold text-orange-900 mb-1 text-balance">{product.name}</h4>

                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm text-orange-700">{product.artisan}</span>
                    <span className="text-xs text-orange-600">• {product.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-orange-900">₹{product.price.toLocaleString()}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-orange-700">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-orange-600 mb-3 italic">{product.reason}</p>

                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
