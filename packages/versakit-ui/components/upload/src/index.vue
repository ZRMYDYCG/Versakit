<script setup lang="ts">
import { ref, watch } from 'vue'
import Dragger from './dragger.vue'

export interface UploadFile {
  uid: string
  name: string
  status: 'ready' | 'uploading' | 'success' | 'error'
  size: number
  percentage?: number
  url?: string
  raw?: File
  response?: any
  error?: any
}

export interface UploadRequestOptions {
  file: File
  onProgress: (e: { percent: number }) => void
  onSuccess: (response: any) => void
  onError: (error: any) => void
  headers?: Record<string, string>
  data?: Record<string, any>
  withCredentials?: boolean
}

const props = withDefaults(
  defineProps<{
    action: string
    headers?: Record<string, string>
    data?: Record<string, any>
    multiple?: boolean
    name?: string
    drag?: boolean
    accept?: string
    autoUpload?: boolean
    limit?: number
    disabled?: boolean
    withCredentials?: boolean
    listType?: 'text' | 'picture' | 'picture-card'
    fileList?: UploadFile[]
  }>(),
  {
    name: 'file',
    multiple: false,
    drag: false,
    autoUpload: true,
    limit: 0,
    disabled: false,
    withCredentials: false,
    listType: 'text',
    fileList: () => [],
  },
)

const emit = defineEmits<{
  (e: 'update:fileList', fileList: UploadFile[]): void
  (e: 'change', file: UploadFile, fileList: UploadFile[]): void
  (e: 'success', response: any, file: UploadFile, fileList: UploadFile[]): void
  (e: 'error', error: any, file: UploadFile, fileList: UploadFile[]): void
  (
    e: 'progress',
    evt: { percent: number },
    file: UploadFile,
    fileList: UploadFile[],
  ): void
  (e: 'exceed', files: File[], fileList: UploadFile[]): void
  (e: 'remove', file: UploadFile, fileList: UploadFile[]): void
}>()

const uploadRef = ref<HTMLInputElement | null>(null)
const uploadFiles = ref<UploadFile[]>([...props.fileList])

const handleClick = () => {
  if (props.disabled) return
  uploadRef.value?.click()
}

// 生成唯一ID
const genUid = (): string => {
  return Date.now() + Math.floor(Math.random() * 10000).toString()
}

// 将原始文件转换为上传文件对象
const transformFile = (file: File): UploadFile => {
  return {
    uid: genUid(),
    name: file.name,
    status: 'ready',
    size: file.size,
    percentage: 0,
    raw: file,
  }
}

// 处理文件变更事件
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files) return

  const files = Array.from(target.files)

  // 检查文件数量限制
  if (props.limit && files.length + uploadFiles.value.length > props.limit) {
    emit('exceed', files, uploadFiles.value)
    return
  }

  files.forEach((file) => {
    const uploadFile = transformFile(file)
    uploadFiles.value.push(uploadFile)
    emit('change', uploadFile, uploadFiles.value)

    if (props.autoUpload) {
      upload(uploadFile)
    }
  })

  // 重置input以便可以选择相同的文件
  target.value = ''
}

// 上传文件
const upload = (file: UploadFile) => {
  if (!file.raw || file.status === 'uploading') return

  file.status = 'uploading'

  const options: UploadRequestOptions = {
    file: file.raw,
    onProgress: (e) => {
      file.percentage = e.percent
      emit('progress', e, file, uploadFiles.value)
    },
    onSuccess: (res) => {
      file.status = 'success'
      file.response = res
      emit('success', res, file, uploadFiles.value)
      emit('change', file, uploadFiles.value)
    },
    onError: (err) => {
      file.status = 'error'
      file.error = err
      emit('error', err, file, uploadFiles.value)
      emit('change', file, uploadFiles.value)
    },
    headers: props.headers,
    data: props.data,
    withCredentials: props.withCredentials,
  }

  uploadRequest(options)
}

// 手动触发上传
const submit = () => {
  uploadFiles.value
    .filter((file) => file.status === 'ready')
    .forEach((file) => upload(file))
}

