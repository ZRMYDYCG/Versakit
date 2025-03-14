// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBreadcrumb from '../src/index.vue'

describe('Breadcrumb', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBreadcrumb)
    expect(wrapper.classes()).toContain('c')
  })
})
