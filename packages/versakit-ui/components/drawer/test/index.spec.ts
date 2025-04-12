import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VKDrawer from '../src/index.vue'

describe('drawer', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VKDrawer)
    expect(wrapper.exists()).toBe(true)
  })
})
