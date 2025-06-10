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

## Configure Nuxt (`nuxt.config.ts`)

```ts
export default defineNuxtConfig({
  modules: ['nuxt-builderio'],
  runtimeConfig: {
    public: {
      builderio: {
        apiKey: process.env.BUILDER_PUBLIC_KEY,
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/about-me'], // Pre-render our target page
    },
  },
});
```

## Create About Me Page (`pages/about-me.vue`)

```vue
<template>
  <BuilderContent model="page" path="/about-me" throw-error>
    <template #default="{ content }">
      <h1>{{ content.data.title }}</h1>
      <div v-html="content.data.content" />
    </template>
  </BuilderContent>
</template>
```

## Builder.io Setup:

1. Create free account at builder.io
2. Create new "Page" model in Builder.io dashboard
3. Add fields:

- Title (Text)
- Content (Rich Text)

4. Create new entry with path /about-me
5. Add sample content in Builder editor

## Build and Generate Static Site:

```bash
# Set API key (get from Builder.io settings)
# set BUILDER_API_KEY not BUILDER_PUBLIC_KEY as in Perplexity answer
export BUILDER_API_KEY=your_key_here

# Generate static site
npx nuxt generate
```

## Serve the Static Site

```bash
 npx serve .output/public
```

## Notes about Nuxt

The `app.vue` file needs to have the `<NuxtPage />` component to render the pages correctly.
For the root page, there should be a `pages/index.vue` file.
