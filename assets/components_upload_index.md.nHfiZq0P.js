import{d as A,p as v,B as y,c as l,o as d,G as s,e as b,k as u,w as h,j as e,F as L,C as z,_ as D,a as f,t as k,n as W,a5 as w,aw as E,a6 as _}from"./chunks/framework.B3Jz-8p0.js";import{ag as U}from"./chunks/theme.DKFx6c4r.js";import{d as C,f as B}from"./chunks/index.BbNYUtVF.js";const S=`<template>
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
<\/script>

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
`,Z={class:"picture-upload-demo"},X={class:"upload-picture-add"},V={key:0,class:"image-preview-gallery"},T={class:"image-thumbnails"},q=["onClick"],M=["src","alt"],P={key:1,class:"image-loading"},N={key:1,class:"image-preview"},Y={class:"image-preview-content"},$=["src"],J=A({__name:"picture",setup(F){const a=v([]),o=v(""),t=(r,n)=>{if(n.raw){const m=new FileReader;m.onload=c=>{var x;n.url=(x=c.target)==null?void 0:x.result},m.readAsDataURL(n.raw)}},g=()=>{alert("最多只能上传5张图片")},i=r=>{r.url&&(o.value=r.url)},p=()=>{o.value=""};return(r,n)=>{const m=y("ver-icon");return d(),l("div",Z,[s(u(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":n[0]||(n[0]=c=>a.value=c),"list-type":"picture-card",accept:"image/*",limit:5,onSuccess:t,onExceed:g},{default:h(()=>[e("div",X,[s(m,{name:"ep:plus",size:"24px"}),n[1]||(n[1]=e("span",null,"上传图片",-1))])]),_:1},8,["fileList"]),a.value.length>0?(d(),l("div",V,[n[2]||(n[2]=e("h3",null,"已上传图片预览",-1)),e("div",T,[(d(!0),l(L,null,z(a.value,c=>(d(),l("div",{key:c.uid,class:"image-thumbnail",onClick:x=>i(c)},[c.url?(d(),l("img",{key:0,src:c.url,alt:c.name},null,8,M)):(d(),l("div",P,[s(m,{name:"loading",size:"20px"})]))],8,q))),128))])])):b("",!0),o.value?(d(),l("div",N,[e("div",{class:"image-preview-mask",onClick:p}),e("div",Y,[e("img",{src:o.value,alt:"预览图片"},null,8,$),e("div",{class:"image-preview-close",onClick:p},[s(m,{name:"close",size:"24px"})])])])):b("",!0)])}}}),G=D(J,[["__scopeId","data-v-7984fd12"]]),I=`<template>
  <div class="upload-drag-demo">
    <ver-upload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      drag
      multiple
      @change="handleChange"
    >
      <div class="upload-drag-content">
        <ver-icon name="upload" size="40px" />
        <div class="upload-drag-text">
          <p>
            拖拽文件到此处或
            <span class="upload-link">点击上传</span>
          </p>
          <p class="upload-hint">支持单个或批量上传文件</p>
        </div>
      </div>
    </ver-upload>

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
<\/script>

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
`,R={class:"upload-drag-demo"},j={class:"upload-drag-content"},H={key:0,class:"upload-list"},O=A({__name:"drag",setup(F){const a=v([]),o=i=>{console.log("文件状态变更:",i.name,i.status)},t=i=>i<1024?i+" B":i<1024*1024?(i/1024).toFixed(2)+" KB":(i/(1024*1024)).toFixed(2)+" MB",g=i=>({ready:"等待上传",uploading:"上传中",success:"已上传",error:"上传失败"})[i]||i;return(i,p)=>{const r=y("ver-icon");return d(),l("div",R,[s(u(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":p[0]||(p[0]=n=>a.value=n),drag:"",multiple:"",onChange:o},{default:h(()=>[e("div",j,[s(r,{name:"upload",size:"40px"}),p[1]||(p[1]=e("div",{class:"upload-drag-text"},[e("p",null,[f(" 拖拽文件到此处或 "),e("span",{class:"upload-link"},"点击上传")]),e("p",{class:"upload-hint"},"支持单个或批量上传文件")],-1))])]),_:1},8,["fileList"]),a.value.length>0?(d(),l("div",H,[p[2]||(p[2]=e("h3",null,"已上传文件列表:",-1)),e("ul",null,[(d(!0),l(L,null,z(a.value,n=>(d(),l("li",{key:n.uid},[f(k(n.name)+" - "+k(t(n.size))+" ",1),e("span",{class:W(["file-status",n.status])},k(g(n.status)),3)]))),128))])])):b("",!0)])}}}),Q=D(O,[["__scopeId","data-v-288f34fe"]]),K=`<template>
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
  uploadStatus.value = \`文件 "\${file.name}" 状态变更为: \${file.status}\`
}

const handleSuccess = (response: any, file: UploadFile) => {
  uploadStatus.value = \`文件 "\${file.name}" 上传成功!\`
  responseMessage.value = JSON.stringify(response)
}

const handleError = (error: any, file: UploadFile) => {
  uploadStatus.value = \`文件 "\${file.name}" 上传失败!\`
  responseMessage.value = error.message || '未知错误'
}
<\/script>

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
`,tt={class:"upload-demo"},et={key:0,class:"upload-status"},nt={key:0},st=A({__name:"base",setup(F){const a=v([]),o=v(""),t=v(""),g=r=>{o.value=`文件 "${r.name}" 状态变更为: ${r.status}`},i=(r,n)=>{o.value=`文件 "${n.name}" 上传成功!`,t.value=JSON.stringify(r)},p=(r,n)=>{o.value=`文件 "${n.name}" 上传失败!`,t.value=r.message||"未知错误"};return(r,n)=>{const m=y("ver-button");return d(),l("div",tt,[s(u(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":n[0]||(n[0]=c=>a.value=c),onChange:g,onSuccess:i,onError:p},{tip:h(()=>n[2]||(n[2]=[e("div",{class:"upload-tip"}," 支持上传任意类型文件，单个文件大小不超过10MB ",-1)])),default:h(()=>[s(m,{type:"primary"},{default:h(()=>n[1]||(n[1]=[f("点击上传")])),_:1})]),_:1},8,["fileList"]),o.value?(d(),l("div",et,[e("div",null,"上传状态: "+k(o.value),1),t.value?(d(),l("div",nt,"响应消息: "+k(t.value),1)):b("",!0)])):b("",!0)])}}}),at=D(st,[["__scopeId","data-v-4bddcc23"]]),ot=JSON.parse('{"title":"Upload 上传","description":"","frontmatter":{},"headers":[],"relativePath":"components/upload/index.md","filePath":"components/upload/index.md"}'),it={name:"components/upload/index.md"},pt=Object.assign(it,{setup(F){const a=v(!0);return(o,t)=>{const g=y("ClientOnly");return d(),l("div",null,[t[3]||(t[3]=e("h1",{id:"upload-上传",tabindex:"-1"},[f("Upload 上传 "),e("a",{class:"header-anchor",href:"#upload-上传","aria-label":'Permalink to "Upload 上传"'},"​")],-1)),t[4]||(t[4]=e("p",null,"用于文件上传的组件。",-1)),t[5]||(t[5]=e("h2",{id:"基本使用",tabindex:"-1"},[f("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),t[6]||(t[6]=e("p",null,"基础的文件上传功能，点击按钮选择文件并上传。",-1)),w(s(u(C),null,null,512),[[_,a.value]]),s(g,null,{default:h(()=>[s(u(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:u(K)},{vue:h(()=>[s(at)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"拖拽上传",tabindex:"-1"},[f("拖拽上传 "),e("a",{class:"header-anchor",href:"#拖拽上传","aria-label":'Permalink to "拖拽上传"'},"​")],-1)),t[8]||(t[8]=e("p",null,"将文件拖拽到指定区域以进行上传。",-1)),w(s(u(C),null,null,512),[[_,a.value]]),s(g,null,{default:h(()=>[s(u(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:u(I)},{vue:h(()=>[s(Q)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"图片上传",tabindex:"-1"},[f("图片上传 "),e("a",{class:"header-anchor",href:"#图片上传","aria-label":'Permalink to "图片上传"'},"​")],-1)),t[10]||(t[10]=e("p",null,"可使用照片墙样式上传多张图片，支持图片预览。",-1)),w(s(u(C),null,null,512),[[_,a.value]]),s(g,null,{default:h(()=>[s(u(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:u(S)},{vue:h(()=>[s(G)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=E(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>action</td><td>上传的URL</td><td>string</td><td>-</td></tr><tr><td>headers</td><td>上传请求头部</td><td>Record&lt;string, string&gt;</td><td>-</td></tr><tr><td>data</td><td>上传时附带的额外参数</td><td>Record&lt;string, any&gt;</td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td>boolean</td><td>false</td></tr><tr><td>name</td><td>上传的文件字段名</td><td>string</td><td>&#39;file&#39;</td></tr><tr><td>drag</td><td>是否启用拖拽上传</td><td>boolean</td><td>false</td></tr><tr><td>accept</td><td>接受上传的文件类型</td><td>string</td><td>-</td></tr><tr><td>autoUpload</td><td>是否在选取文件后立即进行上传</td><td>boolean</td><td>true</td></tr><tr><td>limit</td><td>最大允许上传文件数量</td><td>number</td><td>0 (无限制)</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>withCredentials</td><td>支持发送cookie凭证信息</td><td>boolean</td><td>false</td></tr><tr><td>listType</td><td>文件列表的类型</td><td>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39;</td><td>&#39;text&#39;</td></tr><tr><td>fileList</td><td>上传的文件列表</td><td>UploadFile[]</td><td>[]</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表更新时触发</td><td>(fileList: UploadFile[])</td></tr><tr><td>change</td><td>文件状态改变时触发</td><td>(file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>success</td><td>文件上传成功时触发</td><td>(response: any, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>error</td><td>文件上传失败时触发</td><td>(error: any, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>progress</td><td>文件上传进度变化时触发</td><td>(evt: {percent: number}, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>exceed</td><td>文件超出个数限制时触发</td><td>(files: File[], fileList: UploadFile[])</td></tr><tr><td>remove</td><td>文件被移除时触发</td><td>(file: UploadFile, fileList: UploadFile[])</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发文件选择框的内容</td></tr><tr><td>drag</td><td>拖拽区域的内容</td></tr><tr><td>tip</td><td>提示说明文字</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>submit</td><td>手动上传文件列表中状态为ready的文件</td><td>-</td></tr></tbody></table><h3 id="uploadfile-类型" tabindex="-1">UploadFile 类型 <a class="header-anchor" href="#uploadfile-类型" aria-label="Permalink to &quot;UploadFile 类型&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UploadFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件唯一标识</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件名</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ready&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uploading&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;success&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;error&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件状态</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件大小</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	percentage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传进度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件URL（图片预览时使用）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	raw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 原始文件对象</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传成功后的响应数据</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传失败的错误信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11))])}}});export{ot as __pageData,pt as default};
