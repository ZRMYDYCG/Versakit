import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerProgress from '../src/index.vue'

describe('VerProgress', () => {
  it('具有默认的 progress 类', () => {
    const wrapper = mount(VerProgress)
    expect(wrapper.classes()).toContain('progress')
  })

  it('默认渲染线形进度条', () => {
    const wrapper = mount(VerProgress)
    expect(wrapper.find('.progress-line').exists()).toBe(true)
    expect(wrapper.find('.progress-circle').exists()).toBe(false)
  })

  it('正确渲染圆形进度条', () => {
    const wrapper = mount(VerProgress, { props: { type: 'circle' } })
    expect(wrapper.find('.progress-circle').exists()).toBe(true)
  })

  describe('百分比显示', () => {
    it('线形进度条宽度正确', () => {
      const percent = 45
      const wrapper = mount(VerProgress, { props: { percent } })
      const inner = wrapper.find('.progress-line-inner')
      expect(inner.attributes('style')).toContain(`width: ${percent}%`)
    })

    it('圆形进度条 stroke-dasharray 正确', () => {
      const percent = 60
      const wrapper = mount(VerProgress, { props: { type: 'circle', percent } })
      const circle = wrapper.find('.progress-circle-bar')
      const expected = `${percent * 2.83}, 283`
      expect(circle.attributes('stroke-dasharray')).toBe(expected)
    })
  })

  describe('文本显示', () => {
    it('默认显示百分比文本', () => {
      const wrapper = mount(VerProgress)
      expect(wrapper.find('.progress-text').exists()).toBe(true)
    })

    it('可隐藏百分比文本', () => {
      const wrapper = mount(VerProgress, { props: { isShowText: false } })
      expect(wrapper.find('.progress-text').exists()).toBe(false)
      expect(wrapper.find('.progress-circle-text').exists()).toBe(false)
    })
  })

  describe('动画效果', () => {
    it('线形进度条支持动画', () => {
      const wrapper = mount(VerProgress, { props: { animation: true } })
      expect(wrapper.find('.progress-line-outer').classes()).toContain(
        'with-animation',
      )
    })

    it('圆形进度条支持动画', () => {
      const wrapper = mount(VerProgress, {
        props: { type: 'circle', animation: true },
      })
      expect(wrapper.find('.progress-circle').classes()).toContain(
        'with-animation',
      )
    })
  })

  describe('边界情况', () => {
    it('处理 0% 值', () => {
      const wrapper = mount(VerProgress, { props: { percent: 0 } })
      const inner = wrapper.find('.progress-line-inner')
      expect(inner.attributes('style')).toContain('width: 0%')
    })

    it('处理超过 100% 的值', () => {
      const wrapper = mount(VerProgress, { props: { percent: 120 } })
      const inner = wrapper.find('.progress-line-inner')
      expect(inner.attributes('style')).toContain('width: 120%')
    })
  })
})
