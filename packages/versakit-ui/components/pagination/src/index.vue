<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PaginationProps } from '../type/index.ts'

defineOptions({
  name: 'VKPagination', // 修改组件名称为 VKPagination
})

const props = withDefaults(defineProps<PaginationProps>(), {
  pageSize: 10,
  showQuickJumper: false,
  showSizeChanger: false,
  pageSizeOptions: () => [10, 20, 50, 100],
  showTotal: false,
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [page: number]
  'update:pageSize': [size: number]
  change: [page: number, pageSize: number]
}>()

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))
const inputPage = ref('')

const pageList = computed(() => {
  const current = props.modelValue
  const count = totalPages.value
  const items: (number | string)[] = []

  if (count <= 7) {
    for (let i = 1; i <= count; i++) {
      items.push(i)
    }
  } else {
    items.push(1)
    if (current > 4) {
      items.push('...')
    }

    const start = Math.max(2, current - 2)
    const end = Math.min(current + 2, count - 1)

    for (let i = start; i <= end; i++) {
      items.push(i)
    }

    if (current < count - 3) {
      items.push('...')
    }
    items.push(count)
  }

  return items
})

const handlePageChange = (page: number) => {
  if (
    page < 1 ||
    page > totalPages.value ||
    page === props.modelValue ||
    props.disabled
  ) {
    return
  }
  emit('update:modelValue', page)
  emit('change', page, props.pageSize)
}

const handleSizeChange = (event: Event) => {
  const size = Number((event.target as HTMLSelectElement).value)
  emit('update:pageSize', size)
  const newPage = Math.min(props.modelValue, Math.ceil(props.total / size))
  emit('update:modelValue', newPage)
  emit('change', newPage, size)
}

const handleJumpInput = (event: KeyboardEvent) => {
  if (event.key !== 'Enter') return

  const value = Number(inputPage.value)
  if (isNaN(value)) {
    inputPage.value = ''
    return
  }

  const page = Math.min(Math.max(1, value), totalPages.value)
  handlePageChange(page)
  inputPage.value = ''
}
</script>

<template>
  <div class="pagination" role="navigation" aria-label="Pagination Navigation">
    <span v-if="showTotal" class="pagination-total">
      Total {{ total }} items
    </span>

    <button
      class="pagination-btn"
      :disabled="modelValue <= 1 || disabled"
      @click="handlePageChange(modelValue - 1)"
      aria-label="Previous Page"
    >
      Previous
    </button>

    <div class="pagination-list">
      <button
        v-for="item in pageList"
        :key="item"
        class="pagination-item"
        :class="{
          'is-active': item === modelValue,
          'is-ellipsis': item === '...',
        }"
        :disabled="item === '...' || disabled"
        @click="typeof item === 'number' && handlePageChange(item)"
        :aria-label="typeof item === 'number' ? 'Page ' + item : '...'"
      >
        {{ item }}
      </button>
    </div>

    <button
      class="pagination-btn"
      :disabled="modelValue >= totalPages || disabled"
      @click="handlePageChange(modelValue + 1)"
      aria-label="Next Page"
    >
      Next
    </button>

    <div v-if="showSizeChanger" class="pagination-size-changer">
      <label for="page-size-select" class="sr-only">Page Size</label>
      <select
        id="page-size-select"
        :value="pageSize"
        :disabled="disabled"
        @change="handleSizeChange"
        aria-label="Page Size Selector"
      >
        <option v-for="size in pageSizeOptions" :key="size" :value="size">
          {{ size }} / page
        </option>
      </select>
    </div>

    <div v-if="showQuickJumper" class="pagination-jumper">
      <span>Go to</span>
      <label for="jump-to-page" class="sr-only">Jump to Page</label>
      <input
        id="jump-to-page"
        v-model="inputPage"
        type="text"
        :disabled="disabled"
        @keyup.enter="handleJumpInput"
        aria-label="Jump to Page Input"
      />
      <span>page</span>
    </div>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
