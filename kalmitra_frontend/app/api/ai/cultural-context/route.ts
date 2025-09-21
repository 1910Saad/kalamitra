import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { craftType, region, artisanStory } = await request.json()

    // Mock cultural context database - in a real app, this would query a comprehensive database
    const culturalDatabase = {
      "Banarasi Weaving": {
        origin: "Mughal Period (14th century)",
        significance:
          "Banarasi textiles represent the pinnacle of Indian weaving artistry, originally patronized by Mughal emperors who brought Persian techniques to India.",
        techniques: ["Zari work", "Brocade weaving", "Silk thread manipulation"],
        symbolism:
          "The intricate patterns often depict Mughal motifs, floral designs, and geometric patterns that symbolize prosperity and divine blessing.",
        modernRelevance:
          "Today, Banarasi weaves are considered essential for Indian weddings and special occasions, maintaining their status as luxury textiles.",
        preservation:
          "UNESCO has recognized the craft, and government initiatives support artisan communities in Varanasi.",
      },
      "Blue Pottery": {
        origin: "Persian influence (14th century)",
        significance:
          "Blue pottery came to India through Persian artisans and was refined in Rajasthan, becoming synonymous with royal patronage.",
        techniques: ["Quartz-based clay", "Cobalt blue glazing", "Hand-painting"],
        symbolism:
          "The blue color represents infinity and immortality in Persian culture, while floral motifs symbolize paradise.",
        modernRelevance:
          "Contemporary artists blend traditional techniques with modern designs, making blue pottery relevant for modern homes.",
        preservation:
          "Jaipur remains the primary center, with master artisans training new generations in this delicate art.",
      },
      "Papier Mâché": {
        origin: "Kashmir (15th century)",
        significance:
          "Introduced by Persian craftsmen, papier mâché became integral to Kashmiri culture, reflecting the region's artistic sensibilities.",
        techniques: ["Paper pulp molding", "Natural pigment painting", "Gold leaf application"],
        symbolism:
          "Chinar leaves, roses, and birds represent Kashmir's natural beauty and spiritual connection to nature.",
        modernRelevance:
          "The craft provides livelihood to many Kashmiri families and serves as cultural ambassadors of the region.",
        preservation:
          "Government schemes and NGOs work to preserve traditional techniques while encouraging innovation.",
      },
      "Madhubani Art": {
        origin: "Ancient Mithila (7th century)",
        significance:
          "Originally created by women for religious ceremonies, Madhubani art represents one of India's oldest folk art traditions.",
        techniques: ["Natural pigments", "Bamboo pen drawing", "Geometric patterns"],
        symbolism: "Each motif has spiritual significance - fish for fertility, peacocks for love, lotus for purity.",
        modernRelevance:
          "The art form has evolved from wall paintings to canvas, providing economic empowerment to rural women.",
        preservation:
          "Several Madhubani artists have received national recognition, helping preserve and promote the tradition.",
      },
    }

    // Find matching cultural context
    const contextKey = Object.keys(culturalDatabase).find(
      (key) =>
        craftType.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(craftType.toLowerCase()),
    )

    const culturalInfo = contextKey ? culturalDatabase[contextKey as keyof typeof culturalDatabase] : null

    if (!culturalInfo) {
      // Generate generic cultural context
      return NextResponse.json({
        success: true,
        culturalContext: {
          origin: "Traditional Indian craftsmanship",
          significance: `This ${craftType} represents the rich heritage of ${region}, where artisans have preserved ancient techniques through generations.`,
          techniques: ["Traditional handwork", "Natural materials", "Time-honored methods"],
          symbolism: "Each piece carries cultural symbols and meanings that connect to local traditions and beliefs.",
          modernRelevance:
            "Contemporary artisans continue these traditions while adapting to modern aesthetics and needs.",
          preservation:
            "Efforts are ongoing to document and preserve these traditional craft techniques for future generations.",
        },
        historicalTimeline: [
          { period: "Ancient Times", event: "Origins of the craft tradition" },
          { period: "Medieval Period", event: "Refinement under royal patronage" },
          { period: "Colonial Era", event: "Adaptation and survival challenges" },
          { period: "Modern Times", event: "Revival and contemporary relevance" },
        ],
        relatedCrafts: ["Regional variations", "Similar techniques", "Connected traditions"],
      })
    }

    // Generate historical timeline
    const timeline = [
      { period: "Origins", event: culturalInfo.origin },
      { period: "Development", event: "Technique refinement and cultural integration" },
      { period: "Golden Age", event: "Peak of artistic achievement and royal patronage" },
      { period: "Modern Era", event: culturalInfo.modernRelevance },
    ]

    return NextResponse.json({
      success: true,
      culturalContext: culturalInfo,
      historicalTimeline: timeline,
      relatedCrafts: generateRelatedCrafts(craftType, region),
      artisanInsights: generateArtisanInsights(artisanStory),
    })
  } catch (error) {
    console.error("Cultural Context Error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate cultural context" }, { status: 500 })
  }
}

function generateRelatedCrafts(craftType: string, region: string): string[] {
  const craftFamilies = {
    textile: ["Weaving", "Embroidery", "Block Printing", "Tie-Dye"],
    pottery: ["Ceramics", "Terracotta", "Glazing", "Clay Modeling"],
    art: ["Painting", "Drawing", "Illustration", "Mural Art"],
    wood: ["Carving", "Inlay Work", "Furniture Making", "Sculpture"],
    metal: ["Jewelry Making", "Engraving", "Casting", "Wire Work"],
  }

  const craftFamily = Object.keys(craftFamilies).find((family) => craftType.toLowerCase().includes(family))

  return craftFamily
    ? craftFamilies[craftFamily as keyof typeof craftFamilies]
    : ["Traditional Crafts", "Regional Arts", "Handmade Items"]
}

function generateArtisanInsights(artisanStory: string): any {
  if (!artisanStory) return null

  return {
    experienceLevel: "Master Artisan",
    traditionKeeper: true,
    communityRole: "Teaches traditional techniques to younger generation",
    uniqueApproach: "Combines ancestral methods with personal artistic vision",
  }
}
