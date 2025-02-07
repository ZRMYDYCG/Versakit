<script setup lang="ts">
import { VerScrollBar } from '@versakit/ui'
import { ref } from 'vue'

const flag = ref(true)
</script>

<template>
  <div>
    <div class="container">
      <p>style 模式</p>
      <VerButton type="primary">按钮</VerButton>
      <VerButton type="warn">按钮</VerButton>
      <VerButton type="success">按钮</VerButton>
      <VerButton type="error">按钮</VerButton>
      <VerButton type="info">按钮</VerButton>

      <p>unstyled 模式</p>
      <VerButton unstyled :pt="{ root: 'btn' }">按钮</VerButton>
    </div>

    <div class="container">
      <p>按需引入测试</p>

      <ver-card>卡片</ver-card>
    </div>

    <div class="container">
      <ver-input></ver-input>
    </div>

    <div class="container">
      <ver-switch size="lg" v-model="flag"></ver-switch>
    </div>

    <div class="container">
      <h2>滚动条示例</h2>

      <!-- 垂直滚动示例 -->
      <div class="demo-section">
        <h3>垂直滚动</h3>
        <VerScrollBar class="demo-scrollbar" height="300px">
          <div class="content">
            <p v-for="i in 20" :key="i">这是第 {{ i }} 行内容</p>
          </div>
        </VerScrollBar>
      </div>

      <!-- 水平滚动示例 -->
      <div class="demo-section">
        <h3>水平滚动</h3>
        <VerScrollBar
          class="demo-scrollbar"
          height="100px"
          direction="horizontal"
        >
          <div class="horizontal-content">
            <div v-for="i in 20" :key="i" class="box">Box {{ i }}</div>
          </div>
        </VerScrollBar>
      </div>
    </div>
  </div>
</template>

<style>
.btn {
  margin: 10px 0px;
  padding: 1rem;
  color: white;
  background-color: black;
  border: none;
  transition: all 0.2s;
  border-radius: 0.25rem;

  &:active {
    transform: scale(0.9);
  }
}

.box {
  flex-shrink: 0;
  width: 150px;
  height: 60px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.container {
  margin: 1rem;
  width: 400px;
}

.demo-scrollbar {
  border: 1px solid #ddd;
  border-radius: 8px;
}

.content {
  padding: 16px;
}

.content p {
  margin: 8px 0;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>
