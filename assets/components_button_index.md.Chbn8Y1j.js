import{d as V,b,o as i,w as r,G as o,k as l,_ as B,au as Y,a5 as p,a as u,p as x,c as C,F as k,av as c,B as D,at as X,j as t,a6 as y}from"./chunks/framework.DgG_RYdR.js";import{g as a,D as v,p as Z}from"./chunks/theme.BN5ATFS7.js";import{d as W,f as g}from"./chunks/index.CrgVH6Ra.js";const A=`<script setup lang="ts">
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
`,G=V({__name:"icon",setup(m){return(d,e)=>(i(),b(l(v),null,{default:r(()=>[o(l(a),{color:"pink",circle:"",icon:"ep:apple"}),o(l(a),{color:"green",circle:"",icon:"ep:chrome-filled"}),o(l(a),{circle:"",icon:"ep:cold-drink"})]),_:1}))}}),T=B(G,[["__scopeId","data-v-cfcc120d"]]),N=`<script setup lang="ts">
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
`,S=V({__name:"ripple",setup(m){return(d,e)=>{const n=Y("ripple");return i(),b(l(v),{class:"mb-4"},{default:r(()=>[p((i(),b(l(a),{color:"blue-1"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1})),[[n]]),p((i(),b(l(a),{color:"blue-2"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1})),[[n]]),p((i(),b(l(a),{color:"blue-3"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1})),[[n]]),p((i(),b(l(a),{color:"blue-4"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1})),[[n]]),p((i(),b(l(a),{color:"blue-5"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1})),[[n]])]),_:1})}}}),J=B(S,[["__scopeId","data-v-47d698e9"]]),L=`<script setup lang="ts">
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
`,I=V({__name:"size",setup(m){const d=x("md"),e=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(n,s)=>(i(),C("div",null,[o(l(Z),{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=z=>d.value=z),options:e},null,8,["modelValue"]),o(l(a),{class:"mx-2",color:"blue-5",size:d.value},{default:r(()=>s[1]||(s[1]=[u(" 主要按钮 ")])),_:1},8,["size"])]))}}),M=B(I,[["__scopeId","data-v-756bc12e"]]),q=`<script setup lang="ts">
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
`,E=V({__name:"disabled",setup(m){return(d,e)=>(i(),C(k,null,[o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{disabled:"",color:"red-5"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1}),o(l(a),{disabled:"",variant:"plain round",color:"red-1"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{disabled:"",color:"blue-5"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1}),o(l(a),{disabled:"",variant:"plain round",color:"blue-1"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{disabled:"",color:"green-5"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1}),o(l(a),{disabled:"",variant:"plain round",color:"green-1"},{default:r(()=>e[5]||(e[5]=[u(" 按 钮 ")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{disabled:"",color:"zinc-5"},{default:r(()=>e[6]||(e[6]=[u("按 钮")])),_:1}),o(l(a),{disabled:"",variant:"plain round",color:"zinc-1"},{default:r(()=>e[7]||(e[7]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{disabled:"",color:"violet-5"},{default:r(()=>e[8]||(e[8]=[u("按 钮")])),_:1}),o(l(a),{disabled:"",variant:"plain round",color:"violet-1"},{default:r(()=>e[9]||(e[9]=[u(" 按 钮 ")])),_:1})]),_:1})],64))}}),U=B(E,[["__scopeId","data-v-fdf5e976"]]),P=`<template>
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
`,_=V({__name:"style",setup(m){let d=x("primary"),e=x("plain"),n=[{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"error",value:"error"},{label:"warn",value:"warn"},{label:"info",value:"info"}],s=[{label:"ghost",value:"ghost"},{label:"round",value:"round"},{label:"text",value:"text"},{label:"shade",value:"shade"},{label:"full",value:"full"}];return(z,f)=>(i(),C("div",null,[o(l(Z),{modelValue:l(d),"onUpdate:modelValue":f[0]||(f[0]=w=>c(d)?d.value=w:d=w),options:l(n)},null,8,["modelValue","options"]),o(l(Z),{modelValue:l(e),"onUpdate:modelValue":f[1]||(f[1]=w=>c(e)?e.value=w:e=w),options:l(s)},null,8,["modelValue","options"]),o(l(a),{type:l(d),variant:l(e)},{default:r(()=>f[2]||(f[2]=[u("按 钮")])),_:1},8,["type","variant"])]))}}),H=`<script setup lang="ts">
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
`,O=V({__name:"base",setup(m){return(d,e)=>(i(),C(k,null,[o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{type:"primary"},{default:r(()=>e[0]||(e[0]=[u("按 钮")])),_:1}),o(l(a),{variant:"round",type:"primary"},{default:r(()=>e[1]||(e[1]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost",type:"primary"},{default:r(()=>e[2]||(e[2]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost round",type:"primary"},{default:r(()=>e[3]||(e[3]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{type:"error"},{default:r(()=>e[4]||(e[4]=[u("按 钮")])),_:1}),o(l(a),{variant:"round",type:"error"},{default:r(()=>e[5]||(e[5]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost",type:"error"},{default:r(()=>e[6]||(e[6]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost round",type:"error"},{default:r(()=>e[7]||(e[7]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{type:"success"},{default:r(()=>e[8]||(e[8]=[u("按 钮")])),_:1}),o(l(a),{variant:"round",type:"success"},{default:r(()=>e[9]||(e[9]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost",type:"success"},{default:r(()=>e[10]||(e[10]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost round",type:"success"},{default:r(()=>e[11]||(e[11]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{type:"info"},{default:r(()=>e[12]||(e[12]=[u("按 钮")])),_:1}),o(l(a),{variant:"round",type:"info"},{default:r(()=>e[13]||(e[13]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost",type:"info"},{default:r(()=>e[14]||(e[14]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost round",type:"info"},{default:r(()=>e[15]||(e[15]=[u("按 钮")])),_:1})]),_:1}),o(l(v),{class:"mb-4"},{default:r(()=>[o(l(a),{type:"warn"},{default:r(()=>e[16]||(e[16]=[u("按 钮")])),_:1}),o(l(a),{variant:"round",type:"warn"},{default:r(()=>e[17]||(e[17]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost",type:"warn"},{default:r(()=>e[18]||(e[18]=[u("按 钮")])),_:1}),o(l(a),{variant:"ghost round",type:"warn"},{default:r(()=>e[19]||(e[19]=[u("按 钮")])),_:1})]),_:1})],64))}}),R=B(O,[["__scopeId","data-v-77a98eb5"]]),Q={tabindex:"0"},K=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),j={name:"components/button/index.md"},tt=Object.assign(j,{setup(m){const d=x(!0);return(e,n)=>{const s=D("ClientOnly"),z=D("Tool");return i(),C("div",null,[n[21]||(n[21]=X('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>在日常开发中比较常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>versakitUI 提供了一些基础样式来使用，我们可以通过 <code>type</code>、<code>plain</code>、<code>round</code> 来修改按钮的圆角，颜色和是否透明等属性。</p>',4)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{d.value=!1}),vueCode:l(H)},{vue:r(()=>[o(R)]),_:1},8,["vueCode"])]),_:1}),n[22]||(n[22]=t("h2",{id:"按钮风格",tabindex:"-1"},[u("按钮风格 "),t("a",{class:"header-anchor",href:"#按钮风格","aria-label":'Permalink to "按钮风格"'},"​")],-1)),n[23]||(n[23]=t("p",null,[u("使用 "),t("code",null,"style"),u(" 和 "),t("code",null,"variant"),u(" 属性来改变按钮的视觉风格。")],-1)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{d.value=!1}),vueCode:l(P)},{vue:r(()=>[o(_)]),_:1},8,["vueCode"])]),_:1}),n[24]||(n[24]=t("h2",{id:"禁止状态",tabindex:"-1"},[u("禁止状态 "),t("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),n[25]||(n[25]=t("p",null,[u("您可以使用 "),t("code",null,"disabled"),u(" 属性来定义按钮是否被禁用，该属性接受一个 "),t("code",null,"Boolean"),u(" 类型的值。")],-1)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{d.value=!1}),vueCode:l(q)},{vue:r(()=>[o(U)]),_:1},8,["vueCode"])]),_:1}),n[26]||(n[26]=t("h2",{id:"按钮大小",tabindex:"-1"},[u("按钮大小 "),t("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),n[27]||(n[27]=t("p",null,[u("我们可以通过调整 "),t("code",null,"size"),u(" 属性来控制按钮大小。")],-1)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[3]||(n[3]=()=>{d.value=!1}),vueCode:l(L)},{vue:r(()=>[o(M)]),_:1},8,["vueCode"])]),_:1}),n[28]||(n[28]=t("h2",{id:"水波纹按钮",tabindex:"-1"},[u("水波纹按钮 "),t("a",{class:"header-anchor",href:"#水波纹按钮","aria-label":'Permalink to "水波纹按钮"'},"​")],-1)),n[29]||(n[29]=t("p",null,"按钮可以结合水波纹一起使用。",-1)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[4]||(n[4]=()=>{d.value=!1}),vueCode:l(N)},{vue:r(()=>[o(J)]),_:1},8,["vueCode"])]),_:1}),n[30]||(n[30]=t("h2",{id:"图标按钮",tabindex:"-1"},[u("图标按钮 "),t("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),n[31]||(n[31]=t("p",null,[u("使用 "),t("code",null,"icon"),u(" 属性来设置按钮的图标样式，您可以在我们的 "),t("code",null,"Icon"),u(" 组件中找到所需图标。")],-1)),p(o(l(W),null,null,512),[[y,d.value]]),o(s,null,{default:r(()=>[o(l(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[5]||(n[5]=()=>{d.value=!1}),vueCode:l(A)},{vue:r(()=>[o(T)]),_:1},8,["vueCode"])]),_:1}),n[32]||(n[32]=t("h2",{id:"button-api",tabindex:"-1"},[u("Button API "),t("a",{class:"header-anchor",href:"#button-api","aria-label":'Permalink to "Button API"'},"​")],-1)),n[33]||(n[33]=t("h3",{id:"button-属性",tabindex:"-1"},[u("Button 属性 "),t("a",{class:"header-anchor",href:"#button-属性","aria-label":'Permalink to "Button 属性"'},"​")],-1)),t("table",Q,[n[20]||(n[20]=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[n[7]||(n[7]=t("td",null,[t("code",null,"type")],-1)),n[8]||(n[8]=t("td",null,[u("按钮的类型，例如可以是 "),t("code",null,"primary"),u("（主要按钮）、"),t("code",null,"success"),u("（成功按钮）等不同分类来表示不同状态的样式风格")],-1)),t("td",null,[n[6]||(n[6]=t("code",null,"enum",-1)),o(z,{value:"primary,info,warning,error"})]),n[9]||(n[9]=t("td",null,"default",-1))]),n[10]||(n[10]=t("tr",null,[t("td",null,[t("code",null,"plain")]),t("td",null,"用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[11]||(n[11]=t("tr",null,[t("td",null,[t("code",null,"round")]),t("td",null,"判断按钮是否呈现圆角的外观效果"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[12]||(n[12]=t("tr",null,[t("td",null,[t("code",null,"disabled")]),t("td",null,"确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[13]||(n[13]=t("tr",null,[t("td",null,[t("code",null,"ghost")]),t("td",null,"是否为ghost"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[14]||(n[14]=t("tr",null,[t("td",null,[t("code",null,"text")]),t("td",null,"是否为文本按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[15]||(n[15]=t("tr",null,[t("td",null,[t("code",null,"circle")]),t("td",null,"是否为圆角按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[16]||(n[16]=t("tr",null,[t("td",null,[t("code",null,"shade")]),t("td",null,"是否是阴影按钮"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1)),n[17]||(n[17]=t("tr",null,[t("td",null,[t("code",null,"color")]),t("td",null,"自定义颜色按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),n[18]||(n[18]=t("tr",null,[t("td",null,[t("code",null,"icon")]),t("td",null,"自定义图标按钮"),t("td",null,[t("code",null,"string")]),t("td",null,"-")],-1)),n[19]||(n[19]=t("tr",null,[t("td",null,[t("code",null,"size")]),t("td",null,"自定义按钮大小"),t("td",null,[t("code",null,"string")]),t("td",null,"default")],-1))])])])}}});export{K as __pageData,tt as default};
