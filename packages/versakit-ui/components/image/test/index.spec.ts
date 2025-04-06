// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerImage } from '../index'

describe('VerImage', () => {
  it('should render correctly', () => {
    const wrapper = mount(VerImage)
    expect(wrapper.html()).toContain('ver-image')
  })
})
