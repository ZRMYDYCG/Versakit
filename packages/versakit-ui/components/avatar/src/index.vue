<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarProps } from '../type/index'

defineOptions({ name: 'VerAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  shape: 'circle',
  backgroundColor: '#1890ff',
  color: '#ffffff',
})

const sizeMap = {
  small: 32,
  default: 40,
  large: 48,
}

const avatarSize = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`
  }
  return `${sizeMap[props.size]}px`
})

const fontSize = computed(() => {
  const size = typeof props.size === 'number' ? props.size : sizeMap[props.size]
  return `${size / 2.5}px`
})

const firstLetter = computed(() => {
  if (!props.text) return ''
  return props.text.charAt(0).toUpperCase()
})
</script>

<template>
  <div
    class="ver-avatar"
    :class="[`ver-avatar-${props.shape}`]"
    :style="{
      width: avatarSize,
      height: avatarSize,
      backgroundColor: !props.src ? props.backgroundColor : undefined,
      color: !props.src ? props.color : undefined,
      fontSize: !props.src ? fontSize : undefined,
    }"
  >
    <img v-if="props.src" :src="props.src" :alt="props.alt" />
    <span v-else-if="props.text">
      {{ firstLetter }}
    </span>
    <slot v-else></slot>
  </div>
</template>

<style scoped>
.ver-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  position: relative;
  vertical-align: middle;
}

.ver-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ver-avatar-circle {
  border-radius: 50%;
}

.ver-avatar-square {
  border-radius: 4px;
}
</style>
