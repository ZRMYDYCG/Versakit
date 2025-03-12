import{n as m}from"./chunks/theme.CxaPNF_1.js";import{d as c,p as h,b as v,o as p,k as n,B as f,c as b,j as o,G as l,a as u,w as s}from"./chunks/framework.D0tLR0bK.js";import{Q as i}from"./chunks/index.BULxsYUw.js";const V=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('1234')
<\/script>

<template>
  <VerInputOtp disabled v-model="otpValue" />
</template>
`,B=c({__name:"disabled",setup(d){const a=h("1234");return(t,e)=>(p(),v(n(m),{disabled:"",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},null,8,["modelValue"]))}}),_=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VerInputOtp placeholder="*" v-model="otpValue" />
</template>

<style></style>
`,C=c({__name:"placeholder",setup(d){const a=h("");return(t,e)=>(p(),v(n(m),{placeholder:"*",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},null,8,["modelValue"]))}}),W=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VerInputOtp :length="4" v-model="otpValue" />
</template>

<style></style>
`,X=c({__name:"length",setup(d){const a=h("");return(t,e)=>(p(),v(n(m),{length:4,modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},null,8,["modelValue"]))}}),A=`<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('')
<\/script>

<template>
  <VerInputOtp v-model="otpValue" />
</template>

<style></style>
`,D=c({__name:"base",setup(d){const a=h("");return(t,e)=>(p(),v(n(m),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=r=>a.value=r)},null,8,["modelValue"]))}}),x=JSON.parse('{"title":"InputOtp 个人识别码","description":"","frontmatter":{},"headers":[],"relativePath":"components/inputotp/index.md","filePath":"components/inputotp/index.md"}'),Z={name:"components/inputotp/index.md"},w=Object.assign(Z,{setup(d){return(a,t)=>{const e=f("ClientOnly");return p(),b("div",null,[t[0]||(t[0]=o("h1",{id:"inputotp-个人识别码",tabindex:"-1"},[u("InputOtp 个人识别码 "),o("a",{class:"header-anchor",href:"#inputotp-个人识别码","aria-label":'Permalink to "InputOtp 个人识别码"'},"​")],-1)),t[1]||(t[1]=o("h2",{id:"基本使用",tabindex:"-1"},[u("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),l(e,null,{default:s(()=>[l(n(i),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(A)},{vue:s(()=>[l(D)]),_:1},8,["vueCode"])]),_:1}),t[2]||(t[2]=o("h2",{id:"自定义长度-4位",tabindex:"-1"},[u("自定义长度 (4位) "),o("a",{class:"header-anchor",href:"#自定义长度-4位","aria-label":'Permalink to "自定义长度 (4位)"'},"​")],-1)),l(e,null,{default:s(()=>[l(n(i),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(W)},{vue:s(()=>[l(X)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=o("h2",{id:"自定义占位符",tabindex:"-1"},[u("自定义占位符 "),o("a",{class:"header-anchor",href:"#自定义占位符","aria-label":'Permalink to "自定义占位符"'},"​")],-1)),l(e,null,{default:s(()=>[l(n(i),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(_)},{vue:s(()=>[l(C)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=o("h2",{id:"禁用状态",tabindex:"-1"},[u("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),l(e,null,{default:s(()=>[l(n(i),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(V)},{vue:s(()=>[l(B)]),_:1},8,["vueCode"])]),_:1})])}}});export{x as __pageData,w as default};
