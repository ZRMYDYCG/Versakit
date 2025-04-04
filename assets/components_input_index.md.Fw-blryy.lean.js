import{d as b,p as s,b as f,o as u,w as o,G as a,k as l,B,c as C,j as d,a5 as m,at as k,a as r,a6 as c}from"./chunks/framework.DgG_RYdR.js";import{H as _,D as V}from"./chunks/theme.BN5ATFS7.js";import{d as h,f as v}from"./chunks/index.CrgVH6Ra.js";const x=`<template>
  <VerRow>
    <VerInput disabled v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerInput, VerRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,D=b({__name:"disabled",setup(i){const t=s("");return(p,e)=>(u(),f(l(V),null,{default:o(()=>[a(l(_),{disabled:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),w=`<template>
  <VerRow>
    <VerInput v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerInput, VerRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,y=b({__name:"base",setup(i){const t=s("");return(p,e)=>(u(),f(l(V),null,{default:o(()=>[a(l(_),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),T=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),A={name:"components/input/index.md"},W=Object.assign(A,{setup(i){const t=s(!0);return(p,e)=>{const n=B("ClientOnly");return u(),C("div",null,[e[2]||(e[2]=d("h1",{id:"input-输入框",tabindex:"-1"},[r("Input 输入框 "),d("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),e[3]||(e[3]=d("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),d("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[4]||(e[4]=d("p",null,"通过鼠标或键盘输入字符.",-1)),m(a(l(h),null,null,512),[[c,t.value]]),a(n,null,{default:o(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:l(w)},{vue:o(()=>[a(y)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=d("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[6]||(e[6]=d("p",null,[r("通过 "),d("code",null,"disabled"),r(" 属性指定是否禁用 input 组件")],-1)),m(a(l(h),null,null,512),[[c,t.value]]),a(n,null,{default:o(()=>[a(l(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:l(x)},{vue:o(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=k("",3))])}}});export{T as __pageData,W as default};
