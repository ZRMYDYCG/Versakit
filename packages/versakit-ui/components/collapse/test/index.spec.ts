// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCollapse from '../src/index.vue'

describe('Collapse', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerCollapse)
    expect(wrapper.classes()).toContain('ver-collapse')
  })
})
