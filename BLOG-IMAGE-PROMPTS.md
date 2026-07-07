# Blog Image Prompts — New Posts

Six new blog posts were added to `lib/blog-data.ts` and reference featured images that don't exist yet. Generate each with ChatGPT (DALL-E) or another image tool, then save to the exact path listed so the site picks them up automatically — no code changes needed once the files are in place.

## Style guide (match the existing site)

Use this preamble with every prompt to match the look of the site's existing blog photos:

> Photorealistic documentary-style photo, natural window/ambient lighting, real-world automotive or shop setting, candid (not posed/stocky), shallow depth of field, no visible text/logos/watermarks, no cartoonish or illustrated style, warm neutral color grading.

**Technical specs for every image:**
- Format: JPG
- Orientation: landscape, roughly 3:2 aspect ratio
- Minimum size: 1200×800px (matches the dimensions already coded into `lib/blog-data.ts`)
- Keep file size under ~250KB after export (matches the rest of the site's optimized images)

## The 6 images needed

### 1. Mobile tint van branding
**Save to:** `public/images/blog/mobile-window-tint-van-marketing.jpg`
**Prompt:** "A branded mobile window tinting service van parked in a suburban driveway, technician unloading tinting equipment, daytime, [style guide above]."

### 2. AI chatbot booking
**Save to:** `public/images/blog/ai-chatbot-tint-shop.jpg`
**Prompt:** "A window tint shop owner smiling while looking at a smartphone showing a chat conversation and a booked appointment confirmation, standing in a shop office at night with the shop visible blurred in the background, [style guide above]."

### 3. Marketing budget planning
**Save to:** `public/images/blog/tint-shop-marketing-budget.jpg`
**Prompt:** "A tint shop owner at a front counter reviewing a budget spreadsheet on a laptop next to a calculator and invoices, shop tools and film rolls visible in the background, [style guide above]."

### 4. Slow season planning
**Save to:** `public/images/blog/tint-shop-slow-season.jpg`
**Prompt:** "A window tint shop owner standing in a quiet, empty shop bay in winter, looking at a wall calendar and planning notes, soft overcast light through the windows, [style guide above]."

### 5. Hiring / training an installer
**Save to:** `public/images/blog/hiring-tint-installers.jpg`
**Prompt:** "An experienced window tint installer showing a new trainee how to apply film to a car window, both wearing shop aprons, tools and a squeegee visible, [style guide above]."

### 6. Choosing a marketing agency
**Save to:** `public/images/blog/choosing-tint-marketing-agency.jpg`
**Prompt:** "A tint shop owner sitting across a desk from a marketing consultant, both reviewing a laptop with charts on screen, shop visible through a glass office wall in the background, [style guide above]."

## After generating

Drop each file at its exact path above (filenames must match exactly — they're already referenced in `lib/blog-data.ts`). No further code changes are needed; Next.js will pick them up automatically on the next build/deploy. Delete this file once done.
