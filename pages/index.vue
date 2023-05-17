<template>
  <div>
    <home-banner />
    <product-loader v-if="isLoading" />
    <template v-if="!isLoading && categories.length">
      <div v-for="category in categories" :key="category.id">
        <product-landing :category="category" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const { categories, isLoading } = useCategory({ ordered: true });
</script>
