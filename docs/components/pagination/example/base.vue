<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
</script>

<template>
  <VKPagination v-model="currentPage" :total="total" />
</template>
