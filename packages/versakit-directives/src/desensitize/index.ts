import type { Directive } from 'vue'

interface DesensitizeBinding {
  value?: {
    type?: 'phone' | 'idCard' | 'name' | 'email' | string
    rules?: Record<string, (str: string) => string>
  }
  arg?: string
}

interface HTMLElementWithOriginalText extends HTMLElement {
  _originalText?: string
}

const defaultRules = {
  phone: (str: string) => str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
  idCard: (str: string) =>
    str.replace(/(\d{4})\d{10}(\w{4})/, '$1**********$2'),
  name: (str: string) => str.replace(/(.).*/, '$1**'),
  email: (str: string) => str.replace(/(.).*@(.*)/, '$1****@$2'),
}

export const vDesensitize: Directive = {
  mounted(el: HTMLElementWithOriginalText, binding: DesensitizeBinding) {
    const { value, arg } = binding

    // 合并自定义规则
    const rules = { ...defaultRules, ...(value?.rules || {}) }

    // 获取脱敏类型
    const type = arg || value?.type || 'phone'

    // 执行脱敏
    if (rules[type] && el.textContent) {
      el._originalText = el.textContent
      el.textContent = rules[type](el.textContent)
    }
  },

  updated(el: HTMLElementWithOriginalText, binding: DesensitizeBinding) {
    if (el._originalText) {
      const { value, arg } = binding
      const type = arg || value?.type || 'phone'
      const rules = { ...defaultRules, ...(value?.rules || {}) }
      el.textContent = rules[type](el._originalText)
    }
  },

  beforeUnmount(el: HTMLElementWithOriginalText) {
    if (el._originalText) {
      el.textContent = el._originalText
      delete el._originalText
    }
  },
}
