<script setup lang="ts">
import { ref } from 'vue'
import { VKButton, VKSegmented } from '@versakit/ui'

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
    <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>

    <VKButton class="mx-2" color="blue-5" :size="selectedValue">
      主要按钮
    </VKButton>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 10px 0px;
}
</style>
