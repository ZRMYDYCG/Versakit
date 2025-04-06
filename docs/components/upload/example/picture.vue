<template>
  <div class="picture-upload-demo">
    <ver-upload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      list-type="picture-card"
      accept="image/*"
      :limit="5"
      @success="handleSuccess"
      @exceed="handleExceed"
    >
      <div class="upload-picture-add">
        <ver-icon name="ep:plus" size="24px" />
        <span>上传图片</span>
      </div>
    </ver-upload>

    <!-- 图片预览区域 -->
    <div class="image-preview-gallery" v-if="fileList.length > 0">
      <h3>已上传图片预览</h3>
      <div class="image-thumbnails">
        <div
          v-for="file in fileList"
          :key="file.uid"
          class="image-thumbnail"
          @click="handlePreview(file)"
        >
          <img v-if="file.url" :src="file.url" :alt="file.name" />
          <div v-else class="image-loading">
            <ver-icon name="loading" size="20px" />
          </div>
        </div>
      </div>
    </div>

    <div class="image-preview" v-if="previewUrl">
      <div class="image-preview-mask" @click="closePreview"></div>
      <div class="image-preview-content">
        <img :src="previewUrl" alt="预览图片" />
        <div class="image-preview-close" @click="closePreview">
          <ver-icon name="close" size="24px" />
        </div>
      </div>
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
const previewUrl = ref('')

// 模拟图片上传成功后设置URL
const handleSuccess = (response: any, file: UploadFile) => {
  // 实际情况中，应该使用服务器返回的URL
  // 这里使用本地URL作为示例
  if (file.raw) {
    const reader = new FileReader()
    reader.onload = (e) => {
      file.url = e.target?.result as string
    }
    reader.readAsDataURL(file.raw)
  }
}

const handleExceed = () => {
  alert('最多只能上传5张图片')
}

// 模拟点击缩略图查看大图
const handlePreview = (file: UploadFile) => {
  if (file.url) {
    previewUrl.value = file.url
  }
}

const closePreview = () => {
  previewUrl.value = ''
}
</script>

<style scoped>
.picture-upload-demo {
  width: 100%;
  position: relative;
}

.upload-picture-add {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8c939d;
  height: 100%;
}

.upload-picture-add span {
  margin-top: 8px;
  font-size: 12px;
}

.image-preview-gallery {
  margin-top: 20px;
}

.image-preview-gallery h3 {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
}

.image-thumbnails {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-thumbnail {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #ebeef5;
  transition: all 0.3s;
}

.image-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.image-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.image-preview-content {
  position: relative;
  z-index: 1;
  max-width: 90%;
  max-height: 90%;
}

.image-preview-content img {
  max-width: 100%;
  max-height: 90vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.image-preview-close {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
