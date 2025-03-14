// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerInputOtp from '../src/index.vue'

describe('InputOtp', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerInputOtp)
    expect(wrapper.classes()).toContain('ver-input-otp')
  })
})
