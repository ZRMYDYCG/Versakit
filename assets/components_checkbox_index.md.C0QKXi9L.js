import{d as p,p as c,c as d,o as i,G as a,k as n,B as h,j as o,a5 as f,a as l,a6 as v,w as r}from"./chunks/framework.DgG_RYdR.js";import{h as b}from"./chunks/theme.BN5ATFS7.js";import{d as k,f as _}from"./chunks/index.CrgVH6Ra.js";const x=`<script setup lang="ts">
import { VerCheckbox } from '@versakit/ui'
import { ref } from 'vue'

const checked = ref(false)
<\/script>

<template>
  <div>
    <VerCheckbox v-model="checked" />
  </div>
</template>

<style lang="scss" scoped></style>
`,C=p({__name:"base",setup(m){const t=c(!1);return(u,e)=>(i(),d("div",null,[a(n(b),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s)},null,8,["modelValue"])]))}}),g=JSON.parse('{"title":"CheckBox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox/index.md","filePath":"components/checkbox/index.md"}'),B={name:"components/checkbox/index.md"},w=Object.assign(B,{setup(m){const t=c(!0);return(u,e)=>{const s=h("ClientOnly");return i(),d("div",null,[e[1]||(e[1]=o("h1",{id:"checkbox-复选框",tabindex:"-1"},[l("CheckBox 复选框 "),o("a",{class:"header-anchor",href:"#checkbox-复选框","aria-label":'Permalink to "CheckBox 复选框"'},"​")],-1)),e[2]||(e[2]=o("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(a(n(k),null,null,512),[[v,t.value]]),a(s,null,{default:r(()=>[a(n(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(x)},{vue:r(()=>[a(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{g as __pageData,w as default};
