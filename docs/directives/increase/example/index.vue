<script setup lang="ts">
import { ref } from 'vue'

const numbers = ref({
  small: 100,
  medium: 1000,
  large: 10000,
  huge: 100000,
})
</script>

<template>
  <div class="increase-demo">
    <h3>数字增长动画</h3>
    <div class="demo-content">
      <div class="demo-item">
        <div class="label">小数值</div>
        <div class="number" v-increase="numbers.small">0</div>
      </div>
      <div class="demo-item">
        <div class="label">中数值</div>
        <div class="number" v-increase="numbers.medium">0</div>
      </div>
      <div class="demo-item">
        <div class="label">大数值</div>
        <div class="number" v-increase="numbers.large">0</div>
      </div>
      <div class="demo-item">
        <div class="label">超大数值</div>
        <div class="number" v-increase="numbers.huge">0</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.increase-demo {
  padding: 20px;

  h3 {
    margin-bottom: 20px;
    color: #333;
  }
}

.demo-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-item {
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
  text-align: center;

  .label {
    margin-bottom: 10px;
    color: #666;
    font-size: 14px;
  }

  .number {
    font-size: 24px;
    font-weight: bold;
    color: #409eff;
  }
}
</style>
