<script setup lang="ts">
const handleComplete = () => {
  console.log('打字效果完成')
}
</script>

<template>
  <div class="typewriter-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '这是一个基本的打字机效果示例',
          speed: 100,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>自定义光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '使用自定义光标字符',
          cursorChar: '_',
          speed: 150,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>延迟开始</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '延迟1秒后开始打字效果',
          delay: 1000,
          onComplete: handleComplete,
        }"
        class="typewriter-item"
      />
    </div>

    <h3>无光标</h3>
    <div class="demo-row">
      <div
        v-typewriter="{
          text: '不显示光标的打字效果',
          cursor: false,
        }"
        class="typewriter-item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.typewriter-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.typewriter-item {
  padding: 15px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  min-height: 24px;
  line-height: 1.6;
  font-family: monospace;
}
</style>
