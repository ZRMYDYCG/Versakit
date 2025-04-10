<script setup lang="ts">
import { ref } from 'vue'
import { VKStepItem, VKSteps } from '@versakit/ui'

interface Step {
  title: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error'
}

const currentStep = ref(0)
const steps = [
  { title: '订单确认', description: '确认订单详情' },
  { title: '支付处理', description: '完成支付流程' },
  { title: '订单完成', description: '等待商品送达' },
]

// 错误状态示例
const errorSteps: Step[] = [
  { title: '提交申请', description: '填写信息' },
  { title: '审核中', description: '等待审核结果', status: 'error' },
  { title: '申请结果', description: '查看申请结果' },
]

// 自定义图标示例
const iconSteps: Step[] = [
  { title: '账号注册', description: '创建您的账号', icon: '👤' },
  { title: '资料完善', description: '补充个人信息', icon: '📝' },
  { title: '邮箱验证', description: '验证您的邮箱', icon: '✉️' },
]
</script>

<template>
  <div class="container">
    <h2>基础用法</h2>
    <!-- Vertical Example -->
    <div class="example-box">
      <h3>垂直步骤条</h3>
      <VKSteps :steps="steps" :currentStep="currentStep" direction="vertical">
        <VKStepItem
          v-for="(_, index) in steps"
          :key="`v-${index}`"
          :index="index"
          :clickable="true"
        />
      </VKSteps>
    </div>

    <!-- Horizontal Example -->
    <div class="example-box">
      <h3>水平步骤条</h3>
      <VKSteps :steps="steps" :currentStep="currentStep" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in steps"
          :key="`h-${index}`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Controls -->
    <div class="controls">
      <button @click="currentStep--" :disabled="currentStep === 0">
        上一步
      </button>
      <button
        @click="currentStep++"
        :disabled="currentStep === steps.length - 1"
      >
        下一步
      </button>
    </div>

    <h2>高级用法</h2>

    <!-- Error Status Example -->
    <div class="example-box">
      <h3>错误状态</h3>
      <VKSteps :steps="errorSteps" :currentStep="1" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in errorSteps"
          :key="`error-${index}`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Custom Icons Example -->
    <div class="example-box">
      <h3>自定义图标</h3>
      <VKSteps :steps="iconSteps" :currentStep="1" direction="horizontal">
        <VKStepItem
          v-for="(_, index) in iconSteps"
          :key="`icon-${index}`"
          :index="index"
        />
      </VKSteps>
    </div>

    <!-- Different Size Example -->
    <div class="example-box">
      <h3>不同尺寸</h3>
      <div style="margin-bottom: 20px">
        <small>小尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="small">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="`small-${index}`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div style="margin-bottom: 20px">
        <small>默认尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="default">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="`default-${index}`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div>
        <small>大尺寸</small>
        <VKSteps :steps="steps" :currentStep="1" size="large">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="`large-${index}`"
            :index="index"
          />
        </VKSteps>
      </div>
    </div>

    <!-- Label Placement Example -->
    <div class="example-box">
      <h3>标签位置</h3>
      <div style="margin-bottom: 20px">
        <VKSteps :steps="steps" :currentStep="1" labelPlacement="horizontal">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="`h-label-${index}`"
            :index="index"
          />
        </VKSteps>
      </div>
      <div>
        <VKSteps :steps="steps" :currentStep="1" labelPlacement="vertical">
          <VKStepItem
            v-for="(_, index) in steps"
            :key="`v-label-${index}`"
            :index="index"
          />
        </VKSteps>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

h3 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.example-box {
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background: #3ca876;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

small {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}
</style>
