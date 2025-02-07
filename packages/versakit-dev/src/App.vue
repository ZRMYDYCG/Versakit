<script setup lang="ts">
import { VerTimeLineItem, VerTimeline } from '@versakit/ui'
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
      <VerTimeline>
        <VerTimeLineItem color="#1890ff">
          <h4>创建项目</h4>
          <p>初始化项目结构和依赖</p>
          <p>2025-01-01</p>
        </VerTimeLineItem>

        <VerTimeLineItem color="red">
          <h4>创建项目</h4>
          <p>初始化项目结构和依赖</p>
          <p>2025-01-01</p>
        </VerTimeLineItem>

        <VerTimeLineItem color="orange">
          <h4>创建项目</h4>
          <p>初始化项目结构和依赖</p>
          <p>2025-01-01</p>
        </VerTimeLineItem>

        <VerTimeLineItem color="green">
          <h4>创建项目</h4>
          <p>初始化项目结构和依赖</p>
          <p>2025-01-01</p>
        </VerTimeLineItem>
      </VerTimeline>
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
