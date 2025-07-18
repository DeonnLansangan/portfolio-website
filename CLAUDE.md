# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality and style

## Architecture Overview

This is a Next.js 15 portfolio website showcasing Computer Science graduates from Holy Angel University. The application uses the App Router with TypeScript and server-side rendering.

### Key Technologies
- **Next.js 15** with App Router and TypeScript
- **Mantine UI** for component library and notifications
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Zod** for form validation
- **Resend** for email functionality

### Project Structure

**Core Data Layer:**
- `src/data/memberList.tsx` - Central member data with skills, experience, and contact info
- `src/data/skillList.tsx` - Skill definitions with categories and logos
- `src/data/projectList.tsx` - Project showcase data
- `src/types/index.ts` - TypeScript interfaces for Member, Skill, Project, and related types

**Pages:**
- `src/app/page.tsx` - Homepage with hero, members, and projects sections
- `src/app/profile/[memberName]/page.tsx` - Dynamic member profile pages
- `src/app/contact/page.tsx` - Contact form page
- `src/app/aboutUs/page.tsx` - About page

**Components:**
- `src/components/sections/` - Main page sections (header, hero, members, projects, footer)
- `src/components/sections/memberPage/` - Member profile page components
- `src/components/cards/` - Reusable card components
- `src/components/ui/` - Base UI components

**State Management:**
- `src/store/memberStore.ts` - Zustand store for member data across the app

**API Routes:**
- `src/app/api/send/route.ts` - Email sending endpoint using Resend

### Key Patterns

1. **Dynamic Routing**: Member profiles use `[memberName]` dynamic routes with username-based routing
2. **Data Relationships**: Members link to skills via `skillId` references, maintaining normalized data structure
3. **Component Composition**: Sections are composed of smaller, reusable components
4. **Server Actions**: Form submissions use Next.js server actions in `src/app/actions.ts`
5. **Asset Organization**: Profile pictures and skill logos are stored in `public/` with organized subdirectories

### Member Data Structure
Members have skills (with order for display), experience (with dates), and contact information. The `memberList` in `src/data/memberList.tsx` is the single source of truth for all member data.

### Styling Approach
- Mantine components for complex UI elements
- Tailwind for custom styling and layout
- Inter font family from Google Fonts
- Responsive design with mobile-first approach