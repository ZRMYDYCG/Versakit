<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { AvatarProps } from '../type/index'

defineOptions({ name: 'VKAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  shape: 'circle',
  backgroundColor: '#1890ff',
  color: '#ffffff',
})

// 使用 toRefs 解构 props 保持响应式
const { shape, size, src, backgroundColor, color, text } = toRefs(props)

// 将常量移到组件外部避免重复创建
const SIZE_MAP = {
  small: 32,
  default: 40,
  large: 48,
} as const

// 合并相关计算属性
const avatarSize = computed(() =>
  typeof size.value === 'number'
    ? `${size.value}px`
    : `${SIZE_MAP[size.value]}px`,
)

const fontSize = computed(() => {
  const baseSize =
    typeof size.value === 'number'
      ? size.value
      : (SIZE_MAP[size.value as keyof typeof SIZE_MAP] ?? size.value)
  return `${baseSize / 2.5}px`
})

// 增加文本处理健壮性
const firstLetter = computed(
  () => text.value?.trim().charAt(0).toUpperCase() || '',
)

// 增加图片加载失败处理
const handleImgError = (e: Event) => {
  ;(e.target as HTMLImageElement).style.display = 'none'
}

// 新增形状计算属性
const shapeClass = computed(() => ({
  'is-circle': shape.value === 'circle',
  'is-square': shape.value === 'square',
}))
</script>

<template>
  <div
    class="ver-avatar"
    :class="shapeClass"
    :style="{
      width: avatarSize,
      height: avatarSize,
      backgroundColor: !src ? backgroundColor : undefined,
      color: !src ? color : undefined,
      fontSize: !src ? fontSize : undefined,
    }"
  >
    <img
      v-if="src"
      :src="src"
      alt="avatar"
      role="img"
      aria-label="User avatar"
      @error="handleImgError"
    />
    <span
      v-else-if="text && firstLetter"
      role="img"
      aria-label="User avatar with initials"
    >
      {{ firstLetter }}
    </span>
    <slot v-else />
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

.is-circle {
  border-radius: 50%;
}

.is-square {
  border-radius: 4px;
}
</style>
