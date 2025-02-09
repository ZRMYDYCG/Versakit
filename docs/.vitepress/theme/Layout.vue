<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const { Layout } = DefaultTheme

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout></Layout>
</template>

<style lang="scss">
.VPContent .VPDoc.has-aside {
  padding: 0;
}
.VPDoc.has-aside .container .aside {
  display: none;
}
.VPContent#VPContent .VPDoc.has-aside .container {
  display: block;
}
.VPContent#VPContent .VPDoc.has-aside .container {
  max-width: 100%;
}
.VPDoc.has-aside .container .content {
  max-width: 100%;
  padding: 0;
}
.VPDoc.has-aside .container .content-container {
  max-width: 100%;
}
</style>
