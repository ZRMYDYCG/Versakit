import{d as V,b as k,o as b,w as r,G as n,k as l,_ as w,a as u,p as x,c as B,F as Y,ax as Z,B as c,aw as D,a5 as m,j as t,a6 as f}from"./chunks/framework.B3Jz-8p0.js";import{x as a,q as i,_ as z}from"./chunks/theme.DKFx6c4r.js";import{d as y,f as W}from"./chunks/index.BbNYUtVF.js";const X=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row>
    <VerButton color="pink" circle icon="ep:apple" />
    <VerButton color="green" circle icon="ep:chrome-filled" />
    <VerButton circle icon="ep:cold-drink" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
`,A=V({__name:"icon",setup(v){return(d,e)=>(b(),k(l(i),null,{default:r(()=>[n(l(a),{color:"pink",circle:"",icon:"ep:apple"}),n(l(a),{color:"green",circle:"",icon:"ep:chrome-filled"}),n(l(a),{circle:"",icon:"ep:cold-drink"})]),_:1}))}}),G=w(A,[["__scopeId","data-v-cfcc120d"]]),T=`<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button color="blue-1">按 钮</ver-button>
    <ver-button color="blue-2">按 钮</ver-button>
    <ver-button color="blue-3">按 钮</ver-button>
    <ver-button color="blue-4">按 钮</ver-button>
    <ver-button color="blue-5">按 钮</ver-button>
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
`,N=V({__name:"ripple",setup(v){return(d,e)=>(b(),k(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{color:"blue-1"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1}),n(l(a),{color:"blue-2"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1}),n(l(a),{color:"blue-3"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1}),n(l(a),{color:"blue-4"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1}),n(l(a),{color:"blue-5"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1})]),_:1}))}}),S=w(N,[["__scopeId","data-v-66b70baf"]]),J=`<script setup lang="ts">
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
`,L=V({__name:"size",setup(v){const d=x("md"),e=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(o,s)=>(b(),B("div",null,[n(l(z),{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=C=>d.value=C),options:e},null,8,["modelValue"]),n(l(a),{class:"mx-2",color:"blue-5",size:d.value},{default:r(()=>s[1]||(s[1]=[u(" 主要按钮 ")])),_:1},8,["size"])]))}}),I=w(L,[["__scopeId","data-v-756bc12e"]]),q=`<script setup lang="ts">
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
`,M=V({__name:"disabled",setup(v){return(d,e)=>(b(),B(Y,null,[n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{disabled:"",color:"red-5"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1}),n(l(a),{disabled:"",variant:"plain round",color:"red-1"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{disabled:"",color:"blue-5"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1}),n(l(a),{disabled:"",variant:"plain round",color:"blue-1"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{disabled:"",color:"green-5"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1}),n(l(a),{disabled:"",variant:"plain round",color:"green-1"},{default:r(()=>e[5]||(e[5]=[u(" 按 钮 ")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{disabled:"",color:"zinc-5"},{default:r(()=>e[6]||(e[6]=[u("按 钮")])),_:1}),n(l(a),{disabled:"",variant:"plain round",color:"zinc-1"},{default:r(()=>e[7]||(e[7]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{disabled:"",color:"violet-5"},{default:r(()=>e[8]||(e[8]=[u("按 钮")])),_:1}),n(l(a),{disabled:"",variant:"plain round",color:"violet-1"},{default:r(()=>e[9]||(e[9]=[u(" 按 钮 ")])),_:1})]),_:1})],64))}}),E=w(M,[["__scopeId","data-v-fdf5e976"]]),U=`<template>
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
`,P=V({__name:"style",setup(v){let d=x("primary"),e=x("plain"),o=[{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"error",value:"error"},{label:"warn",value:"warn"},{label:"info",value:"info"}],s=[{label:"ghost",value:"ghost"},{label:"round",value:"round"},{label:"text",value:"text"},{label:"shade",value:"shade"},{label:"full",value:"full"}];return(C,p)=>(b(),B("div",null,[n(l(z),{modelValue:l(d),"onUpdate:modelValue":p[0]||(p[0]=g=>Z(d)?d.value=g:d=g),options:l(o)},null,8,["modelValue","options"]),n(l(z),{modelValue:l(e),"onUpdate:modelValue":p[1]||(p[1]=g=>Z(e)?e.value=g:e=g),options:l(s)},null,8,["modelValue","options"]),n(l(a),{type:l(d),variant:l(e)},{default:r(()=>p[2]||(p[2]=[u("按 钮")])),_:1},8,["type","variant"])]))}}),_=`<script setup lang="ts">
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
`,H=V({__name:"base",setup(v){return(d,e)=>(b(),B(Y,null,[n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{type:"primary"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1}),n(l(a),{variant:"round",type:"primary"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost",type:"primary"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost round",type:"primary"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{type:"error"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1}),n(l(a),{variant:"round",type:"error"},{default:r(()=>e[5]||(e[5]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost",type:"error"},{default:r(()=>e[6]||(e[6]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost round",type:"error"},{default:r(()=>e[7]||(e[7]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{type:"success"},{default:r(()=>e[8]||(e[8]=[u("按 钮")])),_:1}),n(l(a),{variant:"round",type:"success"},{default:r(()=>e[9]||(e[9]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost",type:"success"},{default:r(()=>e[10]||(e[10]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost round",type:"success"},{default:r(()=>e[11]||(e[11]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{type:"info"},{default:r(()=>e[12]||(e[12]=[u("按 钮")])),_:1}),n(l(a),{variant:"round",type:"info"},{default:r(()=>e[13]||(e[13]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost",type:"info"},{default:r(()=>e[14]||(e[14]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost round",type:"info"},{default:r(()=>e[15]||(e[15]=[u("按 钮")])),_:1})]),_:1}),n(l(i),{class:"mb-4"},{default:r(()=>[n(l(a),{type:"warn"},{default:r(()=>e[16]||(e[16]=[u("按 钮")])),_:1}),n(l(a),{variant:"round",type:"warn"},{default:r(()=>e[17]||(e[17]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost",type:"warn"},{default:r(()=>e[18]||(e[18]=[u("按 钮")])),_:1}),n(l(a),{variant:"ghost round",type:"warn"},{default:r(()=>e[19]||(e[19]=[u("按 钮")])),_:1})]),_:1})],64))}}),O=w(H,[["__scopeId","data-v-77a98eb5"]]),R={tabindex:"0"},h=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),Q={name:"components/button/index.md"},K=Object.assign(Q,{setup(v){const d=x(!0);return(e,o)=>{const s=c("ClientOnly"),C=c("Tool");return b(),B("div",null,[o[21]||(o[21]=D("",4)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[0]||(o[0]=()=>{d.value=!1}),vueCode:l(_)},{vue:r(()=>[n(O)]),_:1},8,["vueCode"])]),_:1}),o[22]||(o[22]=t("h2",{id:"按钮风格",tabindex:"-1"},[u("按钮风格 "),t("a",{class:"header-anchor",href:"#按钮风格","aria-label":'Permalink to "按钮风格"'},"​")],-1)),o[23]||(o[23]=t("p",null,[u("使用 "),t("code",null,"style"),u(" 和 "),t("code",null,"variant"),u(" 属性来改变按钮的视觉风格。")],-1)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[1]||(o[1]=()=>{d.value=!1}),vueCode:l(U)},{vue:r(()=>[n(P)]),_:1},8,["vueCode"])]),_:1}),o[24]||(o[24]=t("h2",{id:"禁止状态",tabindex:"-1"},[u("禁止状态 "),t("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),o[25]||(o[25]=t("p",null,[u("您可以使用 "),t("code",null,"disabled"),u(" 属性来定义按钮是否被禁用，该属性接受一个 "),t("code",null,"Boolean"),u(" 类型的值。")],-1)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[2]||(o[2]=()=>{d.value=!1}),vueCode:l(q)},{vue:r(()=>[n(E)]),_:1},8,["vueCode"])]),_:1}),o[26]||(o[26]=t("h2",{id:"按钮大小",tabindex:"-1"},[u("按钮大小 "),t("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),o[27]||(o[27]=t("p",null,[u("我们可以通过调整 "),t("code",null,"size"),u(" 属性来控制按钮大小。")],-1)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[3]||(o[3]=()=>{d.value=!1}),vueCode:l(J)},{vue:r(()=>[n(I)]),_:1},8,["vueCode"])]),_:1}),o[28]||(o[28]=t("h2",{id:"水波纹按钮",tabindex:"-1"},[u("水波纹按钮 "),t("a",{class:"header-anchor",href:"#水波纹按钮","aria-label":'Permalink to "水波纹按钮"'},"​")],-1)),o[29]||(o[29]=t("p",null,"按钮可以结合水波纹一起使用。",-1)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[4]||(o[4]=()=>{d.value=!1}),vueCode:l(T)},{vue:r(()=>[n(S)]),_:1},8,["vueCode"])]),_:1}),o[30]||(o[30]=t("h2",{id:"图标按钮",tabindex:"-1"},[u("图标按钮 "),t("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),o[31]||(o[31]=t("p",null,[u("使用 "),t("code",null,"icon"),u(" 属性来设置按钮的图标样式，您可以在我们的 "),t("code",null,"Icon"),u(" 组件中找到所需图标。")],-1)),m(n(l(y),null,null,512),[[f,d.value]]),n(s,null,{default:r(()=>[n(l(W),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[5]||(o[5]=()=>{d.value=!1}),vueCode:l(X)},{vue:r(()=>[n(G)]),_:1},8,["vueCode"])]),_:1}),o[32]||(o[32]=t("h2",{id:"button-api",tabindex:"-1"},[u("Button API "),t("a",{class:"header-anchor",href:"#button-api","aria-label":'Permalink to "Button API"'},"​")],-1)),o[33]||(o[33]=t("h3",{id:"button-属性",tabindex:"-1"},[u("Button 属性 "),t("a",{class:"header-anchor",href:"#button-属性","aria-label":'Permalink to "Button 属性"'},"​")],-1)),t("table",R,[o[20]||(o[20]=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[o[7]||(o[7]=t("td",null,[t("code",null,"type")],-1)),o[8]||(o[8]=t("td",null,[u("按钮的类型，例如可以是 "),t("code",null,"primary"),u("（主要按钮）、"),t("code",null,"success"),u("（成功按钮）等不同分类来表示不同状态的样式风格")],-1)),t("td",null,[o[6]||(o[6]=t("code",null,"enum",-1)),n(C,{value:"primary,info,warning,error"})]),o[9]||(o[9]=t("td",null,"default",-1))]),o[10]||(o[10]=t("tr",null,[t("td",null,[t("code",null,"plain")]),t("td",null,"用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[11]||(o[11]=t("tr",null,[t("td",null,[t("code",null,"round")]),t("td",null,"判断按钮是否呈现圆角的外观效果"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[12]||(o[12]=t("tr",null,[t("td",null,[t("code",null,"disabled")]),t("td",null,"确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[13]||(o[13]=t("tr",null,[t("td",null,[t("code",null,"ghost")]),t("td",null,"是否为ghost"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[14]||(o[14]=t("tr",null,[t("td",null,[t("code",null,"text")]),t("td",null,"是否为文本按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[15]||(o[15]=t("tr",null,[t("td",null,[t("code",null,"circle")]),t("td",null,"是否为圆角按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[16]||(o[16]=t("tr",null,[t("td",null,[t("code",null,"shade")]),t("td",null,"是否是阴影按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),o[17]||(o[17]=t("tr",null,[t("td",null,[t("code",null,"color")]),t("td",null,"自定义颜色按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),o[18]||(o[18]=t("tr",null,[t("td",null,[t("code",null,"icon")]),t("td",null,"自定义图标按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),o[19]||(o[19]=t("tr",null,[t("td",null,[t("code",null,"size")]),t("td",null,"自定义按钮大小"),t("td",null,[t("code",null,"string")]),t("td",null,"default")],-1))])])])}}});export{h as __pageData,K as default};
