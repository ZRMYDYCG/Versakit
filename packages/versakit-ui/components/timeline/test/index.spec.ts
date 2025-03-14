//写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTimeline from '../src/index.vue'

describe('Timeline', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerTimeline)
    expect(wrapper.classes()).toContain('ver-timeline')
  })
})
