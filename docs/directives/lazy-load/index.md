# LazyLoad 图片懒加载

图片懒加载指令用于实现图片的按需加载，当图片进入视口时才开始加载，可以优化页面加载性能。

## 基本使用

<demo vue="./example/index.vue" />

## API

### 参数

| 参数名     | 说明                   | 类型   | 默认值 |
| ---------- | ---------------------- | ------ | ------ |
| loading    | 加载中显示的图片地址   | string | -      |
| error      | 加载失败显示的图片地址 | string | -      |
| rootMargin | 触发加载的边距         | string | '0px'  |
| threshold  | 触发加载的可见比例     | number | 0      |
