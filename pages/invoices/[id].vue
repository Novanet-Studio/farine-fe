<template>
  <section class="ml-2 w-full">
    <invoices-detail />
    <notify />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'layout-account',
  middleware: 'authentication',
  pageTransition: {
    name: 'page',
  },
  layoutTransition: {
    name: 'page',
  },
});
</script>
