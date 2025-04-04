import{d as B,c as p,o as f,G as n,k as i,w as r,a as l,_,p as g,B as C,at as h,a5 as v,j as e,a6 as V}from"./chunks/framework.DgG_RYdR.js";import{g as c,w as s}from"./chunks/theme.BN5ATFS7.js";import{d as W,f as y}from"./chunks/index.CrgVH6Ra.js";const k=`<template>
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
`,N=B({__name:"position",setup(m){const a=()=>{s({title:"title",content:"content",position:"top-left",icon:"ep:info-filled"})},u=()=>{s({title:"title",content:"content",icon:"ep:info-filled"})},t=()=>{s({title:"title",content:"content",position:"bottom-left",icon:"ep:info-filled"})},d=()=>{s({title:"title",content:"content",position:"bottom-right",icon:"ep:info-filled"})};return(b,o)=>(f(),p("div",null,[n(i(c),{onClick:a},{default:r(()=>o[0]||(o[0]=[l("top-left")])),_:1}),n(i(c),{onClick:u},{default:r(()=>o[1]||(o[1]=[l("top-right")])),_:1}),n(i(c),{onClick:t},{default:r(()=>o[2]||(o[2]=[l("bottom-left")])),_:1}),n(i(c),{onClick:d},{default:r(()=>o[3]||(o[3]=[l("bottom-right")])),_:1})]))}}),w=_(N,[["__scopeId","data-v-6f6848f7"]]),T=`<template>
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
`,Z=B({__name:"plain",setup(m){const a=()=>{s({title:"title",type:"info",plain:!0,content:"content",icon:"ep:info-filled"})},u=()=>{s({title:"title",type:"success",plain:!0,icon:"ep:success-filled",content:"content"})},t=()=>{s({title:"title",type:"warn",plain:!0,icon:"ep:warning-filled",content:"content"})},d=()=>{s({title:"title",type:"error",plain:!0,icon:"ep:circle-close-filled",content:"content"})};return(b,o)=>(f(),p("div",null,[n(i(c),{type:"info",onClick:a},{default:r(()=>o[0]||(o[0]=[l("info")])),_:1}),n(i(c),{type:"success",onClick:u},{default:r(()=>o[1]||(o[1]=[l("success")])),_:1}),n(i(c),{type:"warn",onClick:t},{default:r(()=>o[2]||(o[2]=[l("warning")])),_:1}),n(i(c),{type:"error",onClick:d},{default:r(()=>o[3]||(o[3]=[l("error")])),_:1})]))}}),A=_(Z,[["__scopeId","data-v-55ad801f"]]),x=`<template>
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
`,D=B({__name:"type",setup(m){const a=()=>{s({title:"title",type:"info",content:"content",icon:"ep:info-filled"})},u=()=>{s({title:"title",type:"success",content:"content",icon:"ep:success-filled"})},t=()=>{s({title:"title",type:"warn",content:"content",icon:"ep:warning-filled"})},d=()=>{s({title:"title",type:"error",content:"content",icon:"ep:circle-close-filled"})};return(b,o)=>(f(),p("div",null,[n(i(c),{type:"info",onClick:a},{default:r(()=>o[0]||(o[0]=[l("info")])),_:1}),n(i(c),{type:"success",onClick:u},{default:r(()=>o[1]||(o[1]=[l("success")])),_:1}),n(i(c),{type:"warn",onClick:t},{default:r(()=>o[2]||(o[2]=[l("warning")])),_:1}),n(i(c),{type:"error",onClick:d},{default:r(()=>o[3]||(o[3]=[l("error")])),_:1})]))}}),X=_(D,[["__scopeId","data-v-ca9417d9"]]),Y=`<template>
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
`,z=B({__name:"base",setup(m){const a=()=>{s({title:"title",content:"content",icon:"ep:info-filled"})};return(u,t)=>(f(),p("div",null,[n(i(c),{onClick:a},{default:r(()=>t[0]||(t[0]=[l("openNotification")])),_:1})]))}}),q={tabindex:"0"},J=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),G={name:"components/notification/index.md"},E=Object.assign(G,{setup(m){const a=g(!0);return(u,t)=>{const d=C("ClientOnly"),b=C("Tool");return f(),p("div",null,[t[8]||(t[8]=h("",4)),v(n(i(W),null,null,512),[[V,a.value]]),n(d,null,{default:r(()=>[n(i(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:i(Y)},{vue:r(()=>[n(z)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"不同类型",tabindex:"-1"},[l("不同类型 "),e("a",{class:"header-anchor",href:"#不同类型","aria-label":'Permalink to "不同类型"'},"​")],-1)),t[10]||(t[10]=e("p",null,[l("我们提供了四种不同类型的提醒框："),e("code",null,"success"),l("、"),e("code",null,"warning"),l("、"),e("code",null,"info"),l(" 和 "),e("code",null,"error"),l("。")],-1)),v(n(i(W),null,null,512),[[V,a.value]]),n(d,null,{default:r(()=>[n(i(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:i(x)},{vue:r(()=>[n(X)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=e("h2",{id:"不同风格",tabindex:"-1"},[l("不同风格 "),e("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),t[12]||(t[12]=e("p",null,[l("通知色彩更加鲜明，支持 "),e("code",null,"success"),l("、"),e("code",null,"warning"),l("、"),e("code",null,"info"),l(" 和 "),e("code",null,"error"),l(" 四种类型。")],-1)),v(n(i(W),null,null,512),[[V,a.value]]),n(d,null,{default:r(()=>[n(i(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:i(T)},{vue:r(()=>[n(A)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=h("",3)),v(n(i(W),null,null,512),[[V,a.value]]),n(d,null,{default:r(()=>[n(i(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{a.value=!1}),vueCode:i(k)},{vue:r(()=>[n(w)]),_:1},8,["vueCode"])]),_:1}),t[14]||(t[14]=h("",4)),e("table",q,[t[7]||(t[7]=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"描述"),e("th",null,"类型")])],-1)),e("tbody",null,[e("tr",null,[t[5]||(t[5]=e("td",null,[e("code",null,"destroy")],-1)),t[6]||(t[6]=e("td",null,"notification 的销毁函数",-1)),e("td",null,[t[4]||(t[4]=e("code",null,"function",-1)),n(b,{value:"() => void"})])])])])])}}});export{J as __pageData,E as default};
