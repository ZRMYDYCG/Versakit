# Upload 上传

用于文件上传的组件。

## 基本使用

基础的文件上传功能，点击按钮选择文件并上传。

<demo vue="./example/base.vue" />

## 拖拽上传

将文件拖拽到指定区域以进行上传。

<demo vue="./example/drag.vue" />

## 图片上传

可使用照片墙样式上传多张图片，支持图片预览。

<demo vue="./example/picture.vue" />

## API

### 属性

| 属性名          | 说明                         | 类型                                  | 默认值     |
| --------------- | ---------------------------- | ------------------------------------- | ---------- |
| action          | 上传的URL                    | string                                | -          |
| headers         | 上传请求头部                 | Record<string, string>                | -          |
| data            | 上传时附带的额外参数         | Record<string, any>                   | -          |
| multiple        | 是否支持多选文件             | boolean                               | false      |
| name            | 上传的文件字段名             | string                                | 'file'     |
| drag            | 是否启用拖拽上传             | boolean                               | false      |
| accept          | 接受上传的文件类型           | string                                | -          |
| autoUpload      | 是否在选取文件后立即进行上传 | boolean                               | true       |
| limit           | 最大允许上传文件数量         | number                                | 0 (无限制) |
| disabled        | 是否禁用                     | boolean                               | false      |
| withCredentials | 支持发送cookie凭证信息       | boolean                               | false      |
| listType        | 文件列表的类型               | 'text' \| 'picture' \| 'picture-card' | 'text'     |
| fileList        | 上传的文件列表               | UploadFile[]                          | []         |

### 事件

| 事件名          | 说明                   | 参数                                                               |
| --------------- | ---------------------- | ------------------------------------------------------------------ |
| update:fileList | 文件列表更新时触发     | (fileList: UploadFile[])                                           |
| change          | 文件状态改变时触发     | (file: UploadFile, fileList: UploadFile[])                         |
| success         | 文件上传成功时触发     | (response: any, file: UploadFile, fileList: UploadFile[])          |
| error           | 文件上传失败时触发     | (error: any, file: UploadFile, fileList: UploadFile[])             |
| progress        | 文件上传进度变化时触发 | (evt: {percent: number}, file: UploadFile, fileList: UploadFile[]) |
| exceed          | 文件超出个数限制时触发 | (files: File[], fileList: UploadFile[])                            |
| remove          | 文件被移除时触发       | (file: UploadFile, fileList: UploadFile[])                         |

### 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 触发文件选择框的内容 |
| drag    | 拖拽区域的内容       |
| tip     | 提示说明文字         |

### 方法

| 方法名 | 说明                                | 参数 |
| ------ | ----------------------------------- | ---- |
| submit | 手动上传文件列表中状态为ready的文件 | -    |

### UploadFile 类型

```ts
interface UploadFile {
	uid: string // 文件唯一标识
	name: string // 文件名
	status: 'ready' | 'uploading' | 'success' | 'error' // 文件状态
	size: number // 文件大小
	percentage?: number // 上传进度
	url?: string // 文件URL（图片预览时使用）
	raw?: File // 原始文件对象
	response?: any // 上传成功后的响应数据
	error?: any // 上传失败的错误信息
}
```
