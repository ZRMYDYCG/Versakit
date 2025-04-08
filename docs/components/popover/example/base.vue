<template>
  <div class="popover-demo">
    <h2>基础用法</h2>
    <div class="popover-demo__row">
      <ver-popover
        content="这是一个 Popover"
        placement="left"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">左侧弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="top"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">顶部弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="right"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">右侧弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="bottom"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">底部弹出</button>
      </ver-popover>
    </div>

    <h2>自定义内容</h2>
    <div class="popover-demo__row">
      <ver-popover placement="bottom" trigger="click">
        <button class="demo-button">点击查看</button>
        <template #content>
          <div class="popover-demo__custom">
            <h3>自定义内容</h3>
            <p>这里可以放置任何内容</p>
            <div class="popover-demo__actions">
              <button class="demo-button demo-button--small">确定</button>
              <button class="demo-button demo-button--small">取消</button>
            </div>
          </div>
        </template>
      </ver-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerPopover } from '@versakit/ui'
</script>

<style scoped>
.popover-demo {
  padding: 20px;
}

.popover-demo h2 {
  margin: 20px 0;
  font-size: 18px;
  color: #333;
}

.popover-demo__row {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.demo-button {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
}

.demo-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.demo-button--small {
  padding: 4px 12px;
  font-size: 12px;
}

.popover-demo__custom {
  padding: 8px;
}

.popover-demo__custom h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.popover-demo__custom p {
  margin: 0 0 12px;
  color: #666;
}

.popover-demo__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
