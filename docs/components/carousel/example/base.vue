<script setup lang="ts">
import { VKCarousel, VKCarouselItem } from '@versakit/ui'
import { ref } from 'vue'

const currentSlide = ref(0)

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const images = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
]
</script>

<template>
  <div class="carousel-wrapper">
    <h3>基本用法</h3>
    <div class="carousel-demo">
      <VKCarousel height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>卡片模式</h3>
    <div class="carousel-demo">
      <VKCarousel type="card" height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>垂直模式</h3>
    <div class="carousel-demo">
      <VKCarousel direction="vertical" height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>自定义指示器</h3>
    <div class="carousel-demo">
      <VKCarousel
        indicator-type="custom"
        indicator-position="outside"
        height="300px"
      >
        <template #indicators="{ currentIndex, items }">
          <div class="custom-indicators">
            <button
              v-for="(_, index) in items"
              :key="index"
              :class="{ active: currentIndex === index }"
              @click="goToSlide(index)"
            >
              {{ index + 1 }}
            </button>
          </div>
        </template>
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  margin: 40px 0;
  overflow: hidden;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.carousel-demo {
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.carousel-item-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.custom-indicators {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;

  button {
    padding: 4px 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      background: #409eff;
      color: white;
      border-color: #409eff;
    }

    &:hover {
      border-color: #409eff;
      color: #409eff;
    }
  }
}
</style>
