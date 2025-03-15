import{f as u,W as i,u as B}from"./chunks/theme.tWKbjlo-.js";import{d as y,b as v,o as s,w as r,G as n,k as l,_ as g,at as D,a7 as V,a as o,p as c,c as w,F as Z,au as z,B as x,as as Y,j as e}from"./chunks/framework.D0tLR0bK.js";import{Q as f}from"./chunks/index.BULxsYUw.js";const k=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row>
    <VerButton color="pink" circle icon="search" />
    <VerButton color="green" circle icon="check" />
    <VerButton circle icon="trash" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
`,X=y({__name:"icon",setup(p){return(d,t)=>(s(),v(l(i),null,{default:r(()=>[n(l(u),{color:"pink",circle:"",icon:"search"}),n(l(u),{color:"green",circle:"",icon:"check"}),n(l(u),{circle:"",icon:"trash"})]),_:1}))}}),A=g(X,[["__scopeId","data-v-508a279a"]]),G=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button v-ripple color="blue-1">按 钮</ver-button>
    <ver-button v-ripple color="blue-2">按 钮</ver-button>
    <ver-button v-ripple color="blue-3">按 钮</ver-button>
    <ver-button v-ripple color="blue-4">按 钮</ver-button>
    <ver-button v-ripple color="blue-5">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,T=y({__name:"ripple",setup(p){return(d,t)=>{const a=D("ripple");return s(),v(l(i),{class:"mb-4"},{default:r(()=>[V((s(),v(l(u),{color:"blue-1"},{default:r(()=>t[0]||(t[0]=[o("按 钮")])),_:1})),[[a]]),V((s(),v(l(u),{color:"blue-2"},{default:r(()=>t[1]||(t[1]=[o("按 钮")])),_:1})),[[a]]),V((s(),v(l(u),{color:"blue-3"},{default:r(()=>t[2]||(t[2]=[o("按 钮")])),_:1})),[[a]]),V((s(),v(l(u),{color:"blue-4"},{default:r(()=>t[3]||(t[3]=[o("按 钮")])),_:1})),[[a]]),V((s(),v(l(u),{color:"blue-5"},{default:r(()=>t[4]||(t[4]=[o("按 钮")])),_:1})),[[a]])]),_:1})}}}),N=g(T,[["__scopeId","data-v-47d698e9"]]),S=`<script setup lang="ts">
