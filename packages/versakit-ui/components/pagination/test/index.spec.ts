// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerPagination from '../src/index.vue'

describe('Pagination', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerPagination)
    expect(wrapper.classes()).toContain('ver-pagination')
  })
})
