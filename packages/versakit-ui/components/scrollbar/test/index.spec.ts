//写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerScrollbar from '../src/index.vue'

describe('Scrollbar', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerScrollbar)
    expect(wrapper.classes()).toContain('ver-scrollbar')
  })
})
