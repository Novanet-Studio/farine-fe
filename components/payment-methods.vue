<template>
  <div class="whitespace-nowrap md:w-full">
    <Tabs :options="{ useUrlFragmet: false }">
      <tab name="Square up">
        <visa-method />
      </tab>
      <tab name="Paypal">
        <paypal-method />
      </tab>
      <tab name="Pago movil">
        <pago-movil />
      </tab>
      <tab name="Trans BoFa">
        <trans-bofa />
      </tab>
      <tab name="Zelle">
        <zelle-method />
      </tab>
      <tab name="Venmo">
        <venmo-method />
      </tab>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import { Tabs, Tab } from 'vue3-tabs-component';
</script>

<style scoped>
:deep(.tabs-component) {
  /* @apply border; */
}

:deep(.tabs-component-tabs) {
  @apply flex overflow-x-scroll w-30rem max-w-30rem md:(w-full max-w-full);
}

:deep(.tabs-component-tab) {
  @apply px-4 py-3 border-b text-gray-400 flex-1 text-center;
}

:deep(.is-active:not(a)) {
  @apply px-4 py-3 border-b-2 border-dark-1 text-color-2;
}

:deep(.is-disabled:not(a)) {
  @apply px-4 py-3 border-b-2 border-dark-1 text-color-2;
}

:deep(.tabs-component-panels) {
  @apply py-6;
}
</style>
