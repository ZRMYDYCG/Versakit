import{Q as o,K as i}from"./chunks/theme.uDsgHOqn.js";import{b as c,o as s,w as r,G as t,k as a,a as d,B as p,c as h,j as l,aw as B}from"./chunks/framework.BrE8sLAv.js";import{Q as b}from"./chunks/index.CmMjEtxm.js";const f=`<script setup>
import { VerBreadcrumbItem, VerBreadcrumb } from '@versakit/ui'
<\/script>

<template>
  <VerBreadcrumb separator=">">
    <VerBreadcrumbItem>首页</VerBreadcrumbItem>
    <VerBreadcrumbItem>产品列表</VerBreadcrumbItem>
    <VerBreadcrumbItem>产品详情</VerBreadcrumbItem>
  </VerBreadcrumb>
</template>
`,_={__name:"separator",setup(m){return(u,e)=>(s(),c(a(i),{separator:">"},{default:r(()=>[t(a(o),null,{default:r(()=>e[0]||(e[0]=[d("首页")])),_:1}),t(a(o),null,{default:r(()=>e[1]||(e[1]=[d("产品列表")])),_:1}),t(a(o),null,{default:r(()=>e[2]||(e[2]=[d("产品详情")])),_:1})]),_:1}))}},V=`<script setup>
import { VerBreadcrumbItem, VerBreadcrumb } from '@versakit/ui'
<\/script>

<template>
  <VerBreadcrumb>
    <VerBreadcrumbItem>首页</VerBreadcrumbItem>
    <VerBreadcrumbItem>产品列表</VerBreadcrumbItem>
    <VerBreadcrumbItem>产品详情</VerBreadcrumbItem>
  </VerBreadcrumb>
</template>
`,v={__name:"base",setup(m){return(u,e)=>(s(),c(a(i),null,{default:r(()=>[t(a(o),null,{default:r(()=>e[0]||(e[0]=[d("首页")])),_:1}),t(a(o),null,{default:r(()=>e[1]||(e[1]=[d("产品列表")])),_:1}),t(a(o),null,{default:r(()=>e[2]||(e[2]=[d("产品详情")])),_:1})]),_:1}))}},y=JSON.parse('{"title":"Breadcrumb 面包屑","description":"","frontmatter":{},"headers":[],"relativePath":"components/breadcrumb/index.md","filePath":"components/breadcrumb/index.md"}'),I={name:"components/breadcrumb/index.md"},A=Object.assign(I,{setup(m){return(u,e)=>{const n=p("ClientOnly");return s(),h("div",null,[e[0]||(e[0]=l("h1",{id:"breadcrumb-面包屑",tabindex:"-1"},[d("Breadcrumb 面包屑 "),l("a",{class:"header-anchor",href:"#breadcrumb-面包屑","aria-label":'Permalink to "Breadcrumb 面包屑"'},"​")],-1)),e[1]||(e[1]=l("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t(n,null,{default:r(()=>[t(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(V)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=l("h2",{id:"自定义分隔符",tabindex:"-1"},[d("自定义分隔符 "),l("a",{class:"header-anchor",href:"#自定义分隔符","aria-label":'Permalink to "自定义分隔符"'},"​")],-1)),t(n,null,{default:r(()=>[t(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(f)},{vue:r(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=B('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props <a class="header-anchor" href="#breadcrumb-props" aria-label="Permalink to &quot;Breadcrumb Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>separator</td><td>string</td><td>&#39; / &#39;</td><td>分隔符字符</td></tr><tr><td>separatorClass</td><td>string</td><td>-</td><td>分隔符图标类名</td></tr></tbody></table><h3 id="breadcrumbitem-props" tabindex="-1">BreadcrumbItem Props <a class="header-anchor" href="#breadcrumbitem-props" aria-label="Permalink to &quot;BreadcrumbItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>to</td><td>string | object</td><td>-</td><td>路由跳转目标（同 vue-router）</td></tr><tr><td>replace</td><td>boolean</td><td>false</td><td>是否使用替换模式导航</td></tr></tbody></table><h3 id="breadcrumbitem-slots" tabindex="-1">BreadcrumbItem Slots <a class="header-anchor" href="#breadcrumbitem-slots" aria-label="Permalink to &quot;BreadcrumbItem Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>项内容</td></tr><tr><td>separator</td><td>自定义分隔符内容</td></tr></tbody></table>',7))])}}});export{y as __pageData,A as default};
