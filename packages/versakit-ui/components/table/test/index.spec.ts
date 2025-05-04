import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import VkTable from '../VkTable.vue'

const testColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
]

const testData = [
  { key: '1', name: 'Alice', age: 20 },
  { key: '2', name: 'Bob', age: 25 },
]

describe('VkTable', () => {
  // 基础渲染测试
  it('renders headers and data correctly', () => {
    const wrapper = mount(VkTable, {
      props: { columns: testColumns, data: testData },
    })

    // 验证表头渲染
    const headers = wrapper.findAll('.vk-table-header-cell')
    expect(headers).toHaveLength(testColumns.length)
    testColumns.forEach((col, index) => {
      expect(headers[index].text()).toBe(col.title)
    })

    // 验证数据行渲染
  })

  // Border 样式测试
  it('applies border classes when border prop is true', () => {
    const wrapper = mount(VkTable, {
      props: { border: true, columns: testColumns, data: testData },
    })

    const headerCells = wrapper.findAll('.vk-table-header-cell')
    headerCells.forEach((cell) => {
      expect(cell.classes()).toContain('is-border')
    })

    const bodyCells = wrapper.findAll('.vk-table-row-cell')
    bodyCells.forEach((cell) => {
      expect(cell.classes()).toContain('is-border')
    })
  })

  // Stripe 样式测试
  it('applies stripe classes when stripe prop is true', () => {
    const wrapper = mount(VkTable, {
      props: { stripe: true, columns: testColumns, data: testData },
    })

    const headerRow = wrapper.find('.vk-table-header-row')
    expect(headerRow.classes()).toContain('is-stripe')

    const bodyRows = wrapper.findAll('.vk-table-row')
    bodyRows.forEach((row) => {
      expect(row.classes()).toContain('is-stripe')
    })
  })

  // 空数据测试
  it('handles empty data', () => {
    const wrapper = mount(VkTable, {
      props: { columns: testColumns, data: [] },
    })

    const bodyRows = wrapper.findAll('.vk-table-row')
    expect(bodyRows).toHaveLength(0)
  })
})