import { ref } from 'vue'
import { VerButton, VerSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>

<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <ver-button class="mx-2" color="blue-5" :size="selectedValue">
      主要按钮
    </ver-button>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 10px 0px;
}
</style>
`,J=y({__name:"size",setup(p){const d=c("md"),t=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(a,b)=>(s(),w("div",null,[n(l(B),{modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=C=>d.value=C),options:t},null,8,["modelValue"]),n(l(u),{class:"mx-2",color:"blue-5",size:d.value},{default:r(()=>b[1]||(b[1]=[o(" 主要按钮 ")])),_:1},8,["size"])]))}}),L=g(J,[["__scopeId","data-v-756bc12e"]]),I=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled color="red-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="red-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="blue-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="blue-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="green-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="green-1">
      按 钮
    </ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="zinc-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="zinc-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="violet-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="violet-1">
      按 钮
    </ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
`,q=y({__name:"disabled",setup(p){return(d,t)=>(s(),w(Z,null,[n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{disabled:"",color:"red-5"},{default:r(()=>t[0]||(t[0]=[o("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"red-1"},{default:r(()=>t[1]||(t[1]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{disabled:"",color:"blue-5"},{default:r(()=>t[2]||(t[2]=[o("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"blue-1"},{default:r(()=>t[3]||(t[3]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{disabled:"",color:"green-5"},{default:r(()=>t[4]||(t[4]=[o("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"green-1"},{default:r(()=>t[5]||(t[5]=[o(" 按 钮 ")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{disabled:"",color:"zinc-5"},{default:r(()=>t[6]||(t[6]=[o("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"zinc-1"},{default:r(()=>t[7]||(t[7]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{disabled:"",color:"violet-5"},{default:r(()=>t[8]||(t[8]=[o("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"violet-1"},{default:r(()=>t[9]||(t[9]=[o(" 按 钮 ")])),_:1})]),_:1})],64))}}),_=g(q,[["__scopeId","data-v-fdf5e976"]]),h=`<template>
  <div>
    <VerSegmented v-model="typeValue" :options="typeOptions" />
    <VerSegmented v-model="variantValue" :options="variantOptions" />

    <ver-button :type="typeValue" :variant="variantValue">按 钮</ver-button>
  </div>
</template>
<script setup lang="ts">
import { VerButton, VerSegmented } from '@versakit/ui'
import { ref } from 'vue'

let typeValue = ref('primary')
let variantValue = ref('plain')

let typeOptions = [
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'error', value: 'error' },
  { label: 'warn', value: 'warn' },
  { label: 'info', value: 'info' },
]

let variantOptions = [
  { label: 'ghost', value: 'ghost' },
  { label: 'round', value: 'round' },
  { label: 'text', value: 'text' },
  { label: 'shade', value: 'shade' },
  { label: 'full', value: 'full' },
]
<\/script>
<style scoped></style>
`,E=y({__name:"style",setup(p){let d=c("primary"),t=c("plain"),a=[{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"error",value:"error"},{label:"warn",value:"warn"},{label:"info",value:"info"}],b=[{label:"ghost",value:"ghost"},{label:"round",value:"round"},{label:"text",value:"text"},{label:"shade",value:"shade"},{label:"full",value:"full"}];return(C,m)=>(s(),w("div",null,[n(l(B),{modelValue:l(d),"onUpdate:modelValue":m[0]||(m[0]=W=>z(d)?d.value=W:d=W),options:l(a)},null,8,["modelValue","options"]),n(l(B),{modelValue:l(t),"onUpdate:modelValue":m[1]||(m[1]=W=>z(t)?t.value=W:t=W),options:l(b)},null,8,["modelValue","options"]),n(l(u),{type:l(d),variant:l(t)},{default:r(()=>m[2]||(m[2]=[o("按 钮")])),_:1},8,["type","variant"])]))}}),U=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">按 钮</ver-button>
    <ver-button variant="round" type="primary">按 钮</ver-button>
    <ver-button variant="ghost" type="primary">按 钮</ver-button>
    <ver-button variant="ghost round" type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="error">按 钮</ver-button>
    <ver-button variant="round" type="error">按 钮</ver-button>
    <ver-button variant="ghost" type="error">按 钮</ver-button>
    <ver-button variant="ghost round" type="error">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">按 钮</ver-button>
    <ver-button variant="round" type="success">按 钮</ver-button>

    <ver-button variant="ghost" type="success">按 钮</ver-button>
    <ver-button variant="ghost round" type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">按 钮</ver-button>
    <ver-button variant="round" type="info">按 钮</ver-button>
    <ver-button variant="ghost" type="info">按 钮</ver-button>
    <ver-button variant="ghost round" type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warn">按 钮</ver-button>
    <ver-button variant="round" type="warn">按 钮</ver-button>
    <ver-button variant="ghost" type="warn">按 钮</ver-button>
    <ver-button variant="ghost round" type="warn">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,M=y({__name:"base",setup(p){return(d,t)=>(s(),w(Z,null,[n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{type:"primary"},{default:r(()=>t[0]||(t[0]=[o("按 钮")])),_:1}),n(l(u),{variant:"round",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"primary"},{default:r(()=>t[2]||(t[2]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"primary"},{default:r(()=>t[3]||(t[3]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{type:"error"},{default:r(()=>t[4]||(t[4]=[o("按 钮")])),_:1}),n(l(u),{variant:"round",type:"error"},{default:r(()=>t[5]||(t[5]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"error"},{default:r(()=>t[6]||(t[6]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"error"},{default:r(()=>t[7]||(t[7]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{type:"success"},{default:r(()=>t[8]||(t[8]=[o("按 钮")])),_:1}),n(l(u),{variant:"round",type:"success"},{default:r(()=>t[9]||(t[9]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"success"},{default:r(()=>t[10]||(t[10]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"success"},{default:r(()=>t[11]||(t[11]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{type:"info"},{default:r(()=>t[12]||(t[12]=[o("按 钮")])),_:1}),n(l(u),{variant:"round",type:"info"},{default:r(()=>t[13]||(t[13]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"info"},{default:r(()=>t[14]||(t[14]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"info"},{default:r(()=>t[15]||(t[15]=[o("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(u),{type:"warn"},{default:r(()=>t[16]||(t[16]=[o("按 钮")])),_:1}),n(l(u),{variant:"round",type:"warn"},{default:r(()=>t[17]||(t[17]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"warn"},{default:r(()=>t[18]||(t[18]=[o("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"warn"},{default:r(()=>t[19]||(t[19]=[o("按 钮")])),_:1})]),_:1})],64))}}),P=g(M,[["__scopeId","data-v-77a98eb5"]]),H={tabindex:"0"},F=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),O={name:"components/button/index.md"},$=Object.assign(O,{setup(p){return(d,t)=>{const a=x("ClientOnly"),b=x("Tool");return s(),w("div",null,[t[15]||(t[15]=Y('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>在日常开发中比较常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>versakitUI 提供了一些基础样式来使用，我们可以通过 <code>type</code>、<code>plain</code>、<code>round</code> 来修改按钮的圆角，颜色和是否透明等属性。</p>',4)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(U)},{vue:r(()=>[n(P)]),_:1},8,["vueCode"])]),_:1}),t[16]||(t[16]=e("h2",{id:"按钮风格",tabindex:"-1"},[o("按钮风格 "),e("a",{class:"header-anchor",href:"#按钮风格","aria-label":'Permalink to "按钮风格"'},"​")],-1)),t[17]||(t[17]=e("p",null,[o("使用 "),e("code",null,"style"),o(" 和 "),e("code",null,"variant"),o(" 属性来改变按钮的视觉风格。")],-1)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(h)},{vue:r(()=>[n(E)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=e("h2",{id:"禁止状态",tabindex:"-1"},[o("禁止状态 "),e("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),t[19]||(t[19]=e("p",null,[o("您可以使用 "),e("code",null,"disabled"),o(" 属性来定义按钮是否被禁用，该属性接受一个 "),e("code",null,"Boolean"),o(" 类型的值。")],-1)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(I)},{vue:r(()=>[n(_)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=e("h2",{id:"按钮大小",tabindex:"-1"},[o("按钮大小 "),e("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),t[21]||(t[21]=e("p",null,[o("我们可以通过调整 "),e("code",null,"size"),o(" 属性来控制按钮大小。")],-1)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(S)},{vue:r(()=>[n(L)]),_:1},8,["vueCode"])]),_:1}),t[22]||(t[22]=e("h2",{id:"水波纹按钮",tabindex:"-1"},[o("水波纹按钮 "),e("a",{class:"header-anchor",href:"#水波纹按钮","aria-label":'Permalink to "水波纹按钮"'},"​")],-1)),t[23]||(t[23]=e("p",null,"按钮可以结合水波纹一起使用。",-1)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(G)},{vue:r(()=>[n(N)]),_:1},8,["vueCode"])]),_:1}),t[24]||(t[24]=e("h2",{id:"图标按钮",tabindex:"-1"},[o("图标按钮 "),e("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),t[25]||(t[25]=e("p",null,[o("使用 "),e("code",null,"icon"),o(" 属性来设置按钮的图标样式，您可以在我们的 "),e("code",null,"Icon"),o(" 组件中找到所需图标。")],-1)),n(a,null,{default:r(()=>[n(l(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(k)},{vue:r(()=>[n(A)]),_:1},8,["vueCode"])]),_:1}),t[26]||(t[26]=e("h2",{id:"button-api",tabindex:"-1"},[o("Button API "),e("a",{class:"header-anchor",href:"#button-api","aria-label":'Permalink to "Button API"'},"​")],-1)),t[27]||(t[27]=e("h3",{id:"button-属性",tabindex:"-1"},[o("Button 属性 "),e("a",{class:"header-anchor",href:"#button-属性","aria-label":'Permalink to "Button 属性"'},"​")],-1)),e("table",H,[t[14]||(t[14]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[1]||(t[1]=e("td",null,[e("code",null,"type")],-1)),t[2]||(t[2]=e("td",null,[o("按钮的类型，例如可以是 "),e("code",null,"primary"),o("（主要按钮）、"),e("code",null,"success"),o("（成功按钮）等不同分类来表示不同状态的样式风格")],-1)),e("td",null,[t[0]||(t[0]=e("code",null,"enum",-1)),n(b,{value:"primary,info,warning,error"})]),t[3]||(t[3]=e("td",null,"default",-1))]),t[4]||(t[4]=e("tr",null,[e("td",null,[e("code",null,"plain")]),e("td",null,"用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[5]||(t[5]=e("tr",null,[e("td",null,[e("code",null,"round")]),e("td",null,"判断按钮是否呈现圆角的外观效果"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[6]||(t[6]=e("tr",null,[e("td",null,[e("code",null,"disabled")]),e("td",null,"确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[7]||(t[7]=e("tr",null,[e("td",null,[e("code",null,"ghost")]),e("td",null,"是否为ghost"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[8]||(t[8]=e("tr",null,[e("td",null,[e("code",null,"text")]),e("td",null,"是否为文本按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[9]||(t[9]=e("tr",null,[e("td",null,[e("code",null,"circle")]),e("td",null,"是否为圆角按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[10]||(t[10]=e("tr",null,[e("td",null,[e("code",null,"shade")]),e("td",null,"是否是阴影按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[11]||(t[11]=e("tr",null,[e("td",null,[e("code",null,"color")]),e("td",null,"自定义颜色按钮"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),t[12]||(t[12]=e("tr",null,[e("td",null,[e("code",null,"icon")]),e("td",null,"自定义图标按钮"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),t[13]||(t[13]=e("tr",null,[e("td",null,[e("code",null,"size")]),e("td",null,"自定义按钮大小"),e("td",null,[e("code",null,"string")]),e("td",null,"default")],-1))])])])}}});export{F as __pageData,$ as default};
