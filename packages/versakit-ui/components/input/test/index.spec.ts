import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { VKInput } from '../index'
import type { InputType } from '../type'

describe('VKInput', () => {
  // 测试组件是否能正常渲染
  it('测试组件是否能正常渲染', () => {
    const wrapper = mount(VKInput)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试disabled属性是否生效
  it('测试disabled属性是否生效', () => {
    const wrapper = mount(VKInput, {
      props: {
        disabled: true,
      },
    })
    const inputElement = wrapper.find('input')
    expect(inputElement.element.disabled).toBe(true)

    const wrapper2 = mount(VKInput, {
      props: {
        disabled: false,
      },
    })
    const inputElement2 = wrapper2.find('input')
    expect(inputElement2.element.disabled).toBe(false)
  })

  it('测试输入值改变时update:modelValue事件触发及值更新', async () => {
    const wrapper = mount(VKInput)
    const inputElement = wrapper.find('input')
    await inputElement.setValue('new value')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![0][0]).toBe('new value')
  })

  it('测试placeholder属性显示是否正确', () => {
    const placeholderText = '请输入内容'
    const wrapper = mount(VKInput, {
      props: {
        placeholder: placeholderText,
      },
    })
    const inputElement = wrapper.find('input')
    expect(inputElement.element.placeholder).toBe(placeholderText)
  })

  describe('VKInput', () => {
    const types: InputType[] = ['text', 'password', 'number']
    types.forEach((type) => {
      it(`测试type属性为${type}时输入框类型正确`, () => {
        const wrapper = mount(VKInput, {
          props: {
            type: type as InputType, // 通过类型断言，确保符合组件要求的类型
          },
        })
        const inputElement = wrapper.find('input')
        expect(inputElement.element.type).toBe(type)
      })
    })
  })
})
