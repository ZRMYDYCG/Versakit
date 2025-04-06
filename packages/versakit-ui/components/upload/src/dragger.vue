<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'change', event: Event): void
}>()

const isDragging = ref(false)

const handleDragover = (e: DragEvent) => {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = true
}

const handleDragleave = (e: DragEvent) => {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = false
}

const handleDrop = (e: DragEvent) => {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = false

  if (!e.dataTransfer) return

  const files = e.dataTransfer.files
  if (files && files.length > 0) {
    // 创建一个模拟的input事件
    const event = {
      target: {
        files,
      },
    } as unknown as Event

    emit('change', event)
  }
}
</script>

<template>
  <div
    class="ver-upload-dragger"
    :class="{
      'is-dragging': isDragging,
      'is-disabled': disabled,
    }"
    @dragover="handleDragover"
    @dragleave="handleDragleave"
    @drop="handleDrop"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.ver-upload-dragger {
  display: flex;
  width: 100%;
  height: 180px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.ver-upload-dragger:hover {
  border-color: #42b983;
}

.ver-upload-dragger.is-dragging {
  background-color: rgba(66, 185, 131, 0.1);
  border-color: #42b983;
}

.ver-upload-dragger.is-disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
}

.ver-upload-dragger.is-disabled:hover {
  border-color: #e4e7ed;
}
</style>
