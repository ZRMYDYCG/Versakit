import{i as r}from"./chunks/theme.DCe5qy_u.js";import{d as C,p as i,c,o as h,G as a,k as t,B as V,j as d,a as p,w as v}from"./chunks/framework.B9s_fTIu.js";import{Q as b}from"./chunks/index.Cnf2THuG.js";const g=`<script setup lang="ts">
import { VerSlider } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(0)
const value2 = ref(20)
const value3 = ref(50)

const handleChange = (val: number) => {
  console.log('Changed:', val)
}
<\/script>

<template>
  <div>
    <VerSlider v-model="value" />

    <VerSlider
      v-model="value2"
      :min="0"
      :max="200"
      :step="5"
      @change="handleChange"
    />

    <VerSlider v-model="value3" disabled @change="handleChange" />
  </div>
</template>
`,x=C({__name:"base",setup(f){const s=i(0),e=i(20),o=i(50),u=m=>{console.log("Changed:",m)};return(m,n)=>(h(),c("div",null,[a(t(r),{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l)},null,8,["modelValue"]),a(t(r),{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value=l),min:0,max:200,step:5,onChange:u},null,8,["modelValue"]),a(t(r),{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=l=>o.value=l),disabled:"",onChange:u},null,8,["modelValue"])]))}}),D=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}'),_={name:"components/slider/index.md"},W=Object.assign(_,{setup(f){return(s,e)=>{const o=V("ClientOnly");return h(),c("div",null,[e[0]||(e[0]=d("h1",{id:"slider-滑块",tabindex:"-1"},[p("Slider 滑块 "),d("a",{class:"header-anchor",href:"#slider-滑块","aria-label":'Permalink to "Slider 滑块"'},"​")],-1)),e[1]||(e[1]=d("h2",{id:"基本用法",tabindex:"-1"},[p("基本用法 "),d("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),a(o,null,{default:v(()=>[a(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(g)},{vue:v(()=>[a(x)]),_:1},8,["vueCode"])]),_:1})])}}});export{D as __pageData,W as default};
