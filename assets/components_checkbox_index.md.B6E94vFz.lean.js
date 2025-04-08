import{d as b,p as m,c as v,o as u,j as o,G as t,k as n,w as s,a as l,_ as h,B as x,a5 as f,a6 as k}from"./chunks/framework.B3Jz-8p0.js";import{D as r,A as _}from"./chunks/theme.DKFx6c4r.js";import{d as V,f as g}from"./chunks/index.BbNYUtVF.js";const C=`<script setup lang="ts">
import { ref } from 'vue'
import { VerCheckbox, VerCheckboxGroup } from '@versakit/ui'

const checked = ref(false)
const groupValue = ref<string[]>([])
<\/script>

<template>
  <div class="checkbox-demo">
    <div class="demo-section">
      <h3 class="demo-title">基础用法</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked">选项</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">禁用状态</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked" disabled>禁用</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">半选状态</h3>
      <div class="demo-content">
        <ver-checkbox v-model="checked" indeterminate>半选</ver-checkbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">复选框组</h3>
      <div class="demo-content">
        <ver-checkbox-group v-model="groupValue">
          <ver-checkbox value="1">选项1</ver-checkbox>
          <ver-checkbox value="2">选项2</ver-checkbox>
          <ver-checkbox value="3" disabled>选项3</ver-checkbox>
          <ver-checkbox value="4">选项4</ver-checkbox>
        </ver-checkbox-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

.demo-content {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
</style>
`,B={class:"checkbox-demo"},X={class:"demo-section"},y={class:"demo-content"},W={class:"demo-section"},Z={class:"demo-content"},D={class:"demo-section"},N={class:"demo-content"},Y={class:"demo-section"},w={class:"demo-content"},z=b({__name:"base",setup(p){const d=m(!1),c=m([]);return(a,e)=>(u(),v("div",B,[o("div",X,[e[5]||(e[5]=o("h3",{class:"demo-title"},"基础用法",-1)),o("div",y,[t(n(r),{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=i=>d.value=i)},{default:s(()=>e[4]||(e[4]=[l("选项")])),_:1},8,["modelValue"])])]),o("div",W,[e[7]||(e[7]=o("h3",{class:"demo-title"},"禁用状态",-1)),o("div",Z,[t(n(r),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=i=>d.value=i),disabled:""},{default:s(()=>e[6]||(e[6]=[l("禁用")])),_:1},8,["modelValue"])])]),o("div",D,[e[9]||(e[9]=o("h3",{class:"demo-title"},"半选状态",-1)),o("div",N,[t(n(r),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=i=>d.value=i),indeterminate:""},{default:s(()=>e[8]||(e[8]=[l("半选")])),_:1},8,["modelValue"])])]),o("div",Y,[e[14]||(e[14]=o("h3",{class:"demo-title"},"复选框组",-1)),o("div",w,[t(n(_),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=i=>c.value=i)},{default:s(()=>[t(n(r),{value:"1"},{default:s(()=>e[10]||(e[10]=[l("选项1")])),_:1}),t(n(r),{value:"2"},{default:s(()=>e[11]||(e[11]=[l("选项2")])),_:1}),t(n(r),{value:"3",disabled:""},{default:s(()=>e[12]||(e[12]=[l("选项3")])),_:1}),t(n(r),{value:"4"},{default:s(()=>e[13]||(e[13]=[l("选项4")])),_:1})]),_:1},8,["modelValue"])])])]))}}),A=h(z,[["__scopeId","data-v-888fa9a3"]]),O=JSON.parse('{"title":"CheckBox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox/index.md","filePath":"components/checkbox/index.md"}'),S={name:"components/checkbox/index.md"},P=Object.assign(S,{setup(p){const d=m(!0);return(c,a)=>{const e=x("ClientOnly");return u(),v("div",null,[a[1]||(a[1]=o("h1",{id:"checkbox-复选框",tabindex:"-1"},[l("CheckBox 复选框 "),o("a",{class:"header-anchor",href:"#checkbox-复选框","aria-label":'Permalink to "CheckBox 复选框"'},"​")],-1)),a[2]||(a[2]=o("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(t(n(V),null,null,512),[[k,d.value]]),t(e,null,{default:s(()=>[t(n(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{d.value=!1}),vueCode:n(C)},{vue:s(()=>[t(A)]),_:1},8,["vueCode"])]),_:1})])}}});export{O as __pageData,P as default};
