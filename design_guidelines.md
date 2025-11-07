# Design Guidelines: Undangan Online Web Application

## Design Approach

**Reference-Based: Inspired by Canva + Notion + Linear**
- Canva's visual editor clarity and template browsing
- Notion's clean workspace organization
- Linear's refined minimalism and typography

Core principle: Extreme clarity through generous whitespace and focused interactions. Every element serves a purpose.

## Typography System

**Font Stack:**
- Primary: Inter (via Google Fonts) - All UI elements, buttons, labels
- Display: Playfair Display - Template names, headings in gallery
- Body: Inter for all body text

**Hierarchy:**
- Hero/Page Titles: text-4xl md:text-5xl font-semibold
- Section Headers: text-2xl md:text-3xl font-semibold
- Card Titles: text-lg font-medium
- Body Text: text-base font-normal
- Labels/Meta: text-sm font-medium
- Captions: text-xs

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2 (internal component spacing)
- Component spacing: p-4, p-6, gap-4 (cards, buttons)
- Section spacing: p-8, p-12, py-16, py-20 (major sections)
- Page margins: px-6 md:px-12 lg:px-20

**Container Strategy:**
- Full app wrapper: max-w-[1600px] mx-auto
- Editor workspace: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Form elements: max-w-md

## Core Application Screens

### 1. Homepage/Landing
- Clean hero section with bold headline: "Buat Undangan Online dalam Hitungan Menit"
- Immediate CTA: "Mulai Membuat" button (prominent, large)
- Template preview grid below (3 columns desktop, 2 tablet, 1 mobile)
- Feature highlights in 3-column grid: "Template Elegant", "Mudah Dikustomisasi", "Siap Bagikan"

### 2. Template Gallery
**Layout:** Masonry grid showcasing templates immediately (no traditional hero)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Sidebar filter (sticky): Categories (Pernikahan, Ulang Tahun, Formal, Casual)
- Each template card:
  - Large preview image (aspect-ratio-[3/4])
  - Template name overlay on hover
  - "Gunakan Template" button appears on hover with blurred background
  - Category badge (top-right corner)

### 3. Editor Interface
**Three-Panel Layout:**

**Left Sidebar (w-80, fixed):**
- Collapsible sections with clear icons (Heroicons)
- Sections: Teks, Foto, Asset, Warna, Font
- Each section expands to show options
- Asset library in scrollable grid (grid-cols-3 gap-2)

**Center Canvas (flex-1):**
- Large preview area with clear boundaries (border, subtle shadow)
- Zoom controls (bottom-right): +, -, Fit
- Canvas background: subtle grid pattern for alignment context
- Selected elements show editing handles

**Right Panel (w-72, fixed):**
- Properties panel for selected element
- Input fields with clear labels
- Typography controls (font picker, size slider)
- Spacing: p-6, gap-4 between controls

**Top Navigation Bar:**
- Logo (left)
- Template name (center, editable)
- Actions (right): Preview, Simpan, Download
- Clean separation with border-b

### 4. Asset Library Modal
- Full-screen overlay with semi-transparent backdrop
- Centered content box: max-w-5xl
- Tabs for categories: Icons, Ornamen, Borders, Backgrounds
- Grid display: grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4
- Search bar at top
- Close button (top-right, large, clear)

## Component Library

### Navigation
- Horizontal navbar: h-16, items-center justify-between
- Logo and brand: font-semibold text-xl
- Nav links: text-sm font-medium, gap-8
- CTA button: always prominent, rounded-lg px-6 py-2.5

### Cards (Template & Asset)
- Rounded corners: rounded-xl
- Hover elevation: transition-shadow
- Image aspect ratio maintained
- Content padding: p-4
- Title and metadata spacing: gap-2

### Buttons
- Primary: Large touch target min-h-[44px], rounded-lg, font-medium
- Secondary: Similar size, outlined variant
- Icon buttons: Square, p-2, rounded-md
- Blurred background buttons (on images): backdrop-blur-md bg-white/90

### Forms & Inputs
- Input fields: rounded-lg border px-4 py-2.5, min-h-[44px]
- Labels: text-sm font-medium mb-2
- Consistent spacing: gap-4 between form groups
- Clear focus states (no specific colors mentioned)

### Progress Indicator
- Step-by-step flow visualization
- 4 steps: Pilih Template → Kustomisasi → Preview → Download
- Current step highlighted, completed steps checked
- Horizontal layout: justify-between items-center

## Images

**Template Previews:** High-quality invitation mockups showing elegant, minimal designs
- Wedding templates: Floral borders, elegant typography, formal layouts
- Birthday templates: Playful but refined, geometric patterns
- Formal event templates: Clean, professional, minimal ornaments

**Hero Section (Homepage):** Large hero image showing someone using the editor on laptop/tablet, demonstrates the product in use - modern, bright environment

**Asset Thumbnails:** Clear, high-contrast previews of decorative elements, borders, and icons organized by category

## Key UX Patterns

**Clear Visual Hierarchy:** Generous whitespace between sections (py-12 to py-20)

**Focused Interactions:** One primary action per screen always visible and accessible

**Feedback & Preview:** Real-time updates in editor, immediate visual feedback on all actions

**Progressive Disclosure:** Advanced options hidden in collapsible sections, keeping main interface clean

**Consistent Alignment:** Everything grid-aligned, no arbitrary positioning

**Touch-Friendly:** All interactive elements minimum 44px height/width

## Accessibility
- Semantic HTML throughout
- Clear focus indicators on all interactive elements
- Sufficient touch targets (44px minimum)
- Logical tab order in editor
- Alt text for all template and asset images