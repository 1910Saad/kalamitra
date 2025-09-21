"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Loader2, Wand2 } from "lucide-react"

interface AIEnhancedProductFormProps {
  onProductUpdate: (productData: any) => void
  initialData?: any
}

export default function AIEnhancedProductForm({ onProductUpdate, initialData }: AIEnhancedProductFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    category: initialData?.category || "",
    materials: initialData?.materials || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
    artisanStory: initialData?.artisanStory || "",
    location: initialData?.location || "",
    techniques: initialData?.techniques || [],
  })

  const [aiGenerated, setAiGenerated] = useState({
    description: "",
    culturalSignificance: "",
    careInstructions: "",
    keywords: [],
    tags: [],
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [showAIResults, setShowAIResults] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateAIContent = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/ai/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setAiGenerated({
          description: result.aiDescription,
          culturalSignificance: result.culturalSignificance,
          careInstructions: result.careInstructions,
          keywords: result.keywords,
          tags: result.recommendedTags,
        })
        setShowAIResults(true)
      }
    } catch (error) {
      console.error("AI Generation Error:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const applyAIDescription = () => {
    setFormData((prev) => ({ ...prev, description: aiGenerated.description }))
    onProductUpdate({ ...formData, description: aiGenerated.description, aiEnhanced: true })
  }

  return (
    <div className="space-y-6">
      {/* Basic Product Information */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-900">Product Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="e.g., Handwoven Banarasi Silk Saree"
                className="border-orange-200 focus:border-orange-400"
              />
            </div>
            <div>
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                placeholder="e.g., Textiles"
                className="border-orange-200 focus:border-orange-400"
              />
            </div>
            <div>
              <Label htmlFor="materials">Materials Used</Label>
              <Input
                id="materials"
                value={formData.materials}
                onChange={(e) => handleInputChange("materials", e.target.value)}
                placeholder="e.g., Pure silk, gold zari"
                className="border-orange-200 focus:border-orange-400"
              />
            </div>
            <div>
              <Label htmlFor="price">Price (₹)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="e.g., 12500"
                className="border-orange-200 focus:border-orange-400"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Product Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your product..."
              rows={4}
              className="border-orange-200 focus:border-orange-400"
            />
          </div>

          <div>
            <Label htmlFor="location">Craft Origin Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="e.g., Varanasi, Uttar Pradesh"
              className="border-orange-200 focus:border-orange-400"
            />
          </div>
        </CardContent>
      </Card>

      {/* AI Enhancement Section */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-900">
            <Sparkles className="w-5 h-5" />
            AI Enhancement
          </CardTitle>
          <p className="text-orange-700 text-sm">
            Let our AI create compelling descriptions and cultural context for your product
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={generateAIContent}
            disabled={isGenerating || !formData.name || !formData.category}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating AI Content...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 mr-2" />
                Generate AI-Enhanced Description
              </>
            )}
          </Button>

          {showAIResults && (
            <div className="space-y-4 mt-6">
              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-orange-900">AI-Generated Description</h4>
                  <Badge className="bg-green-100 text-green-700">✨ Enhanced</Badge>
                </div>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">{aiGenerated.description}</p>
                <Button onClick={applyAIDescription} size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Use This Description
                </Button>
              </div>

              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Cultural Significance</h4>
                <p className="text-orange-800 text-sm leading-relaxed">{aiGenerated.culturalSignificance}</p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Care Instructions</h4>
                <p className="text-orange-800 text-sm leading-relaxed">{aiGenerated.careInstructions}</p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Recommended Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {aiGenerated.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