// 移除文件
const handleRemove = (file: UploadFile) => {
  const index = uploadFiles.value.findIndex((item) => item.uid === file.uid)
  if (index !== -1) {
    uploadFiles.value.splice(index, 1)
    emit('remove', file, uploadFiles.value)
    emit('change', file, uploadFiles.value)
  }
}

// 默认的上传请求实现
const uploadRequest = (options: UploadRequestOptions) => {
  const xhr = new XMLHttpRequest()
  const {
    file,
    onProgress,
    onSuccess,
    onError,
    headers,
    data,
    withCredentials,
  } = options

  xhr.upload.addEventListener('progress', (e) => {
    if (e.total > 0) {
      const percent = Math.round((e.loaded * 100) / e.total)
      onProgress({ percent })
    }
  })

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let response
      try {
        response = JSON.parse(xhr.responseText)
      } catch {
        response = xhr.responseText
      }
      onSuccess(response)
    } else {
      onError(new Error('Upload failed with status: ' + xhr.status))
    }
  })

  xhr.addEventListener('error', () => {
    onError(new Error('Network error'))
  })

  xhr.addEventListener('abort', () => {
    onError(new Error('Upload aborted'))
  })

  xhr.open('POST', props.action, true)

  if (withCredentials) {
    xhr.withCredentials = true
  }

  // 设置自定义头部
  if (headers) {
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key])
    })
  }

  const formData = new FormData()
  formData.append(props.name, file)

  // 添加额外数据
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
  }

  xhr.send(formData)
}

// 监听并同步fileList
watch(
  () => props.fileList,
  (newValue) => {
    uploadFiles.value = [...newValue]
  },
  { deep: true },
)

// 同步更新文件列表到父组件
watch(
  uploadFiles,
  (newValue) => {
    emit('update:fileList', newValue)
  },
  { deep: true },
)

// 公开的方法
defineExpose({
  submit,
})
</script>

<template>
  <div class="ver-upload" :class="{ 'is-disabled': disabled }">
    <div class="ver-upload__input-wrapper" @click="handleClick">
      <slot>
        <button type="button" class="ver-upload__button" :disabled="disabled">
          上传文件
        </button>
      </slot>

      <input
        ref="uploadRef"
        class="ver-upload__input"
        type="file"
        :name="name"
        :multiple="multiple"
        :accept="accept"
        @change="handleChange"
      />
    </div>

    <template v-if="drag">
      <Dragger :disabled="disabled" @change="handleChange">
        <slot name="drag">
          <div class="ver-upload__dragger-content">
            <div class="ver-upload__icon">
              <svg viewBox="0 0 1024 1024" width="32" height="32">
                <path
                  d="M512 398.933333L277.333333 635.733333l29.866667 29.866667L480 493.866667V864h64V493.866667l173.866667 170.666666 29.866666-29.866666L512 398.933333zM170.666667 170.666667v170.666666h64V234.666667h554.666666v106.666666h64V170.666667H170.666667z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="ver-upload__text">
              <p>拖拽文件到此处或点击上传</p>
            </div>
          </div>
        </slot>
      </Dragger>
    </template>

    <div
      class="ver-upload__file-list"
      :class="`ver-upload__file-list--${listType}`"
    >
      <div
        v-for="file in uploadFiles"
        :key="file.uid"
        class="ver-upload__file-item"
        :class="[
          `ver-upload__file-item--${file.status}`,
          `ver-upload__file-item--${listType}`,
        ]"
      >
        <!-- 文本列表类型 -->
        <template v-if="listType === 'text'">
          <div class="ver-upload__file-name">
            <svg
              class="ver-upload__file-icon"
              viewBox="0 0 1024 1024"
              width="16"
              height="16"
            >
              <path
                d="M554.666667 128H256v768h512V341.333333h-213.333334V128z m0 0"
                fill="#E0E0E0"
              ></path>
              <path
                d="M256 896V128h298.666667l213.333333 213.333333v554.666667H256z m42.666667-725.333333v682.666666h426.666666V384h-170.666666V170.666667H298.666667z"
                fill="#424242"
              ></path>
            </svg>
            <span>{{ file.name }}</span>
          </div>

          <div class="ver-upload__file-actions">
            <span
              class="ver-upload__file-action ver-upload__file-action--remove"
              @click="handleRemove(file)"
            >
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path
                  d="M512 421.490332L116.509668 25.99975 25.99975 116.509668 421.490332 512 25.99975 907.490332l90.509918 90.509918L512 602.509668l395.490332 395.490582 90.509918-90.509918L602.509668 512l395.490582-395.490332-90.509918-90.509918z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </template>

        <!-- 图片类型 -->
        <template
          v-else-if="listType === 'picture' || listType === 'picture-card'"
        >
          <div class="ver-upload__file-thumbnail">
            <img v-if="file.url" :src="file.url" alt="thumbnail" />
            <div v-else class="ver-upload__file-icon-wrapper">
              <svg viewBox="0 0 1024 1024" width="32" height="32">
                <path
                  d="M896 160H128c-17.6 0-32 14.4-32 32v640c0 17.6 14.4 32 32 32h768c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32zM416 656c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z m480 96H128v-128l224-224 256 256 128-128 160 160V752z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <div class="ver-upload__file-info">
            <span class="ver-upload__file-name">{{ file.name }}</span>
            <span
              class="ver-upload__file-action ver-upload__file-action--remove"
              @click="handleRemove(file)"
            >
              <svg viewBox="0 0 1024 1024" width="16" height="16">
                <path
                  d="M512 421.490332L116.509668 25.99975 25.99975 116.509668 421.490332 512 25.99975 907.490332l90.509918 90.509918L512 602.509668l395.490332 395.490582 90.509918-90.509918L602.509668 512l395.490582-395.490332-90.509918-90.509918z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </template>

        <!-- 上传进度条 -->
        <div
          v-if="file.status === 'uploading'"
          class="ver-upload__progress-bar"
        >
          <div
            class="ver-upload__progress-inner"
            :style="{ width: `${file.percentage || 0}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ver-upload {
  display: inline-block;
  width: 100%;
}

