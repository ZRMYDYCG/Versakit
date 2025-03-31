import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerInputNumber from '../src/index.vue'

describe('VerInputNumber', () => {
  it('基础渲染', () => {
    const wrapper = mount(VerInputNumber)
    expect(wrapper.classes()).toContain('ver-input-number')
  })

  it('测试增减按钮', async () => {
    const wrapper = mount(VerInputNumber, {
      props: {
        modelValue: 0,
      },
    })

    const increaseBtn = wrapper.find('.ver-input-number__increase')
    const decreaseBtn = wrapper.find('.ver-input-number__decrease')

    await increaseBtn.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])

    await decreaseBtn.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([0])
  })

  it('测试禁用状态', () => {
    const wrapper = mount(VerInputNumber, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })
})
