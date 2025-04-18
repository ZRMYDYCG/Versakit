import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VKTimeline } from '../index'
import { VKTimeLineItem } from '../index'

describe('VKTimeline', () => {
  it('renders timeline with default props', () => {
    const wrapper = mount(VKTimeline)
    expect(wrapper.classes()).toContain('timeline')
    expect(wrapper.attributes('role')).toBe('list')
    expect(wrapper.attributes('aria-label')).toBe('Timeline Component')
  })

  it('applies reverse class when reverse prop is true', () => {
    const wrapper = mount(VKTimeline, {
      props: { reverse: true },
    })
    expect(wrapper.classes()).toContain('timeline-reverse')
  })

  it('applies pending class when pending prop is true', () => {
    const wrapper = mount(VKTimeline, {
      props: { pending: true },
    })
    expect(wrapper.classes()).toContain('timeline-pending')
  })

  it('renders timeline items as children', () => {
    const wrapper = mount(VKTimeline, {
      slots: {
        default: `
          <VKTimeLineItem label="Step 1">Content 1</VKTimeLineItem>
          <VKTimeLineItem label="Step 2">Content 2</VKTimeLineItem>
        `,
      },
      global: {
        components: { VKTimeLineItem },
      },
    })
    const items = wrapper.findAllComponents(VKTimeLineItem)
    expect(items.length).toBe(2)
    expect(items[0].text()).toContain('Content 1')
    expect(items[1].text()).toContain('Content 2')
  })
})

describe('VKTimeLineItem', () => {
  it('renders timeline item with default props', () => {
    const wrapper = mount(VKTimeLineItem)
    expect(wrapper.classes()).toContain('timeline-item')
    expect(wrapper.attributes('role')).toBe('listitem')
    expect(wrapper.attributes('aria-label')).toBe('Timeline Item')
  })

  it('applies position class based on props', () => {
    const wrapper = mount(VKTimeLineItem, {
      props: { position: 'right' },
    })
    expect(wrapper.classes()).toContain('timeline-item-right')
  })

  it('uses timeline context for position when position prop is not provided', () => {
    const wrapper = mount(VKTimeLineItem, {
      global: {
        provide: {
          timeline: { mode: 'alternate' },
        },
      },
    })
    expect(wrapper.classes()).toContain('timeline-item-left')
  })

  it('renders label when provided', () => {
    const wrapper = mount(VKTimeLineItem, {
      props: { label: 'Step 1' },
    })
    expect(wrapper.find('.timeline-item-label').text()).toBe('Step 1')
  })

  it('renders custom dot slot', () => {
    const wrapper = mount(VKTimeLineItem, {
      slots: {
        dot: '<span class="custom-dot">Custom Dot</span>',
      },
    })
    expect(wrapper.find('.custom-dot').exists()).toBe(true)
    expect(wrapper.find('.custom-dot').text()).toBe('Custom Dot')
  })

  it('applies custom color to head', () => {
    const wrapper = mount(VKTimeLineItem, {
      props: { color: '#ff0000' },
    })
    const head = wrapper.find('.timeline-item-head')
    expect(head.attributes('style')).toContain('border-color: #ff0000')
  })
})
