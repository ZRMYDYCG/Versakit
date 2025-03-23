<script setup lang="ts">
import { ref, watch } from 'vue'
import { VerAvatar, VerSegmented, VerSlider } from '@versakit/ui'

const sizeOptions = [
  { label: '小型', value: 'small' },
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '自定义', value: 'custom' },
]
const selectedSize = ref<string | number>('default')
const showSlider = ref(false)
const customSize = ref(60)

watch(selectedSize, (newVal) => {
  showSlider.value = newVal === 'custom'
  if (newVal !== 'custom') {
    customSize.value = typeof newVal === 'number' ? newVal : 60
  }
})
</script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>尺寸演示</h2>
      <div class="demo-controls">
        <VerSegmented v-model="selectedSize" :options="sizeOptions" />

        <VerSlider
          v-if="showSlider"
          v-model="customSize"
          :min="20"
          :max="120"
          :step="5"
          class="custom-slider"
        />
      </div>
      <div class="demo-row">
        <VerAvatar
          :size="showSlider ? customSize : selectedSize"
          :text="showSlider ? `${customSize}px` : selectedSize.toString()"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 新增滑块样式 */
.custom-slider {
  margin-top: 20px;
  padding: 0 15px;
  max-width: 300px;
}

.demo-controls {
  /* 保持原有样式 */
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
