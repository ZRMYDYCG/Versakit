import{w as m}from"./chunks/theme.B-FNYTZS.js";import{d as h,p as x,b as c,o as s,k as l,_ as b,B as v,c as f,j as t,G as d,aq as Z,a as r,w as n}from"./chunks/framework.jWG7FAcU.js";import{Q as u}from"./chunks/index.B5U2ewO1.js";const W=`<template>
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea } from '@versakit/ui'
const textarea = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,_=h({__name:"maxlength",setup(i){const o=x("");return(e,a)=>(s(),c(l(m),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p),maxlength:10,placeholder:"请输入内容"},null,8,["modelValue"]))}}),X=b(_,[["__scopeId","data-v-1a6b3033"]]),B=`<template>
  <VerTextarea disabled placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { VerTextarea } from '@versakit/ui'
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,y=h({__name:"disabled",setup(i){return(o,e)=>(s(),c(l(m),{disabled:"",placeholder:"请输入内容"}))}}),V=b(y,[["__scopeId","data-v-b165ddb4"]]),T=`<template>
  <VerTextarea v-model="textareaVal" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea } from '@versakit/ui'
const textareaVal = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,C=h({__name:"base",setup(i){const o=x("");return(e,a)=>(s(),c(l(m),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p),placeholder:"请输入内容"},null,8,["modelValue"]))}}),A=b(C,[["__scopeId","data-v-35239ebd"]]),z=JSON.parse('{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}'),g={name:"components/textarea/index.md"},G=Object.assign(g,{setup(i){return(o,e)=>{const a=v("ClientOnly");return s(),f("div",null,[e[0]||(e[0]=t("h1",{id:"textarea-文本域",tabindex:"-1"},[r("TextArea 文本域 "),t("a",{class:"header-anchor",href:"#textarea-文本域","aria-label":'Permalink to "TextArea 文本域"'},"​")],-1)),e[1]||(e[1]=t("p",null,"多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。",-1)),e[2]||(e[2]=t("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=t("p",null,"用于多行输入。",-1)),d(a,null,{default:n(()=>[d(l(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(T)},{vue:n(()=>[d(A)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[5]||(e[5]=t("p",null,[r("使用 "),t("code",null,"disabled"),r(" 属性设置不可点击。")],-1)),d(a,null,{default:n(()=>[d(l(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(B)},{vue:n(()=>[d(V)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"限制长度",tabindex:"-1"},[r("限制长度 "),t("a",{class:"header-anchor",href:"#限制长度","aria-label":'Permalink to "限制长度"'},"​")],-1)),e[7]||(e[7]=t("p",null,[r("使用 "),t("code",null,"maxlength"),r(" 属性限制最大输入长度。")],-1)),d(a,null,{default:n(()=>[d(l(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(W)},{vue:n(()=>[d(X)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=Z("",3))])}}});export{z as __pageData,G as default};
