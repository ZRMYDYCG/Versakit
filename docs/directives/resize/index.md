# Resize 大小调整指令

大小调整指令用于使元素可以通过拖拽调整大小。支持八个方向的调整，可以限制最小和最大尺寸，并提供尺寸变化的回调函数。

## 基础用法

<demo vue="./example/index.vue" />

## API

### 指令值

| 参数      | 说明                 | 类型                                                           | 默认值     |
| --------- | -------------------- | -------------------------------------------------------------- | ---------- |
| minWidth  | 最小宽度（像素）     | `number`                                                       | `50`       |
| minHeight | 最小高度（像素）     | `number`                                                       | `50`       |
| maxWidth  | 最大宽度（像素）     | `number`                                                       | `Infinity` |
| maxHeight | 最大高度（像素）     | `number`                                                       | `Infinity` |
| handles   | 可调整大小的方向     | `('n' \| 's' \| 'e' \| 'w' \| 'ne' \| 'nw' \| 'se' \| 'sw')[]` | `['se']`   |
| onResize  | 大小变化时的回调函数 | `(width: number, height: number) => void`                      | -          |

### 示例类型定义

```ts
interface ResizeOptions {
	minWidth?: number
	minHeight?: number
	maxWidth?: number
	maxHeight?: number
	handles?: ('n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw')[]
	onResize?: (width: number, height: number) => void
}
```

### 注意事项

1. 元素必须具有定位属性（非 static）
2. 支持八个方向的大小调整：上、下、左、右、左上、右上、左下、右下
3. 可以限制最小和最大尺寸
4. 拖拽时会实时触发 onResize 回调
5. 调整手柄会自动创建和移除
6. 支持自定义调整手柄的样式
