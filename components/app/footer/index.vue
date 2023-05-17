<template>
  <footer class="footer" :class="class">
    <div class="footer__wrapper">
      <app-footer-widgets v-if="showWidgets" />
      <app-footer-copyright />
    </div>
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ showWidgets?: boolean; class?: string }>(), {
  showWidgets: true,
});
</script>

<style scoped>
.footer {
  @apply pt-20;
}

.footer__wrapper {
  @apply mx-auto px-4 md:(px-8) lg:max-w-[1700px];
}
</style>
