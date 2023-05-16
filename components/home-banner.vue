<template>
  <div class="banner">
    <div class="banner__wrapper">
      <div class="banner__left">
        <div class="banner__slider">
          <swiper
            :slides-per-view="1"
            :space-between="1"
            loop
            navigation
            :modules="[Navigation]"
          >
            <swiper-slide v-for="(image, index) in sliderImages" :key="index">
              <nuxt-img
                class="banner__slider-image"
                :src="image"
                alt="Products of the brand"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="banner__right">
        <nuxt-link class="flex-1 flex">
          <img
            src="~/assets/img/slider/home-1/promotion-1.jpeg"
            alt="Promotion 1"
          />
        </nuxt-link>
        <nuxt-link class="h-full flex-1">
          <img
            src="~/assets/img/slider/home-1/promotion-2.jpeg"
            alt="Promotion 2"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const sliderImages = [
  'slider/home-1/slide-1.jpg',
  'slider/home-1/slide-1.jpeg',
];
</script>

<style scoped>
/* Set color for swiper arrows */
:global(.swiper-button-next),
:global(.swiper-button-prev) {
  --swiper-navigation-size: 2rem;
  --swiper-navigation-color: #161824;
  --swiper-navigation-sides-offset: 0;
  @apply p-8 transition hover:(bg-color-1);
}

.banner {
  @apply pt-8 mb-8;
}

.banner__wrapper {
  @apply flex flex-col flex-nowrap max-w-[1650px] mx-auto lg:flex-row;
}

.banner__left {
  @apply w-full h-full mb-4 lg:max-w-[calc(100%-390px)];
}

.banner__slider {
  @apply h-full relative;
}

.banner__slider-image {
  @apply block w-full h-80 bg-center bg-cover lg:(min-h-xl);
}

.banner__right {
  @apply w-full flex justify-between gap-4 text-white lg:(max-w-[390px] ml-8 flex-col gap-8);
}
</style>
