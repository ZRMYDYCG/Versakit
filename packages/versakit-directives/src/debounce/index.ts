import type { Directive } from 'vue'

interface DebounceOptions {
  delay?: number
  immediate?: boolean
}

interface HTMLElementWithHandler extends HTMLElement {
  _debounceHandler?: (e: Event) => void
}

export const vDebounce: Directive = {
  mounted(el: HTMLElementWithHandler, binding) {
    const options: DebounceOptions = binding.value || {}
    const delay = options.delay || 300
    let timer: NodeJS.Timeout | null = null

    const handler = (e: Event) => {
      if (timer) {
        clearTimeout(timer)
      }

      if (options.immediate) {
        if (!timer) {
          binding.value(e)
        }
        timer = setTimeout(() => {
          timer = null
        }, delay)
      } else {
        timer = setTimeout(() => {
          binding.value(e)
        }, delay)
      }
    }

    el.addEventListener('input', handler)
    el._debounceHandler = handler
  },
  unmounted(el: HTMLElementWithHandler) {
    if (el._debounceHandler) {
      el.removeEventListener('input', el._debounceHandler)
    }
  },
}
