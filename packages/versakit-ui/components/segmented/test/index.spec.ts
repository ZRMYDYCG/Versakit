// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerSegmented from '../src/index.vue'

describe('Segmented', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerSegmented)
    expect(wrapper.classes()).toContain('ver-segmented')
  })
})
