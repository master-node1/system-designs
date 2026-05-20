# Distributed Logging System Design

A Next.js 14 app-router dashboard for designing a distributed logging system for microservices.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no Tailwind dependency)
- **`'use client'`** only where interactivity is needed (checklist, tab nav)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── globals.css         # design tokens + base styles
│   ├── layout.tsx          # root layout + metadata
│   └── page.tsx            # entry point
├── components/
│   └── logging/
│       ├── LoggingDashboard.tsx   # tab shell (client)
│       ├── ArchTab.tsx            # architecture diagram
│       ├── FormatTab.tsx          # log schema + PII rules
│       ├── PipelineTab.tsx        # ingestion flow + alerting
│       ├── StorageTab.tsx         # tiered storage
│       ├── ChecklistTab.tsx       # interactive checklist (client)
│       ├── Card.tsx               # shared card primitive
│       └── *.module.css           # scoped styles per component
└── lib/
    └── data.ts                    # all static data + types
```

## Key design decisions

- **Server components by default** — only `LoggingDashboard` (tab state) and `ChecklistTab` (checked state) are `'use client'`
- **CSS Modules** — fully scoped, no runtime overhead, no class conflicts
- **Data centralized in `lib/data.ts`** — all copy/config lives there, easy to swap for an API call later
- **`key={activeTab}`** on the content container triggers a CSS fade animation on tab switch
