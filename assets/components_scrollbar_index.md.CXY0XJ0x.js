import{d as b,b as f,o,w as l,c as p,F as _,C as v,j as a,t as h,k as n,_ as y,p as x,B as i,a5 as g,G as t,a as r,a6 as B}from"./chunks/framework.B3Jz-8p0.js";import{$ as W}from"./chunks/theme.DKFx6c4r.js";import{d as k,f as C}from"./chunks/index.BbNYUtVF.js";const w=`<script setup lang="ts">
import { VerScrollBar } from '@versakit/ui'
<\/script>

<template>
  <VerScrollBar height="300px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </VerScrollBar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
`,S=b({__name:"base",setup(d){return(s,m)=>(o(),f(n(W),{height:"300px"},{default:l(()=>[(o(),p(_,null,v(20,e=>a("p",{key:e,class:"scrollbar-demo-item"},h(e),1)),64))]),_:1}))}}),V=y(S,[["__scopeId","data-v-a652f215"]]),D={id:"scrollbar-滚动条-alpha",tabindex:"-1"},A=JSON.parse('{"title":"Scrollbar 滚动条 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/scrollbar/index.md","filePath":"components/scrollbar/index.md"}'),N={name:"components/scrollbar/index.md"},X=Object.assign(N,{setup(d){const s=x(!0);return(m,e)=>{const c=i("ver-tag"),u=i("ClientOnly");return o(),p("div",null,[a("h1",D,[e[2]||(e[2]=r("Scrollbar 滚动条 ")),t(c,{type:"warn"},{default:l(()=>e[1]||(e[1]=[r("Alpha")])),_:1}),e[3]||(e[3]=r()),e[4]||(e[4]=a("a",{class:"header-anchor",href:"#scrollbar-滚动条-alpha","aria-label":'Permalink to "Scrollbar 滚动条 <ver-tag type="warn">Alpha</ver-tag>"'},"​",-1))]),e[5]||(e[5]=a("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(t(n(k),null,null,512),[[B,s.value]]),t(u,null,{default:l(()=>[t(n(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:n(w)},{vue:l(()=>[t(V)]),_:1},8,["vueCode"])]),_:1})])}}});export{A as __pageData,X as default};
