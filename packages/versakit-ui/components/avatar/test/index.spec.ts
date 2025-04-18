import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VKAvatar from '../src/index.vue'

describe('VKAvatar', () => {
  it('测试是否存在默认样式', () => {
    const wrapper = mount(VKAvatar)
    expect(wrapper.classes()).toContain('ver-avatar')
    expect(wrapper.classes()).toContain('is-circle')
  })

  it('测试传入不同 src 值，img 标签的 src 属性的设置', () => {
    const srcValue = 'https://via.placeholder.com/300x400?text=1'
    const wrapper = mount(VKAvatar, {
      props: {
        src: srcValue,
      },
    })
    const imgElement = wrapper.find('img')
    expect(imgElement.attributes('src')).toBe(srcValue)
  })

  it('传入不同的size，宽高是否正确', () => {
    const sizeValue = 100
    const wrapper = mount(VKAvatar, {
      props: {
        size: sizeValue,
      },
    })
    const spanElement = wrapper.find('span')
    expect(spanElement.attributes('style')).toContain(`width: ${sizeValue}px;`)
    expect(spanElement.attributes('style')).toContain(`height: ${sizeValue}px;`)
  })

  it('测试组件的 shape 的类名变化', () => {
    const wrapper = mount(VKAvatar, {
      props: {
        shape: 'square',
      },
    })
    expect(wrapper.classes()).toContain('is-square')
  })

  it('测试 img 标签是否生成', () => {
    const wrapper = mount(VKAvatar)
    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(false)
  })

  it('测试是否生成用户传入的class', () => {
    const wrapper = mount(VKAvatar, {
      attrs: {
        class: 'class-value',
      },
    })
    expect(wrapper.classes()).toContain('class-value')
  })

  it('测试文本处理逻辑', () => {
    const wrapper = mount(VKAvatar, {
      props: {
        text: 'test',
      },
    })
    expect(wrapper.find('span').text()).toBe('T')
  })

  it('测试图片加载失败处理', async () => {
    const wrapper = mount(VKAvatar, {
      props: {
        src: 'invalid-url',
      },
    })
    const img = wrapper.find('img')
    await img.trigger('error')
    expect(img.element.style.display).toBe('none')
  })
})
