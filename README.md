![preview](https://raw.githubusercontent.com/loopsandvariables/x-themed-profile/refs/heads/main/static/images/desktop-mobile-mockup.png)

A simple X themed profile or "link in bio" type page so you can link to your projects, social, blog posts, or whatever you want. Built withSvelteKit so I can expand on it with more routes.

If you just want a static page, you can just copy the `static/html/index.html` file to your own project.

**Demo:** I created my [personal site](https://loopsandvariables.com) with this template.

## Getting started

If you're new to Svelte or Vercel, here's a quick walkthrough video:

[![Watch the demo](https://i3.ytimg.com/vi/TAlLUueCFHQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=TAlLUueCFHQ&t)

## Local setup

Open a terminal in the folder you want to clone this repo to and run.

```bash
git clone git@github.com:loopsandvariables/x-themed-profile.git
cd x-themed-profile
npm install
npm run dev
```

You can now see your site by opening `http://localhost:5173` in your browser.

## Customize

1. Edit the `src/app.config.js` file - update with your own details.
2. Add your own favicons and icons - to make this easy, you can use [RealFaviconGenerator](https://realfavicongenerator.net/) and just copy paste the image files in to `/static/images/favicons`.
3. Update the main page content in `src/routes/+page.svelte`

## Deploy with Vercel

1. Sign up for a free [Vercel account](https://vercel.com/signup).
2. Add new project
3. Import from GitHub repository
4. Deploy to your `main` branch and it will automatically build in Vercel.
