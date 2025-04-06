import{Z as m,q as s}from"./chunks/theme.uDsgHOqn.js";import{d as f,c as i,o as u,j as l,G as t,k as o,w as n,a as r,_ as w,B as D}from"./chunks/framework.BrE8sLAv.js";import{Q as v}from"./chunks/index.CmMjEtxm.js";const I=`<script setup lang="ts">
import { VerDropdownMenu, VerDropdownMenuItem } from '@versakit/ui'

const handleSelect = (value: string) => {
  console.log('Selected:', value)
}
<\/script>

<template>
  <div class="container">
    <div class="menu-group">
      <!-- Bottom (Default) -->
      <VerDropdownMenu>
        <template #trigger>
          <span>Click me</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('Item 1')">
          Item 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('Item 2')">
          Item 2
        </VerDropdownMenuItem>
        <VerDropdownMenuItem disabled>Disabled Item</VerDropdownMenuItem>
      </VerDropdownMenu>

      <!-- Top -->
      <VerDropdownMenu placement="top" class="ml-4">
        <template #trigger>
          <span>Top Dropdown</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('Top 1')">
          Top Item 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('Top 2')">
          Top Item 2
        </VerDropdownMenuItem>
      </VerDropdownMenu>

      <!-- Bottom Right -->
      <VerDropdownMenu placement="bottom-right" class="ml-4">
        <template #trigger>
          <span>Bottom Right</span>
        </template>

        <VerDropdownMenuItem @select="handleSelect('BR 1')">
          Bottom Right 1
        </VerDropdownMenuItem>
        <VerDropdownMenuItem @select="handleSelect('BR 2')">
          Bottom Right 2
        </VerDropdownMenuItem>
      </VerDropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.divider {
  height: 1px;
  background: #eee;
  width: 100%;
}

.menu-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.ml-4 {
  margin-left: 1rem;
}
</style>
`,b={class:"container"},V={class:"menu-group"},B=f({__name:"base",setup(g){const d=p=>{console.log("Selected:",p)};return(p,e)=>(u(),i("div",b,[l("div",V,[t(o(m),null,{trigger:n(()=>e[6]||(e[6]=[l("span",null,"Click me",-1)])),default:n(()=>[t(o(s),{onSelect:e[0]||(e[0]=a=>d("Item 1"))},{default:n(()=>e[7]||(e[7]=[r(" Item 1 ")])),_:1}),t(o(s),{onSelect:e[1]||(e[1]=a=>d("Item 2"))},{default:n(()=>e[8]||(e[8]=[r(" Item 2 ")])),_:1}),t(o(s),{disabled:""},{default:n(()=>e[9]||(e[9]=[r("Disabled Item")])),_:1})]),_:1}),t(o(m),{placement:"top",class:"ml-4"},{trigger:n(()=>e[10]||(e[10]=[l("span",null,"Top Dropdown",-1)])),default:n(()=>[t(o(s),{onSelect:e[2]||(e[2]=a=>d("Top 1"))},{default:n(()=>e[11]||(e[11]=[r(" Top Item 1 ")])),_:1}),t(o(s),{onSelect:e[3]||(e[3]=a=>d("Top 2"))},{default:n(()=>e[12]||(e[12]=[r(" Top Item 2 ")])),_:1})]),_:1}),t(o(m),{placement:"bottom-right",class:"ml-4"},{trigger:n(()=>e[13]||(e[13]=[l("span",null,"Bottom Right",-1)])),default:n(()=>[t(o(s),{onSelect:e[4]||(e[4]=a=>d("BR 1"))},{default:n(()=>e[14]||(e[14]=[r(" Bottom Right 1 ")])),_:1}),t(o(s),{onSelect:e[5]||(e[5]=a=>d("BR 2"))},{default:n(()=>e[15]||(e[15]=[r(" Bottom Right 2 ")])),_:1})]),_:1})])]))}}),c=w(B,[["__scopeId","data-v-3ab53b74"]]),T=JSON.parse('{"title":"Dropdown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/dropdown/index.md","filePath":"components/dropdown/index.md"}'),M={name:"components/dropdown/index.md"},C=Object.assign(M,{setup(g){return(d,p)=>{const e=D("ClientOnly");return u(),i("div",null,[p[0]||(p[0]=l("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},[r("Dropdown 下拉菜单 "),l("a",{class:"header-anchor",href:"#dropdown-下拉菜单","aria-label":'Permalink to "Dropdown 下拉菜单"'},"​")],-1)),p[1]||(p[1]=l("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),t(e,null,{default:n(()=>[t(o(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(I)},{vue:n(()=>[t(c)]),_:1},8,["vueCode"])]),_:1})])}}});export{T as __pageData,C as default};
