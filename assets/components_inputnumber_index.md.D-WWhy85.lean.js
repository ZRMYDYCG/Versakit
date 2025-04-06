import{v as s}from"./chunks/theme.uDsgHOqn.js";import{d as v,p as i,c as b,o as h,F as x,j as e,G as n,k as r,t as u,_ as f,B as _,aw as V,a as m,w as p}from"./chunks/framework.BrE8sLAv.js";import{Q as y}from"./chunks/index.CmMjEtxm.js";const N=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputNumber } from '@versakit/ui'

const numberValue = ref(1)
const decimalValue = ref(0.5)
<\/script>

<template>
  <div class="example-box">
    <h3>整数输入示例</h3>
    <VerInputNumber v-model="numberValue" :min="0" :max="10" :step="1" />
    <div>当前值: {{ numberValue }}</div>
  </div>

  <div class="example-box">
    <h3>小数输入示例</h3>
    <VerInputNumber
      v-model="decimalValue"
      :min="0"
      :max="1"
      :step="0.1"
      :precision="1"
    />
    <div>当前值: {{ decimalValue }}</div>
  </div>
</template>

<style scoped>
.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
`,X={class:"example-box"},C={class:"example-box"},W=v({__name:"base",setup(c){const a=i(1),t=i(.5);return(o,d)=>(h(),b(x,null,[e("div",X,[d[2]||(d[2]=e("h3",null,"整数输入示例",-1)),n(r(s),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=l=>a.value=l),min:0,max:10,step:1},null,8,["modelValue"]),e("div",null,"当前值: "+u(a.value),1)]),e("div",C,[d[3]||(d[3]=e("h3",null,"小数输入示例",-1)),n(r(s),{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=l=>t.value=l),min:0,max:1,step:.1,precision:1},null,8,["modelValue"]),e("div",null,"当前值: "+u(t.value),1)])],64))}}),B=f(W,[["__scopeId","data-v-68273570"]]),T=JSON.parse('{"title":"InputNumber 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputnumber/index.md","filePath":"components/inputnumber/index.md"}'),I={name:"components/inputnumber/index.md"},D=Object.assign(I,{setup(c){return(a,t)=>{const o=_("ClientOnly");return h(),b("div",null,[t[0]||(t[0]=e("h1",{id:"inputnumber-数字输入框",tabindex:"-1"},[m("InputNumber 数字输入框 "),e("a",{class:"header-anchor",href:"#inputnumber-数字输入框","aria-label":'Permalink to "InputNumber 数字输入框"'},"​")],-1)),t[1]||(t[1]=e("p",null,"仅允许输入标准的数字值，可定义范围",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[m("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(o,null,{default:p(()=>[n(r(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(N)},{vue:p(()=>[n(B)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=V("",4))])}}});export{T as __pageData,D as default};
