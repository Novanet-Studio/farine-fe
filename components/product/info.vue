<template>
  <div class="w-full">
    <h1 class="text-3xl mb-2 border-b border-color-7 pb-4">
      {{ product.name }}
    </h1>
    <h4 class="text-2xl font-bold text-color-2 mb-3">${{ product.price }}</h4>
    <product-detail-description :product="product" />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  product: ProductsMapped;
};

defineProps<Props>();
</script>
