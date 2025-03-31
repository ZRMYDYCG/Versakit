import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerPanel from '../src/index.vue'

describe('VerPanel', () => {
  // 基础渲染测试
  it('renders basic panel properly', () => {
    const wrapper = mount(VerPanel)
    expect(wrapper.classes()).toContain('ver-panel')
    expect(wrapper.classes()).toContain('is-shadow-always') // 默认阴影
  })

  // 测试所有阴影类型
  it.each(['always', 'hover', 'never'] as const)(
    'applies correct shadow class for type: %s',
    (shadowType) => {
      const wrapper = mount(VerPanel, {
        props: { shadow: shadowType },
      })
      expect(wrapper.classes()).toContain(`is-shadow-${shadowType}`)
    },
  )

  // 测试插槽内容
  it('renders slot content correctly', () => {
    const wrapper = mount(VerPanel, {
      slots: {
        default: '<div>Panel Content</div>',
      },
    })
    expect(wrapper.html()).toContain('Panel Content')
  })
})
