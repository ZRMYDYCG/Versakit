import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBadge from '../src/index.vue'

describe('VerBadge', () => {
  // 基础渲染测试
  it('renders basic badge properly', () => {
    const wrapper = mount(VerBadge)
    expect(wrapper.classes()).toContain('vkbadge')
  })

  // 测试所有徽标类型
  it.each(['dot', 'number', 'text'] as const)(
    'applies correct badge class for type: %s',
    (type) => {
      const wrapper = mount(VerBadge, {
        props: { type },
      })
      expect(wrapper.find('sup').classes()).toContain(`vkbadge-${type}`)
    },
  )

  // 测试数值显示
  it('formats number value correctly', () => {
    const cases = [
      { value: 5, expected: '5' },
      { value: 99, expected: '99' },
      { value: 100, expected: '99+' },
      { value: 'new', expected: 'new' },
    ]

    cases.forEach(({ value, expected }) => {
      const wrapper = mount(VerBadge, {
        props: { type: 'number', value },
      })
      if (value !== 'dot') {
        expect(wrapper.find('sup').text()).toBe(expected)
      }
    })
  })

  // 测试插槽内容
  it('renders slot content correctly', () => {
    const wrapper = mount(VerBadge, {
      slots: {
        default: '<div>Content</div>',
      },
    })
    expect(wrapper.html()).toContain('Content')
  })
})
