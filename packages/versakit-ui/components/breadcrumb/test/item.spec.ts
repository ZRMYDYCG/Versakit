// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBreadcrumbItem from '../src/index.vue'

describe('BreadcrumbItem', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBreadcrumbItem)
    expect(wrapper.classes()).toContain('ver-breadcrumb-item')
  })
})
