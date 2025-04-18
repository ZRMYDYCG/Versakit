import type { Directive } from 'vue'

interface CopyOptions {
  text?: string
  success?: () => void
  error?: (err: Error) => void
}

interface HTMLElementWithCopy extends HTMLElement {
  _copyHandler?: () => void
}

export const vCopy: Directive = {
  mounted(el: HTMLElementWithCopy, binding) {
    const options: CopyOptions = binding.value || {}

    const copy = async () => {
      try {
        // 优先使用传入的文本，否则使用元素内容
        const text = options.text || el.textContent || ''
        await navigator.clipboard.writeText(text)
        options.success?.()
      } catch (err) {
        options.error?.(err as Error)
      }
    }

    el.addEventListener('click', copy)
    el._copyHandler = copy
  },
  unmounted(el: HTMLElementWithCopy) {
    if (el._copyHandler) {
      el.removeEventListener('click', el._copyHandler)
    }
  },
}
