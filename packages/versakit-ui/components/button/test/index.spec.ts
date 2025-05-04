import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VkButton from '../src/index.vue'

describe('VkButton', () => {
  it('renders properly', () => {
    const wrapper = mount(VkButton, {
      slots: {
        default: 'Button Text',
      },
    })
    expect(wrapper.text()).toBe('Button Text')
    expect(wrapper.classes()).toContain('vk-btn')
  })

  it('applies correct type class', () => {
    const wrapper = mount(VkButton, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('vk-btn-primary')
  })

  // 变体测试
  it('applies variant classes', () => {
    const wrapper = mount(VkButton, {
      props: {
        variant: 'ghost text',
      },
    })
    expect(wrapper.classes()).toContain('is-ghost')
    expect(wrapper.classes()).toContain('is-text')
  })

  // 图标测试
  it('renders icon properly', () => {
    const wrapper = mount(VkButton, {
      props: {
        icon: 'search',
      },
    })
    expect(wrapper.findComponent({ name: 'VerIcon' }).exists()).toBe(true)
  })

  // 键盘事件测试
  it('handles keyboard events', async () => {
    const wrapper = mount(VkButton)
    await wrapper.trigger('keydown.enter')
    await wrapper.trigger('keydown.space')
    // 验证事件触发
  })
})
