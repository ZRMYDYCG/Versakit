import type { Directive } from 'vue'

interface LongPressOptions {
  duration?: number
  callback?: () => void
}

interface HTMLElementWithLongPress extends HTMLElement {
  _longPressHandler?: {
    start: (e: TouchEvent | MouseEvent) => void
    end: () => void
  }
  _longPressTimer?: number
}

export const vLongPress: Directive = {
  mounted(el: HTMLElementWithLongPress, binding) {
    const options: LongPressOptions = binding.value || {}
    const { duration = 500, callback } = options

    const start = (e: TouchEvent | MouseEvent) => {
      e.preventDefault()
      el._longPressTimer = window.setTimeout(() => {
        callback?.()
      }, duration)
    }

    const end = () => {
      if (el._longPressTimer) {
        clearTimeout(el._longPressTimer)
        el._longPressTimer = undefined
      }
    }

    // 同时支持触摸和鼠标事件
    el.addEventListener('touchstart', start)
    el.addEventListener('mousedown', start)
    el.addEventListener('touchend', end)
    el.addEventListener('mouseup', end)
    el.addEventListener('mouseleave', end)

    el._longPressHandler = { start, end }
  },
  unmounted(el: HTMLElementWithLongPress) {
    if (el._longPressHandler) {
      el.removeEventListener('touchstart', el._longPressHandler.start)
      el.removeEventListener('mousedown', el._longPressHandler.start)
      el.removeEventListener('touchend', el._longPressHandler.end)
      el.removeEventListener('mouseup', el._longPressHandler.end)
      el.removeEventListener('mouseleave', el._longPressHandler.end)
    }
    if (el._longPressTimer) {
      clearTimeout(el._longPressTimer)
    }
  },
}
