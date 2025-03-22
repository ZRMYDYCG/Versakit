import{P as d,Y as b,a as C}from"./chunks/theme.TceoO1wW.js";import{d as x,b as y,o as i,w as s,G as n,k as a,a as l,_ as v,p as B,c,B as f,j as t}from"./chunks/framework.CsNVs6Ia.js";import{Q as p}from"./chunks/index.CT2k1i2x.js";const V=`c
<script setup lang="ts">
import { VerRow, VerText } from '@versakit/ui'
<\/script>

<template>
  <ver-row>
    <ver-text class="w-100px" truncated>Self element set width 100px</ver-text>
  </ver-row>
</template>

<style scoped>
.w-100px {
  width: 100px;
}
</style>
`,X=x({__name:"truncated",setup(m){return(u,e)=>(i(),y(a(b),null,{default:s(()=>[n(a(d),{class:"w-100px",truncated:""},{default:s(()=>e[0]||(e[0]=[l("Self element set width 100px")])),_:1})]),_:1}))}}),T=v(X,[["__scopeId","data-v-b0d361fa"]]),D=`<script setup lang="ts">
import { ref } from 'vue'
import { VerText, VerSegmented } from '@versakit/ui'

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
    <VerSegmented :options v-model="selectedValue" />

    <ver-text class="mx4" :size="selectedValue">我是文本</ver-text>
  </div>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
`,z=x({__name:"size",setup(m){const u=B("md"),e=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(o,r)=>(i(),c("div",null,[n(a(C),{options:e,modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=W=>u.value=W)},null,8,["modelValue"]),n(a(d),{class:"mx4",size:u.value},{default:s(()=>r[1]||(r[1]=[l("我是文本")])),_:1},8,["size"])]))}}),G=v(z,[["__scopeId","data-v-ee5aa722"]]),g=`<script setup lang="ts">
import { VerRow, VerText } from '@versakit/ui'
<\/script>

<template>
  <ver-row>
    <ver-text class="mx4">Default</ver-text>
    <ver-text class="mx4" type="primary">Primary</ver-text>
    <ver-text class="mx4" type="success">Success</ver-text>
    <ver-text class="mx4" type="info">Info</ver-text>
    <ver-text class="mx4" type="warn">Warning</ver-text>
    <ver-text class="mx4" type="error">Drange</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
`,Z=x({__name:"base",setup(m){return(u,e)=>(i(),y(a(b),null,{default:s(()=>[n(a(d),{class:"mx4"},{default:s(()=>e[0]||(e[0]=[l("Default")])),_:1}),n(a(d),{class:"mx4",type:"primary"},{default:s(()=>e[1]||(e[1]=[l("Primary")])),_:1}),n(a(d),{class:"mx4",type:"success"},{default:s(()=>e[2]||(e[2]=[l("Success")])),_:1}),n(a(d),{class:"mx4",type:"info"},{default:s(()=>e[3]||(e[3]=[l("Info")])),_:1}),n(a(d),{class:"mx4",type:"warn"},{default:s(()=>e[4]||(e[4]=[l("Warning")])),_:1}),n(a(d),{class:"mx4",type:"error"},{default:s(()=>e[5]||(e[5]=[l("Drange")])),_:1})]),_:1}))}}),k=v(Z,[["__scopeId","data-v-43676cef"]]),w={tabindex:"0"},Y=JSON.parse('{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}'),A={name:"components/text/index.md"},J=Object.assign(A,{setup(m){return(u,e)=>{const o=f("ClientOnly"),r=f("Tool");return i(),c("div",null,[e[10]||(e[10]=t("h1",{id:"text-文本",tabindex:"-1"},[l("Text 文本 "),t("a",{class:"header-anchor",href:"#text-文本","aria-label":'Permalink to "Text 文本"'},"​")],-1)),e[11]||(e[11]=t("h2",{id:"基础使用",tabindex:"-1"},[l("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[12]||(e[12]=t("p",null,[l("由 "),t("code",null,"type"),l(" 属性来选择 Text 的类型。")],-1)),n(o,null,{default:s(()=>[n(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(g)},{vue:s(()=>[n(k)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=t("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),t("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),e[14]||(e[14]=t("p",null,[l("使用 "),t("code",null,"size"),l(" 属性配置尺寸，可选的尺寸大小有："),t("code",null,"large"),l("， "),t("code",null,"default"),l(" 或 "),t("code",null,"small"),l("。")],-1)),n(o,null,{default:s(()=>[n(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(D)},{vue:s(()=>[n(G)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=t("h2",{id:"省略",tabindex:"-1"},[l("省略 "),t("a",{class:"header-anchor",href:"#省略","aria-label":'Permalink to "省略"'},"​")],-1)),e[16]||(e[16]=t("p",null,[l("通过 "),t("code",null,"truncated"),l(" 属性,在文本超过视图或最大宽度设置时展示省略符。")],-1)),n(o,null,{default:s(()=>[n(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(V)},{vue:s(()=>[n(T)]),_:1},8,["vueCode"])]),_:1}),e[17]||(e[17]=t("h2",{id:"text-api",tabindex:"-1"},[l("Text API "),t("a",{class:"header-anchor",href:"#text-api","aria-label":'Permalink to "Text API"'},"​")],-1)),e[18]||(e[18]=t("h3",{id:"text属性",tabindex:"-1"},[l("Text属性 "),t("a",{class:"header-anchor",href:"#text属性","aria-label":'Permalink to "Text属性"'},"​")],-1)),t("table",w,[e[9]||(e[9]=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[e[1]||(e[1]=t("td",null,[t("code",null,"type")],-1)),e[2]||(e[2]=t("td",null,"文本的类型",-1)),t("td",null,[e[0]||(e[0]=t("code",null,"enum",-1)),n(r,{value:"default,primary,secondary"})]),e[3]||(e[3]=t("td",null,"default",-1))]),t("tr",null,[e[5]||(e[5]=t("td",null,[t("code",null,"size")],-1)),e[6]||(e[6]=t("td",null,"用于调整文本的大小",-1)),t("td",null,[e[4]||(e[4]=t("code",null,"enum",-1)),n(r,{value:"lg,md,sm,xs"})]),e[7]||(e[7]=t("td",null,"default",-1))]),e[8]||(e[8]=t("tr",null,[t("td",null,[t("code",null,"truncated ")]),t("td",null,"在文本超过视图或最大宽度设置时展示省略符。"),t("td",null,[t("code",null,"boolean")]),t("td",null,"false")],-1))])])])}}});export{Y as __pageData,J as default};
