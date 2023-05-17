<template>
  <div class="product-quick-view">
    <thumbnail-quick-view :product="product" />
    <product-information-quick-view :product="product" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  product: ProductsMapped;
}>();
</script>

<style scoped>
.product-quick-view {
  @apply mb-0 flex flex-col flex-wrap justify-center items-start lg:(flex-nowrap flex-row);
}
</style>
