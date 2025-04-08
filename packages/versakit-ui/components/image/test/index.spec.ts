// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VKImage } from '../index'

describe('VKImage', () => {
  it('should render correctly', () => {
    const wrapper = mount(VKImage)
    expect(wrapper.html()).toContain('ver-image')
  })
})
