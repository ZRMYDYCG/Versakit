import{p as r}from"./chunks/theme.C6BEB8ch.js";import{d as g,p as i,c as h,o as c,G as l,j as t,k as s,t as u,B as V,at as f,a as m,w as p}from"./chunks/framework.CYu56ZLI.js";import{Q as _}from"./chunks/index.B77M7Ljq.js";const S=`<script setup lang="ts">
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
`,x={class:"selected-value"},k={class:"selected-value"},y=g({__name:"base",setup(b){const n=i("苹果"),e=[{label:"苹果",value:"苹果"},{label:"芒果",value:"芒果"},{label:"西瓜",value:"西瓜"}],a=i("苹果1"),v=[{label:"苹果1",value:"苹果1"},{label:"芒果1",value:"芒果1"},{label:"西瓜1",value:"西瓜1"}];return(P,d)=>(c(),h("div",null,[l(s(r),{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=o=>n.value=o),options:e},null,8,["modelValue"]),t("p",x,"选择值: "+u(n.value),1),l(s(r),{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=o=>a.value=o),options:v},null,8,["modelValue"]),t("p",k,"选择值: "+u(a.value),1)]))}}),q=JSON.parse('{"title":"Segmented 分段控制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}'),C={name:"components/segmented/index.md"},D=Object.assign(C,{setup(b){return(n,e)=>{const a=V("ClientOnly");return c(),h("div",null,[e[0]||(e[0]=t("h1",{id:"segmented-分段控制器",tabindex:"-1"},[m("Segmented 分段控制器 "),t("a",{class:"header-anchor",href:"#segmented-分段控制器","aria-label":'Permalink to "Segmented 分段控制器"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基本使用",tabindex:"-1"},[m("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),l(a,null,{default:p(()=>[l(s(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(S)},{vue:p(()=>[l(y)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=f('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="segmented-props" tabindex="-1">Segmented Props <a class="header-anchor" href="#segmented-props" aria-label="Permalink to &quot;Segmented Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>modelValue</td><td>string | number</td><td>-</td><td>当前选中值</td></tr><tr><td>options</td><td>Array&lt;string | { label: string, value: string | number }&gt;</td><td>[]</td><td>选项配置</td></tr><tr><td>size</td><td>string</td><td>&#39;default&#39;</td><td>尺寸：small/default/large</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events <a class="header-anchor" href="#segmented-events" aria-label="Permalink to &quot;Segmented Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选项改变时触发</td><td>当前选中值</td></tr></tbody></table><h3 id="segmented-slots" tabindex="-1">Segmented Slots <a class="header-anchor" href="#segmented-slots" aria-label="Permalink to &quot;Segmented Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义选项内容</td></tr></tbody></table>',7))])}}});export{q as __pageData,D as default};
