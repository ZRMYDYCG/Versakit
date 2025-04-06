import{x as u,Y as d,k as g}from"./chunks/theme.uDsgHOqn.js";import{d as f,b as x,o as b,w as o,G as n,k as l,_ as W,a as r,p as w,c as V,F as z,ax as c,B as C,aw as Z,j as e}from"./chunks/framework.BrE8sLAv.js";import{Q as m}from"./chunks/index.CmMjEtxm.js";const Y=`<script setup lang="ts">
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
`,k=f({__name:"icon",setup(v){return(a,t)=>(b(),x(l(d),null,{default:o(()=>[n(l(u),{color:"pink",circle:"",icon:"ep:apple"}),n(l(u),{color:"green",circle:"",icon:"ep:chrome-filled"}),n(l(u),{circle:"",icon:"ep:cold-drink"})]),_:1}))}}),D=W(k,[["__scopeId","data-v-cfcc120d"]]),X=`<script setup lang="ts">
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
`,A=f({__name:"ripple",setup(v){return(a,t)=>(b(),x(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{color:"blue-1"},{default:o(()=>t[0]||(t[0]=[r("按 钮")])),_:1}),n(l(u),{color:"blue-2"},{default:o(()=>t[1]||(t[1]=[r("按 钮")])),_:1}),n(l(u),{color:"blue-3"},{default:o(()=>t[2]||(t[2]=[r("按 钮")])),_:1}),n(l(u),{color:"blue-4"},{default:o(()=>t[3]||(t[3]=[r("按 钮")])),_:1}),n(l(u),{color:"blue-5"},{default:o(()=>t[4]||(t[4]=[r("按 钮")])),_:1})]),_:1}))}}),G=W(A,[["__scopeId","data-v-66b70baf"]]),T=`<script setup lang="ts">
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
`,N=f({__name:"size",setup(v){const a=w("md"),t=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(s,i)=>(b(),V("div",null,[n(l(g),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=B=>a.value=B),options:t},null,8,["modelValue"]),n(l(u),{class:"mx-2",color:"blue-5",size:a.value},{default:o(()=>i[1]||(i[1]=[r(" 主要按钮 ")])),_:1},8,["size"])]))}}),S=W(N,[["__scopeId","data-v-756bc12e"]]),J=`<script setup lang="ts">
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
`,L=f({__name:"disabled",setup(v){return(a,t)=>(b(),V(z,null,[n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{disabled:"",color:"red-5"},{default:o(()=>t[0]||(t[0]=[r("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"red-1"},{default:o(()=>t[1]||(t[1]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{disabled:"",color:"blue-5"},{default:o(()=>t[2]||(t[2]=[r("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"blue-1"},{default:o(()=>t[3]||(t[3]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{disabled:"",color:"green-5"},{default:o(()=>t[4]||(t[4]=[r("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"green-1"},{default:o(()=>t[5]||(t[5]=[r(" 按 钮 ")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{disabled:"",color:"zinc-5"},{default:o(()=>t[6]||(t[6]=[r("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"zinc-1"},{default:o(()=>t[7]||(t[7]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{disabled:"",color:"violet-5"},{default:o(()=>t[8]||(t[8]=[r("按 钮")])),_:1}),n(l(u),{disabled:"",variant:"plain round",color:"violet-1"},{default:o(()=>t[9]||(t[9]=[r(" 按 钮 ")])),_:1})]),_:1})],64))}}),I=W(L,[["__scopeId","data-v-fdf5e976"]]),q=`<template>
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
`,E=f({__name:"style",setup(v){let a=w("primary"),t=w("plain"),s=[{label:"primary",value:"primary"},{label:"success",value:"success"},{label:"error",value:"error"},{label:"warn",value:"warn"},{label:"info",value:"info"}],i=[{label:"ghost",value:"ghost"},{label:"round",value:"round"},{label:"text",value:"text"},{label:"shade",value:"shade"},{label:"full",value:"full"}];return(B,p)=>(b(),V("div",null,[n(l(g),{modelValue:l(a),"onUpdate:modelValue":p[0]||(p[0]=y=>c(a)?a.value=y:a=y),options:l(s)},null,8,["modelValue","options"]),n(l(g),{modelValue:l(t),"onUpdate:modelValue":p[1]||(p[1]=y=>c(t)?t.value=y:t=y),options:l(i)},null,8,["modelValue","options"]),n(l(u),{type:l(a),variant:l(t)},{default:o(()=>p[2]||(p[2]=[r("按 钮")])),_:1},8,["type","variant"])]))}}),U=`<script setup lang="ts">
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
`,_=f({__name:"base",setup(v){return(a,t)=>(b(),V(z,null,[n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{type:"primary"},{default:o(()=>t[0]||(t[0]=[r("按 钮")])),_:1}),n(l(u),{variant:"round",type:"primary"},{default:o(()=>t[1]||(t[1]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"primary"},{default:o(()=>t[2]||(t[2]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"primary"},{default:o(()=>t[3]||(t[3]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{type:"error"},{default:o(()=>t[4]||(t[4]=[r("按 钮")])),_:1}),n(l(u),{variant:"round",type:"error"},{default:o(()=>t[5]||(t[5]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"error"},{default:o(()=>t[6]||(t[6]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"error"},{default:o(()=>t[7]||(t[7]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{type:"success"},{default:o(()=>t[8]||(t[8]=[r("按 钮")])),_:1}),n(l(u),{variant:"round",type:"success"},{default:o(()=>t[9]||(t[9]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"success"},{default:o(()=>t[10]||(t[10]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"success"},{default:o(()=>t[11]||(t[11]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{type:"info"},{default:o(()=>t[12]||(t[12]=[r("按 钮")])),_:1}),n(l(u),{variant:"round",type:"info"},{default:o(()=>t[13]||(t[13]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"info"},{default:o(()=>t[14]||(t[14]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"info"},{default:o(()=>t[15]||(t[15]=[r("按 钮")])),_:1})]),_:1}),n(l(d),{class:"mb-4"},{default:o(()=>[n(l(u),{type:"warn"},{default:o(()=>t[16]||(t[16]=[r("按 钮")])),_:1}),n(l(u),{variant:"round",type:"warn"},{default:o(()=>t[17]||(t[17]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost",type:"warn"},{default:o(()=>t[18]||(t[18]=[r("按 钮")])),_:1}),n(l(u),{variant:"ghost round",type:"warn"},{default:o(()=>t[19]||(t[19]=[r("按 钮")])),_:1})]),_:1})],64))}}),M=W(_,[["__scopeId","data-v-77a98eb5"]]),P={tabindex:"0"},R=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),h={name:"components/button/index.md"},j=Object.assign(h,{setup(v){return(a,t)=>{const s=C("ClientOnly"),i=C("Tool");return b(),V("div",null,[t[15]||(t[15]=Z("",4)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(U)},{vue:o(()=>[n(M)]),_:1},8,["vueCode"])]),_:1}),t[16]||(t[16]=e("h2",{id:"按钮风格",tabindex:"-1"},[r("按钮风格 "),e("a",{class:"header-anchor",href:"#按钮风格","aria-label":'Permalink to "按钮风格"'},"​")],-1)),t[17]||(t[17]=e("p",null,[r("使用 "),e("code",null,"style"),r(" 和 "),e("code",null,"variant"),r(" 属性来改变按钮的视觉风格。")],-1)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(q)},{vue:o(()=>[n(E)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=e("h2",{id:"禁止状态",tabindex:"-1"},[r("禁止状态 "),e("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),t[19]||(t[19]=e("p",null,[r("您可以使用 "),e("code",null,"disabled"),r(" 属性来定义按钮是否被禁用，该属性接受一个 "),e("code",null,"Boolean"),r(" 类型的值。")],-1)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(J)},{vue:o(()=>[n(I)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=e("h2",{id:"按钮大小",tabindex:"-1"},[r("按钮大小 "),e("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),t[21]||(t[21]=e("p",null,[r("我们可以通过调整 "),e("code",null,"size"),r(" 属性来控制按钮大小。")],-1)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(T)},{vue:o(()=>[n(S)]),_:1},8,["vueCode"])]),_:1}),t[22]||(t[22]=e("h2",{id:"水波纹按钮",tabindex:"-1"},[r("水波纹按钮 "),e("a",{class:"header-anchor",href:"#水波纹按钮","aria-label":'Permalink to "水波纹按钮"'},"​")],-1)),t[23]||(t[23]=e("p",null,"按钮可以结合水波纹一起使用。",-1)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(X)},{vue:o(()=>[n(G)]),_:1},8,["vueCode"])]),_:1}),t[24]||(t[24]=e("h2",{id:"图标按钮",tabindex:"-1"},[r("图标按钮 "),e("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),t[25]||(t[25]=e("p",null,[r("使用 "),e("code",null,"icon"),r(" 属性来设置按钮的图标样式，您可以在我们的 "),e("code",null,"Icon"),r(" 组件中找到所需图标。")],-1)),n(s,null,{default:o(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(Y)},{vue:o(()=>[n(D)]),_:1},8,["vueCode"])]),_:1}),t[26]||(t[26]=e("h2",{id:"button-api",tabindex:"-1"},[r("Button API "),e("a",{class:"header-anchor",href:"#button-api","aria-label":'Permalink to "Button API"'},"​")],-1)),t[27]||(t[27]=e("h3",{id:"button-属性",tabindex:"-1"},[r("Button 属性 "),e("a",{class:"header-anchor",href:"#button-属性","aria-label":'Permalink to "Button 属性"'},"​")],-1)),e("table",P,[t[14]||(t[14]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[1]||(t[1]=e("td",null,[e("code",null,"type")],-1)),t[2]||(t[2]=e("td",null,[r("按钮的类型，例如可以是 "),e("code",null,"primary"),r("（主要按钮）、"),e("code",null,"success"),r("（成功按钮）等不同分类来表示不同状态的样式风格")],-1)),e("td",null,[t[0]||(t[0]=e("code",null,"enum",-1)),n(i,{value:"primary,info,warning,error"})]),t[3]||(t[3]=e("td",null,"default",-1))]),t[4]||(t[4]=e("tr",null,[e("td",null,[e("code",null,"plain")]),e("td",null,"用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[5]||(t[5]=e("tr",null,[e("td",null,[e("code",null,"round")]),e("td",null,"判断按钮是否呈现圆角的外观效果"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[6]||(t[6]=e("tr",null,[e("td",null,[e("code",null,"disabled")]),e("td",null,"确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[7]||(t[7]=e("tr",null,[e("td",null,[e("code",null,"ghost")]),e("td",null,"是否为ghost"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[8]||(t[8]=e("tr",null,[e("td",null,[e("code",null,"text")]),e("td",null,"是否为文本按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[9]||(t[9]=e("tr",null,[e("td",null,[e("code",null,"circle")]),e("td",null,"是否为圆角按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[10]||(t[10]=e("tr",null,[e("td",null,[e("code",null,"shade")]),e("td",null,"是否是阴影按钮"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[11]||(t[11]=e("tr",null,[e("td",null,[e("code",null,"color")]),e("td",null,"自定义颜色按钮"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),t[12]||(t[12]=e("tr",null,[e("td",null,[e("code",null,"icon")]),e("td",null,"自定义图标按钮"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),t[13]||(t[13]=e("tr",null,[e("td",null,[e("code",null,"size")]),e("td",null,"自定义按钮大小"),e("td",null,[e("code",null,"string")]),e("td",null,"default")],-1))])])])}}});export{R as __pageData,j as default};
