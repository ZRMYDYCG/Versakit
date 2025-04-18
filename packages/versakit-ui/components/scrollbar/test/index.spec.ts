import { mount } from '@vue/test-utils'
import { VKScrollBar } from '../index'
import { describe, it, expect, vi } from 'vitest'

describe('VKScrollBar', () => {
  it('renders with default props', () => {
    const wrapper = mount(VKScrollBar)
    expect(wrapper.classes()).toContain('scrollbar')
    expect(wrapper.find('.scrollbar-content').exists()).toBe(true)
  })

  it('applies custom width and height', () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        width: '300px',
        height: '400px',
      },
    })
    const container = wrapper.find('.scrollbar')
    expect(container.attributes('style')).toContain('width: 300px;')
    expect(container.attributes('style')).toContain('height: 400px;')
  })

  it('shows vertical scrollbar when content overflows vertically', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'vertical',
      },
      slots: {
        default: `<div style="height: 2000px;"></div>`,
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.scrollbar-track.vertical').exists()).toBe(true)
  })

  it('shows horizontal scrollbar when content overflows horizontally', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'horizontal',
      },
      slots: {
        default: `<div style="width: 2000px;"></div>`,
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.scrollbar-track.horizontal').exists()).toBe(true)
  })

  it('hides scrollbars when content does not overflow', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'both',
      },
      slots: {
        default: `<div style="width: 100px; height: 100px;"></div>`,
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.scrollbar-track.vertical').exists()).toBe(false)
    expect(wrapper.find('.scrollbar-track.horizontal').exists()).toBe(false)
  })

  it('handles vertical track click', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'vertical',
      },
      slots: {
        default: `<div style="height: 2000px;"></div>`,
      },
    })
    const track = wrapper.find('.scrollbar-track.vertical')
    await track.trigger('click', { clientY: 100 })
    expect(wrapper.vm.$refs.contentRef.scrollTop).toBeGreaterThan(0)
  })

  it('handles horizontal track click', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'horizontal',
      },
      slots: {
        default: `<div style="width: 2000px;"></div>`,
      },
    })
    const track = wrapper.find('.scrollbar-track.horizontal')
    await track.trigger('click', { clientX: 100 })
    expect(wrapper.vm.$refs.contentRef.scrollLeft).toBeGreaterThan(0)
  })

  it('shows scrollbars on hover', async () => {
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'both',
      },
      slots: {
        default: `<div style="width: 2000px; height: 2000px;"></div>`,
      },
    })
    const container = wrapper.find('.scrollbar')
    await container.trigger('mouseenter')
    expect(wrapper.find('.scrollbar-thumb.visible').exists()).toBe(true)
  })

  it('hides scrollbars after delay', async () => {
    vi.useFakeTimers()
    const wrapper = mount(VKScrollBar, {
      props: {
        direction: 'both',
        hideDelay: 500,
      },
      slots: {
        default: `<div style="width: 2000px; height: 2000px;"></div>`,
      },
    })
    const container = wrapper.find('.scrollbar')
    await container.trigger('mouseenter')
    expect(wrapper.find('.scrollbar-thumb.visible').exists()).toBe(true)

    await container.trigger('mouseleave')
    vi.advanceTimersByTime(500)
    expect(wrapper.find('.scrollbar-thumb.visible').exists()).toBe(false)
  })
})
