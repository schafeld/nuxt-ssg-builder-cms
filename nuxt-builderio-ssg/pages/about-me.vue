<template>
  <BuilderContent
    model="page"
    path="/about-me"
    throw-error
  >
    <template #default="{ content }">
      <h1>{{ content.data.title }} XXXX</h1>
      <div v-html="content.data.content" />
    </template>
  </BuilderContent>
</template>
