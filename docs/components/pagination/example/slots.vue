<template>
  <div>
    <VKPagination
      v-model:modelValue="current"
      :total="total"
      :pageSize="pageSize"
      :showTotal="true"
      @change="handlePageChange"
    >
      <template #total="{ total }">
        <span class="custom-total">总计: {{ total }} 条记录 🎉</span>
      </template>

      <template #prev>⬅️</template>

      <template #next>➡️</template>
    </VKPagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const current = ref(1)
const total = ref(100)
const pageSize = ref(10)

const handlePageChange = (page: number, pageSize: number) => {
  console.log('Page changed to:', page, 'with page size:', pageSize)
}
</script>

<style scoped>
.custom-total {
  font-weight: bold;
  color: mediumvioletred;
}
</style>
