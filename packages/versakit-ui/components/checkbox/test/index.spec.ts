import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCheckbox from '../src/index.vue'

describe('Checkbox', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerCheckbox)
    expect(wrapper.classes()).toContain('ver-checkbox')
  })
})
