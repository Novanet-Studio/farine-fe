<template>
  <nuxt-link :to="`/product/${product.id}`" class="title">
    {{ product.name && product.name }}
  </nuxt-link>
</template>

<script lang="ts" setup>
type Props = {
  product: ProductsMapped;
};

defineProps<Props>();
</script>

<style scoped>
.title {
  @apply m-0 block text-sm pt-2 pb-1 pl-0 overflow-hidden pr-4 text-color-6;
}
</style>
