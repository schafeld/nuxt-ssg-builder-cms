# nuxt-ssg-builder-cms

Experiment to use Nuxt 3 in SSG mode with Builder.io as CMS.

# Setup documentation

## Prompt

Give me a step-by-step instruction how to start a Nuxt 3 project from scratch that uses Builder.io as CMS for static site generation (SSG). Make the example specific and easy to follow so I end up with a page "/about-me" in the Nuxt 3 website that has _static_ content built in that is managed in Builder.io.
(e.g. [Perplexity](https://www.perplexity.ai/search/i-am-about-to-start-a-new-proj-O4iO5tgcS1yHhJP.7rRtZA))

## Step 1: Create Nuxt 3 project

```bash
npx nuxi init nuxt-builderio-ssg
# NPM and no extras chosen

cd nuxt-builderio-ssg
npm install
```

## Step 2: Install Builder.io SDK

```bash
# had to downgrade Node.js to 20.x to avoid issues with the latest version of Builder.io SDK
# downgraded from v23.4.0 on a Mac on 2025-06-10.
nvm use 20

npm install @builder.io/sdk-vue nuxt-builderio
```
