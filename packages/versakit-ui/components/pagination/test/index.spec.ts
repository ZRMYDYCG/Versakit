import { mount } from '@vue/test-utils'
import { VKPagination } from '../index'
import { describe, it, expect } from 'vitest'

describe('VKPagination', () => {
  it('renders with default props', () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
      },
    })
    expect(wrapper.classes()).toContain('pagination')
    expect(wrapper.findAll('.pagination-item').length).toBeGreaterThan(0)
  })

  it('disables previous button on first page', () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
      },
    })
    const prevButton = wrapper.find(
      '.pagination-btn[aria-label="Previous Page"]',
    )
    expect(prevButton.attributes('disabled')).toBeDefined()
  })

  it('disables next button on last page', () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 10,
        total: 100,
        pageSize: 10,
      },
    })
    const nextButton = wrapper.find('.pagination-btn[aria-label="Next Page"]')
    expect(nextButton.attributes('disabled')).toBeDefined()
  })

  it('emits correct event on page change', async () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
      },
    })
    const nextButton = wrapper.find('.pagination-btn[aria-label="Next Page"]')
    await nextButton.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([2])
  })

  it('renders correct number of pages', () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 50,
        pageSize: 10,
      },
    })
    const pageItems = wrapper.findAll('.pagination-item')
    expect(pageItems.length).toBe(5) // 5 pages for 50 items with pageSize 10
  })

  it('handles size change correctly', async () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
        showSizeChanger: true,
      },
    })
    const select = wrapper.find('.pagination-size-changer select')
    await select.setValue('20')
    expect(wrapper.emitted('update:pageSize')).toBeTruthy()
    expect(wrapper.emitted('update:pageSize')![0]).toEqual([20])
  })

  it('handles quick jump input correctly', async () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
        showQuickJumper: true,
      },
    })
    const input = wrapper.find('.pagination-jumper input')
    await input.setValue('5')
    await input.trigger('keyup.enter')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([5])
  })

  it('does not emit events when disabled', async () => {
    const wrapper = mount(VKPagination, {
      props: {
        modelValue: 1,
        total: 100,
        disabled: true,
      },
    })
    const nextButton = wrapper.find('.pagination-btn[aria-label="Next Page"]')
    await nextButton.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
