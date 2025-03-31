<script setup lang="ts">
import { computed } from 'vue'
import type { AsideProps } from '../type/index'

defineOptions({
  name: 'VerAside',
})

const props = withDefaults(defineProps<AsideProps>(), {
  width: '300px',
})

const asideStyle = computed(() => ({
  width: props.width,
}))
</script>

<template>
  <aside
    class="ver-aside"
    :style="asideStyle"
    role="complementary"
    :aria-label="props.label"
  >
    <slot />
  </aside>
</template>

<style>
@import '../style/index.css';
</style>
