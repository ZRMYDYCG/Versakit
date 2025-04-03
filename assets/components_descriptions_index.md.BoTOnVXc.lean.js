import{s as m,d as i,e as p}from"./chunks/theme.C6BEB8ch.js";import{d as D,p as g,B as z,c as v,o as V,F as I,j as a,G as t,w as l,a as o,k as s,b as c}from"./chunks/framework.CYu56ZLI.js";import{Q as f}from"./chunks/index.B77M7Ljq.js";const k=`<script setup lang="ts">
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
`,W={style:{"margin-bottom":"20px"}},A=D({__name:"direction",setup(b){const n=g("default");return(r,e)=>{const d=z("VerRadio");return V(),v(I,null,[a("div",W,[t(d,{label:"small",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u)},{default:l(()=>e[3]||(e[3]=[o("small")])),_:1},8,["modelValue"]),t(d,{label:"default",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=u=>n.value=u)},{default:l(()=>e[4]||(e[4]=[o("default")])),_:1},8,["modelValue"]),t(d,{label:"large",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=u=>n.value=u)},{default:l(()=>e[5]||(e[5]=[o("large")])),_:1},8,["modelValue"])]),t(s(m),{title:"Vertical list with border",direction:"vertical",column:4,size:n.value,border:""},{default:l(()=>[t(s(i),{label:"Username"},{default:l(()=>e[6]||(e[6]=[o("kooriookami")])),_:1}),t(s(i),{label:"Telephone"},{default:l(()=>e[7]||(e[7]=[o("18100000000")])),_:1}),t(s(i),{label:"Place",colspan:2},{default:l(()=>e[8]||(e[8]=[o("Suzhou")])),_:1}),t(s(i),{label:"Remarks"},{default:l(()=>[t(s(p),{size:"small"},{default:l(()=>e[9]||(e[9]=[o("School")])),_:1})]),_:1}),t(s(i),{label:"Address"},{default:l(()=>e[10]||(e[10]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=a("div",{style:{"margin-bottom":"20px"}},null,-1)),t(s(m),{title:"Vertical list without border",column:4,size:n.value,direction:"vertical"},{default:l(()=>[t(s(i),{label:"Username"},{default:l(()=>e[11]||(e[11]=[o("kooriookami")])),_:1}),t(s(i),{label:"Telephone"},{default:l(()=>e[12]||(e[12]=[o("18100000000")])),_:1}),t(s(i),{label:"Place",colspan:2},{default:l(()=>e[13]||(e[13]=[o("Suzhou")])),_:1}),t(s(i),{label:"Remarks"},{default:l(()=>[t(s(p),{size:"small"},{default:l(()=>e[14]||(e[14]=[o("School")])),_:1})]),_:1}),t(s(i),{label:"Address"},{default:l(()=>e[15]||(e[15]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),x=`<script setup lang="ts">
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
`,T={style:{"margin-bottom":"20px"}},S=D({__name:"size",setup(b){const n=g("default");return(r,e)=>{const d=z("VerRadio");return V(),v(I,null,[a("div",T,[t(d,{label:"small",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u)},{default:l(()=>e[3]||(e[3]=[o("small")])),_:1},8,["modelValue"]),t(d,{label:"default",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=u=>n.value=u)},{default:l(()=>e[4]||(e[4]=[o("default")])),_:1},8,["modelValue"]),t(d,{label:"large",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=u=>n.value=u)},{default:l(()=>e[5]||(e[5]=[o("large")])),_:1},8,["modelValue"])]),t(s(m),{title:"User Info",extra:"extra",size:n.value,border:""},{default:l(()=>[t(s(i),{label:"Username"},{default:l(()=>e[6]||(e[6]=[o("kooriookami")])),_:1}),t(s(i),{label:"Telephone"},{default:l(()=>e[7]||(e[7]=[o("18100000000")])),_:1}),t(s(i),{label:"Place"},{default:l(()=>e[8]||(e[8]=[o("Suzhou")])),_:1}),t(s(i),{label:"Remarks"},{default:l(()=>[t(s(p),{size:"small"},{default:l(()=>e[9]||(e[9]=[o("School")])),_:1})]),_:1}),t(s(i),{label:"Address"},{default:l(()=>e[10]||(e[10]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"]),e[16]||(e[16]=a("div",{style:{"margin-bottom":"20px"}},null,-1)),t(s(m),{title:"User Info",extra:"extra",size:n.value},{default:l(()=>[t(s(i),{label:"Username"},{default:l(()=>e[11]||(e[11]=[o("kooriookami")])),_:1}),t(s(i),{label:"Telephone"},{default:l(()=>e[12]||(e[12]=[o("18100000000")])),_:1}),t(s(i),{label:"Place"},{default:l(()=>e[13]||(e[13]=[o("Suzhou")])),_:1}),t(s(i),{label:"Remarks"},{default:l(()=>[t(s(p),{size:"small"},{default:l(()=>e[14]||(e[14]=[o("School")])),_:1})]),_:1}),t(s(i),{label:"Address"},{default:l(()=>e[15]||(e[15]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1},8,["size"])],64)}}}),h=`<script setup lang="ts">
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
`,B=D({__name:"base",setup(b){return(n,r)=>(V(),c(s(m),{title:"User Info",extra:"extra"},{default:l(()=>[t(s(i),{label:"Username"},{default:l(()=>r[0]||(r[0]=[o("kooriookami")])),_:1}),t(s(i),{label:"Telephone"},{default:l(()=>r[1]||(r[1]=[o("18100000000")])),_:1}),t(s(i),{label:"Place"},{default:l(()=>r[2]||(r[2]=[o("Suzhou")])),_:1}),t(s(i),{label:"Remarks"},{default:l(()=>[t(s(p),{size:"small"},{default:l(()=>r[3]||(r[3]=[o("School")])),_:1})]),_:1}),t(s(i),{label:"Address"},{default:l(()=>r[4]||(r[4]=[o(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")])),_:1})]),_:1}))}}),y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/descriptions/index.md","filePath":"components/descriptions/index.md"}'),R={name:"components/descriptions/index.md"},N=Object.assign(R,{setup(b){return(n,r)=>{const e=z("ClientOnly");return V(),v("div",null,[r[0]||(r[0]=a("h2",{id:"descriptions-描述列表",tabindex:"-1"},[o("Descriptions 描述列表 "),a("a",{class:"header-anchor",href:"#descriptions-描述列表","aria-label":'Permalink to "Descriptions 描述列表"'},"​")],-1)),r[1]||(r[1]=a("p",null,"列表形式展示多个字段。",-1)),r[2]||(r[2]=a("h3",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t(e,null,{default:l(()=>[t(s(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(h)},{vue:l(()=>[t(B)]),_:1},8,["vueCode"])]),_:1}),r[3]||(r[3]=a("h3",{id:"不同尺寸",tabindex:"-1"},[o("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":'Permalink to "不同尺寸"'},"​")],-1)),t(e,null,{default:l(()=>[t(s(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(x)},{vue:l(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),r[4]||(r[4]=a("h3",{id:"垂直列表",tabindex:"-1"},[o("垂直列表 "),a("a",{class:"header-anchor",href:"#垂直列表","aria-label":'Permalink to "垂直列表"'},"​")],-1)),t(e,null,{default:l(()=>[t(s(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(k)},{vue:l(()=>[t(A)]),_:1},8,["vueCode"])]),_:1})])}}});export{y as __pageData,N as default};
