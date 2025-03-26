import{a as g,T as z,n as o}from"./chunks/theme.4ot6jhsU.js";import{d as x,p as v,q as V,c as h,o as c,j as e,G as a,b as A,e as S,k as n,_,F as y,w as u,a as s,B as w,as as C}from"./chunks/framework.DSK5FMsA.js";import{Q as f}from"./chunks/index.CWxr9eMF.js";const W=`<script setup lang="ts">
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
`,k={class:"container"},Z={class:"demo-section"},B={class:"demo-controls"},q={class:"demo-row"},X=x({__name:"size",setup(b){const m=[{label:"小型",value:"small"},{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"自定义",value:"custom"}],t=v("default"),d=v(!1),l=v(60);return V(t,i=>{d.value=i==="custom",i!=="custom"&&(l.value=typeof i=="number"?i:60)}),(i,r)=>(c(),h("div",k,[e("section",Z,[r[2]||(r[2]=e("h2",null,"尺寸演示",-1)),e("div",B,[a(n(g),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=p=>t.value=p),options:m},null,8,["modelValue"]),d.value?(c(),A(n(z),{key:0,modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=p=>l.value=p),min:20,max:120,step:5,class:"custom-slider"},null,8,["modelValue"])):S("",!0)]),e("div",q,[a(n(o),{size:d.value?l.value:t.value,text:d.value?`${l.value}px`:t.value.toString()},null,8,["size","text"])])])]))}}),P=_(X,[["__scopeId","data-v-50b5e01c"]]),T=`<template>
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
`,Y={class:"demo-section"},D={class:"demo-row"},G={class:"demo-section"},N={class:"demo-row"},E=x({__name:"base",setup(b){return(m,t)=>(c(),h(y,null,[e("section",Y,[e("div",D,[a(n(o),{src:"https://randomuser.me/api/portraits/men/1.jpg"}),a(n(o),{text:"User"}),a(n(o),{backgroundColor:"#f56a00"},{default:u(()=>t[0]||(t[0]=[s("U")])),_:1})])]),e("section",G,[e("div",N,[a(n(o),{shape:"circle",text:"C"}),a(n(o),{shape:"square",text:"S"})])])],64))}}),I=_(E,[["__scopeId","data-v-4f7458d6"]]),$=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),U={name:"components/avatar/index.md"},O=Object.assign(U,{setup(b){return(m,t)=>{const d=w("ClientOnly");return c(),h("div",null,[t[0]||(t[0]=e("h1",{id:"avatar-头像",tabindex:"-1"},[s("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),t[1]||(t[1]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[3]||(t[3]=e("p",null,[s(" 使用 "),e("code",null,"shape"),s(" 和 "),e("code",null,"size"),s(" 属性来设置 Avatar 的形状和大小。 ")],-1)),a(d,null,{default:u(()=>[a(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(T)},{vue:u(()=>[a(I)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=e("h2",{id:"尺寸",tabindex:"-1"},[s("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),t[5]||(t[5]=e("p",null,[s("使用 "),e("code",null,"size"),s(" 属性来设置 Avatar 的尺寸。")],-1)),a(d,null,{default:u(()=>[a(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(W)},{vue:u(()=>[a(P)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=C("",6))])}}});export{$ as __pageData,O as default};
