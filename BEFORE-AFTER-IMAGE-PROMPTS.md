# Before/After Gallery — ChatGPT Instructions

The homepage has a "Real Transformations, Real Results" gallery section (`components/BeforeAfterGallery.tsx`) that currently shows 6 placeholder tiles. Paste the block below into ChatGPT (with image generation) as a single message — it teaches ChatGPT the job, the style rules, and the 6 shots needed. ChatGPT should write its own detailed prompt for each shot from the brief and generate the image.

## Paste this into ChatGPT

> You are generating product photography for a window tint and window film marketing website's "before/after" gallery. I need 6 images, one at a time. For each one, write your own detailed, photorealistic image-generation prompt based on the brief I give you, following these style rules, then generate the image:
>
> **Style rules — apply to every image:**
> - Photorealistic, documentary style — not illustrated, not cartoonish, not overly staged
> - Natural lighting appropriate to the setting
> - Shallow depth of field where it fits the shot
> - Warm, neutral color grading
> - No text, no logos, no watermarks anywhere in the image
> - Composition: a single frame split vertically down the middle — left half shows the "before" (untinted glass / untreated surface, visible glare or bare paint), right half shows the "after" (finished tint or film applied). This is the standard before/after convention in the tint industry — one image, not two.
> - Landscape orientation, roughly 4:3 aspect ratio, at least 1600×1200px, no visible seam other than the clean center dividing line
>
> **The 6 shots — generate in this order, one at a time, and tell me the filename before each one:**
>
> 1. `before-after-ceramic-sedan.jpg` — Ceramic tint on a modern luxury sedan's rear side window, shot at a clean 3/4 angle. Before: clear glass with visible glare/reflection. After: deep glossy dark ceramic tint, glare eliminated.
> 2. `before-after-carbon-suv.jpg` — Carbon tint on a mid-size SUV's rear windows, parked outside a professional tint shop bay. Before: clear glass. After: matte-black carbon tint.
> 3. `before-after-tesla-ceramic.jpg` — Ceramic tint on a Tesla (Model 3 or Y) side window and glass roof. Before: clear glass. After: premium heat-rejecting ceramic tint.
> 4. `before-after-ppf-hood.jpg` — Paint protection film (PPF) on a car hood, shot from a 3/4 front angle. Before: bare painted hood. After: clear PPF applied, subtle satin sheen, visible film edge line.
> 5. `before-after-residential-film.jpg` — Residential window film on a large modern home window, shot from inside looking out, living room visible. Before: clear glass with sun glare. After: window film applied, softened glare and subtle tint.
> 6. `before-after-commercial-film.jpg` — Window film on a commercial storefront, shot from the sidewalk, daytime urban setting. Before: plain clear storefront glass. After: film applied, reduced glare, clean tinted finish.
>
> Work through all 6, generating one image per shot. Tell me the filename each image belongs to so I can save it correctly.

## After ChatGPT generates them

1. Create the folder `public/images/gallery/` if it doesn't exist yet.
2. Save each image using the exact filename ChatGPT gave you for that shot (matches the list above).
3. Ask Claude (or edit `components/BeforeAfterGallery.tsx` directly) to swap each placeholder tile for a real `next/image` `<Image>` component pointing at the matching file — the `galleryItems` array already has the exact filename for each slot, so this is a small, mechanical edit once the files exist.
4. Delete this file once done.
