<script setup lang="ts">
import { VKPanel } from '@versakit/ui'

const images = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
  'https://picsum.photos/400/300?random=9',
  'https://picsum.photos/400/300?random=10',
]
</script>

<template>
  <div class="lazy-load-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <div class="image-container">
          <img
            v-for="(src, index) in images"
            :key="index"
            v-lazy-load="{
              loading: 'https://via.placeholder.com/400x300?text=Loading...',
              error: 'https://via.placeholder.com/400x300?text=Error',
              rootMargin: '50px',
              threshold: 0.1,
            }"
            :src="src"
            :alt="`Image ${index + 1}`"
          />
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-load-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    transition: opacity 0.3s;

    &[src=''] {
      opacity: 0;
    }
  }
}
</style>
