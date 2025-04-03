# InputNumber 数字输入框

仅允许输入标准的数字值，可定义范围

## 基础用法

<demo vue="./example/base.vue" />

## 属性

| 属性名      | 说明           | 类型    | 默认值      |
|------------|---------------|---------|------------|
| v-model    | 绑定值         | number  | -          |
| min        | 最小值         | number  | -Infinity  |
| max        | 最大值         | number  | Infinity   |
| step       | 步长           | number  | 1          |
| precision  | 精度，小数位数   | number  | -          |
| disabled   | 是否禁用        | boolean | false      |
| controls   | 是否显示控制按钮  | boolean | true       |
| placeholder| 输入框占位文本   | string  | -          |

## 事件

| 事件名  | 说明                 | 回调参数      |
|--------|---------------------|--------------|
| change | 绑定值被改变时触发      | (value: number) |
