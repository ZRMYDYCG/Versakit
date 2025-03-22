<script setup lang="ts">
import { ref, computed } from 'vue'
import type { InputTagProps } from '../type/index'

const props = withDefaults(defineProps<InputTagProps>(), {
  placeholder: 'Add tag...',
  disabled: false,
  maxTags: Infinity,
  allowDuplicate: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  remove: [value: string, index: number]
  add: [value: string]
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const canAddMoreTags = computed(() => {
  return props.modelValue.length < props.maxTags
})

const addTag = () => {
  const value = inputValue.value.trim()

  if (!value || props.disabled || !canAddMoreTags.value) return

  if (!props.allowDuplicate && props.modelValue.includes(value)) {
    inputValue.value = ''
    return
  }

  const newTags = [...props.modelValue, value]
  emit('update:modelValue', newTags)
  emit('add', value)
  inputValue.value = ''
}

const removeTag = (index: number) => {
  if (props.disabled) return

  const tag = props.modelValue[index]
  const newTags = props.modelValue.filter((_, i) => i !== index)
  emit('update:modelValue', newTags)
  emit('remove', tag, index)
  inputRef.value?.focus()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    addTag()
  } else if (
    event.key === 'Backspace' &&
    !inputValue.value &&
    props.modelValue.length > 0
  ) {
    removeTag(props.modelValue.length - 1)
  }
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  const pastedText = event.clipboardData?.getData('text')
  if (!pastedText) return

  const tags = pastedText
    .split(/[,;\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean)

  tags.forEach((tag) => {
    inputValue.value = tag
    addTag()
  })
}
</script>

<template>
  <div class="input-tag" :class="{ 'is-disabled': disabled }">
    <div class="input-tag-wrapper">
      <span
        v-for="(tag, index) in modelValue"
        :key="index"
        class="input-tag-item"
      >
        {{ tag }}
        <button
          class="input-tag-remove"
          @click="removeTag(index)"
          type="button"
          :disabled="disabled"
        >
          ×
        </button>
      </span>

      <input
        ref="inputRef"
        v-model="inputValue"
        :placeholder="canAddMoreTags ? placeholder : ''"
        :disabled="disabled || !canAddMoreTags"
        class="input-tag-input"
        @keydown="handleKeydown"
        @paste="handlePaste"
      />
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
