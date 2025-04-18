import { mount } from '@vue/test-utils'
import { VKCarousel } from '../index'
import { VKCarouselItem } from '../index'
import { describe, it, expect, vi } from 'vitest'

describe('VKCarousel', () => {
  it('renders carousel with default props', () => {
    const wrapper = mount(VKCarousel, {
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    expect(wrapper.classes()).toContain('carousel')
    expect(wrapper.findAllComponents(VKCarouselItem).length).toBe(3)
  })

  it('navigates to the next slide', async () => {
    const wrapper = mount(VKCarousel, {
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    const nextButton = wrapper.find('.carousel-arrow-next')
    await nextButton.trigger('click')

    expect(wrapper.vm.currentIndex).toBe(1)
  })

  it('navigates to the previous slide', async () => {
    const wrapper = mount(VKCarousel, {
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    const prevButton = wrapper.find('.carousel-arrow-prev')
    await prevButton.trigger('click')

    expect(wrapper.vm.currentIndex).toBe(2) // Wraps around to the last slide
  })

  it('autoplay works correctly', async () => {
    vi.useFakeTimers()
    const wrapper = mount(VKCarousel, {
      props: { autoplay: true, interval: 1000 },
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.currentIndex).toBe(1)

    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.currentIndex).toBe(2)

    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.currentIndex).toBe(0)
  })

  it('stops autoplay on hover', async () => {
    vi.useFakeTimers()
    const wrapper = mount(VKCarousel, {
      props: { autoplay: true, interval: 1000, trigger: 'hover' },
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    await wrapper.trigger('mouseenter')
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.currentIndex).toBe(0) // Autoplay stops

    await wrapper.trigger('mouseleave')
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.currentIndex).toBe(1) // Autoplay resumes
  })

  it('renders indicators and handles clicks', async () => {
    const wrapper = mount(VKCarousel, {
      props: { showIndicators: true },
      slots: {
        default: `
          <VKCarouselItem />
          <VKCarouselItem />
          <VKCarouselItem />
        `,
      },
      global: {
        components: { VKCarouselItem },
      },
    })

    const indicators = wrapper.findAll('.carousel-indicator')
    expect(indicators.length).toBe(3)

    await indicators[2].trigger('click')
    expect(wrapper.vm.currentIndex).toBe(2)
  })
})
