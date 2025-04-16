<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const pageSize = ref(10)
</script>

<template>
  <VKPagination
    v-model:pageSize="pageSize"
    :total="200"
    :show-size-changer="true"
    :page-size-options="[10, 20, 50]"
  />
</template>
