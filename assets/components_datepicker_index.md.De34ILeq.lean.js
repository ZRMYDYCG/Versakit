import{J as m}from"./chunks/theme.C6BEB8ch.js";import{d as u,p as b,c as s,o as i,j as e,G as r,k as o,t as v,_ as f,B as h,a as d,w as l}from"./chunks/framework.CYu56ZLI.js";import{Q as x}from"./chunks/index.B77M7Ljq.js";const _=`<script setup lang="ts">
import { ref } from 'vue'
import { VerDataPicker } from '@versakit/ui'

const selectedDate = ref<Date | null>(null)
<\/script>

<template>
  <div class="container">
    <div class="example-box">
      <VerDataPicker v-model="selectedDate" placeholder="选择日期" />
      <div>Selected date: {{ selectedDate }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
`,k={class:"container"},D={class:"example-box"},g=u({__name:"base",setup(c){const n=b(null);return(t,a)=>(i(),s("div",k,[e("div",D,[r(o(m),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),placeholder:"选择日期"},null,8,["modelValue"]),e("div",null,"Selected date: "+v(n.value),1)])]))}}),y=f(g,[["__scopeId","data-v-e73f7fa2"]]),V=JSON.parse('{"title":"Date Picker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/datepicker/index.md","filePath":"components/datepicker/index.md"}'),B={name:"components/datepicker/index.md"},X=Object.assign(B,{setup(c){return(n,t)=>{const a=h("ClientOnly");return i(),s("div",null,[t[0]||(t[0]=e("h1",{id:"date-picker-日期选择器",tabindex:"-1"},[d("Date Picker 日期选择器 "),e("a",{class:"header-anchor",href:"#date-picker-日期选择器","aria-label":'Permalink to "Date Picker 日期选择器"'},"​")],-1)),t[1]||(t[1]=e("h2",{id:"基本用法",tabindex:"-1"},[d("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),r(a,null,{default:l(()=>[r(o(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(_)},{vue:l(()=>[r(y)]),_:1},8,["vueCode"])]),_:1})])}}});export{V as __pageData,X as default};
