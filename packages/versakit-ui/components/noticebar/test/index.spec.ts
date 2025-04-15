import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { VKNoticeBar } from '../index'

describe('VKNoticeBar', () => {
  it('renders with default props', () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'This is a notice',
      },
    })
    expect(wrapper.classes()).toContain('notice-bar')
    expect(wrapper.attributes('role')).toBe('alert')
    expect(wrapper.attributes('aria-live')).toBe('polite')
    expect(wrapper.text()).toContain('This is a notice')
  })

  it('renders with custom type', () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'Success message',
        type: 'success',
      },
    })
    expect(wrapper.classes()).toContain('notice-bar-success')
  })

  it('renders with custom icon', () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'Custom icon message',
        icon: '🔔',
      },
    })
    expect(wrapper.find('.notice-bar-icon').text()).toBe('🔔')
  })

  it('closes when close button is clicked', async () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'Closable notice',
        closable: true,
      },
    })
    const closeButton = wrapper.find('.notice-bar-close')
    await closeButton.trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.find('.notice-bar').exists()).toBe(false)
  })

  it('scrolls horizontally when content overflows', async () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'This is a very long notice that should scroll horizontally',
        scrollable: true,
        direction: 'horizontal',
        speed: 10,
      },
    })

    const container = wrapper.find('.notice-bar-content')
    const content = wrapper.find('.notice-bar-scrollable')

    // Mock container and content widths
    Object.defineProperty(container.element, 'offsetWidth', { value: 100 })
    Object.defineProperty(content.element, 'offsetWidth', { value: 300 })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.notice-bar-content').classes()).toContain(
      'is-scrollable',
    )
  })

  it('scrolls vertically when multiple texts are provided', async () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: ['Message 1', 'Message 2', 'Message 3'],
        scrollable: true,
        direction: 'vertical',
        speed: 10,
      },
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.notice-bar-content').classes()).toContain(
      'is-vertical',
    )
    expect(wrapper.findAll('.notice-bar-vertical-item').length).toBe(3)
  })

  it('does not scroll when scrollable is false', async () => {
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'Non-scrollable notice',
        scrollable: false,
      },
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.notice-bar-content').classes()).not.toContain(
      'is-scrollable',
    )
  })

  it('clears scroll timer on unmount', async () => {
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval')
    const wrapper = mount(VKNoticeBar, {
      props: {
        text: 'This is a notice',
        scrollable: true,
        direction: 'horizontal',
      },
    })

    wrapper.unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
  })
})
