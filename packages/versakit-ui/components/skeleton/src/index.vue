<script setup lang="ts">
import type { SkeletonProps } from '../type/index.ts'

defineOptions({ name: 'VerSkeleton' })

const props = withDefaults(defineProps<SkeletonProps>(), {
  active: true,
  avatar: false,
  loading: true,
  round: false,
  rows: 3,
  title: true,
  avatarSize: '32px',
  avatarShape: 'circle',
  titleWidth: '40%',
  rowWidth: '100%',
  rowHeight: '16px',
})

const getRowWidth = (index: number): string => {
  if (Array.isArray(props.rowWidth)) {
    return props.rowWidth[index] || '100%'
  }
  if (index === props.rows - 1) {
    return '60%'
  }
  return props.rowWidth
}
</script>

<template>
  <div
    v-if="loading"
    class="skeleton"
    :class="{
      'skeleton-active': active,
      'skeleton-with-avatar': avatar,
      'skeleton-round': round,
    }"
  >
    <div
      v-if="avatar"
      class="skeleton-avatar"
      :class="{
        'skeleton-avatar-circle': avatarShape === 'circle',
        'skeleton-avatar-square': avatarShape === 'square',
      }"
      :style="{
        width: avatarSize,
        height: avatarSize,
      }"
    />

    <div class="skeleton-content">
      <div v-if="title" class="skeleton-title" :style="{ width: titleWidth }" />

      <div class="skeleton-rows">
        <div
          v-for="i in rows"
          :key="i"
          class="skeleton-row"
          :style="{
            width: getRowWidth(i - 1),
            height: rowHeight,
          }"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
