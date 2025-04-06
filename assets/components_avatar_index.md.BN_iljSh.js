import{k as g,N as z,a as o}from"./chunks/theme.uDsgHOqn.js";import{d as x,p as v,q as V,c as h,o as c,j as e,G as a,b as A,e as S,k as n,_,F as w,w as u,a as s,B as y,aw as C}from"./chunks/framework.BrE8sLAv.js";import{Q as f}from"./chunks/index.CmMjEtxm.js";const W=`<script setup lang="ts">
import { ref, watch } from 'vue'
import { VerAvatar, VerSegmented, VerSlider } from '@versakit/ui'

const sizeOptions = [
  { label: '小型', value: 'small' },
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '自定义', value: 'custom' },
]
const selectedSize = ref<string | number>('default')
const showSlider = ref(false)
const customSize = ref(60)

watch(selectedSize, (newVal) => {
  showSlider.value = newVal === 'custom'
  if (newVal !== 'custom') {
    customSize.value = typeof newVal === 'number' ? newVal : 60
  }
})
<\/script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>尺寸演示</h2>
      <div class="demo-controls">
        <VerSegmented v-model="selectedSize" :options="sizeOptions" />

        <VerSlider
          v-if="showSlider"
          v-model="customSize"
          :min="20"
          :max="120"
          :step="5"
          class="custom-slider"
        />
      </div>
      <div class="demo-row">
        <VerAvatar
          :size="showSlider ? customSize : selectedSize"
          :text="showSlider ? \`\${customSize}px\` : selectedSize.toString()"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 新增滑块样式 */
.custom-slider {
  margin-top: 20px;
  padding: 0 15px;
  max-width: 300px;
}

.demo-controls {
  /* 保持原有样式 */
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,k={class:"container"},Z={class:"demo-section"},B={class:"demo-controls"},q={class:"demo-row"},X=x({__name:"size",setup(b){const m=[{label:"小型",value:"small"},{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"自定义",value:"custom"}],t=v("default"),d=v(!1),l=v(60);return V(t,i=>{d.value=i==="custom",i!=="custom"&&(l.value=typeof i=="number"?i:60)}),(i,r)=>(c(),h("div",k,[e("section",Z,[r[2]||(r[2]=e("h2",null,"尺寸演示",-1)),e("div",B,[a(n(g),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),options:m},null,8,["modelValue"]),d.value?(c(),A(n(z),{key:0,modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=p=>l.value=p),min:20,max:120,step:5,class:"custom-slider"},null,8,["modelValue"])):S("",!0)]),e("div",q,[a(n(o),{size:d.value?l.value:t.value,text:d.value?`${l.value}px`:t.value.toString()},null,8,["size","text"])])])]))}}),P=_(X,[["__scopeId","data-v-50b5e01c"]]),Y=`<template>
  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar src="https://randomuser.me/api/portraits/men/1.jpg" />
      <VerAvatar text="User" />
      <VerAvatar backgroundColor="#f56a00">U</VerAvatar>
    </div>
  </section>

  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar shape="circle" text="C" />
      <VerAvatar shape="square" text="S" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VerAvatar } from '@versakit/ui'
<\/script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
`,N={class:"demo-section"},T={class:"demo-row"},D={class:"demo-section"},G={class:"demo-row"},E=x({__name:"base",setup(b){return(m,t)=>(c(),h(w,null,[e("section",N,[e("div",T,[a(n(o),{src:"https://randomuser.me/api/portraits/men/1.jpg"}),a(n(o),{text:"User"}),a(n(o),{backgroundColor:"#f56a00"},{default:u(()=>t[0]||(t[0]=[s("U")])),_:1})])]),e("section",D,[e("div",G,[a(n(o),{shape:"circle",text:"C"}),a(n(o),{shape:"square",text:"S"})])])],64))}}),I=_(E,[["__scopeId","data-v-4f7458d6"]]),$=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),U={name:"components/avatar/index.md"},O=Object.assign(U,{setup(b){return(m,t)=>{const d=y("ClientOnly");return c(),h("div",null,[t[0]||(t[0]=e("h1",{id:"avatar-头像",tabindex:"-1"},[s("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),t[1]||(t[1]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[3]||(t[3]=e("p",null,[s(" 使用 "),e("code",null,"shape"),s(" 和 "),e("code",null,"size"),s(" 属性来设置 Avatar 的形状和大小。 ")],-1)),a(d,null,{default:u(()=>[a(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(Y)},{vue:u(()=>[a(I)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=e("h2",{id:"尺寸",tabindex:"-1"},[s("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),t[5]||(t[5]=e("p",null,[s("使用 "),e("code",null,"size"),s(" 属性来设置 Avatar 的尺寸。")],-1)),a(d,null,{default:u(()=>[a(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(W)},{vue:u(()=>[a(P)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=C('<h2 id="头像组" tabindex="-1">头像组 <a class="header-anchor" href="#头像组" aria-label="Permalink to &quot;头像组&quot;">​</a></h2><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="avatar-props" tabindex="-1">Avatar Props <a class="header-anchor" href="#avatar-props" aria-label="Permalink to &quot;Avatar Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>string | number</td><td>&#39;default&#39;</td><td>尺寸，支持预设值（small/default/large）或具体像素值</td></tr><tr><td>shape</td><td>string</td><td>&#39;circle&#39;</td><td>形状类型，可选 circle/square</td></tr><tr><td>text</td><td>string</td><td>-</td><td>显示的文字内容</td></tr><tr><td>backgroundColor</td><td>string</td><td>&#39;#1890ff&#39;</td><td>背景颜色</td></tr><tr><td>color</td><td>string</td><td>&#39;#ffffff&#39;</td><td>文字颜色</td></tr><tr><td>src</td><td>string</td><td>-</td><td>头像图片地址</td></tr><tr><td>alt</td><td>string</td><td>&#39;avatar&#39;</td><td>图片加载失败时的替代文本</td></tr></tbody></table><h3 id="avatargroup-props" tabindex="-1">AvatarGroup Props <a class="header-anchor" href="#avatargroup-props" aria-label="Permalink to &quot;AvatarGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>maxCount</td><td>number</td><td>-</td><td>最大显示的头像数量</td></tr><tr><td>size</td><td>string</td><td>&#39;default&#39;</td><td>统一设置子项头像尺寸</td></tr><tr><td>maxPopoverPlacement</td><td>string</td><td>&#39;top&#39;</td><td>折叠菜单的弹出位置</td></tr></tbody></table>',6))])}}});export{$ as __pageData,O as default};
