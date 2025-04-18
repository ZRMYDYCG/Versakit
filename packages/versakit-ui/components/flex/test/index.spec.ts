import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { AlignProps, JustifyProps, WrapProps } from '../type'
import Flex from '../src/index.vue'

describe('Flex Component', () => {
  it('gap should be 8px when props.gap is "small"', () => {
    const wrapper = mount(Flex, {
      props: { gap: 'small' },
    })
    expect(wrapper.vm.gap).toBe('8px')
  })

  it('gap should be 16px when props.gap is "middle"', () => {
    const wrapper = mount(Flex, {
      props: { gap: 'middle' },
    })
    expect(wrapper.vm.gap).toBe('16px')
  })

  it('gap should be 24px when props.gap is "large"', () => {
    const wrapper = mount(Flex, {
      props: { gap: 'large' },
    })
    expect(wrapper.vm.gap).toBe('24px')
  })

  it('gap should be 5px when props.gap is a number 5', () => {
    const wrapper = mount(Flex, {
      props: { gap: 5 },
    })
    expect(wrapper.vm.gap).toBe('5px')
  })

  it('gap should be "5px 10px" when props.gap is an array [5, 10]', () => {
    const wrapper = mount(Flex, {
      props: { gap: [5, 10] },
    })
    expect(wrapper.vm.gap).toBe('5px 10px')
  })

  it('should apply "vk-flex--vktical" class when vertical is true', () => {
    const wrapper = mount(Flex, {
      props: { vertical: true },
    })
    expect(wrapper.classes()).toContain('vk-flex--vktical')
  })

  it('should not apply "vk-flex--vktical" class when vertical is false or undefined', () => {
    const wrapperFalse = mount(Flex, {
      props: { vertical: false },
    })
    const wrapperUndefined = mount(Flex)

    expect(wrapperFalse.classes()).not.toContain('vk-flex--vktical')
    expect(wrapperUndefined.classes()).not.toContain('vk-flex--vktical')
  })

  it.each<WrapProps>(['nowrap', 'wrap', 'wrap-reverse'])(
    'should set --vk-flex-wrap to %s when wrap is %s',
    (wrapValue) => {
      const wrapper = mount(Flex, {
        props: { wrap: wrapValue },
      })
      expect(wrapper.attributes('style')).toContain(
        `--vk-flex-wrap: ${wrapValue};`,
      )
    },
  )

  it.each<[JustifyProps, JustifyProps]>([
    ['normal', 'normal'],
    ['flex-start', 'flex-start'],
    ['center', 'center'],
    ['flex-end', 'flex-end'],
    ['space-between', 'space-between'],
    ['space-around', 'space-around'],
    ['space-evenly', 'space-evenly'],
  ])(
    'should set --vk-flex-justify to %s when justify is %s',
    (justifyValue, expected) => {
      const wrapper = mount(Flex, {
        props: { justify: justifyValue },
      })
      expect(wrapper.attributes('style')).toContain(
        `--vk-flex-justify: ${expected};`,
      )
    },
  )

  it.each<[AlignProps, JustifyProps]>([
    ['normal', 'normal'],
    ['flex-start', 'flex-start'],
    ['center', 'center'],
    ['flex-end', 'flex-end'],
  ])(
    'should set --vk-flex-align to %s when align is %s',
    (alignValue, expected) => {
      const wrapper = mount(Flex, {
        props: { align: alignValue },
      })
      expect(wrapper.attributes('style')).toContain(
        `--vk-flex-align: ${expected};`,
      )
    },
  )
})
