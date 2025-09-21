import { ArrowLeft, User, Clock, FileText, Eye, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

// Mock data for detailed application view
const application = {
  id: 1,
  name: "Kavita Sharma",
  email: "kavita.sharma@email.com",
  phone: "+91 9876543210",
  address: "123 Potter's Lane, Blue City, Jaipur, Rajasthan - 302001",
  location: "Jaipur, Rajasthan",
  craft: "Blue Pottery",
  experience: 12,
  submittedAt: "2024-01-20T10:30:00Z",
  status: "pending",
  bio: "I am a third-generation potter specializing in traditional Jaipur blue pottery. My family has been practicing this craft for over 60 years, and I have been personally involved for the past 12 years. I combine traditional techniques with contemporary designs to create unique pieces that appeal to modern customers while preserving our cultural heritage.",
  craftDescription:
    "Blue pottery is a traditional craft of Jaipur, characterized by its distinctive blue and white colors. The pottery is made from a special clay that doesn't contain any clay but is made from quartz, raw glaze, sodium sulphate, and multani mitti. The items are fired only once at a very high temperature.",
  businessInfo: {
    workshopSize: "Medium (5-10 workers)",
    monthlyProduction: "200-300 pieces",
    yearsInBusiness: 12,
    hasBusinessLicense: true,
    gstNumber: "24ABCDE1234F1Z5",
  },
  documents: [
    { name: "Aadhaar Card", type: "ID Proof", status: "verified", uploadedAt: "2024-01-20" },
    { name: "Craft Certificate", type: "Skill Certificate", status: "verified", uploadedAt: "2024-01-20" },
    { name: "Work Samples", type: "Portfolio", status: "pending", uploadedAt: "2024-01-20" },
    { name: "Business License", type: "Legal Document", status: "verified", uploadedAt: "2024-01-20" },
  ],
  portfolio: [
    {
      image: "/traditional-blue-pottery-dinner-set-from-jaipur.jpg",
      title: "Traditional Dinner Set",
      description: "Hand-painted blue pottery dinner set with traditional motifs",
    },
    {
      image: "/placeholder.svg?key=port1",
      title: "Decorative Vases",
      description: "Contemporary blue pottery vases with floral patterns",
    },
    {
      image: "/placeholder.svg?key=port2",
      title: "Tea Set Collection",
      description: "Elegant tea set featuring geometric designs",
    },
    {
      image: "/placeholder.svg?key=port3",
      title: "Wall Tiles",
      description: "Decorative wall tiles with Mughal-inspired patterns",
    },
  ],
  references: [
    {
      name: "Rajesh Kumar",
      relation: "Master Potter (Mentor)",
      phone: "+91 9876543211",
      yearsKnown: 15,
    },
    {
      name: "Priya Agarwal",
      relation: "Customer/Gallery Owner",
      phone: "+91 8765432109",
      yearsKnown: 5,
    },
  ],
}

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin">
            <Button variant="outline" className="border-orange-200 mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Review</h1>
              <p className="text-gray-600">Detailed review for {application.name}'s artisan application</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                Pending Review
              </Badge>
              <span className="text-sm text-gray-500">
                Submitted {new Date(application.submittedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-orange-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900">{application.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{application.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900">{application.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <p className="text-gray-900">{application.location}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Address</label>
                  <p className="text-gray-900">{application.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Craft Information */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Craft Specialization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Primary Craft</label>
                    <Badge variant="outline" className="border-orange-200 text-orange-700 mt-1">
                      {application.craft}
                    </Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Years of Experience</label>
                    <p className="text-gray-900">{application.experience} years</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Personal Bio</label>
                  <p className="text-gray-700 text-pretty mt-1">{application.bio}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Craft Description</label>
                  <p className="text-gray-700 text-pretty mt-1">{application.craftDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Business Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Workshop Size</label>
                    <p className="text-gray-900">{application.businessInfo.workshopSize}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Monthly Production</label>
                    <p className="text-gray-900">{application.businessInfo.monthlyProduction}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Years in Business</label>
                    <p className="text-gray-900">{application.businessInfo.yearsInBusiness} years</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">GST Number</label>
                    <p className="text-gray-900">{application.businessInfo.gstNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Work Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {application.portfolio.map((item, index) => (
                    <div key={index} className="space-y-3">
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 text-pretty">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>References</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {application.references.map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Name</label>
                          <p className="text-gray-900">{ref.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Relation</label>
                          <p className="text-gray-900">{ref.relation}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Contact</label>
                          <p className="text-gray-900">{ref.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documents */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {application.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                        <p className="text-xs text-gray-600">{doc.type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={doc.status === "verified" ? "default" : "secondary"}
                          className={
                            doc.status === "verified"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          }
                        >
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Review Actions */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Review Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Review Comments</label>
                  <Textarea placeholder="Add your review comments here..." className="border-orange-200" rows={4} />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve Application
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-yellow-200 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Request More Information
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject Application
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Application Timeline */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle>Application Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Application Submitted</p>
                      <p className="text-xs text-gray-600">{new Date(application.submittedAt).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-600">Under Review</p>
                      <p className="text-xs text-gray-500">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
