<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Rowlands Digital Works — Agent Instructions

## Project

This repository contains the production website for Rowlands Digital Works, a founder-led web development and digital solutions consultancy operated by Casey Rowlands.

The site serves established service businesses, with an initial specialization in chiropractic practices.

The website should communicate technical expertise through clarity, polish, performance, and maintainable implementation rather than developer jargon.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where appropriate
- Vercel
- Server Components by default
- `next/font` for fonts
- `next/image` for applicable image assets

Do not introduce a CMS, database, state-management library, animation library, or other production dependency unless the task clearly requires it.

## Component Library

Use **shadcn/ui** as the preferred component foundation for common interactive UI patterns when it improves accessibility, consistency, or maintainability.

Appropriate examples include:

- buttons
- dialogs
- sheets
- mobile navigation
- forms
- inputs
- textareas
- labels
- accordions
- dropdown menus
- tooltips
- alerts

Prefer shadcn/ui over introducing another third-party UI component library.

However:

- Do not use Shadcn components when simple semantic HTML is clearer.
- Do not make the website look like an unmodified Shadcn starter.
- Customize components using the Rowlands Digital Works design system.
- Avoid unnecessary component abstractions.
- Keep interactive client components minimal.
- Remove unused component variants or dependencies when reasonable.
- Preserve accessibility behavior provided by Shadcn/Radix rather than replacing it with weaker custom implementations.

## Package Manager

Use the package manager already configured in the repository.

Do not create a second lockfile.

## Brand

Company: Rowlands Digital Works

Founder: Casey Rowlands

Primary email: `casey@rowlandsdigitalworks.com`

Location messaging: Central Florida, working with clients nationwide.

Primary positioning:

Rowlands Digital Works helps growing service businesses build better websites and digital systems that support customer acquisition, operations, and growth.

The company is founder-led. Do not imply that it currently has a staff or large agency team.

## Brand Colors

Use these values as the canonical design tokens:

```css
--background: #F8F8F5;
--surface: #FFFFFF;

--foreground: #172022;
--foreground-muted: #586466;

--primary: #274C5B;
--primary-hover: #1D3B47;

--accent: #4F7C73;
--accent-soft: #E8F0ED;

--border: #DDE3E1;
--dark-section: #17272D;
```

Do not introduce unrelated brand colors without a clear design reason.

Avoid purple SaaS/AI gradients.

## Visual Direction

The visual language should feel:

- professional
- modern
- restrained
- technically capable
- approachable
- founder-led
- appropriate for established service businesses

Prefer:

- strong typography
- generous whitespace
- subtle borders
- deliberate layout
- restrained color use
- clean information hierarchy

Avoid:

- generic AI-generated agency layouts
- excessive cards
- glassmorphism
- excessive shadows
- gradient text
- decorative code snippets
- stock-office imagery
- excessive animation
- unnecessary visual noise

## Typography

Use Geist through `next/font` unless the existing implementation establishes another approved font.

Maintain clear hierarchy and comfortable line lengths.

## Messaging

Write for business owners, not developers.

Lead with business outcomes such as:

- stronger customer journeys
- lead generation
- appointment booking
- credibility
- operational efficiency
- integrations
- maintainability
- reliability

Technology should support the message rather than dominate it.

Avoid buzzwords and exaggerated claims.

Never invent:

- testimonials
- clients
- logos
- awards
- statistics
- business results
- partnerships

Do not claim guaranteed revenue, leads, rankings, or conversion improvements.

## Chiropractic Positioning

Chiropractic is an initial specialization, not the company's only market.

It is appropriate to discuss experience involving:

- chiropractic websites
- appointment and booking flows
- clinic technology
- analytics
- lead tracking
- service and condition pages
- third-party integrations
- multi-location websites

Do not imply that MaxLiving or any former employer endorses Rowlands Digital Works.

Do not present former employer work as freelance client work.

## Engineering Principles

Prefer simple, maintainable solutions.

Use Server Components unless interactivity requires a Client Component.

Keep client-side JavaScript minimal.

Avoid premature abstractions.

Do not over-componentize trivial markup.

Use reusable components for meaningful repeated patterns.

Use semantic HTML.

Avoid `any` unless unavoidable.

Do not leave dead code or placeholder content.

Do not make unrelated refactors while completing a focused task.

## Accessibility

Every implementation should include:

- keyboard accessibility
- visible focus states
- semantic landmarks
- appropriate heading hierarchy
- accessible form labels
- accessible navigation
- strong color contrast
- reduced-motion support where applicable
- descriptive link/button text

Do not rely on color alone to convey meaning.

## Responsive Design

Design mobile-first.

Do not treat mobile as merely a vertically stacked desktop layout.

Review:

- typography
- spacing
- navigation
- CTA placement
- tap targets
- content hierarchy
- horizontal overflow

at phone, tablet, laptop, and desktop sizes.

## Performance

Prefer:

- Server Components
- static rendering where appropriate
- optimized images
- optimized fonts
- minimal third-party scripts
- minimal JavaScript
- no autoplay background video

Protect Core Web Vitals.

Do not add dependencies for effects that can reasonably be implemented with CSS.

## SEO

Maintain:

- one logical H1 per page
- semantic headings
- page metadata
- canonical URLs where appropriate
- Open Graph metadata
- crawlable navigation
- descriptive link text

Structured data must only contain factual information available in the project.

Never fabricate an address, phone number, reviews, founding date, or social profile.

## Code Style

Follow the conventions already present in the repository.

Use descriptive names.

Prefer readability over cleverness.

Keep components focused.

Use design tokens rather than repeating raw hex values throughout the application.

## Validation

After meaningful code changes:

1. Run the configured linter.
2. Run TypeScript checking if it is separate from the build.
3. Run the production build.
4. Fix errors caused by the changes.
5. Review responsive behavior for obvious layout issues.

Do not declare work complete when the production build is failing because of the changes.

## Scope Discipline

Implement the requested task completely, but do not add unrelated features.

If a task is ambiguous, inspect the existing codebase and choose the simplest solution consistent with these project rules.

Preserve existing working functionality unless the requested task requires changing it.