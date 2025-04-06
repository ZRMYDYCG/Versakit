<template>
  <div class="time-select-demo">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <VerTimeSelect v-model="time1" placeholder="请选择时间" />
        <div class="desc">
          <p class="title">基本时间选择</p>
          <p class="value">选中值: {{ time1 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 时间范围 -->
    <div class="demo-section">
      <h3>时间范围</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time2"
          placeholder="上午时段"
          start="08:30"
          end="12:00"
          step="00:30"
        />
        <div class="desc">
          <p class="title">设置时间范围和步长</p>
          <p>范围: 08:30 至 12:00</p>
          <p>步长: 30分钟</p>
          <p class="value">选中值: {{ time2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 禁用特定时间 -->
    <div class="demo-section">
      <h3>禁用特定时间</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time3"
          placeholder="营业时间"
          :disabledHours="disabledHours"
          :disabledMinutes="disabledMinutes"
        />
        <div class="desc">
          <p class="title">禁用不可选时间</p>
          <p>禁用小时: 12点 (午休时间)</p>
          <p>禁用分钟: 0,15,30,45 (整点和刻钟)</p>
          <p class="value">选中值: {{ time3 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 最小最大时间 -->
    <div class="demo-section">
      <h3>时间限制</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time4"
          placeholder="工作时间"
          minTime="09:00"
          maxTime="18:00"
          step="01:00"
        />
        <div class="desc">
          <p class="title">限制可选时间范围</p>
          <p>最小时间: 09:00</p>
          <p>最大时间: 18:00</p>
          <p class="value">选中值: {{ time4 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 其他特性 -->
    <div class="demo-row">
      <!-- 禁用状态 -->
      <div class="demo-section half">
        <h3>禁用状态</h3>
        <VerTimeSelect v-model="time5" placeholder="禁用状态" disabled />
        <p class="value">值: {{ time5 }}</p>
      </div>

      <!-- 不可清除 -->
      <div class="demo-section half">
        <h3>不可清除</h3>
        <VerTimeSelect
          v-model="time6"
          placeholder="不可清除"
          :clearable="false"
        />
        <p class="value">值: {{ time6 }}</p>
      </div>
    </div>

    <!-- 搜索筛选 -->
    <div class="demo-section">
      <h3>搜索筛选</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time7"
          placeholder="输入筛选时间"
          start="00:00"
          end="23:59"
          step="00:30"
        />
        <div class="desc">
          <p class="title">支持输入搜索</p>
          <p>可在下拉框打开时输入时间进行筛选</p>
          <p class="value">选中值: {{ time7 || '未选择' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VerTimeSelect } from '@versakit/ui'

// 基础用法
const time1 = ref('')

// 时间范围
const time2 = ref('')

// 禁用特定时间
const time3 = ref('')

// 禁用时段 - 直接使用数组
const disabledHours = [12] // 禁用12点(午休时间)

// 将disabledMinutes从函数改为静态数组
const disabledMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

// 最小/最大时间限制
const time4 = ref('')

// 禁用状态
const time5 = ref('10:00')

// 不可清除
const time6 = ref('14:30')

// 搜索筛选
const time7 = ref('')
</script>

<style lang="scss" scoped>
.time-select-demo {
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

.demo-row {
  display: flex;
  gap: 20px;

  .half {
    flex: 1;
  }
}

.value {
  margin-top: 12px;
  color: #409eff;
  font-family: monospace;
  font-size: 14px;
}
</style>
