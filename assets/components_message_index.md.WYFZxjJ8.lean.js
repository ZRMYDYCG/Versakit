import{d as V,c as f,o as m,G as t,k as l,w as r,a as o,_ as C,p as w,B as k,j as e,a5 as y,a6 as b}from"./chunks/framework.DgG_RYdR.js";import{g as a,I as u}from"./chunks/theme.BN5ATFS7.js";import{d as v,f as B}from"./chunks/index.CrgVH6Ra.js";const W=`<template>
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
`,x=V({__name:"plain",setup(g){const i=()=>{u({type:"success",plain:!0,icon:"ep:success-filled",content:"这是一条消息"})},p=()=>{u({type:"warn",plain:!0,content:"这是一条消息",icon:"ep:warning-filled"})},n=()=>{u({type:"info",plain:!0,content:"这是一条消息",icon:"ep:info-filled"})},d=()=>{u({type:"error",plain:!0,content:"这是一条消息",icon:"ep:circle-close-filled"})};return(c,s)=>(m(),f("div",null,[t(l(a),{type:"success",onClick:i},{default:r(()=>s[0]||(s[0]=[o("success")])),_:1}),t(l(a),{type:"warn",onClick:p},{default:r(()=>s[1]||(s[1]=[o("warning")])),_:1}),t(l(a),{type:"info",onClick:n},{default:r(()=>s[2]||(s[2]=[o("info")])),_:1}),t(l(a),{type:"error",onClick:d},{default:r(()=>s[3]||(s[3]=[o("error")])),_:1})]))}}),M=C(x,[["__scopeId","data-v-4cb83cfc"]]),X=`<template>
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
`,Z=V({__name:"status",setup(g){const i=()=>{u({type:"success",content:"这是一条消息",icon:"ep:success-filled"})},p=()=>{u({type:"warn",content:"这是一条消息",icon:"ep:warning-filled"})},n=()=>{u({type:"info",content:"这是一条消息",icon:"ep:info-filled"})},d=()=>{u({type:"error",content:"这是一条消息",icon:"ep:circle-close-filled"})};return(c,s)=>(m(),f("div",null,[t(l(a),{type:"success",onClick:i},{default:r(()=>s[0]||(s[0]=[o("success")])),_:1}),t(l(a),{type:"warn",onClick:p},{default:r(()=>s[1]||(s[1]=[o("warning")])),_:1}),t(l(a),{type:"info",onClick:n},{default:r(()=>s[2]||(s[2]=[o("info")])),_:1}),t(l(a),{type:"error",onClick:d},{default:r(()=>s[3]||(s[3]=[o("error")])),_:1})]))}}),z=C(Z,[["__scopeId","data-v-d678ddf2"]]),D=`<template>
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
`,A=V({__name:"base",setup(g){const i=()=>{u({type:"info",content:"这是一条消息",duration:2e3,icon:"ep:info-filled"})};return(p,n)=>(m(),f("div",null,[t(l(a),{onClick:i},{default:r(()=>n[0]||(n[0]=[o("点击")])),_:1})]))}}),N={tabindex:"0"},T={tabindex:"0"},S=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}'),G={name:"components/message/index.md"},I=Object.assign(G,{setup(g){const i=w(!0);return(p,n)=>{const d=k("ClientOnly"),c=k("Tool");return m(),f("div",null,[n[14]||(n[14]=e("h1",{id:"message-消息提示",tabindex:"-1"},[o("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),n[15]||(n[15]=e("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),n[16]||(n[16]=e("h2",{id:"基本用法",tabindex:"-1"},[o("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),n[17]||(n[17]=e("p",null,"从顶部出现，3 秒后自动消失。",-1)),y(t(l(v),null,null,512),[[b,i.value]]),t(d,null,{default:r(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),vueCode:l(D)},{vue:r(()=>[t(A)]),_:1},8,["vueCode"])]),_:1}),n[18]||(n[18]=e("h2",{id:"不同状态",tabindex:"-1"},[o("不同状态 "),e("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1)),n[19]||(n[19]=e("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),y(t(l(v),null,null,512),[[b,i.value]]),t(d,null,{default:r(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{i.value=!1}),vueCode:l(X)},{vue:r(()=>[t(z)]),_:1},8,["vueCode"])]),_:1}),n[20]||(n[20]=e("h2",{id:"不同风格",tabindex:"-1"},[o("不同风格 "),e("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),n[21]||(n[21]=e("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),y(t(l(v),null,null,512),[[b,i.value]]),t(d,null,{default:r(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{i.value=!1}),vueCode:l(W)},{vue:r(()=>[t(M)]),_:1},8,["vueCode"])]),_:1}),n[22]||(n[22]=e("h2",{id:"message-api",tabindex:"-1"},[o("Message API "),e("a",{class:"header-anchor",href:"#message-api","aria-label":'Permalink to "Message API"'},"​")],-1)),n[23]||(n[23]=e("h3",{id:"message-属性",tabindex:"-1"},[o("Message 属性 "),e("a",{class:"header-anchor",href:"#message-属性","aria-label":'Permalink to "Message 属性"'},"​")],-1)),e("table",N,[n[9]||(n[9]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[n[4]||(n[4]=e("td",null,[e("code",null,"type")],-1)),n[5]||(n[5]=e("td",null,"绑定值",-1)),e("td",null,[n[3]||(n[3]=e("code",null,"enum",-1)),t(c,{value:"success,warning,info,error"})]),n[6]||(n[6]=e("td",null,[e("code",null,"info")],-1))]),n[7]||(n[7]=e("tr",null,[e("td",null,[e("code",null,"content")]),e("td",null,"消息的内容"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),n[8]||(n[8]=e("tr",null,[e("td",null,[e("code",null,"duration")]),e("td",null,"消息的持续时间"),e("td",null,[e("code",null,"number")]),e("td",null,[e("code",null,"3000")])],-1))])]),n[24]||(n[24]=e("h3",{id:"message-方法",tabindex:"-1"},[o("Message 方法 "),e("a",{class:"header-anchor",href:"#message-方法","aria-label":'Permalink to "Message 方法"'},"​")],-1)),e("table",T,[n[13]||(n[13]=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"描述"),e("th",null,"类型")])],-1)),e("tbody",null,[e("tr",null,[n[11]||(n[11]=e("td",null,[e("code",null,"destroy")],-1)),n[12]||(n[12]=e("td",null,"message 的销毁函数",-1)),e("td",null,[n[10]||(n[10]=e("code",null,"function",-1)),t(c,{value:"() => void"})])])])])])}}});export{S as __pageData,I as default};
