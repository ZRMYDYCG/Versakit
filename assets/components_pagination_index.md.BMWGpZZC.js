import{d as c,p as r,b as f,o as u,k as l,B as v,c as _,j as n,a5 as h,G as o,a as i,a6 as g,w as d}from"./chunks/framework.B3Jz-8p0.js";import{P as b}from"./chunks/theme.DKFx6c4r.js";import{d as B,f as P}from"./chunks/index.BbNYUtVF.js";const x=`<script setup lang="ts">
import { ref } from 'vue'
import { VerPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
<\/script>

<template>
  <VerPagination v-model="currentPage" :total="total" />
</template>
`,C=c({__name:"base",setup(p){const t=r(1),s=r(100);return(e,a)=>(u(),f(l(b),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=m=>t.value=m),total:s.value},null,8,["modelValue","total"]))}}),w=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination/index.md","filePath":"components/pagination/index.md"}'),k={name:"components/pagination/index.md"},y=Object.assign(k,{setup(p){const t=r(!0);return(s,e)=>{const a=v("ClientOnly");return u(),_("div",null,[e[1]||(e[1]=n("h1",{id:"pagination-分页",tabindex:"-1"},[i("Pagination 分页 "),n("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基本用法",tabindex:"-1"},[i("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),h(o(l(B),null,null,512),[[g,t.value]]),o(a,null,{default:d(()=>[o(l(P),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:l(x)},{vue:d(()=>[o(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{w as __pageData,y as default};
