# Design Guidelines: Undangan Online Website Builder

## Design Approach

**Reference-Based: Inspired by Canva + Wix + Squarespace**
- Canva's intuitive editing interface
- Wix's template browsing and preview experience
- Squarespace's refined, elegant website aesthetics

Core principle: Professional website creation made effortless through visual editing and curated templates.

## Typography System

**Font Stack:**
- Primary: Inter (Google Fonts) - All UI, navigation, buttons
- Display: Playfair Display - Template headings, couple names
- Accent: Cormorant Garamond - Elegant body text in templates

**Hierarchy:**
- Hero Titles: text-5xl md:text-6xl font-bold
- Section Headers: text-3xl md:text-4xl font-semibold
- Subsections: text-xl md:text-2xl font-medium
- Body: text-base leading-relaxed
- Labels: text-sm font-medium
- Captions: text-xs

## Layout System

**Spacing Primitives:** 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component internals: gap-2, p-4
- Card spacing: p-6, gap-6
- Section padding: py-16, py-20, py-24
- Page margins: px-6 md:px-12 lg:px-24

**Containers:**
- App wrapper: max-w-[1800px] mx-auto
- Editor canvas: max-w-full (full viewport width)
- Content sections: max-w-7xl mx-auto
- Forms: max-w-lg

## Core Application Screens

### 1. Homepage
**Hero Section (80vh):**
- Large background image: Beautiful wedding couple using laptop together in bright, modern setting
- Centered overlay content with blurred background buttons
- Headline: "Buat Website Undangan yang Memukau"
- Subheadline: "Template elegant, customize mudah, bagikan instan"
- Two CTA buttons: "Mulai Gratis" (primary), "Lihat Contoh" (secondary with blurred bg)

**Template Showcase:**
- 4-column grid (lg:grid-cols-4 md:grid-cols-2)
- Large preview cards showing full website screenshots
- Category labels: "Pernikahan", "Ulang Tahun", "Acara Formal"
- Quick preview on hover (animated scale)

**Feature Highlights (3 columns):**
- Icons from Heroicons
- "Template Elegant & Modern", "Customize Tanpa Coding", "RSVP Terintegrasi"
- Each card: p-8, gap-4, centered content

### 2. Template Gallery
**Masonry Layout:**
- Full-width hero carousel showing 3 featured templates (rotating)
- Filter sidebar (sticky, w-64): Categories, colors, styles
- Main grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Template cards showing full-page screenshots
- Hover state: "Lihat Detail" + "Gunakan Template" buttons (blurred bg)
- Preview modal: Full-screen template walkthrough with scrolling preview

### 3. Website Editor
**Two-Panel Layout:**

**Left Sidebar (w-80, sticky):**
- Section navigator: Overview, Hero, Our Story, Gallery, Acara, RSVP, Contact
- Each section expandable with edit controls
- Quick content inputs: text fields, image upload, date pickers
- Spacing: p-6, gap-4

**Main Canvas (flex-1):**
- Live website preview at desktop/tablet/mobile sizes
- Device switcher (top-right): Desktop, Tablet, Mobile icons
- Scroll-enabled preview showing entire website
- Section boundaries clearly marked
- Click-to-edit overlay on hover
- Zoom controls: bottom-left corner

**Top Bar (h-16):**
- Logo + template name (editable inline)
- Center: Publish status indicator
- Right: Preview, Simpan Draft, Publikasikan buttons
- Settings icon (opens modal)

### 4. Content Editing Panels
**Contextual Right Panel (w-96, appears when section selected):**
- Section title with icon
- Tabbed interface: Konten, Desain, Layout
- Content tab: All text inputs, image uploads
- Desain tab: Typography, spacing, background options
- Layout tab: Section arrangement, visibility toggles

## Website Template Structure

**Standard Sections (All templates include):**

**1. Hero Section (full viewport):**
- Large background image/video
- Couple names (Playfair Display, text-6xl)
- Wedding date & location
- Countdown timer
- "RSVP" CTA button (blurred bg)

**2. Our Story:**
- Timeline layout with alternating content
- Photos + text blocks
- Milestones: First met, Proposal, Journey

**3. Event Details:**
- 2-column grid: Akad + Resepsi
- Each with time, location, map embed preview
- Dress code, parking info

**4. Photo Gallery:**
- Masonry grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Lightbox on click
- 8-12 photos minimum

**5. RSVP Form:**
- Clean centered form (max-w-md)
- Fields: Name, Email, Phone, Attendance, Guest count, Message
- Submission confirmation

**6. Footer:**
- Thank you message
- Social media links
- "Dibuat dengan [Platform Name]" badge

## Component Library

### Navigation (Templates)
- Fixed header: backdrop-blur-lg bg-white/80
- Logo/Names (left), Section links (center), RSVP button (right)
- Smooth scroll navigation
- Height: h-20

### Cards
- Template cards: rounded-2xl, overflow-hidden
- Content cards: rounded-xl, p-8
- Elevation: shadow-lg on hover
- Image aspect: aspect-[3/4] for templates

### Buttons
- Primary: min-h-[48px], rounded-full, px-8, font-semibold
- Secondary: Outlined, same size
- Image overlay: backdrop-blur-md bg-white/90, no hover blur change
- Icon buttons: rounded-lg, p-3

### Forms
- Input fields: rounded-lg, border-2, px-4 py-3, min-h-[48px]
- Textareas: min-h-[120px]
- Date pickers: Integrated calendar UI
- File uploads: Drag-drop zone, rounded-xl, border-dashed

### Media Components
- Image upload zones: aspect-ratio maintained, rounded-xl
- Gallery items: Hover zoom effect
- Map embeds: rounded-xl, h-96

## Images

**Homepage Hero:** Couple using laptop together, bright modern home, warm lighting, smiling while customizing their wedding website

**Template Previews:** Full-page website screenshots showing:
- Wedding: Elegant floral hero, couple photos, romantic color schemes
- Birthday: Playful layouts, celebration imagery, vibrant sections
- Event: Professional, clean layouts, corporate aesthetic

**Template Gallery Thumbnails:** Vertical screenshots capturing hero + 2-3 sections visible

**Editor Canvas Background:** Subtle dot grid pattern for alignment reference

**Sample Template Content:** Placeholder couple photos, event venues, timeline moments - all high-quality, aspirational lifestyle imagery

## Key UX Patterns

**Direct Manipulation:** Click any text/image in preview to edit inline

**Real-time Preview:** All changes instantly reflected in canvas

**Section Management:** Drag-drop to reorder, toggle visibility, duplicate

**Smart Defaults:** Templates pre-filled with example content showing best practices

**Progressive Saving:** Auto-save every 30 seconds, manual save available

**Publishing Flow:** Preview → Share settings → Get unique URL → Copy/Share buttons

**Responsive Preview:** Toggle devices to see mobile/tablet layouts instantly

**Asset Library:** Modal overlay (max-w-6xl) with categorized stock photos, icons, ornaments

## Accessibility
- Semantic HTML structure in generated websites
- Form labels properly associated
- Touch targets 48px minimum
- Keyboard navigation throughout editor
- Alt text prompts for uploaded images