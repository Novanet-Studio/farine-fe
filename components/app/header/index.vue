<template>
  <header ref="headerSticky">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__brand">
          <nuxt-link class="header__link" to="/">
            <img
              class="w3/5 lg:w-auto"
              src="~/assets/img/farine-logo.png"
              alt="Farine Logo"
            />
          </nuxt-link>
        </div>
        <div class="header__content">
          <app-header-actions />
        </div>
      </div>
    </div>
    <app-navigation />
  </header>
</template>

<script setup lang="ts">
const { y } = useWindowScroll();
const headerSticky = ref<HTMLElement | null>(null);

function stickyHeader() {
  if (headerSticky.value !== null) {
    if (y.value >= 300) {
      headerSticky.value.classList.add('header--sticky');
    } else {
      headerSticky.value.classList.remove('header--sticky');
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', stickyHeader);
});

onUnmounted(() => {
  window.removeEventListener('scroll', stickyHeader);
});
</script>

<style scoped>
.header__wrapper {
  @apply px-4 py-8 bg-color-1 border-b border-b-[#c0c0c0] md:px-6;
}

.header--sticky {
  @apply fixed bg-color-1 top-0 left-0 z-20 w-full;
}

.header--sticky .navigation {
  @apply hidden;
}

.header--sticky .header__link {
  @apply md:hidden;
}

.header--sticky {
  @apply !p-0;
}

.header--sticky .header__wrapper {
  @apply b-none py-4;
}

.header__container {
  @apply flex items-center justify-between flex-nowrap gap-4 md:gap-0 lg:(mx-auto px-24);
}

.header__brand {
  @apply flex items-center flex-basis-[35%] md:flex-basis-[auto];
}

.header__link {
  @apply cursor-pointer;
}

.header__content {
  @apply lg:w-[15%];
}
</style>
