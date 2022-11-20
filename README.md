This has the following setup:

- [Vanilla extract](https://vanilla-extract.style/)
- NextJS
  - super easy, just using the plugin
- Storybook
  - you can spot the `.storybook/vanilla-extract.js` file which adds the webpack config
- Playwright
  - playwright-ct.config.ts required some custom plugins config to work with it

## Todo

- [ ] Storybook + Figma intergration
  - Goes both ways, you can put a figma design into storybook or a storybook component linked to a figma component
  - Value add would be hopefully making it easier for designers/devs to interact with the build component vs the designed
  - [ ] https://www.chromatic.com/blog/connect-figma-to-storybook/
  - [ ] https://pocka.github.io/storybook-addon-designs/?path=/story/docs-figma-examples--embed-file
- [ ] Chromatic
- [ ] Test storybook UI tests
- [ ] Solve the successful build when theres changes instead of a "pending" build

### Chromatic

- Fairly easy to use
- Provides an interface to review the components and provide feedback
- Support are super helpful on a free tier. They replied with answers specific to the issues I was dealing with (wasn't using company email during this either)

### Vercel

- Preview deploys with comments are great (really good for design review of builds, could be good for testers too)
- Preview deploys created automatically, linked to and deploying within ~1min
- To have a preprod -> prod process would require deployed branches (e.g. merge into release, which would be prepod, merge release into main which would be prod)

### Playwright

- Component testing is easy to do
- The reporting is nice

## Next boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
