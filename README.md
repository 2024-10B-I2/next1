This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Create a new Docker Image

Make sure all your changes are commited and merged to the main branch. Pull the `main` branch to get the latest updates.

Your local git repo must be clean, i.e. no modification are done since the last commit.

We use [Semantic Versioning](https://semver.org). Decide what kind of change you have made: Major, Minor or Patch.

Run 

  npm version patch

or 

  npm version minor

or 

  npm version major

As a result you will get a new version number in `package.json`. The changes are automatically commited and a new tag is created based on the new version number.

Run both

  git push

and 

  git push --tags

Now you will see in GitHub Actions that a new build has been triggered for the tag. Normally the build should succeed. In the build output you can have a look at the step `Build and push Docker image`. The last output there is `Metadata`. Here you can find the exact tag information for the image that has been pushed to `ghcr.io`.

## Deploy the new Docker image to production

Open the GitHub repository [argocd-recipes](https://github.com/2024-10B-I2/argocd-recipes) in your browser!

Find a file `deploy-app.yaml` and edit it! Update the line that starts with `iamge:` to reflect the Docker image tag that is desired.

Commit the change in this files directly to the main branch! After maximum 3 minutes the deployment of the new version should start.







