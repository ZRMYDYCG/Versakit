<script setup lang="ts">
// 不需要导入 VKPanel，因为我们使用原生 div 元素
</script>

<template>
  <div class="drag-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-drag class="draggable">自由拖拽</div>
      </div>
    </div>

    <h3>限制方向</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div v-drag="{ axis: 'x' }" class="draggable">只能水平拖拽</div>
      </div>
    </div>

    <h3>限制边界</h3>
    <div class="demo-row">
      <div class="drag-container">
        <div
          v-drag="{ boundary: { left: 0, right: 300, top: 0, bottom: 100 } }"
          class="draggable"
        >
          限制在容器内拖拽
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drag-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.drag-container {
  position: relative;
  width: 400px;
  height: 200px;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  background: #f5f7fa;
  overflow: hidden;
}

.draggable {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  user-select: none;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
