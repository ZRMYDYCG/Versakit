import{B as m}from"./chunks/theme.uDsgHOqn.js";import{d as c,p as f,c as i,o as p,G as n,k as o,B as g,j as a,a as r,w as l}from"./chunks/framework.BrE8sLAv.js";import{Q as h}from"./chunks/index.CmMjEtxm.js";const v=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputTag } from '@versakit/ui'

const tags = ref<string[]>(['Vue', 'TypeScript'])
<\/script>

<template>
  <div>
    <VerInputTag v-model="tags" placeholder="Enter tags..." />
  </div>
</template>

<style scoped></style>
`,_=c({__name:"base",setup(d){const s=f(["Vue","TypeScript"]);return(e,t)=>(p(),i("div",null,[n(o(m),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=u=>s.value=u),placeholder:"Enter tags..."},null,8,["modelValue"])]))}}),V=JSON.parse('{"title":"InputTag 标签输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputtag/index.md","filePath":"components/inputtag/index.md"}'),b={name:"components/inputtag/index.md"},x=Object.assign(b,{setup(d){return(s,e)=>{const t=g("ClientOnly");return p(),i("div",null,[e[0]||(e[0]=a("h1",{id:"inputtag-标签输入框",tabindex:"-1"},[r("InputTag 标签输入框 "),a("a",{class:"header-anchor",href:"#inputtag-标签输入框","aria-label":'Permalink to "InputTag 标签输入框"'},"​")],-1)),e[1]||(e[1]=a("h2",{id:"基本用法",tabindex:"-1"},[r("基本用法 "),a("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),n(t,null,{default:l(()=>[n(o(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(v)},{vue:l(()=>[n(_)]),_:1},8,["vueCode"])]),_:1})])}}});export{V as __pageData,x as default};
