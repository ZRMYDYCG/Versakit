<script setup lang="ts">
import { ref } from 'vue'
import { VKText, VKSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>

<template>
  <div>
    <VKSegmented :options="options" v-model="selectedValue" />

    <VKText class="mx4" :size="selectedValue">我是文本</VKText>
  </div>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
