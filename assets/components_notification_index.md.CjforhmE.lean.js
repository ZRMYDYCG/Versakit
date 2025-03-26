import{z as a,O as s}from"./chunks/theme.4ot6jhsU.js";import{d as V,c as p,o as f,G as o,k as l,w as r,a as i,_ as h,B as v,as as W,j as n}from"./chunks/framework.DSK5FMsA.js";import{Q as b}from"./chunks/index.CWxr9eMF.js";const B=`<template>
  <div>
    <VerButton @click="topleft">top-left</VerButton>
    <VerButton @click="topright">top-right</VerButton>
    <VerButton @click="bottomleft">bottom-left</VerButton>
    <VerButton @click="bottomright">bottom-right</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const topleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'top-left',
    icon: 'ep:info-filled',
  })
}

const topright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const bottomleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-left',
    icon: 'ep:info-filled',
  })
}

const bottomright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-right',
    icon: 'ep:info-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,_=V({__name:"position",setup(m){const d=()=>{s({title:"title",content:"content",position:"top-left",icon:"ep:info-filled"})},t=()=>{s({title:"title",content:"content",icon:"ep:info-filled"})},c=()=>{s({title:"title",content:"content",position:"bottom-left",icon:"ep:info-filled"})},u=()=>{s({title:"title",content:"content",position:"bottom-right",icon:"ep:info-filled"})};return(y,e)=>(f(),p("div",null,[o(l(a),{onClick:d},{default:r(()=>e[0]||(e[0]=[i("top-left")])),_:1}),o(l(a),{onClick:t},{default:r(()=>e[1]||(e[1]=[i("top-right")])),_:1}),o(l(a),{onClick:c},{default:r(()=>e[2]||(e[2]=[i("bottom-left")])),_:1}),o(l(a),{onClick:u},{default:r(()=>e[3]||(e[3]=[i("bottom-right")])),_:1})]))}}),C=h(_,[["__scopeId","data-v-6f6848f7"]]),k=`<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    plain: true,
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warn',
    plain: true,
    icon: 'ep:warning-filled',
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    plain: true,
    icon: 'ep:circle-close-filled',
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,N=V({__name:"plain",setup(m){const d=()=>{s({title:"title",type:"info",plain:!0,content:"content",icon:"ep:info-filled"})},t=()=>{s({title:"title",type:"success",plain:!0,icon:"ep:success-filled",content:"content"})},c=()=>{s({title:"title",type:"warn",plain:!0,icon:"ep:warning-filled",content:"content"})},u=()=>{s({title:"title",type:"error",plain:!0,icon:"ep:circle-close-filled",content:"content"})};return(y,e)=>(f(),p("div",null,[o(l(a),{type:"info",onClick:d},{default:r(()=>e[0]||(e[0]=[i("info")])),_:1}),o(l(a),{type:"success",onClick:t},{default:r(()=>e[1]||(e[1]=[i("success")])),_:1}),o(l(a),{type:"warn",onClick:c},{default:r(()=>e[2]||(e[2]=[i("warning")])),_:1}),o(l(a),{type:"error",onClick:u},{default:r(()=>e[3]||(e[3]=[i("error")])),_:1})]))}}),g=h(N,[["__scopeId","data-v-55ad801f"]]),w=`<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    content: 'content',
    icon: 'ep:success-filled',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warn',
    content: 'content',
    icon: 'ep:warning-filled',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    content: 'content',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,T=V({__name:"type",setup(m){const d=()=>{s({title:"title",type:"info",content:"content",icon:"ep:info-filled"})},t=()=>{s({title:"title",type:"success",content:"content",icon:"ep:success-filled"})},c=()=>{s({title:"title",type:"warn",content:"content",icon:"ep:warning-filled"})},u=()=>{s({title:"title",type:"error",content:"content",icon:"ep:circle-close-filled"})};return(y,e)=>(f(),p("div",null,[o(l(a),{type:"info",onClick:d},{default:r(()=>e[0]||(e[0]=[i("info")])),_:1}),o(l(a),{type:"success",onClick:t},{default:r(()=>e[1]||(e[1]=[i("success")])),_:1}),o(l(a),{type:"warn",onClick:c},{default:r(()=>e[2]||(e[2]=[i("warning")])),_:1}),o(l(a),{type:"error",onClick:u},{default:r(()=>e[3]||(e[3]=[i("error")])),_:1})]))}}),Z=h(T,[["__scopeId","data-v-ca9417d9"]]),A=`<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const openNotification = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    icon: 'ep:info-filled',
  })
}
<\/script>
`,x=V({__name:"base",setup(m){const d=()=>{s({title:"title",content:"content",icon:"ep:info-filled"})};return(t,c)=>(f(),p("div",null,[o(l(a),{onClick:d},{default:r(()=>c[0]||(c[0]=[i("openNotification")])),_:1})]))}}),D={tabindex:"0"},G=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),z={name:"components/notification/index.md"},I=Object.assign(z,{setup(m){return(d,t)=>{const c=v("ClientOnly"),u=v("Tool");return f(),p("div",null,[t[4]||(t[4]=W("",4)),o(c,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(A)},{vue:r(()=>[o(x)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=n("h2",{id:"不同类型",tabindex:"-1"},[i("不同类型 "),n("a",{class:"header-anchor",href:"#不同类型","aria-label":'Permalink to "不同类型"'},"​")],-1)),t[6]||(t[6]=n("p",null,[i("我们提供了四种不同类型的提醒框："),n("code",null,"success"),i("、"),n("code",null,"warning"),i("、"),n("code",null,"info"),i(" 和 "),n("code",null,"error"),i("。")],-1)),o(c,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(w)},{vue:r(()=>[o(Z)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=n("h2",{id:"不同风格",tabindex:"-1"},[i("不同风格 "),n("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),t[8]||(t[8]=n("p",null,[i("通知色彩更加鲜明，支持 "),n("code",null,"success"),i("、"),n("code",null,"warning"),i("、"),n("code",null,"info"),i(" 和 "),n("code",null,"error"),i(" 四种类型。")],-1)),o(c,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(k)},{vue:r(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=W("",3)),o(c,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(B)},{vue:r(()=>[o(C)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=W("",4)),n("table",D,[t[3]||(t[3]=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"描述"),n("th",null,"类型")])],-1)),n("tbody",null,[n("tr",null,[t[1]||(t[1]=n("td",null,[n("code",null,"destroy")],-1)),t[2]||(t[2]=n("td",null,"notification 的销毁函数",-1)),n("td",null,[t[0]||(t[0]=n("code",null,"function",-1)),o(u,{value:"() => void"})])])])])])}}});export{G as __pageData,I as default};
