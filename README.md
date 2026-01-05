# ERPICA User Manual Frontend

A modern, responsive React-based user manual frontend application built with TypeScript and Vite. This application displays documentation content fetched from a backend API in an organized, searchable, and user-friendly interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)

## 🎯 Overview

This application serves as a user manual interface for ERPICA, displaying categorized documentation content with features like:
- Category-based organization
- Smooth scroll navigation
- Active section highlighting
- Loading and error states
- Responsive design

## 🛠️ Technologies Used

### Core Technologies
- **React 19.2.0** - UI library for building the interface
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.4** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting and quality checks
- **Bun** - Package manager and runtime
- **Google Fonts (Inter)** - Modern typography

## 📁 Project Structure

```
user-frontend/
├── src/
│   ├── components/
│   │   └── UserManual/
│   │       ├── UserManual.tsx      # Main component
│   │       └── UserManual.css      # Component styles
│   ├── services/
│   │   ├── api.ts                  # API service layer
│   │   └── api.d.ts                # TypeScript definitions
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite config
└── README.md                       # This file
```

## 🔌 API Integration

### Backend API Base URL
```
https://user-backend-usjt.onrender.com/api
```

### API Service Location
**File:** [`src/services/api.ts`](src/services/api.ts)

### Available API Endpoints

#### 1. Get All Content
- **Function:** `getAllContent(published?: string | null)`
- **Endpoint:** `GET /api/content`
- **Location:** Used in [`src/components/UserManual/UserManual.tsx:54`](src/components/UserManual/UserManual.tsx#L54)
- **Parameters:**
  - `published` (optional): Filter by published status ("true" or "false")
- **Response Type:** `ApiResponse<Content[]>`
- **Description:** Fetches all documentation content, optionally filtered by published status

#### 2. Get Content By ID
- **Function:** `getContentById(id: string)`
- **Endpoint:** `GET /api/content/:id`
- **Location:** Defined in [`src/services/api.ts:37`](src/services/api.ts#L37)
- **Parameters:**
  - `id`: Content ID
- **Response Type:** `ApiResponse<Content>`
- **Description:** Fetches a single content item by its ID (currently not used in the UI)

### API Type Definitions

#### ApiResponse Interface
```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}
```

#### Content Interface
```typescript
interface Content {
    _id: string;
    title: string;
    content: string;
    category: string;
    slug: string;
    order: number;
    published?: boolean;
}
```

**Location:** [`src/services/api.ts:4-18`](src/services/api.ts#L4-L18)

### API Usage Flow

1. **Component Mount:** When `UserManual` component mounts, it calls `fetchContents()` ([`UserManual.tsx:27`](src/components/UserManual/UserManual.tsx#L27))

2. **API Call:** `fetchContents()` calls `getAllContent('true')` to fetch only published content ([`UserManual.tsx:54`](src/components/UserManual/UserManual.tsx#L54))

3. **Data Processing:** Response data is sorted by the `order` field and stored in state ([`UserManual.tsx:57`](src/components/UserManual/UserManual.tsx#L57))

4. **Rendering:** Content is grouped by category and rendered in the UI ([`UserManual.tsx:74-81`](src/components/UserManual/UserManual.tsx#L74-L81))

## ✨ Features

### Current Features
- 📚 **Category-based Documentation** - Content organized by categories
- 📍 **Active Section Highlighting** - Automatically highlights the current section in sidebar
- 🎨 **Modern UI** - Clean, professional interface with custom styling
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🔄 **Loading States** - Animated loader during data fetch
- ❌ **Error Handling** - User-friendly error messages with retry button
- 📱 **Responsive Design** - Works on all device sizes

### UI Components

#### Loading State
- Animated ring loader with message
- Location: [`UserManual.tsx:107-119`](src/components/UserManual/UserManual.tsx#L107-L119)

#### Error State
- Error icon with message and retry button
- Location: [`UserManual.tsx:122-140`](src/components/UserManual/UserManual.tsx#L122-L140)

#### Empty State
- Displays when no content is available
- Location: [`UserManual.tsx:143-159`](src/components/UserManual/UserManual.tsx#L143-L159)

#### Main Interface
- **Sidebar Navigation** - Category-grouped navigation links
- **Content Area** - Documentation articles with HTML rendering
- **Footer** - Copyright and branding

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- Bun package manager

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd user-frontend
```

2. **Install dependencies**
```bash
bun install
```

## 💻 Development

### Start Development Server
```bash
bun run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Lint Code
```bash
bun run lint
```

## 🏗️ Build

### Create Production Build
```bash
bun run build
```

This will:
1. Run TypeScript compiler (`tsc -b`)
2. Build optimized production bundle with Vite
3. Output to `dist/` directory

### Preview Production Build
```bash
bun run preview
```

## 🎨 Styling

The application uses custom CSS with a modern design system:
- **Global Styles:** [`src/index.css`](src/index.css) - Contains the main design system with CSS variables, animations, and global styles
- **Component Styles:** [`src/components/UserManual/UserManual.css`](src/components/UserManual/UserManual.css) - Component-specific styling

### Design Features
- Glassmorphism effects
- Smooth animations and transitions
- Custom color palette
- Google Fonts (Inter) typography
- Responsive grid layouts

## 🔧 Configuration Files

- **`tsconfig.json`** - TypeScript base configuration
- **`tsconfig.app.json`** - App-specific TypeScript settings
- **`tsconfig.node.json`** - Node/build TypeScript settings
- **`vite.config.ts`** - Vite build configuration
- **`eslint.config.js`** - ESLint rules and settings

## 📝 Notes

- The application fetches data from a hosted backend API
- Only published content is displayed to end users
- Content is rendered with `dangerouslySetInnerHTML` for HTML formatting
- Search functionality is currently commented out but available for future use

## 🤝 Contributing

When contributing to this project:
1. Follow the existing code style
2. Use TypeScript for type safety
3. Test all API integrations
4. Ensure responsive design works on all devices

## 📄 License

© 2026 Erpica. All rights reserved.
