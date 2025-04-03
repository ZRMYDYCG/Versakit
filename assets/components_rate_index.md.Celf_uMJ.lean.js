import{C as u}from"./chunks/theme.C6BEB8ch.js";import{p,b as f,o as c,k as l,B as h,c as v,j as o,G as r,a as m,w as s}from"./chunks/framework.CYu56ZLI.js";import{Q as d}from"./chunks/index.B77M7Ljq.js";const b=`<script setup>
import { VerRate } from '@versakit/ui'
import { ref } from 'vue'

const customRate = ref(2)
<\/script>

<template>
  <VerRate
    v-model="customRate"
    character="♥"
    :colors="['#ff4d4f', '#ff7875', '#ff9c6e']"
  />
</template>
`,_={__name:"custom",setup(i){const a=p(2);return(e,t)=>(c(),f(l(u),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),character:"♥",colors:["#ff4d4f","#ff7875","#ff9c6e"]},null,8,["modelValue"]))}},B=`<script setup>
import { VerRate } from '@versakit/ui'
import { ref } from 'vue'

const basicRate = ref(3)
<\/script>

<template>
  <VerRate v-model="basicRate" />
</template>
`,C={__name:"base",setup(i){const a=p(3);return(e,t)=>(c(),f(l(u),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n)},null,8,["modelValue"]))}},R=JSON.parse('{"title":"Rate 评分","description":"","frontmatter":{},"headers":[],"relativePath":"components/rate/index.md","filePath":"components/rate/index.md"}'),V={name:"components/rate/index.md"},W=Object.assign(V,{setup(i){return(a,e)=>{const t=h("ClientOnly");return c(),v("div",null,[e[0]||(e[0]=o("h1",{id:"rate-评分",tabindex:"-1"},[m("Rate 评分 "),o("a",{class:"header-anchor",href:"#rate-评分","aria-label":'Permalink to "Rate 评分"'},"​")],-1)),e[1]||(e[1]=o("h2",{id:"基本使用",tabindex:"-1"},[m("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),r(t,null,{default:s(()=>[r(l(d),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(B)},{vue:s(()=>[r(C)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=o("h2",{id:"自定义",tabindex:"-1"},[m("自定义 "),o("a",{class:"header-anchor",href:"#自定义","aria-label":'Permalink to "自定义"'},"​")],-1)),r(t,null,{default:s(()=>[r(l(d),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(b)},{vue:s(()=>[r(_)]),_:1},8,["vueCode"])]),_:1})])}}});export{R as __pageData,W as default};
