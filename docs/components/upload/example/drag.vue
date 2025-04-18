<template>
  <div class="upload-drag-demo">
    <VKUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      drag
      multiple
      @change="handleChange"
    >
      <div class="upload-drag-content">
        <div class="upload-drag-text">
          <p>
            拖拽文件到此处或
            <span class="upload-link">点击上传</span>
          </p>
          <p class="upload-hint">支持单个或批量上传文件</p>
        </div>
      </div>
    </VKUpload>

    <div class="upload-list" v-if="fileList.length > 0">
      <h3>已上传文件列表:</h3>
      <ul>
        <li v-for="file in fileList" :key="file.uid">
          {{ file.name }} - {{ formatFileSize(file.size) }}
          <span class="file-status" :class="file.status">
            {{ getStatusText(file.status) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKUpload } from '@versakit/ui'

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

const handleChange = (file: UploadFile) => {
  console.log('文件状态变更:', file.name, file.status)
}

const formatFileSize = (size: number): string => {
  if (size < 1024) {
    return size + ' B'
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  } else {
    return (size / (1024 * 1024)).toFixed(2) + ' MB'
  }
}

const getStatusText = (status: string): string => {
  const statusMap: Record<string, string> = {
    ready: '等待上传',
    uploading: '上传中',
    success: '已上传',
    error: '上传失败',
  }
  return statusMap[status] || status
}
</script>

<style scoped>
.upload-drag-demo {
  width: 100%;
}

.upload-drag-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #606266;
}

.upload-drag-text {
  margin-top: 16px;
  text-align: center;
}

.upload-link {
  color: #42b983;
  font-weight: 500;
}

.upload-hint {
  font-size: 12px;
  color: #909399;
  margin-top: 8px;
}

.upload-list {
  margin-top: 20px;
  padding: 15px;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.upload-list h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.upload-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.upload-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ebeef5;
}

.file-status {
  float: right;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: #e8e8e8;
}

.file-status.ready {
  background-color: #e6f7ff;
  color: #1890ff;
}

.file-status.uploading {
  background-color: #e6fffb;
  color: #13c2c2;
}

.file-status.success {
  background-color: #f6ffed;
  color: #52c41a;
}

.file-status.error {
  background-color: #fff1f0;
  color: #f5222d;
}
</style>
