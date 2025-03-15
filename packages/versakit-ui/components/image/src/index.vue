<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VerIcon } from '../../icon'
import type { ImageProps } from '../type/index'

defineOptions({ name: 'VerImage' })

const props = withDefaults(defineProps<ImageProps>(), {
  src: '',
  fit: 'cover',
  lazy: false,
})

const loading = ref(true)
const error = ref(false)

const handleError = () => {
  loading.value = false
  error.value = true
}

const handleLoad = () => {
  loading.value = false
}

onMounted(() => {
  if (props.lazy) {
    const observer = new IntersectionObserver((entries) => {
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

    observer.observe(document.querySelector('.ver-image') as Element)
  }
})
</script>

<template>
  <div class="ver-image">
    <img
      :src="props.src"
      :style="{ objectFit: props.fit }"
      @error="handleError"
      @load="handleLoad"
      v-bind="$attrs"
    />

    <!-- Loading placeholder -->
    <div v-if="loading" class="ver-image__placeholder">
      <slot name="placeholder">
        <div class="ver-image__placeholder-default">
          <ver-icon name="image" size="24" />
        </div>
      </slot>
    </div>

    <!-- Error state -->
    <div v-if="error" class="ver-image__error">
      <slot name="error">
        <div class="ver-image__error-default">
          <ver-icon name="image-x" size="24" />
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
