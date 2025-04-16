# Pagination 分页

## 基本用法

<demo vue="./example/base.vue"></demo>

## 总数显示

<demo vue="./example/total.vue"></demo>

## 每页条数切换

<demo vue="./example/page-size-changer.vue"></demo>

## 快速跳转

<demo vue="./example/quick-jumper.vue"></demo>

## 禁用状态

<demo vue="./example/disabled-state.vue"></demo>

## 自定义内容

<demo vue="./example/slots.vue"></demo>

## Pagination Api

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| modelValue | 当前页码 | number | 1 |
| total | 总数据量 | number | 0 |
| pageSize | 每页显示条数 | number | 10 |
| show-total | 是否显示总数据量 | boolean | false |
| show-size-changer | 是否显示页数切换器 | boolean | false |
| show-quick-jumper | 是否显示快速跳转 | boolean | false |
| page-size-options | 页数切换选项 | number[] | [10,20,50,100] |
| disabled | 是否禁用 | boolean | false |

## Pagination Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 页码或页数变化时触发 | (currentPage: number, pageSize: number) |
| update:modelValue | 当前页变化时触发 | (page: number) |
| update:pageSize | 页大小变化时触发 | (size: number) |

## Pagination Slots

| 名称 | 说明 |
|------|------|
| total | 自定义总数显示内容 |
| prev | 自定义上一页按钮 |
| next | 自定义下一页按钮 |
