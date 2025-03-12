<script setup lang="ts">
import { ref } from 'vue'
import { VerPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
</script>

<template>
  <VerPagination v-model="currentPage" :total="total" />
</template>
