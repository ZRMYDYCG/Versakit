import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VKAside from '../src/index.vue'

describe('VKAside', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VKAside)
    expect(wrapper.classes()).toContain('ver-aside')
  })
})
