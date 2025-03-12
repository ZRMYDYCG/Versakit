export interface PaginationProps {
  total: number
  modelValue: number
  pageSize?: number
  showQuickJumper?: boolean
  showSizeChanger?: boolean
  pageSizeOptions?: number[]
  showTotal?: boolean
  disabled?: boolean
}
