<script setup lang="ts">
const handleResize = (width: number, height: number) => {
  console.log(`新尺寸: ${width}x${height}`)
}
</script>

<template>
  <div class="resize-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小
      </div>
    </div>

    <h3>限制最大尺寸</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          maxWidth: 300,
          maxHeight: 200,
          onResize: handleResize,
        }"
        class="resize-item"
      >
        拖动右下角调整大小（最大 300x200）
      </div>
    </div>

    <h3>多方向调整</h3>
    <div class="demo-row">
      <div
        v-resize="{
          minWidth: 100,
          minHeight: 100,
          handles: ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'],
          onResize: handleResize,
        }"
        class="resize-item"
      >
        可以从任意角落调整大小
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resize-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.resize-item {
  width: 200px;
  height: 100px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  position: relative;
  user-select: none;
}

:deep(.resize-handle) {
  background-color: #409eff;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66b1ff;
  }
}
</style>
