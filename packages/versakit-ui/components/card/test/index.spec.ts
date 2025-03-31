import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCard from '../src/index.vue'

describe('VerCard', () => {
  // 基础渲染测试
  it('renders basic card properly', () => {
    const wrapper = mount(VerCard)
    expect(wrapper.classes()).toContain('ver-card')
    expect(wrapper.classes()).toContain('is-shadow-always') // 默认阴影
  })

  // 测试所有阴影类型
  it.each(['always', 'hover', 'never'] as const)(
    'applies correct shadow class for type: %s',
    (shadowType) => {
      const wrapper = mount(VerCard, {
        props: { shadow: shadowType },
      })
      expect(wrapper.classes()).toContain(`is-shadow-${shadowType}`)
    },
  )

  // 测试插槽渲染
  it('renders slots correctly', () => {
    const wrapper = mount(VerCard, {
      slots: {
        header: '<div>Header Content</div>',
        default: '<div>Main Content</div>',
        footer: '<div>Footer Content</div>',
      },
    })

    expect(wrapper.find('.ver-card-header').exists()).toBe(true)
    expect(wrapper.find('.ver-card-body').exists()).toBe(true)
    expect(wrapper.find('.ver-card-footer').exists()).toBe(true)

    expect(wrapper.find('.ver-card-header').text()).toBe('Header Content')
    expect(wrapper.find('.ver-card-body').text()).toBe('Main Content')
    expect(wrapper.find('.ver-card-footer').text()).toBe('Footer Content')
  })
})
