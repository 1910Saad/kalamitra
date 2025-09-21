# KalaMitra - Indian Craft Marketplace

KalaMitra is a comprehensive digital marketplace platform that connects traditional Indian artisans with customers worldwide. The platform celebrates and preserves India's rich cultural heritage by providing artisans with a modern e-commerce solution to showcase and sell their handcrafted products.

## 🎨 Features

### For Customers
- **Product Discovery**: Browse authentic Indian crafts by category, region, and artisan
- **Artisan Stories**: Learn about the craftspeople and their traditional techniques
- **Secure Shopping**: Safe and secure purchasing experience
- **Cultural Education**: Discover the history and significance of traditional crafts

### For Artisans
- **Profile Management**: Create detailed profiles showcasing skills and background
- **Product Listings**: Upload and manage craft listings with rich descriptions
- **Order Management**: Track orders and communicate with customers
- **Dashboard Analytics**: View sales performance and customer insights

### For Administrators
- **User Management**: Oversee customer and artisan accounts
- **Content Moderation**: Review and approve artisan applications and products
- **Analytics Dashboard**: Monitor platform performance and growth metrics
- **Order Oversight**: Manage marketplace transactions and disputes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Authentication**: Role-based authentication (Customer, Artisan, Admin)
- **TypeScript**: Full type safety throughout the application
- **State Management**: React hooks and context

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ``bash
   git clone <repository-url>
   cd kalamitra-marketplace
   ``

2. **Install dependencies**
   ``bash
   npm install
   or
   yarn install
   ``

3. **Set up environment variables**
   ``bash
   cp .env.example .env.local
   ``
   Configure your environment variables in `.env.local`

4. **Run the development server**
   ``bash
   npm run dev
   or
   yarn dev``

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
kalamitra-marketplace/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── artisan/           # Artisan dashboard and profiles
│   ├── artisans/          # Artisan directory
│   ├── auth/              # Authentication pages
│   ├── marketplace/       # Product marketplace
│   ├── product/           # Individual product pages
│   ├── profile/           # User profiles
│   └── stories/           # Artisan stories
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── auth-guard.tsx    # Authentication protection
├── lib/                  # Utility functions
├── public/               # Static assets and images
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## 🔐 Authentication System

The platform implements a three-tier role-based authentication system:

### User Roles
- **Customer**: Browse and purchase products
- **Artisan**: Manage profile and sell products
- **Admin**: Platform administration and oversight

### Protected Routes
- `/admin` - Admin dashboard (Admin only)
- `/artisan/dashboard` - Artisan dashboard (Artisan only)
- `/profile` - User profile (All authenticated users)

## 🎨 Design System

### Color Palette
- **Primary**: Warm earth tones reflecting traditional Indian crafts
- **Secondary**: Rich accent colors inspired by Indian textiles
- **Neutral**: Clean grays and whites for optimal readability

### Typography
- **Headings**: Clean, modern fonts for excellent readability
- **Body**: Optimized for long-form content with proper line spacing

### Layout
- **Mobile-first**: Responsive design optimized for all devices
- **Flexbox**: Primary layout method for consistent alignment
- **Grid**: Used for complex product galleries and dashboards

## 🌟 Key Pages

### Homepage (`/`)
- Hero section with marketplace introduction
- Featured artisans and products
- Cultural heritage highlights

### Marketplace (`/marketplace`)
- Product grid with filtering and search
- Category-based navigation
- Artisan information integration

### Artisan Directory (`/artisans`)
- Comprehensive artisan profiles
- Skill and location-based filtering
- Direct contact capabilities

### Stories (`/stories`)
- In-depth artisan narratives
- Cultural and historical context
- Traditional technique documentation

## 🔧 Development

### Code Style
- ESLint and Prettier configured
- TypeScript strict mode enabled
- Consistent component structure

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow shadcn/ui patterns for consistency

### State Management
- React Context for global state
- Local state with useState/useReducer
- Custom hooks for reusable logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code patterns
- Add TypeScript types for new features
- Test components thoroughly
- Update documentation as needed

