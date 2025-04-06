<template>
  <div class="upload-demo">
    <ver-upload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      @change="handleChange"
      @success="handleSuccess"
      @error="handleError"
    >
      <ver-button type="primary">点击上传</ver-button>
      <template #tip>
        <div class="upload-tip">
          支持上传任意类型文件，单个文件大小不超过10MB
        </div>
      </template>
    </ver-upload>

    <div class="upload-status" v-if="uploadStatus">
      <div>上传状态: {{ uploadStatus }}</div>
      <div v-if="responseMessage">响应消息: {{ responseMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerUpload } from '@versakit/ui'

interface UploadFile {
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

const fileList = ref<UploadFile[]>([])
const uploadStatus = ref('')
const responseMessage = ref('')

const handleChange = (file: UploadFile) => {
  uploadStatus.value = `文件 "${file.name}" 状态变更为: ${file.status}`
}

const handleSuccess = (response: any, file: UploadFile) => {
  uploadStatus.value = `文件 "${file.name}" 上传成功!`
  responseMessage.value = JSON.stringify(response)
}

const handleError = (error: any, file: UploadFile) => {
  uploadStatus.value = `文件 "${file.name}" 上传失败!`
  responseMessage.value = error.message || '未知错误'
}
</script>

<style scoped>
.upload-demo {
  margin: 20px 0;
}

.upload-tip {
  font-size: 12px;
  color: #909399;
  margin-top: 8px;
}

.upload-status {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #606266;
}
</style>
