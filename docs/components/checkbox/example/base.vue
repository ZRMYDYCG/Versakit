<script setup lang="ts">
import { ref } from 'vue'
import { VerCheckbox, VerCheckboxGroup } from '@versakit/ui'

const checked = ref(false)
const groupValue = ref<string[]>([])
</script>

<template>
  <div class="checkbox-demo">
    <div class="demo-section">
      <h3 class="demo-title">基础用法</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked">选项</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">禁用状态</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked" disabled>禁用</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">半选状态</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked" indeterminate>半选</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">复选框组</h3>
      <div class="demo-content">
        <ver-checkbox-group v-model="groupValue">
          <ver-checkbox value="1">选项1</ver-checkbox>
          <ver-checkbox value="2">选项2</ver-checkbox>
          <ver-checkbox value="3" disabled>选项3</ver-checkbox>
          <ver-checkbox value="4">选项4</ver-checkbox>
        </ver-checkbox-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

.demo-content {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
</style>
