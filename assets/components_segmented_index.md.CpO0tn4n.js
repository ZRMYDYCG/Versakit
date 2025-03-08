import{t as u}from"./chunks/theme.BVQpW6pN.js";import{d as f,p as r,c,o as v,G as a,j as t,k as o,t as i,B as g,a as m,w as p}from"./chunks/framework.B9s_fTIu.js";import{Q as _}from"./chunks/index.Cnf2THuG.js";const h=`<script setup lang="ts">
import { ref } from 'vue'
import { VerSegmented } from '@versakit/ui'

const selectedValue = ref('苹果')
const options = [
  { label: '苹果', value: '苹果' },
  { label: '芒果', value: '芒果' },
  { label: '西瓜', value: '西瓜' },
]

const selectedValue2 = ref('苹果1')
const options2 = [
  { label: '苹果1', value: '苹果1' },
  { label: '芒果1', value: '芒果1' },
  { label: '西瓜1', value: '西瓜1' },
]
<\/script>

<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <p class="selected-value">选择值: {{ selectedValue }}</p>

    <VerSegmented v-model="selectedValue2" :options="options2"></VerSegmented>

    <p class="selected-value">选择值: {{ selectedValue2 }}</p>
  </div>
</template>
`,B={class:"selected-value"},C={class:"selected-value"},x=f({__name:"base",setup(b){const n=r("苹果"),e=[{label:"苹果",value:"苹果"},{label:"芒果",value:"芒果"},{label:"西瓜",value:"西瓜"}],l=r("苹果1"),V=[{label:"苹果1",value:"苹果1"},{label:"芒果1",value:"芒果1"},{label:"西瓜1",value:"西瓜1"}];return(k,s)=>(v(),c("div",null,[a(o(u),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=d=>n.value=d),options:e},null,8,["modelValue"]),t("p",B,"选择值: "+i(n.value),1),a(o(u),{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=d=>l.value=d),options:V},null,8,["modelValue"]),t("p",C,"选择值: "+i(l.value),1)]))}}),w=JSON.parse('{"title":"Segmented 分段控制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}'),S={name:"components/segmented/index.md"},A=Object.assign(S,{setup(b){return(n,e)=>{const l=g("ClientOnly");return v(),c("div",null,[e[0]||(e[0]=t("h1",{id:"segmented-分段控制器",tabindex:"-1"},[m("Segmented 分段控制器 "),t("a",{class:"header-anchor",href:"#segmented-分段控制器","aria-label":'Permalink to "Segmented 分段控制器"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基本使用",tabindex:"-1"},[m("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),a(l,null,{default:p(()=>[a(o(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(h)},{vue:p(()=>[a(x)]),_:1},8,["vueCode"])]),_:1})])}}});export{w as __pageData,A as default};
