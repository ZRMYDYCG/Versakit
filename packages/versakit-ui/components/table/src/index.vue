<template>
  <div class="vk-table">
    <div class="vk-table-wrapper">
      <div class="vk-table-header">
        <div :class="['vk-table-header-row', props.stripe ? 'is-stripe' : '']">
          <div
            :class="['vk-table-header-cell', props.border ? 'is-border' : '']"
            v-for="column in props.columns"
            :key="column.key"
          >
            {{ column.title }}
          </div>
        </div>
      </div>

      <div class="vk-table-body">
        <div
          :class="['vk-table-row', props.stripe ? 'is-stripe' : '']"
          v-for="row in props.data"
          :key="row.key"
        >
          <div
            v-for="column in props.columns"
            :key="column.key"
            :class="['vk-table-row-cell', props.border ? 'is-border' : '']"
          >
            {{ row[column.dataIndex] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableProps } from '../type/index'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  border: false,
  stripe: false,
})

defineOptions({ name: 'VkTable' })
</script>

<style>
@import '../style/index.css';
</style>
