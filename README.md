# Max Space Webflow Export

This project is a static Webflow export for https://www.getmaxspace.com/.

## Deploying to Vercel

1. Create a new Vercel project from this folder.
2. Use this folder as the project root.
3. Leave the framework preset as `Other` or static HTML.
4. Leave the build command empty.
5. Leave the output directory empty.
6. Deploy.

`index.html` must stay at the project root. The asset folders `css`, `js`, `images`, `fonts`, and `videos` must also stay at the project root so the exported relative paths continue to work.

## Vercel Configuration

The `vercel.json` file enables clean URLs:

- `/about` serves `about.html`
- `/careers` serves `careers.html`
- `/moon` serves `moon.html`
- `/thunderbird` serves `thunderbird.html`
- `/expandable-habitat` serves `expandable-habitat.html`

Existing `.html` links in the Webflow export still work on Vercel.

## Missing Assets

`MISSING.txt` is intentionally kept in the project. The Webflow export reported these missing assets:

```text
videos/697cfb36ca53d6c13984ebe5_Max-Space---Lunar-City-V311_mp4.mp4
videos/697cfb36ca53d6c13984ebe5_Max-Space---Lunar-City-V311_poster.0000000.jpg
videos/697cfb36ca53d6c13984ebe5_Max-Space---Lunar-City-V311_webm.webm
videos/Max-Space---Lunar-City-V311_mp4.mp4
videos/Max-Space---Lunar-City-V311_poster.0000000.jpg
videos/Max-Space---Lunar-City-V311_webm.webm
```

Do not replace these with placeholders unless a real replacement asset is available. At least the first three are referenced by `moon.html`.

## Notes

This is not a React project yet. Do not run a React or Next.js build for this export. Vercel can serve it directly as static HTML.
