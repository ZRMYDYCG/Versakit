<script setup lang="ts">
import { ref, provide } from 'vue'
import type { TabProps } from '../type/index.ts'

defineOptions({ name: 'VKTab' })

const props = withDefaults(defineProps<TabProps>(), {
  type: 'card',
  closable: false,
  addable: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'tab-click': [name: string | number]
  'tab-remove': [name: string | number]
  'tab-add': []
}>()

const activeTab = ref(props.modelValue)
const tabs = ref<any[]>([])

const registerTab = (tab: any) => {
  tabs.value.push(tab)
  if (!activeTab.value && tabs.value.length === 1) {
    activeTab.value = tab.name
    emit('update:modelValue', tab.name)
  }
}

const unregisterTab = (name: string | number) => {
  const index = tabs.value.findIndex((tab) => tab.name === name)
  if (index > -1) {
    tabs.value.splice(index, 1)
    if (activeTab.value === name && tabs.value.length > 0) {
      const newActive = tabs.value[Math.min(index, tabs.value.length - 1)].name
      activeTab.value = newActive
      emit('update:modelValue', newActive)
    }
  }
}

const handleTabClick = (name: string | number) => {
  activeTab.value = name
  emit('update:modelValue', name)
  emit('tab-click', name)
}

const handleTabRemove = (e: Event, name: string | number) => {
  e.stopPropagation()
  emit('tab-remove', name)
  unregisterTab(name)
}

const handleTabAdd = () => {
  emit('tab-add')
}

// 组件无头化处理
const getPtClass = (key: keyof NonNullable<TabProps['pt']>) => {
  const ptVal = props.pt?.[key]
  return typeof ptVal === 'string' ? ptVal : ''
}

provide('tabs', {
  activeTab,
  registerTab,
  unregisterTab,
})
</script>

<template>
  <div
    :class="[props.unstyled ? '' : `tabs`, getPtClass('root'), `tabs-${type}`]"
    role="tablist"
    aria-label="Tab Navigation"
  >
    <div :class="[props.unstyled ? '' : `tabs-nav`, getPtClass('nav')]">
      <div
        :class="[
          props.unstyled ? '' : `tabs-nav-wrap`,
          getPtClass('navWrapper'),
        ]"
      >
        <div
          v-for="tab in tabs"
          :key="tab.name"
          :class="[
            props.unstyled ? '' : `tabs-tab`,
            getPtClass('tab'),
            { 'is-active': activeTab === tab.name },
          ]"
          role="tab"
          :aria-selected="activeTab === tab.name ? 'true' : 'false'"
          @click="handleTabClick(tab.name)"
        >
          <span>{{ tab.label }}</span>
          <span
            v-if="closable"
            :class="[
              props.unstyled ? '' : `tabs-tab-close`,
              getPtClass('tabClose'),
            ]"
            @click="handleTabRemove($event, tab.name)"
          >
            ×
          </span>
        </div>
        <button
          v-if="addable"
          :class="[
            props.unstyled ? '' : `tabs-nav-add`,
            getPtClass('addButton'),
          ]"
          @click="handleTabAdd"
          aria-label="Add Tab"
        >
          +
        </button>
      </div>
    </div>
    <div :class="[props.unstyled ? '' : `tabs-content`, getPtClass('content')]">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
