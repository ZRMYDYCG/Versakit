<script setup lang="ts">
import { computed } from 'vue'
import Avatar from './index.vue'
import type { AvatarGroupProps } from '../type/index.ts'

defineOptions({ name: 'VKAvatarGroup' })

withDefaults(defineProps<AvatarGroupProps>(), {
  maxCount: 5,
  size: 'default',
  shape: 'circle',
  maxPopoverPlacement: 'top',
})

const maxStyle = computed(() => {
  return {
    backgroundColor: '#fafafa',
    color: '#666',
  }
})
</script>

<template>
  <div class="avatar-group">
    <slot></slot>
    <Avatar
      v-if="$slots.default && $slots.default.length > maxCount"
      :size="size"
      :shape="shape"
      :text="`+${$slots.default.length - maxCount}`"
      v-bind="maxStyle"
    />
  </div>
</template>

<style scoped>
@import url('../style/group.css');
</style>
