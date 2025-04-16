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

  // 扩散半径
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  // 多阶段动画
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  // 设置动画参数
  document.documentElement.style.setProperty('--transition-duration', '1200ms')
  document.documentElement.style.setProperty(
    '--transition-easing',
    'cubic-bezier(0.16, 0.85, 0.25, 1)',
  )

  // 双阶段动画路径
  const clipPathStages = [
    { clipPath: `circle(0% at ${x}px ${y}px)`, opacity: 0 },
    { clipPath: `circle(${radius * 0.5}px at ${x}px ${y}px)`, opacity: 0.5 },
    { clipPath: `circle(${radius}px at ${x}px ${y}px)`, opacity: 1 },
  ]

  document.documentElement.animate(
    isDark.value ? [...clipPathStages].reverse() : clipPathStages,
    {
      duration: 1200,
      easing: 'var(--transition-easing)',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 1200ms;
  animation-timing-function: cubic-bezier(0.16, 0.85, 0.25, 1);
  mix-blend-mode: difference;
}

/* 透明度过渡 */
::view-transition-old(root) {
  z-index: 1;
  opacity: 1;
  animation:
    clipPathFade 1.2s ease-in-out,
    opacityFadeOut 1.2s ease-in-out;
}

::view-transition-new(root) {
  z-index: 9999;
  opacity: 0;
  animation:
    clipPathFade 1.2s ease-in-out,
    opacityFadeIn 1.2s ease-in-out;
}

@keyframes clipPathFade {
  0% {
    clip-path: circle(0%);
  }
  50% {
    clip-path: circle(50%);
  }
  100% {
    clip-path: circle(100%);
  }
}

@keyframes opacityFadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes opacityFadeOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

/* 布局和视觉层次 */
.VPDoc {
  padding: 0 !important;
  overflow: visible !important;
  position: relative;
  transition: all 1.2s cubic-bezier(0.16, 0.85, 0.25, 1);
}

.VPDoc.has-aside .container .aside:has(.theme-main-page) {
  display: none;
}

.VPDoc.has-aside .container .aside .aside-curtain {
  display: none;
}

.VPContent#VPContent .VPDoc.has-aside > .container:has(.theme-main-page) {
  display: block;
  max-width: 100%;
}

.VPDoc.has-aside .container .content:has(.theme-main-page) {
  max-width: 100%;
  padding: 0;
}

.VPDoc.has-aside .container .content-container:has(.theme-main-page) {
  max-width: 100%;
}

.VPNavBar.top {
  user-select: none;
}

.dark {
  --vp-c-bg: #0a0a0a;
  --vp-c-text: rgba(255, 255, 255, 0.96);
  background: var(--vp-c-bg) !important;
}

.VPNavBar.top {
  z-index: 999999;
  position: relative;
  background: rgba(var(--vp-c-bg-raw), 0.8);
  backdrop-filter: blur(12px);
}

/* 全局渐变过渡 */
* {
  transition:
    background-color 1.2s cubic-bezier(0.16, 0.85, 0.25, 1),
    color 1.2s cubic-bezier(0.16, 0.85, 0.25, 1),
    opacity 0.6s ease;
}

/* 暗模式对比度 */
.dark .VPContent {
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 1) 0%,
    rgba(20, 20, 20, 1) 100%
  );
}
</style>
