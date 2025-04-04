import{d as g,p as I,B as k,c as W,o as V,F as c,j as a,G as l,w as t,a as o,k as s,b as A,a5 as f,a6 as v}from"./chunks/framework.DgG_RYdR.js";import{s as m,d as r,e as p}from"./chunks/theme.BN5ATFS7.js";import{d as D,f as z}from"./chunks/index.CrgVH6Ra.js";const x=`<script setup lang="ts">
import { ref } from 'vue'
import { VerDescriptions, VerDescriptionsItem, VerTag } from '@versakit/ui'

const size = ref('default')
<\/script>

<template>
  <div style="margin-bottom: 20px">
    <VerRadio label="small" v-model="size">small</VerRadio>
    <VerRadio label="default" v-model="size">default</VerRadio>
    <VerRadio label="large" v-model="size">large</VerRadio>
  </div>
  <VerDescriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place" :colspan="2">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VerDescriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
  >
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place" :colspan="2">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
</template>
`,T={style:{"margin-bottom":"20px"}},S=g({__name:"direction",setup(b){const i=I("default");return(n,e)=>{const u=k("VerRadio");return V(),W(c,null,[a("div",T,[l(u,{label:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d)},{default:t(()=>e[3]||(e[3]=[o("small")])),_:1},8,["modelValue"]),l(u,{label:"default",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=d=>i.value=d)},{default:t(()=>e[4]||(e[4]=[o("default")])),_:1},8,["modelValue"]),l(u,{label:"large",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=d=>i.value=d)},{default:t(()=>e[5]||(e[5]=[o("large")])),_:1},8,["modelValue"])]),l(s(m),{title:"Vertical list with border",direction:"vertical",column:4,size:i.value,border:""},{default:t(()=>[l(s(r),{label:"Username"},{default:t(()=>e[6]||(e[6]=[o("kooriookami")])),_:1}),l(s(r),{label:"Telephone"},{default:t(()=>e[7]||(e[7]=[o("18100000000")])),_:1}),l(s(r),{label:"Place",colspan:2},{default:t(()=>e[8]||(e[8]=[o("Suzhou")])),_:1}),l(s(r),{label:"Remarks"},{default:t(()=>[l(s(p),{size:"small"},{default:t(()=>e[9]||(e[9]=[o("School")])),_:1})]),_:1}),l(s(r),{label:"Address"},{default:t(()=>e[10]||(e[10]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=a("div",{style:{"margin-bottom":"20px"}},null,-1)),l(s(m),{title:"Vertical list without border",column:4,size:i.value,direction:"vertical"},{default:t(()=>[l(s(r),{label:"Username"},{default:t(()=>e[11]||(e[11]=[o("kooriookami")])),_:1}),l(s(r),{label:"Telephone"},{default:t(()=>e[12]||(e[12]=[o("18100000000")])),_:1}),l(s(r),{label:"Place",colspan:2},{default:t(()=>e[13]||(e[13]=[o("Suzhou")])),_:1}),l(s(r),{label:"Remarks"},{default:t(()=>[l(s(p),{size:"small"},{default:t(()=>e[14]||(e[14]=[o("School")])),_:1})]),_:1}),l(s(r),{label:"Address"},{default:t(()=>e[15]||(e[15]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),h=`<script setup lang="ts">
import { ref } from 'vue'
import { VerDescriptions, VerDescriptionsItem, VerTag } from '@versakit/ui'

const size = ref('default')
<\/script>

<template>
  <div style="margin-bottom: 20px">
    <VerRadio label="small" v-model="size">small</VerRadio>
    <VerRadio label="default" v-model="size">default</VerRadio>
    <VerRadio label="large" v-model="size">large</VerRadio>
  </div>
  <VerDescriptions title="User Info" extra="extra" :size="size" border>
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
  <div style="margin-bottom: 20px"></div>
  <VerDescriptions title="User Info" extra="extra" :size="size">
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
</template>
`,B={style:{"margin-bottom":"20px"}},R=g({__name:"size",setup(b){const i=I("default");return(n,e)=>{const u=k("VerRadio");return V(),W(c,null,[a("div",B,[l(u,{label:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d)},{default:t(()=>e[3]||(e[3]=[o("small")])),_:1},8,["modelValue"]),l(u,{label:"default",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=d=>i.value=d)},{default:t(()=>e[4]||(e[4]=[o("default")])),_:1},8,["modelValue"]),l(u,{label:"large",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=d=>i.value=d)},{default:t(()=>e[5]||(e[5]=[o("large")])),_:1},8,["modelValue"])]),l(s(m),{title:"User Info",extra:"extra",size:i.value,border:""},{default:t(()=>[l(s(r),{label:"Username"},{default:t(()=>e[6]||(e[6]=[o("kooriookami")])),_:1}),l(s(r),{label:"Telephone"},{default:t(()=>e[7]||(e[7]=[o("18100000000")])),_:1}),l(s(r),{label:"Place"},{default:t(()=>e[8]||(e[8]=[o("Suzhou")])),_:1}),l(s(r),{label:"Remarks"},{default:t(()=>[l(s(p),{size:"small"},{default:t(()=>e[9]||(e[9]=[o("School")])),_:1})]),_:1}),l(s(r),{label:"Address"},{default:t(()=>e[10]||(e[10]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=a("div",{style:{"margin-bottom":"20px"}},null,-1)),l(s(m),{title:"User Info",extra:"extra",size:i.value},{default:t(()=>[l(s(r),{label:"Username"},{default:t(()=>e[11]||(e[11]=[o("kooriookami")])),_:1}),l(s(r),{label:"Telephone"},{default:t(()=>e[12]||(e[12]=[o("18100000000")])),_:1}),l(s(r),{label:"Place"},{default:t(()=>e[13]||(e[13]=[o("Suzhou")])),_:1}),l(s(r),{label:"Remarks"},{default:t(()=>[l(s(p),{size:"small"},{default:t(()=>e[14]||(e[14]=[o("School")])),_:1})]),_:1}),l(s(r),{label:"Address"},{default:t(()=>e[15]||(e[15]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),C=`<script setup lang="ts">
import { VerDescriptions, VerDescriptionsItem, VerTag } from '@versakit/ui'
<\/script>

<template>
  <VerDescriptions title="User Info" extra="extra">
    <VerDescriptionsItem label="Username">kooriookami</VerDescriptionsItem>
    <VerDescriptionsItem label="Telephone">18100000000</VerDescriptionsItem>
    <VerDescriptionsItem label="Place">Suzhou</VerDescriptionsItem>
    <VerDescriptionsItem label="Remarks">
      <VerTag size="small">School</VerTag>
    </VerDescriptionsItem>
    <VerDescriptionsItem label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </VerDescriptionsItem>
  </VerDescriptions>
</template>
`,P=g({__name:"base",setup(b){return(i,n)=>(V(),A(s(m),{title:"User Info",extra:"extra"},{default:t(()=>[l(s(r),{label:"Username"},{default:t(()=>n[0]||(n[0]=[o("kooriookami")])),_:1}),l(s(r),{label:"Telephone"},{default:t(()=>n[1]||(n[1]=[o("18100000000")])),_:1}),l(s(r),{label:"Place"},{default:t(()=>n[2]||(n[2]=[o("Suzhou")])),_:1}),l(s(r),{label:"Remarks"},{default:t(()=>[l(s(p),{size:"small"},{default:t(()=>n[3]||(n[3]=[o("School")])),_:1})]),_:1}),l(s(r),{label:"Address"},{default:t(()=>n[4]||(n[4]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1}))}}),J=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/descriptions/index.md","filePath":"components/descriptions/index.md"}'),U={name:"components/descriptions/index.md"},Z=Object.assign(U,{setup(b){const i=I(!0);return(n,e)=>{const u=k("ClientOnly");return V(),W("div",null,[e[3]||(e[3]=a("h2",{id:"descriptions-描述列表",tabindex:"-1"},[o("Descriptions 描述列表 "),a("a",{class:"header-anchor",href:"#descriptions-描述列表","aria-label":'Permalink to "Descriptions 描述列表"'},"​")],-1)),e[4]||(e[4]=a("p",null,"列表形式展示多个字段。",-1)),e[5]||(e[5]=a("h3",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),f(l(s(D),null,null,512),[[v,i.value]]),l(u,null,{default:t(()=>[l(s(z),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:s(C)},{vue:t(()=>[l(P)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=a("h3",{id:"不同尺寸",tabindex:"-1"},[o("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),f(l(s(D),null,null,512),[[v,i.value]]),l(u,null,{default:t(()=>[l(s(z),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{i.value=!1}),vueCode:s(h)},{vue:t(()=>[l(R)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h3",{id:"垂直列表",tabindex:"-1"},[o("垂直列表 "),a("a",{class:"header-anchor",href:"#垂直列表","aria-label":'Permalink to "垂直列表"'},"​")],-1)),f(l(s(D),null,null,512),[[v,i.value]]),l(u,null,{default:t(()=>[l(s(z),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{i.value=!1}),vueCode:s(x)},{vue:t(()=>[l(S)]),_:1},8,["vueCode"])]),_:1})])}}});export{J as __pageData,Z as default};
