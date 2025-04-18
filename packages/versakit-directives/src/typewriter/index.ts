import type { Directive } from 'vue'

interface TypewriterOptions {
  text: string
  speed?: number
  delay?: number
  cursor?: boolean
  cursorChar?: string
  onComplete?: () => void
}

interface HTMLElementWithTypewriter extends HTMLElement {
  _typewriterTimer?: number
  _typewriterIndex?: number
  _typewriterText?: string
}

export const vTypewriter: Directive = {
  mounted(el: HTMLElementWithTypewriter, binding) {
    const options: TypewriterOptions = binding.value || {}
    const {
      text,
      speed = 100,
      delay = 0,
      cursor = true,
      cursorChar = '|',
      onComplete,
    } = options

    let currentText = ''
    let index = 0

    const type = () => {
      if (index < text.length) {
        currentText += text[index]
        el.textContent = currentText + (cursor ? cursorChar : '')
        index++
        el._typewriterTimer = window.setTimeout(type, speed)
      } else {
        if (cursor) {
          el.textContent = currentText + cursorChar
        }
        onComplete?.()
      }
    }

    // 保存状态
    el._typewriterIndex = index
    el._typewriterText = text

    // 开始打字效果
    if (delay > 0) {
      el._typewriterTimer = window.setTimeout(type, delay)
    } else {
      type()
    }
  },
  unmounted(el: HTMLElementWithTypewriter) {
    if (el._typewriterTimer) {
      clearTimeout(el._typewriterTimer)
    }
  },
}
