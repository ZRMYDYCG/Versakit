import{u}from"./chunks/theme.TceoO1wW.js";import{d as f,p as i,b as h,o as c,k as o,B as g,c as v,j as t,G as n,a as s,w as d}from"./chunks/framework.CsNVs6Ia.js";import{Q as _}from"./chunks/index.CT2k1i2x.js";const b=`<script setup lang="ts">
import { ref } from 'vue'
import { VerPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
<\/script>

<template>
  <VerPagination v-model="currentPage" :total="total" />
</template>
`,B=f({__name:"base",setup(m){const a=i(1),e=i(100);return(r,l)=>(c(),h(o(u),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=p=>a.value=p),total:e.value},null,8,["modelValue","total"]))}}),V=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination/index.md","filePath":"components/pagination/index.md"}'),x={name:"components/pagination/index.md"},D=Object.assign(x,{setup(m){return(a,e)=>{const r=g("ClientOnly");return c(),v("div",null,[e[0]||(e[0]=t("h1",{id:"pagination-分页",tabindex:"-1"},[s("Pagination 分页 "),t("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),n(r,null,{default:d(()=>[n(o(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(b)},{vue:d(()=>[n(B)]),_:1},8,["vueCode"])]),_:1})])}}});export{V as __pageData,D as default};
