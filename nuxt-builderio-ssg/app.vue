<template>
  <div>
    <Navigation />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script>
import Navigation from './components/navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>