<script setup lang="ts">
import { VKPanel } from '@versakit/ui'
</script>

<template>
  <div class="ripple-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel v-ripple>点击查看涟漪效果</VKPanel>
    </div>

    <h3>自定义颜色</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ color: 'rgba(64, 158, 255, 0.3)' }">
        蓝色涟漪效果
      </VKPanel>
    </div>

    <h3>自定义持续时间</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ duration: 1000 }">慢速涟漪效果</VKPanel>
    </div>

    <h3>组合使用</h3>
    <div class="demo-row">
      <VKPanel v-ripple="{ color: 'rgba(103, 194, 58, 0.3)', duration: 800 }">
        绿色慢速涟漪效果
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ripple-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
