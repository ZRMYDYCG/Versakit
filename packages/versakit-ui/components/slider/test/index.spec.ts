//写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerSlider from '../src/index.vue'

describe('Slider', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerSlider)
    expect(wrapper.classes()).toContain('ver-slider')
  })
})
