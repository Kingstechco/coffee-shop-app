# Coffee Haven Limpopo - Complete App Documentation

## 📖 Overview

Coffee Haven Limpopo is a modern, responsive e-commerce web application designed specifically for the University of Venda (UNIVEN) community in Thohoyandou, Limpopo, South Africa. Built as a learning project, this app provides a complete coffee shop experience with product browsing, cart management, and order placement functionality.

## 🎯 Business Context

**Founded by Young Entrepreneurs:**
- **Kharendwe Mambani** (Co-Founder & CEO)
- **Lufuno Nekhumbe** (Co-Founder & COO)

The app serves as the digital platform for a proudly South African, black-owned coffee shop located at the University of Venda, offering student-friendly prices and a comfortable study environment.

## ✨ Features

### Core Functionality
- **Product Catalog**: Browse coffee drinks, cold beverages, and food items
- **Category Filtering**: Filter products by Hot Drinks, Cold Drinks, and Food
- **Product Details**: Detailed view of each product with pricing and descriptions
- **Shopping Cart**: Add, remove, and update quantities of items
- **Checkout Process**: Complete order form with delivery and payment options
- **Order Confirmation**: Professional order confirmation with tracking details

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real Product Images**: High-quality images from Unsplash for all products
- **Local Context**: South African Rand (R) pricing and local business information
- **Accessibility**: High contrast design and clear visual hierarchy

### South African Localization
- **Currency**: All prices in South African Rand (R)
- **Tax Calculation**: 15% VAT as per South African standards
- **Local Address**: University of Venda, Thohoyandou, Limpopo, 0950
- **Student Features**: Student number field for potential discounts
- **Campus Delivery**: Delivery option within UNIVEN campus

## 🛠️ Technical Stack

### Frontend Framework: Next.js 15
**Why Next.js?**
- **Server-Side Rendering (SSR)**: Improved SEO and initial page load performance
- **App Router**: Modern routing system with improved developer experience
- **Image Optimization**: Built-in image optimization for better performance
- **TypeScript Support**: Native TypeScript support for better code quality
- **Production Ready**: Built-in optimizations for production deployment

### Language: TypeScript
**Why TypeScript?**
- **Type Safety**: Prevents runtime errors through compile-time type checking
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Scalability**: Makes the codebase more maintainable as it grows
- **Modern JavaScript**: Access to latest ECMAScript features with type safety

### Styling: Tailwind CSS 4
**Why Tailwind CSS?**
- **Utility-First**: Rapid development with utility classes
- **Responsive Design**: Built-in responsive design utilities
- **Consistency**: Design system consistency across components
- **Performance**: Only ships CSS that's actually used
- **Customization**: Easy to customize and extend the design system

### State Management: React Context API
**Why Context API?**
- **Built-in**: No additional dependencies required
- **Simple**: Easy to understand and implement for this app's scope
- **Type-Safe**: Works well with TypeScript
- **Sufficient**: Perfect for the cart state management needs

### Data Storage: JSON Files
**Why JSON Files?**
- **Simplicity**: No database setup required for learning project
- **Version Control**: Product data can be tracked in Git
- **Fast Development**: Quick to modify and test
- **No Backend**: Reduces complexity for frontend-focused project

### Image Handling: Unsplash API
**Why Unsplash?**
- **High Quality**: Professional product images
- **Free**: No cost for development and demonstration
- **Variety**: Wide selection of coffee and food images
- **Reliable**: Stable image hosting service

## 📁 Project Structure

```
coffee-shop-app/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── cart/                     # Shopping cart page
│   │   └── page.tsx
│   ├── checkout/                 # Checkout process
│   │   └── page.tsx
│   ├── order-confirmation/       # Order confirmation
│   │   └── page.tsx
│   ├── product/[id]/            # Dynamic product pages
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header
│   └── ProductImage.tsx         # Product image component
├── context/                     # React Context providers
│   └── CartContext.tsx          # Shopping cart state management
├── data/                        # Static data files
│   └── products.json            # Product catalog
├── types/                       # TypeScript type definitions
│   └── product.ts               # Product and cart item types
├── utils/                       # Utility functions
│   └── currency.ts              # Currency formatting
└── public/                      # Static assets
    └── [Next.js default assets]
```

## 🚀 How to Run the Application

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)

### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd coffee-shop-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production Build
npm run build        # Create optimized production build
npm start           # Start production server (after build)

