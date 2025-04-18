<script setup lang="ts">
const handleLongPress = () => {
  console.log('长按触发')
}
</script>

<template>
  <div class="long-press-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-long-press="{ callback: handleLongPress }" class="long-press-item">
        长按触发回调
      </div>
    </div>

    <h3>自定义时长</h3>
    <div class="demo-row">
      <div
        v-long-press="{ duration: 1000, callback: handleLongPress }"
        class="long-press-item"
      >
        长按1秒触发
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.long-press-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.long-press-item {
  display: inline-block;
  padding: 10px 20px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #ecf5ff;
    border-color: #409eff;
    color: #409eff;
  }
}
</style>