.ver-upload.is-disabled {
  cursor: not-allowed;
}

.ver-upload__input {
  display: none;
}

.ver-upload__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
}

.ver-upload__button:hover {
  color: #42b983;
  border-color: #c6e2d7;
  background-color: #f0f9f6;
}

.ver-upload__button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  background-color: #f5f7fa;
  color: #c0c4cc;
}

.ver-upload__dragger-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #606266;
}

.ver-upload__icon {
  margin-bottom: 10px;
  color: #c0c4cc;
}

.ver-upload__text {
  font-size: 14px;
  color: #606266;
}

.ver-upload__file-list {
  margin: 10px 0;
}

.ver-upload__file-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: #f7f7f7;
  position: relative;
  transition: all 0.3s;
}

.ver-upload__file-item--uploading {
  background-color: #f0f9f6;
}

.ver-upload__file-item--success {
  background-color: #f0f9f6;
}

.ver-upload__file-item--error {
  background-color: #fef0f0;
}

.ver-upload__file-item--picture,
.ver-upload__file-item--picture-card {
  display: flex;
  flex-direction: column;
}

.ver-upload__file-item--picture {
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.ver-upload__file-item--picture-card {
  width: 148px;
  height: 148px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  overflow: hidden;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
}

.ver-upload__file-name {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ver-upload__file-icon {
  margin-right: 5px;
}

.ver-upload__file-actions {
  display: flex;
  align-items: center;
}

.ver-upload__file-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  color: #909399;
  cursor: pointer;
  transition: all 0.3s;
}

.ver-upload__file-action:hover {
  color: #42b983;
}

.ver-upload__file-action--remove:hover {
  color: #f56c6c;
}

.ver-upload__file-thumbnail {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.ver-upload__file-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ver-upload__file-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c4cc;
  height: 100%;
  width: 100%;
}

.ver-upload__file-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
}

.ver-upload__file-item--picture:hover .ver-upload__file-info,
.ver-upload__file-item--picture-card:hover .ver-upload__file-info {
  opacity: 1;
}

.ver-upload__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e6e6e6;
  overflow: hidden;
}

.ver-upload__progress-inner {
  height: 100%;
  background-color: #42b983;
  transition: width 0.3s;
}
</style>
