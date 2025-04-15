import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { VKTab } from '../index'
import { VKTabItem } from '../index'

describe('VKTab', () => {
  it('renders tabs with default props', () => {
    const wrapper = mount(VKTab, {
      props: {
        modelValue: 'tab1',
      },
      slots: {
        default: `
          <VKTabItem name="tab1" label="Tab 1">Content 1</VKTabItem>
          <VKTabItem name="tab2" label="Tab 2">Content 2</VKTabItem>
        `,
      },
      global: {
        components: { VKTabItem },
      },
    })

    expect(wrapper.classes()).toContain('tabs')
    expect(wrapper.attributes('role')).toBe('tablist')
    expect(wrapper.attributes('aria-label')).toBe('Tab Navigation')

    const tabs = wrapper.findAll('.tabs-tab')
    expect(tabs.length).toBe(2)
    expect(tabs[0].text()).toContain('Tab 1')
    expect(tabs[1].text()).toContain('Tab 2')
  })

  it('activates the correct tab on click', async () => {
    const wrapper = mount(VKTab, {
      props: {
        modelValue: 'tab1',
      },
      slots: {
        default: `
          <VKTabItem name="tab1" label="Tab 1">Content 1</VKTabItem>
          <VKTabItem name="tab2" label="Tab 2">Content 2</VKTabItem>
        `,
      },
      global: {
        components: { VKTabItem },
      },
    })

    const tabs = wrapper.findAll('.tabs-tab')
    await tabs[1].trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['tab2'])
    expect(tabs[1].classes()).toContain('is-active')
  })

  it('removes a tab when close button is clicked', async () => {
    const wrapper = mount(VKTab, {
      props: {
        modelValue: 'tab1',
        closable: true,
      },
      slots: {
        default: `
          <VKTabItem name="tab1" label="Tab 1">Content 1</VKTabItem>
          <VKTabItem name="tab2" label="Tab 2">Content 2</VKTabItem>
        `,
      },
      global: {
        components: { VKTabItem },
      },
    })

    const closeButton = wrapper.findAll('.tabs-tab-close')[0]
    await closeButton.trigger('click')

    expect(wrapper.emitted('tab-remove')).toBeTruthy()
    expect(wrapper.emitted('tab-remove')![0]).toEqual(['tab1'])
  })

  it('adds a new tab when add button is clicked', async () => {
    const wrapper = mount(VKTab, {
      props: {
        modelValue: 'tab1',
        addable: true,
      },
      slots: {
        default: `
          <VKTabItem name="tab1" label="Tab 1">Content 1</VKTabItem>
        `,
      },
      global: {
        components: { VKTabItem },
      },
    })

    const addButton = wrapper.find('.tabs-nav-add')
    await addButton.trigger('click')

    expect(wrapper.emitted('tab-add')).toBeTruthy()
  })
})

describe('VKTabItem', () => {
  it('renders tab content correctly', () => {
    const wrapper = mount(VKTabItem, {
      props: {
        name: 'tab1',
        label: 'Tab 1',
      },
      global: {
        provide: {
          tabs: {
            activeTab: 'tab1',
            registerTab: vi.fn(),
            unregisterTab: vi.fn(),
          },
        },
      },
    })

    expect(wrapper.classes()).toContain('tab-pane')
    expect(wrapper.attributes('role')).toBe('tabpanel')
    expect(wrapper.attributes('aria-hidden')).toBe('false')
  })

  it('hides tab content when not active', () => {
    const wrapper = mount(VKTabItem, {
      props: {
        name: 'tab2',
        label: 'Tab 2',
      },
      global: {
        provide: {
          tabs: {
            activeTab: 'tab1',
            registerTab: vi.fn(),
            unregisterTab: vi.fn(),
          },
        },
      },
    })

    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('registers and unregisters tab on mount and unmount', () => {
    const registerTab = vi.fn()
    const unregisterTab = vi.fn()

    const wrapper = mount(VKTabItem, {
      props: {
        name: 'tab1',
        label: 'Tab 1',
      },
      global: {
        provide: {
          tabs: {
            activeTab: 'tab1',
            registerTab,
            unregisterTab,
          },
        },
      },
    })

    expect(registerTab).toHaveBeenCalledWith({
      label: 'Tab 1',
      name: 'tab1',
      disabled: false,
    })

    wrapper.unmount()
    expect(unregisterTab).toHaveBeenCalledWith('tab1')
  })
})
