import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { VKImage } from '../index'

describe('VkImage 组件', () => {
  // 测试组件是否正确渲染默认属性
  it('使用默认属性正确渲染', () => {
    const wrapper = mount(VKImage, {
      props: {
        src: 'test-image.jpg',
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true) // 检查 img 元素是否存在
    expect(img.attributes('src')).toBe('test-image.jpg') // 检查 src 属性是否正确
    expect(img.attributes('style')).toContain('object-fit: cover') // 检查样式是否包含 object-fit
  })

  // 测试加载状态下是否显示占位符
  it('在加载时显示占位符', () => {
    const wrapper = mount(VKImage, {
      props: {
        src: 'test-image.jpg',
      },
    })

    expect(wrapper.find('.vk-image__placeholder').exists()).toBe(true) // 检查占位符是否存在
    expect(wrapper.find('.vk-image__error').exists()).toBe(false) // 检查错误状态是否不存在
  })

  // 测试图片加载失败时是否显示错误状态
  it('当图片加载失败时显示错误状态', async () => {
    const wrapper = mount(VKImage, {
      props: {
        src: 'invalid-image.jpg',
      },
    })

    const img = wrapper.find('img')
    await img.trigger('error') // 模拟图片加载失败

    expect(wrapper.find('.vk-image__error').exists()).toBe(true) // 检查错误状态是否存在
    expect(wrapper.find('.vk-image__placeholder').exists()).toBe(false) // 检查占位符是否不存在
  })

  // 测试图片加载成功时是否移除加载状态
  it('当图片加载成功时移除加载状态', async () => {
    const wrapper = mount(VKImage, {
      props: {
        src: 'test-image.jpg',
      },
    })

    const img = wrapper.find('img')
    await img.trigger('load') // 模拟图片加载成功

    expect(wrapper.find('.vk-image__placeholder').exists()).toBe(false) // 检查占位符是否不存在
    expect(wrapper.find('.vk-image__error').exists()).toBe(false) // 检查错误状态是否不存在
  })

  // 测试懒加载功能
  it('支持懒加载', async () => {
    const observeMock = vi.fn() // 模拟 IntersectionObserver 的 observe 方法
    const disconnectMock = vi.fn() // 模拟 IntersectionObserver 的 disconnect 方法

    // 模拟 IntersectionObserver
    global.IntersectionObserver = vi.fn(() => ({
      root: null,
      rootMargin: '',
      thresholds: [],
      observe: observeMock,
      disconnect: disconnectMock,
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }))

    const wrapper = mount(VKImage, {
      props: {
        src: 'lazy-image.jpg',
        lazy: true, // 启用懒加载
      },
    })

    expect(observeMock).toHaveBeenCalled() // 检查 observe 方法是否被调用
    expect(wrapper.find('img').attributes('src')).toBe('') // 检查图片初始 src 是否为空
  })
})
