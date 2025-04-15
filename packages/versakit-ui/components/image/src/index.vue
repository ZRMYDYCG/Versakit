<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VKIcon } from '@versakit/icons'
import type { ImageProps } from '../type/index'

defineOptions({ name: 'VkImage' })

const props = withDefaults(defineProps<ImageProps>(), {
  src: '',
  fit: 'cover',
  lazy: false,
  icon: 'image',
})

const loading = ref(true)
const error = ref(false)
const imageRef = ref<HTMLElement | null>(null)

const handleError = () => {
  loading.value = false
  error.value = true
}

const handleLoad = () => {
  loading.value = false
}

onMounted(() => {
  if (props.lazy && imageRef.value) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = new Image()
          img.src = props.src
          img.onload = handleLoad
          img.onerror = handleError
          observer.disconnect()
        }
      })
    })

    observer.observe(imageRef.value)
  }
})
</script>

<template>
  <div
    class="vk-image"
    ref="imageRef"
    role="img"
    aria-label="Image component"
    aria-busy="true"
    aria-live="polite"
  >
    <img
      :src="props.src"
      :style="{ objectFit: props.fit }"
      @error="handleError"
      @load="handleLoad"
      v-bind="$attrs"
      alt=""
    />

    <!-- Loading placeholder -->
    <div v-if="loading" class="vk-image__placeholder" aria-hidden="true">
      <slot name="placeholder">
        <div class="vk-image__placeholder-default">
          <VKIcon :name="props.icon" size="24" />
        </div>
      </slot>
    </div>

    <!-- Error state -->
    <div v-if="error" class="vk-image__error" aria-hidden="true">
      <slot name="error">
        <div class="vk-image__error-default">
          <VKIcon name="image-x" size="24" />
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
