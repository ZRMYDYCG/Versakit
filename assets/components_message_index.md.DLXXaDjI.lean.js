import{x as a,G as u}from"./chunks/theme.uDsgHOqn.js";import{d as y,c,o as f,G as t,k as o,w as r,a as s,_ as v,B as b,j as e}from"./chunks/framework.BrE8sLAv.js";import{Q as g}from"./chunks/index.CmMjEtxm.js";const V=`<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const success = () => {
  VerMessage({
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: '这是一条消息',
  })
}
const warning = () => {
  VerMessage({
    type: 'warn',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,k=y({__name:"plain",setup(m){const d=()=>{u({type:"success",plain:!0,icon:"ep:success-filled",content:"这是一条消息"})},n=()=>{u({type:"warn",plain:!0,content:"这是一条消息",icon:"ep:warning-filled"})},i=()=>{u({type:"info",plain:!0,content:"这是一条消息",icon:"ep:info-filled"})},p=()=>{u({type:"error",plain:!0,content:"这是一条消息",icon:"ep:circle-close-filled"})};return(B,l)=>(f(),c("div",null,[t(o(a),{type:"success",onClick:d},{default:r(()=>l[0]||(l[0]=[s("success")])),_:1}),t(o(a),{type:"warn",onClick:n},{default:r(()=>l[1]||(l[1]=[s("warning")])),_:1}),t(o(a),{type:"info",onClick:i},{default:r(()=>l[2]||(l[2]=[s("info")])),_:1}),t(o(a),{type:"error",onClick:p},{default:r(()=>l[3]||(l[3]=[s("error")])),_:1})]))}}),C=v(k,[["__scopeId","data-v-4cb83cfc"]]),W=`<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const success = () => {
  VerMessage({
    type: 'success',
    content: '这是一条消息',
    icon: 'ep:success-filled',
  })
}
const warning = () => {
  VerMessage({
    type: 'warn',
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,w=y({__name:"status",setup(m){const d=()=>{u({type:"success",content:"这是一条消息",icon:"ep:success-filled"})},n=()=>{u({type:"warn",content:"这是一条消息",icon:"ep:warning-filled"})},i=()=>{u({type:"info",content:"这是一条消息",icon:"ep:info-filled"})},p=()=>{u({type:"error",content:"这是一条消息",icon:"ep:circle-close-filled"})};return(B,l)=>(f(),c("div",null,[t(o(a),{type:"success",onClick:d},{default:r(()=>l[0]||(l[0]=[s("success")])),_:1}),t(o(a),{type:"warn",onClick:n},{default:r(()=>l[1]||(l[1]=[s("warning")])),_:1}),t(o(a),{type:"info",onClick:i},{default:r(()=>l[2]||(l[2]=[s("info")])),_:1}),t(o(a),{type:"error",onClick:p},{default:r(()=>l[3]||(l[3]=[s("error")])),_:1})]))}}),x=v(w,[["__scopeId","data-v-d678ddf2"]]),M=`<template>
  <div>
    <VerButton @click="openMessage">点击</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const openMessage = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
    duration: 2000,
    icon: 'ep:info-filled',
  })
}
<\/script>
`,X=y({__name:"base",setup(m){const d=()=>{u({type:"info",content:"这是一条消息",duration:2e3,icon:"ep:info-filled"})};return(n,i)=>(f(),c("div",null,[t(o(a),{onClick:d},{default:r(()=>i[0]||(i[0]=[s("点击")])),_:1})]))}}),Z={tabindex:"0"},z={tabindex:"0"},T=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}'),D={name:"components/message/index.md"},h=Object.assign(D,{setup(m){return(d,n)=>{const i=b("ClientOnly"),p=b("Tool");return f(),c("div",null,[n[11]||(n[11]=e("h1",{id:"message-消息提示",tabindex:"-1"},[s("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),n[12]||(n[12]=e("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),n[13]||(n[13]=e("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),n[14]||(n[14]=e("p",null,"从顶部出现，3 秒后自动消失。",-1)),t(i,null,{default:r(()=>[t(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(M)},{vue:r(()=>[t(X)]),_:1},8,["vueCode"])]),_:1}),n[15]||(n[15]=e("h2",{id:"不同状态",tabindex:"-1"},[s("不同状态 "),e("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1)),n[16]||(n[16]=e("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),t(i,null,{default:r(()=>[t(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(W)},{vue:r(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),n[17]||(n[17]=e("h2",{id:"不同风格",tabindex:"-1"},[s("不同风格 "),e("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),n[18]||(n[18]=e("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),t(i,null,{default:r(()=>[t(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(V)},{vue:r(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),n[19]||(n[19]=e("h2",{id:"message-api",tabindex:"-1"},[s("Message API "),e("a",{class:"header-anchor",href:"#message-api","aria-label":'Permalink to "Message API"'},"​")],-1)),n[20]||(n[20]=e("h3",{id:"message-属性",tabindex:"-1"},[s("Message 属性 "),e("a",{class:"header-anchor",href:"#message-属性","aria-label":'Permalink to "Message 属性"'},"​")],-1)),e("table",Z,[n[6]||(n[6]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[n[1]||(n[1]=e("td",null,[e("code",null,"type")],-1)),n[2]||(n[2]=e("td",null,"绑定值",-1)),e("td",null,[n[0]||(n[0]=e("code",null,"enum",-1)),t(p,{value:"success,warning,info,error"})]),n[3]||(n[3]=e("td",null,[e("code",null,"info")],-1))]),n[4]||(n[4]=e("tr",null,[e("td",null,[e("code",null,"content")]),e("td",null,"消息的内容"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),n[5]||(n[5]=e("tr",null,[e("td",null,[e("code",null,"duration")]),e("td",null,"消息的持续时间"),e("td",null,[e("code",null,"number")]),e("td",null,[e("code",null,"3000")])],-1))])]),n[21]||(n[21]=e("h3",{id:"message-方法",tabindex:"-1"},[s("Message 方法 "),e("a",{class:"header-anchor",href:"#message-方法","aria-label":'Permalink to "Message 方法"'},"​")],-1)),e("table",z,[n[10]||(n[10]=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"描述"),e("th",null,"类型")])],-1)),e("tbody",null,[e("tr",null,[n[8]||(n[8]=e("td",null,[e("code",null,"destroy")],-1)),n[9]||(n[9]=e("td",null,"message 的销毁函数",-1)),e("td",null,[n[7]||(n[7]=e("code",null,"function",-1)),t(p,{value:"() => void"})])])])])])}}});export{T as __pageData,h as default};
