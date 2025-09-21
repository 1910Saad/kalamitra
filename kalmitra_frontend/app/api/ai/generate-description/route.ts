import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { productName, category, materials, artisanStory, location, techniques } = await request.json()

    // Mock AI-generated description - in a real app, this would call an AI service
    const culturalContexts = {
      Textiles:
        "This textile represents centuries of weaving traditions passed down through generations, embodying the rich cultural heritage of Indian craftsmanship.",
      Ceramics:
        "This ceramic piece showcases traditional pottery techniques that have been refined over millennia, reflecting the artistic soul of Indian clay artistry.",
      Jewelry:
        "This jewelry piece carries the legacy of ancient Indian metalworking traditions, where each ornament tells a story of cultural significance.",
      Art: "This artwork captures the essence of traditional Indian folk art, preserving ancient storytelling methods through vibrant colors and symbolic patterns.",
      Woodwork:
        "This wooden creation demonstrates the mastery of traditional carpentry techniques, honoring the sacred relationship between artisan and nature.",
      Metalwork:
        "This metalwork exemplifies the ancient Indian tradition of metal crafting, where fire and skill transform raw materials into cultural treasures.",
    }

    const locationContexts = {
      Varanasi: "from the spiritual city of Varanasi, where art and devotion intertwine along the sacred Ganges",
      Jaipur: "from the royal city of Jaipur, carrying the elegance of Rajasthani court traditions",
      Kashmir: "from the paradise of Kashmir, where natural beauty inspires exquisite craftsmanship",
      Madhubani: "from Madhubani, where ancient Mithila art traditions flourish in vibrant storytelling",
      Mysore: "from Mysore, the cultural capital where royal patronage nurtured artistic excellence",
      Lucknow: "from Lucknow, where Nawabi refinement meets traditional craftsmanship",
    }

    // Generate AI-enhanced description
    const baseContext =
      culturalContexts[category as keyof typeof culturalContexts] ||
      "This handcrafted piece represents the rich traditions of Indian artisanship."
    const locationContext = Object.keys(locationContexts).find((loc) => location.includes(loc))
    const locationText = locationContext
      ? locationContexts[locationContext as keyof typeof locationContexts]
      : `from ${location}`

    const aiDescription = `This exquisite ${productName.toLowerCase()} ${locationText}. ${baseContext} Crafted using ${materials || "traditional materials"}, each piece reflects the artisan's deep understanding of cultural symbolism and time-honored techniques. ${techniques ? `The use of ${techniques.join(", ")} techniques ensures authenticity and superior quality.` : ""} This creation not only serves as a beautiful artifact but also as a bridge connecting you to India's magnificent artistic heritage.`

    // Generate cultural significance
    const culturalSignificance = `The art of creating ${category.toLowerCase()} in ${location} dates back centuries, with each piece carrying stories of cultural identity, spiritual beliefs, and community traditions. Artisans like those who created this piece are the guardians of these ancient techniques, ensuring that the wisdom of generations continues to flourish in the modern world.`

    // Generate care instructions based on materials
    const careInstructions = generateCareInstructions(materials, category)

    // Generate pricing insights
    const pricingInsights = `Based on the craftsmanship complexity, materials used, and cultural significance, this piece represents exceptional value. The time-intensive traditional techniques and authentic materials justify the premium pricing, making it both an artistic investment and a cultural treasure.`

    return NextResponse.json({
      success: true,
      aiDescription,
      culturalSignificance,
      careInstructions,
      pricingInsights,
      keywords: generateKeywords(productName, category, location, techniques),
      recommendedTags: generateTags(category, materials, location),
    })
  } catch (error) {
    console.error("AI Description Generation Error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate AI description" }, { status: 500 })
  }
}

function generateCareInstructions(materials: string, category: string): string {
  const careMap = {
    silk: "Dry clean only. Store in a cool, dry place wrapped in muslin cloth. Avoid direct sunlight.",
    cotton: "Hand wash with mild detergent in cold water. Air dry in shade. Iron on medium heat.",
    wool: "Dry clean recommended. If hand washing, use wool-specific detergent in cold water.",
    ceramic: "Clean with soft cloth and mild soap. Avoid abrasive cleaners. Handle with care.",
    wood: "Dust regularly with soft cloth. Apply wood polish occasionally. Keep away from moisture.",
    metal: "Clean with appropriate metal cleaner. Store in dry conditions to prevent tarnishing.",
  }

  const materialKey = Object.keys(careMap).find((key) => materials?.toLowerCase().includes(key))
  return materialKey
    ? careMap[materialKey as keyof typeof careMap]
    : "Handle with care and store in appropriate conditions to preserve quality."
}

function generateKeywords(productName: string, category: string, location: string, techniques: string[]): string[] {
  const baseKeywords = ["handmade", "authentic", "traditional", "cultural", "heritage", "artisan", "indian craft"]

  const locationKeywords = location.split(",").map((l) => l.trim().toLowerCase())
  const techniqueKeywords = techniques || []
  const categoryKeywords = [category.toLowerCase(), "handcrafted"]

  return [...baseKeywords, ...locationKeywords, ...techniqueKeywords, ...categoryKeywords]
}

function generateTags(category: string, materials: string, location: string): string[] {
  const tags = [category, "Handmade", "Traditional"]

  if (materials) {
    const materialTags = materials.split(",").map((m) => m.trim())
    tags.push(...materialTags)
  }

  const locationTag = location.split(",")[1]?.trim() || location.split(",")[0]?.trim()
  if (locationTag) {
    tags.push(locationTag)
  }

  return tags.slice(0, 8) // Limit to 8 tags
}
