"use client"

import { useState } from "react"
import { ArrowLeft, Upload, Plus, X, Sparkles, Camera, MapPin, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

const craftCategories = [
  "Textiles",
  "Ceramics",
  "Jewelry",
  "Art",
  "Woodwork",
  "Metalwork",
  "Leather Goods",
  "Stone Carving",
  "Glass Work",
  "Paper Crafts",
]

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
]

export default function ArtisanOnboardPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Location
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Craft Info
    craftSpecialization: "",
    experienceYears: "",
    traditionalTechniques: [] as string[],
    craftStory: "",

    // Business Info
    workshopName: "",
    businessType: "",
    gstNumber: "",
    bankAccount: "",

    // Products
    products: [] as any[],

    // AI Enhancement
    enableAIDescriptions: true,
    shareStoryWithAI: true,
  })

  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "",
      description: "",
      price: "",
      category: "",
      materials: "",
      dimensions: "",
      images: [],
    }
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, newProduct],
    }))
  }

  const removeProduct = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }))
  }

  const updateProduct = (id: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    console.log("Submitting artisan application:", formData)
    // Here you would typically send the data to your backend
    alert("Application submitted successfully! We'll review your profile and get back to you within 2-3 business days.")
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
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Artisan Onboarding
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep ? "bg-orange-600 text-white" : "bg-orange-200 text-orange-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-orange-600" : "bg-orange-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-900 mb-2">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Craft Specialization"}
              {currentStep === 3 && "Business Details"}
              {currentStep === 4 && "Product Showcase"}
            </h2>
            <p className="text-orange-700">Step {currentStep} of 4</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <User className="w-5 h-5" />
                  Tell us about yourself
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-orange-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location Details
                  </h3>
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter your complete address"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger className="border-orange-200 focus:border-orange-400">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="123456"
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Craft Specialization */}
          {currentStep === 2 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Sparkles className="w-5 h-5" />
                  Your Craft Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="craftSpecialization">Primary Craft Specialization *</Label>
                    <Select
                      value={formData.craftSpecialization}
                      onValueChange={(value) => handleInputChange("craftSpecialization", value)}
                    >
                      <SelectTrigger className="border-orange-200 focus:border-orange-400">
                        <SelectValue placeholder="Select your craft" />
                      </SelectTrigger>
                      <SelectContent>
                        {craftCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experienceYears">Years of Experience *</Label>
                    <Input
                      id="experienceYears"
                      type="number"
                      value={formData.experienceYears}
                      onChange={(e) => handleInputChange("experienceYears", e.target.value)}
                      placeholder="e.g., 15"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <Label>Traditional Techniques You Practice</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {[
                      "Hand Weaving",
                      "Block Printing",
                      "Embroidery",
                      "Pottery Wheel",
                      "Wood Carving",
                      "Metal Forging",
                      "Stone Carving",
                      "Glass Blowing",
                      "Paper Making",
                    ].map((technique) => (
                      <div key={technique} className="flex items-center space-x-2">
                        <Checkbox
                          id={technique}
                          checked={formData.traditionalTechniques.includes(technique)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange("traditionalTechniques", [...formData.traditionalTechniques, technique])
                            } else {
                              handleInputChange(
                                "traditionalTechniques",
                                formData.traditionalTechniques.filter((t) => t !== technique),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={technique} className="text-sm">
                          {technique}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="craftStory">Your Craft Story *</Label>
                  <Textarea
                    id="craftStory"
                    value={formData.craftStory}
                    onChange={(e) => handleInputChange("craftStory", e.target.value)}
                    placeholder="Tell us about your journey as an artisan. How did you learn your craft? What traditions do you follow? What makes your work unique?"
                    rows={6}
                    className="border-orange-200 focus:border-orange-400"
                  />
                  <p className="text-sm text-orange-600 mt-1">
                    This story will be featured on your artisan profile and help customers connect with your work.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI Enhancement Options
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="enableAI"
                        checked={formData.enableAIDescriptions}
                        onCheckedChange={(checked) => handleInputChange("enableAIDescriptions", checked)}
                      />
                      <Label htmlFor="enableAI" className="text-sm">
                        Enable AI-enhanced product descriptions (recommended)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="shareStory"
                        checked={formData.shareStoryWithAI}
                        onCheckedChange={(checked) => handleInputChange("shareStoryWithAI", checked)}
                      />
                      <Label htmlFor="shareStory" className="text-sm">
                        Allow AI to use your craft story for cultural context
                      </Label>
                    </div>
                  </div>
                  <p className="text-xs text-orange-600 mt-2">
                    Our AI will help create compelling product descriptions that highlight the cultural significance and
                    craftsmanship of your work.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Business Details */}
          {currentStep === 3 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Briefcase className="w-5 h-5" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="workshopName">Workshop/Business Name *</Label>
                    <Input
                      id="workshopName"
                      value={formData.workshopName}
                      onChange={(e) => handleInputChange("workshopName", e.target.value)}
                      placeholder="e.g., Meera's Traditional Weaves"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleInputChange("businessType", value)}
                    >
                      <SelectTrigger className="border-orange-200 focus:border-orange-400">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Artisan</SelectItem>
                        <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="cooperative">Cooperative Society</SelectItem>
                        <SelectItem value="company">Private Limited Company</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gstNumber">GST Number (if applicable)</Label>
                    <Input
                      id="gstNumber"
                      value={formData.gstNumber}
                      onChange={(e) => handleInputChange("gstNumber", e.target.value)}
                      placeholder="22AAAAA0000A1Z5"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bankAccount">Bank Account Number *</Label>
                    <Input
                      id="bankAccount"
                      value={formData.bankAccount}
                      onChange={(e) => handleInputChange("bankAccount", e.target.value)}
                      placeholder="For payment processing"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Required Documents</h4>
                  <p className="text-sm text-blue-700 mb-3">Please keep these documents ready for verification:</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Aadhaar Card or Government ID</li>
                    <li>• Bank Account Details (Passbook/Statement)</li>
                    <li>• GST Certificate (if applicable)</li>
                    <li>• Craft Certification (if available)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Product Showcase */}
          {currentStep === 4 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Camera className="w-5 h-5" />
                  Showcase Your Products
                </CardTitle>
                <p className="text-orange-700">Add at least 3 products to get started on the marketplace</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.products.map((product, index) => (
                  <Card key={product.id} className="border-orange-100">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-orange-900">Product {index + 1}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProduct(product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Product Name *</Label>
                          <Input
                            value={product.name}
                            onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                            placeholder="e.g., Handwoven Silk Saree"
                            className="border-orange-200 focus:border-orange-400"
                          />
                        </div>
                        <div>
                          <Label>Category *</Label>
                          <Select
                            value={product.category}
                            onValueChange={(value) => updateProduct(product.id, "category", value)}
                          >
                            <SelectTrigger className="border-orange-200 focus:border-orange-400">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {craftCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Price (₹) *</Label>
                          <Input
                            type="number"
                            value={product.price}
                            onChange={(e) => updateProduct(product.id, "price", e.target.value)}
                            placeholder="e.g., 12500"
                            className="border-orange-200 focus:border-orange-400"
                          />
                        </div>
                        <div>
                          <Label>Materials Used</Label>
                          <Input
                            value={product.materials}
                            onChange={(e) => updateProduct(product.id, "materials", e.target.value)}
                            placeholder="e.g., Pure silk, gold zari"
                            className="border-orange-200 focus:border-orange-400"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Product Description *</Label>
                        <Textarea
                          value={product.description}
                          onChange={(e) => updateProduct(product.id, "description", e.target.value)}
                          placeholder="Describe your product, its unique features, and crafting process..."
                          rows={3}
                          className="border-orange-200 focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <Label>Product Images</Label>
                        <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                          <p className="text-sm text-orange-600 mb-2">Upload product images (max 5)</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-orange-300 text-orange-700 bg-transparent"
                          >
                            Choose Files
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  onClick={addProduct}
                  variant="outline"
                  className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Another Product
                </Button>

                {formData.products.length === 0 && (
                  <div className="text-center py-8">
                    <Camera className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                    <p className="text-orange-600 mb-4">No products added yet</p>
                    <Button onClick={addProduct} className="bg-orange-600 hover:bg-orange-700 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Product
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              variant="outline"
              disabled={currentStep === 1}
              className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
            >
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep} className="bg-orange-600 hover:bg-orange-700 text-white">
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={formData.products.length < 1}
              >
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
