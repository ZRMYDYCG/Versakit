import{h as w,P as f}from"./chunks/theme.CQgGDvlX.js";import{d as h,p as m,c as V,o as p,G as n,k as o,_ as W,b as B,B as c,j as e,a as t,w as i}from"./chunks/framework.DWhRHyQt.js";import{Q as b}from"./chunks/index.80Y4sWw1.js";const C=`<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <VerSwitch :size="selectedValue" v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { VerSwitch, VerSegmented } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
const selectedValue = ref('md')

const options = [
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
`,x=h({__name:"size",setup(v){const s=m(!1),l=m("md"),a=[{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(d,u)=>(p(),V("div",null,[n(o(w),{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=r=>l.value=r),options:a},null,8,["modelValue"]),n(o(f),{size:l.value,modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=r=>s.value=r)},null,8,["size","modelValue"])]))}}),z=W(x,[["__scopeId","data-v-90fbdb74"]]),S=`<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
<\/script>
`,g=h({__name:"base",setup(v){const s=m(!1);return(l,a)=>(p(),B(o(f),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=d=>s.value=d)},null,8,["modelValue"]))}}),k={tabindex:"0"},N=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}'),D={name:"components/switch/index.md"},G=Object.assign(D,{setup(v){return(s,l)=>{const a=c("ClientOnly"),d=c("Tool");return p(),V("div",null,[l[6]||(l[6]=e("h1",{id:"switch-开关",tabindex:"-1"},[t("Switch 开关 "),e("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),l[7]||(l[7]=e("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1)),l[8]||(l[8]=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l[9]||(l[9]=e("p",null,[t("绑定 "),e("code",null,"v-model"),t(" 到一个 "),e("code",null,"Boolean"),t(" 类型的变量。")],-1)),n(a,null,{default:i(()=>[n(o(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(S)},{vue:i(()=>[n(g)]),_:1},8,["vueCode"])]),_:1}),l[10]||(l[10]=e("h2",{id:"尺寸",tabindex:"-1"},[t("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),l[11]||(l[11]=e("p",null,[t("可以通过 "),e("code",null,"size"),t(" 属性来设置 switch 的大小。")],-1)),n(a,null,{default:i(()=>[n(o(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(C)},{vue:i(()=>[n(z)]),_:1},8,["vueCode"])]),_:1}),l[12]||(l[12]=e("h2",{id:"switch-api",tabindex:"-1"},[t("Switch API "),e("a",{class:"header-anchor",href:"#switch-api","aria-label":'Permalink to "Switch API"'},"​")],-1)),e("table",k,[l[5]||(l[5]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[l[4]||(l[4]=e("tr",null,[e("td",null,[e("code",null,"v-model"),t(" / "),e("code",null,"modelValue")]),e("td",null,"绑定值"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),e("tr",null,[l[1]||(l[1]=e("td",null,[e("code",null,"size")],-1)),l[2]||(l[2]=e("td",null,"设置尺寸",-1)),e("td",null,[l[0]||(l[0]=e("code",null,"enum",-1)),n(d,{value:"lg,md,sm"})]),l[3]||(l[3]=e("td",null,"md",-1))])])])])}}});export{N as __pageData,G as default};
