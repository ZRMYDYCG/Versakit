# Copy 复制指令

复制指令用于快速实现点击复制文本的功能。支持复制元素内容或自定义文本，并提供复制成功和失败的回调函数。

## 基础用法

<demo vue="./example/index.vue" />

## API

### 指令值

| 参数    | 说明                                       | 类型                   | 默认值 |
| ------- | ------------------------------------------ | ---------------------- | ------ |
| text    | 要复制的文本，如果不传则使用元素的文本内容 | `string`               | -      |
| success | 复制成功的回调函数                         | `() => void`           | -      |
| error   | 复制失败的回调函数                         | `(err: Error) => void` | -      |

### 示例类型定义

```ts
interface CopyOptions {
	text?: string
	success?: () => void
	error?: (err: Error) => void
}
```
