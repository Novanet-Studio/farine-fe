<template>
  <p class="relative text-base text-color-2" :class="class">
    ${{ product.price }}
  </p>
</template>

<script lang="ts" setup>
type Props = {
  product: ProductsMapped;
  class?: string;
};

defineProps<Props>();
</script>

<style scoped></style>
