# Drag 拖拽

拖拽指令用于实现元素的拖拽功能，支持限制拖拽方向和边界。

## 基本使用

<demo vue="./example/index.vue" />

## API

### 参数

| 参数名          | 说明                              | 类型   | 默认值 |
| --------------- | --------------------------------- | ------ | ------ |
| axis            | 拖拽方向，可选 'x'、'y' 或 'both' | string | 'both' |
| boundary        | 拖拽边界限制                      | object | -      |
| boundary.left   | 左边界                            | number | -      |
| boundary.right  | 右边界                            | number | -      |
| boundary.top    | 上边界                            | number | -      |
| boundary.bottom | 下边界                            | number | -      |
