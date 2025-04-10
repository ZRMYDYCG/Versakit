<template>
  <div class="color-picker-demo">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <VKColorPicker v-model:value="color1" />
        <div class="desc">
          <p class="title">基本颜色选择</p>
          <p class="value">选中值: {{ color1 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 显示透明度选择 -->
    <div class="demo-section">
      <h3>透明度选择</h3>
      <div class="demo-content">
        <VKColorPicker v-model:value="color2" :show-alpha="true" format="rgb" />
        <div class="desc">
          <p class="title">支持透明度调节</p>
          <p>格式: RGBA</p>
          <p class="value">选中值: {{ color2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 不同格式 -->
    <div class="demo-section">
      <h3>颜色格式</h3>
      <div class="demo-content">
        <div class="format-group">
          <div class="format-item">
            <p>HEX 格式</p>
            <VKColorPicker v-model:value="color3hex" format="hex" />
            <p class="value">{{ color3hex }}</p>
          </div>
          <div class="format-item">
            <p>RGB 格式</p>
            <VKColorPicker v-model:value="color3rgb" format="rgb" />
            <p class="value">{{ color3rgb }}</p>
          </div>
          <div class="format-item">
            <p>HSL 格式</p>
            <VKColorPicker v-model:value="color3hsl" format="hsl" />
            <p class="value">{{ color3hsl }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 尺寸设置 -->
    <div class="demo-section">
      <h3>尺寸调整</h3>
      <div class="demo-content">
        <div class="size-group">
          <div class="size-item">
            <VKColorPicker v-model:value="color4" :size="16" />
            <span>小尺寸 (16px)</span>
          </div>
          <div class="size-item">
            <VKColorPicker v-model:value="color4" :size="24" />
            <span>中尺寸 (24px)</span>
          </div>
          <div class="size-item">
            <VKColorPicker v-model:value="color4" :size="36" />
            <span>大尺寸 (36px)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义颜色 -->
    <div class="demo-section">
      <h3>自定义预设颜色</h3>
      <div class="demo-content">
        <VKColorPicker v-model:value="color5" :colors="customColors" />
        <div class="desc">
          <p class="title">自定义预设颜色面板</p>
          <p>可以传入自定义的颜色数组作为预设选项</p>
          <p class="value">选中值: {{ color5 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 添加/删除颜色 -->
    <div class="demo-section">
      <h3>添加删除颜色</h3>
      <div class="demo-content">
        <VKColorPicker
          v-model:value="color6"
          :add-color="true"
          :delete-color="true"
        />
        <div class="desc">
          <p class="title">允许添加/删除颜色</p>
          <p>支持添加自定义颜色到面板，也可删除已有颜色</p>
          <p class="value">选中值: {{ color6 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 格式选项 -->
    <div class="demo-section">
      <h3>格式选项</h3>
      <div class="demo-content">
        <VKColorPicker
          v-model:value="color7"
          :format-options="['rgb', 'hex', 'hsl']"
          @format-change="onFormatChange"
        />
        <div class="desc">
          <p class="title">格式切换</p>
          <p>允许在不同格式之间切换</p>
          <p>当前格式: {{ currentFormat }}</p>
          <p class="value">选中值: {{ color7 || '未选择' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VKColorPicker } from '@versakit/ui'

// 基础用法
const color1 = ref('#1e90ff')

// 透明度选择
const color2 = ref('rgba(46, 144, 255, 0.6)')

// 不同格式
const color3hex = ref('#1e90ff')
const color3rgb = ref('rgb(46, 144, 255)')
const color3hsl = ref('hsl(210, 100%, 59%)')

// 尺寸调整
const color4 = ref('#1e90ff')

// 自定义颜色
const color5 = ref('#1e90ff')
const customColors = [
  '#f44336', // 红色
  '#e91e63', // 粉红色
  '#9c27b0', // 紫色
  '#673ab7', // 深紫色
  '#3f51b5', // 靛蓝色
  '#2196f3', // 蓝色
  '#03a9f4', // 浅蓝色
  '#00bcd4', // 青色
  '#009688', // 蓝绿色
  '#4caf50', // 绿色
  '#8bc34a', // 浅绿色
  '#cddc39', // 酸橙色
  '#ffeb3b', // 黄色
  '#ffc107', // 琥珀色
  '#ff9800', // 橙色
  '#ff5722', // 深橙色
]

// 添加删除颜色
const color6 = ref('#1e90ff')

// 格式选项
const color7 = ref('#1e90ff')
const currentFormat = ref('hex')

const onFormatChange = (format) => {
  currentFormat.value = format
}
</script>

<style lang="scss" scoped>
.color-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-section {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebeef5;

  h3 {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 500;
    color: #303133;
  }
}

.demo-content {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.desc {
  flex: 1;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;

  p {
    margin: 4px 0;
  }

  .title {
    font-weight: 500;
    color: #303133;
  }

  .value {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e4e7ed;
    color: #409eff;
    font-family: monospace;
  }
}

.format-group,
.size-group {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
}

.format-item,
.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 120px;

  p {
    margin: 4px 0;
    font-size: 14px;
    color: #606266;
  }

  .value {
    color: #409eff;
    font-family: monospace;
    font-size: 12px;
  }
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  span {
    margin-top: 8px;
    font-size: 12px;
    color: #606266;
  }
}
</style>
