<template>
  <div class="select-demo">
    <h2>基础用法</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="value"
        :options="options"
        placeholder="请选择"
        class="select-demo__item"
      />
    </div>

    <h2>多选模式</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="multipleValue"
        :options="options"
        multiple
        clearable
        placeholder="请选择多个"
        class="select-demo__item"
      />
    </div>

    <h2>可搜索</h2>
    <div class="select-demo__row">
      <VKSelect
        v-model="searchValue"
        :options="options"
        filterable
        placeholder="可搜索"
        class="select-demo__item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKSelect } from '@versakit/ui'

const value = ref('')
const multipleValue = ref<string[]>([])
const searchValue = ref('')

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3', disabled: true },
  { label: '选项4', value: '4' },
]
</script>

<style scoped>
.select-demo {
  padding: 20px;
}

.select-demo h2 {
  margin: 20px 0;
  font-size: 18px;
  color: #333;
}

.select-demo__row {
  margin-bottom: 30px;
}

.select-demo__item {
  width: 240px;
}
</style>
