<script lang="ts" setup>
// @ts-ignore
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/carousel.css'

const images = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  url: `/photo/${index + 1}.jpg`,
}));
const itemsToShow = ref<number | 'auto'>('auto');

onMounted(() => {
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.contentBoxSize && entry.contentBoxSize.length) {
        if (entry.contentBoxSize[0].inlineSize <=665) {
          itemsToShow.value = 1;
        } else {
          itemsToShow.value = 'auto';
        }
      }
    });
  });

  resizeObserver.observe(document.body);
});
</script>

<template>
  <article id="howitwas">
    <h2>Как это было в 2024</h2>

    <Carousel
      class="howitwas-carousel"
      :transition="800"
      :gap="24"
      :itemsToShow="itemsToShow"
      wrapAround
    >
      <Slide v-for="slide in images" :key="slide">
        <img :src="slide.url" alt="" class="howitwas-carouselSlide" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </article>
</template>

<style>
.howitwas-carousel {
  height: 600px;
  outline: none;

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 500px) {
    height: 300px;
  }
}

.howitwas-carouselSlide {
  height: 100%;
  object-fit: cover;
  border-radius: 25px;

  @media (max-width: 500px) {
    max-width: 100%;
    height: 250px;
  }
}

.carousel__slide {
  transition: opacity ease-in 600ms;

  @media (max-width: 500px) {
    max-width: 100%;
  }
}

.carousel__slide--prev,
.carousel__slide--next {
  opacity: 0.2;

  @media (max-width: 500px) {
    opacity: 0;
  }
}
</style>
