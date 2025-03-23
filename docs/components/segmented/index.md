# Segmented 分段控制器

## 基本使用

<demo vue="./example/base.vue"></demo>

## API 参考

### Segmented Props

| 属性名     | 类型                                                        | 默认值    | 说明                      |
| ---------- | ----------------------------------------------------------- | --------- | ------------------------- |
| modelValue | string \| number                                            | -         | 当前选中值                |
| options    | Array<string \| { label: string, value: string \| number }> | []        | 选项配置                  |
| size       | string                                                      | 'default' | 尺寸：small/default/large |

### Segmented Events

| 事件名 | 说明           | 回调参数   |
| ------ | -------------- | ---------- |
| change | 选项改变时触发 | 当前选中值 |

### Segmented Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义选项内容 |
