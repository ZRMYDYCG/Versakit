<template>
  <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>
  <br />
  <VKGradientText :size="selectedValue" type="success">哈哈哈哈</VKGradientText>
  <br />
  <VKGradientText :size="24" type="error">哈哈哈哈</VKGradientText>
</template>
<script setup>
import { ref } from 'vue'
import { VKGradientText } from '@versakit/ui'
import { VKSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>
