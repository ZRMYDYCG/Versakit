<script setup lang="ts">
import { ref, computed } from 'vue'
import { VKRadio, VKSlider, VKFlex } from '@versakit/ui'

const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')
const customGapSize = ref(16)

const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {
  if (gapSize.value === 'custom') {
    return customGapSize.value
  }
  return gapSize.value
})
</script>
<template>
  <div>
    <VKRadio label="small" v-model="gapSize">small</VKRadio>
    <VKRadio label="middle" v-model="gapSize">middle</VKRadio>
    <VKRadio label="large" v-model="gapSize">large</VKRadio>
    <VKRadio label="custom" v-model="gapSize">custom</VKRadio>
    <VKSlider v-model="customGapSize" v-show="gapSize === 'custom'"></VKSlider>
  </div>
  <VKFlex :gap="computedGap" style="margin-top: 10px">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VKFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
