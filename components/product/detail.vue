<template>
  <div class="flex p-4 gap-4 w-full">
    <div
      class="max-w-full p-6 relative rounded-xl flex flex-col w-full md:(flex-row)"
    >
      <thumbnail-default :product="product" />
      <section class="mt-10 md:(my-4 ml-8 w-full)">
        <information-default :product="product" />
        <!-- <product-detail-description :product="product" /> -->
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  product: ProductsMapped;
};

defineProps<Props>();
</script>
