// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerEmpty from '../src/index.vue'

describe('Empty', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerEmpty)
    expect(wrapper.classes()).toContain('ver-empty')
  })
})
