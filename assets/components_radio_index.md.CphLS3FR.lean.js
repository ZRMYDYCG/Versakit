import{D as s}from"./chunks/theme.uDsgHOqn.js";import{d as v,p as f,c as u,o as m,G as o,k as l,w as r,a as n,B as h,j as d,aw as V}from"./chunks/framework.BrE8sLAv.js";import{Q as b}from"./chunks/index.CmMjEtxm.js";const c=`<template>
  <div>
    <VerRadio disabled label="1" v-model="gender">男</VerRadio>
    <VerRadio disabled label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,B=v({__name:"disabled",setup(p){const a=f(1);return(t,e)=>(m(),u("div",null,[o(l(s),{disabled:"",label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:r(()=>e[2]||(e[2]=[n("男")])),_:1},8,["modelValue"]),o(l(s),{disabled:"",label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:r(()=>e[3]||(e[3]=[n("女")])),_:1},8,["modelValue"])]))}}),C=`<template>
  <div>
    <VerRadio label="1" v-model="gender">男</VerRadio>
    <VerRadio label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,_=v({__name:"base",setup(p){const a=f(1);return(t,e)=>(m(),u("div",null,[o(l(s),{label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:r(()=>e[2]||(e[2]=[n("男")])),_:1},8,["modelValue"]),o(l(s),{label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:r(()=>e[3]||(e[3]=[n("女")])),_:1},8,["modelValue"])]))}}),D=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),g={name:"components/radio/index.md"},R=Object.assign(g,{setup(p){return(a,t)=>{const e=h("ClientOnly");return m(),u("div",null,[t[0]||(t[0]=d("h1",{id:"radio-单选框",tabindex:"-1"},[n("Radio 单选框 "),d("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),t[1]||(t[1]=d("p",null,"在一组备选项中进行单选。",-1)),t[2]||(t[2]=d("h2",{id:"基础使用",tabindex:"-1"},[n("基础使用 "),d("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),t[3]||(t[3]=d("p",null,"单选框的基本使用。",-1)),o(e,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(C)},{vue:r(()=>[o(_)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=d("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),t[5]||(t[5]=d("p",null,[d("code",null,"disabled"),n(" 属性可以用来控制单选框的禁用状态。")],-1)),o(e,null,{default:r(()=>[o(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(c)},{vue:r(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=V("",3))])}}});export{D as __pageData,R as default};
