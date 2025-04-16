<script setup lang="ts">
import { computed } from 'vue'
import type { AsideProps } from '../type/index'

defineOptions({
  name: 'VKAside',
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
    class="vk-aside"
    :style="asideStyle"
    role="complementary"
    aria-label="侧边栏"
  >
    <slot />
  </aside>
</template>

<style>
@import '../style/index.css';
</style>
