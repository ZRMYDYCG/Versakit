/*
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-08 23:10:39
 * @LastEditors: Jannik 1337741710@qq.com
 * @Description: Button 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerButton from '../src/index.vue'

describe('VerButton', () => {
  // 基础渲染测试
  it('renders properly', () => {
    const wrapper = mount(VerButton, {
      slots: {
        default: 'Button Text',
      },
    })
    expect(wrapper.text()).toBe('Button Text')
    expect(wrapper.classes()).toContain('ver-btn')
  })

  // 类型测试
  it('applies correct type class', () => {
    const wrapper = mount(VerButton, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('ver-btn-primary')
  })

  // 变体测试
  it('applies variant classes', () => {
    const wrapper = mount(VerButton, {
      props: {
        variant: 'ghost text',
      },
    })
    expect(wrapper.classes()).toContain('is-ghost')
    expect(wrapper.classes()).toContain('is-text')
  })

  // 图标测试
  it('renders icon properly', () => {
    const wrapper = mount(VerButton, {
      props: {
        icon: 'search',
      },
    })
    expect(wrapper.findComponent({ name: 'VerIcon' }).exists()).toBe(true)
  })

  // 键盘事件测试
  it('handles keyboard events', async () => {
    const wrapper = mount(VerButton)
    await wrapper.trigger('keydown.enter')
    await wrapper.trigger('keydown.space')
    // 验证事件触发
  })
})
