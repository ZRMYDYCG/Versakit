# Typewriter 打字机指令

打字机指令用于创建文字逐个显示的打字机效果。支持自定义打字速度、延迟开始时间、光标样式等。

## 基础用法

<demo vue="./example/index.vue"  />

## API

### 指令值

| 参数       | 说明                         | 类型         | 默认值 |
| ---------- | ---------------------------- | ------------ | ------ | --- |
| text       | 要显示的文本内容             | `string`     | -      |
| speed      | 每个字符的显示间隔（毫秒）   | `number`     | `100`  |
| delay      | 开始打字前的延迟时间（毫秒） | `number`     | `0`    |
| cursor     | 是否显示光标                 | `boolean`    | `true` |
| cursorChar | 光标字符                     | `string`     | `'     | '`  |
| onComplete | 打字效果完成时的回调函数     | `() => void` | -      |

### 示例类型定义

```ts
interface TypewriterOptions {
	text: string
	speed?: number
	delay?: number
	cursor?: boolean
	cursorChar?: string
	onComplete?: () => void
}
```

### 注意事项

1. 文本内容会逐字符显示
2. 支持自定义光标样式和显示
3. 可以设置延迟开始时间
4. 提供打字完成的回调函数
5. 在组件卸载时会自动清理定时器