# Type Checking
npx tsc --noEmit    # Check TypeScript types without building
```

### Environment Setup

No environment variables are required for basic functionality. The app uses:
- Static JSON data for products
- Unsplash images via direct URLs
- Local state management for cart

## 🏗️ Architecture Decisions

### Component Architecture
- **Functional Components**: Using modern React hooks
- **TypeScript Interfaces**: Strongly typed props and state
- **Custom Hooks**: Cart functionality encapsulated in context
- **Reusable Components**: Header, ProductImage for consistency

### State Management Strategy
- **Local State**: useState for component-specific state
- **Global State**: Context API for cart management
- **Persistent State**: localStorage for order confirmation

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Component Styling**: Inline Tailwind classes
- **Responsive Design**: Mobile-first approach
- **Design System**: Consistent color palette and typography

### Data Flow
1. **Product Data**: Static JSON → Components
2. **Cart Actions**: Components → Context → localStorage
3. **Order Process**: Form data → localStorage → Confirmation

## 🎨 Design System

### Color Palette
- **Primary**: Amber/Orange (#D97706, #F59E0B)
- **Secondary**: Gray scale (#1F2937, #6B7280, #F3F4F6)
- **Success**: Green (#10B981)
- **Error**: Red (#EF4444)
- **Background**: Warm gradients (amber-50 to orange-50)

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body Text**: Regular weight, good contrast
- **Labels**: Bold for better visibility
- **Interactive**: Medium weight with hover states

### Layout Principles
- **Grid System**: CSS Grid and Flexbox for layouts
- **Spacing**: Consistent padding and margins using Tailwind
- **Containers**: Max-width containers for content
- **Cards**: Rounded corners with shadows for depth

## 🔧 Key Components Explained

### CartContext.tsx
Manages global cart state using React Context:
- Add/remove products
- Update quantities
- Calculate totals
- Persist state across page refreshes

### ProductImage.tsx
Handles product image display:
- Maps product names to specific Unsplash images
- Provides fallback images
- Optimizes loading with Next.js Image component

### Header.tsx
Navigation component with:
- Dynamic styling based on scroll position
- Cart item count badge
- Responsive menu for mobile

### Checkout Process
Multi-step form handling:
- Customer information collection
- Delivery method selection
- Payment method choice
- Order confirmation generation

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile** (< 768px): Single column layout, mobile-optimized navigation
- **Tablet** (768px - 1024px): Two-column layouts, condensed spacing
- **Desktop** (> 1024px): Multi-column grids, full feature set

## 🚀 Performance Optimizations

- **Next.js Image Optimization**: Automatic image resizing and format optimization
- **Static Generation**: Pre-rendered pages for faster loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components loaded on demand
- **CSS Purging**: Tailwind removes unused styles in production

## 🔮 Future Enhancements

### Immediate Improvements
- **Payment Integration**: Add actual payment gateway (Payfast, Stripe)
- **User Authentication**: Customer accounts and order history
- **Inventory Management**: Real-time stock tracking
- **Email Notifications**: Order confirmations and updates

### Advanced Features
- **Admin Dashboard**: Product and order management
- **Analytics**: Sales reporting and customer insights
- **Mobile App**: React Native version for mobile platforms
- **Progressive Web App**: Offline functionality and push notifications

### Technical Improvements
- **Database Integration**: PostgreSQL or MongoDB for data persistence
- **API Development**: RESTful API or GraphQL backend
- **Testing Suite**: Unit and integration tests
- **CI/CD Pipeline**: Automated deployment and testing

## 📞 Support and Contact

For questions about this project or Coffee Haven Limpopo:

- **Location**: University of Venda, University Road, Thohoyandou, Limpopo, 0950
- **Phone**: 015 962 8000
- **Email**: orders@coffeehavenlimpopo.co.za

## 🛠️ Troubleshooting

### Common Issues

1. **"next is not recognized" Error**
   - Ensure Node.js is installed
   - Run `npm install` to install dependencies
   - Try `npx next dev` instead of `npm run dev`

2. **Images Not Loading**
   - Check internet connection (images are from Unsplash)
   - Verify next.config.ts allows images.unsplash.com domain

3. **TypeScript Errors**
   - Run `npm install` to ensure all type definitions are installed
   - Check that TypeScript version is compatible

4. **Port Already in Use**
   - Use `npm run dev -- -p 3001` to run on different port
   - Kill any existing Node.js processes

### Development Tips

- Use browser developer tools to inspect responsive design
- Check console for any JavaScript errors
- Use React Developer Tools extension for debugging
- Monitor network tab for image loading issues

## 📄 License

This project is created for educational purposes as a learning exercise in modern web development.

---

**Built with ❤️ for the UNIVEN community by young South African entrepreneurs**

---

## 📋 Quick Start Guide

1. **Download/Clone the project**
2. **Open terminal in project folder**
3. **Run: `npm install`**
4. **Run: `npm run dev`**
5. **Open: `http://localhost:3000`**
6. **Start shopping! ☕🛒**