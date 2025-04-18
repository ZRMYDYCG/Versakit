import type { Directive } from 'vue'

interface ThrottleOptions {
  delay?: number
  immediate?: boolean
}

interface HTMLElementWithHandler extends HTMLElement {
  _throttleHandler?: (e: Event) => void
  _lastTime?: number
}

export const vThrottle: Directive = {
  mounted(el: HTMLElementWithHandler, binding) {
    const options: ThrottleOptions = binding.value || {}
    const delay = options.delay || 300
    let timer: NodeJS.Timeout | null = null

    const handler = (e: Event) => {
      const now = Date.now()

      if (options.immediate) {
        if (!el._lastTime || now - el._lastTime >= delay) {
          binding.value(e)
          el._lastTime = now
        }
      } else {
        if (!timer) {
          timer = setTimeout(() => {
            binding.value(e)
            timer = null
            el._lastTime = now
          }, delay)
        }
      }
    }

    el.addEventListener('input', handler)
    el._throttleHandler = handler
  },
  unmounted(el: HTMLElementWithHandler) {
    if (el._throttleHandler) {
      el.removeEventListener('input', el._throttleHandler)
    }
  },
}
