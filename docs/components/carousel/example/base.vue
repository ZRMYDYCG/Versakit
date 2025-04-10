<script setup lang="ts">
import { VKCarousel, VKCarouselItem } from '@versakit/ui'
</script>

<template>
  <div class="carousel-wrapper">
    <VKCarousel
      :autoplay="true"
      :interval="3000"
      :show-arrows="true"
      :show-indicators="true"
      direction="horizontal"
      trigger="hover"
    >
      <VKCarouselItem
        src="https://picsum.photos/id/1018/1200/800"
        alt="山川湖泊"
        caption="山川湖泊"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VKCarouselItem
        src="https://picsum.photos/id/1015/1200/800"
        alt="城市风光"
        caption="城市风光"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VKCarouselItem
        src="https://picsum.photos/id/1019/1200/800"
        alt="自然风景"
        caption="自然风景"
        width="1200px"
        height="600px"
        fit="cover"
      />
    </VKCarousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
}
</style>
