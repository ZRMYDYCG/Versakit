# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法

<p>
使用 <code>shape</code> 和 <code>size</code> 属性来设置 Avatar 的形状和大小。
</p>

<demo vue="./example/base.vue"></demo>

## 尺寸

使用 <code>size</code> 属性来设置 Avatar 的尺寸。
<demo vue="./example/size.vue"></demo>

## 头像组

<!-- <demo vue="./example/group.vue"></demo> -->

## API 参考

### Avatar Props

| 属性名          | 类型             | 默认值    | 说明                                                |
| --------------- | ---------------- | --------- | --------------------------------------------------- |
| size            | string \| number | 'default' | 尺寸，支持预设值（small/default/large）或具体像素值 |
| shape           | string           | 'circle'  | 形状类型，可选 circle/square                        |
| text            | string           | -         | 显示的文字内容                                      |
| backgroundColor | string           | '#1890ff' | 背景颜色                                            |
| color           | string           | '#ffffff' | 文字颜色                                            |
| src             | string           | -         | 头像图片地址                                        |
| alt             | string           | 'avatar'  | 图片加载失败时的替代文本                            |

### AvatarGroup Props

| 属性名              | 类型   | 默认值    | 说明                 |
| ------------------- | ------ | --------- | -------------------- |
| maxCount            | number | -         | 最大显示的头像数量   |
| size                | string | 'default' | 统一设置子项头像尺寸 |
| maxPopoverPlacement | string | 'top'     | 折叠菜单的弹出位置   |
