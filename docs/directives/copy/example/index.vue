<script setup lang="ts">
const copySuccess = () => {
  console.log('复制成功')
}

const copyError = (err: Error) => {
  console.error('复制失败:', err)
}
</script>

<template>
  <div class="copy-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div v-copy class="copy-item">点击复制这段文本</div>
    </div>

    <h3>自定义文本</h3>
    <div class="demo-row">
      <div v-copy="{ text: '这是自定义的复制文本' }" class="copy-item">
        点击复制自定义文本
      </div>
    </div>

    <h3>回调函数</h3>
    <div class="demo-row">
      <div
        v-copy="{
          text: '带回调的复制文本',
          success: copySuccess,
          error: copyError,
        }"
        class="copy-item"
      >
        点击复制并查看控制台输出
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.copy-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.copy-item {
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
