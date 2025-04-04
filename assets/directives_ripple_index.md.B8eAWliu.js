import{d as _,au as P,c,o as n,a5 as d,b as s,w as r,a as o,k as l,p as V,B as C,j as a,G as i,at as x,a6 as f}from"./chunks/framework.DgG_RYdR.js";import{A as u}from"./chunks/theme.BN5ATFS7.js";import{d as b,f as h}from"./chunks/index.CrgVH6Ra.js";const B=`<script setup lang="ts">
import { VerPanel } from '@versakit/ui'
<\/script>

<template>
  <div>
    <VerPanel v-ripple="{ duration: 800, color: '#c4b5fd' }">Primary</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#86efac' }">success</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#fdba74' }">warn</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#fca5a5' }">error</VerPanel>
  </div>
</template>
`,k=_({__name:"color",setup(m){return(p,t)=>{const e=P("ripple");return n(),c("div",null,[d((n(),s(l(u),null,{default:r(()=>t[0]||(t[0]=[o("Primary")])),_:1})),[[e,{duration:800,color:"#c4b5fd"}]]),d((n(),s(l(u),null,{default:r(()=>t[1]||(t[1]=[o("success")])),_:1})),[[e,{duration:800,color:"#86efac"}]]),d((n(),s(l(u),null,{default:r(()=>t[2]||(t[2]=[o("warn")])),_:1})),[[e,{duration:800,color:"#fdba74"}]]),d((n(),s(l(u),null,{default:r(()=>t[3]||(t[3]=[o("error")])),_:1})),[[e,{duration:800,color:"#fca5a5"}]])])}}}),A=`<script setup lang="ts">
import { VerPanel } from '@versakit/ui'
<\/script>

<template>
  <div>
    <VerPanel v-ripple>组件内使用v-ripple</VerPanel>
  </div>
</template>
`,D=_({__name:"base",setup(m){return(p,t)=>{const e=P("ripple");return n(),c("div",null,[d((n(),s(l(u),null,{default:r(()=>t[0]||(t[0]=[o("组件内使用v-ripple")])),_:1})),[[e]])])}}}),g=JSON.parse('{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"directives/ripple/index.md","filePath":"directives/ripple/index.md"}'),w={name:"directives/ripple/index.md"},Z=Object.assign(w,{setup(m){const p=V(!0);return(t,e)=>{const v=C("ClientOnly");return n(),c("div",null,[e[2]||(e[2]=a("h1",{id:"ripple-水波纹",tabindex:"-1"},[o("Ripple 水波纹 "),a("a",{class:"header-anchor",href:"#ripple-水波纹","aria-label":'Permalink to "Ripple 水波纹"'},"​")],-1)),e[3]||(e[3]=a("h2",{id:"基本用法",tabindex:"-1"},[o("基本用法 "),a("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[4]||(e[4]=a("p",null,"你可以在组件内通过v-ripple属性，让元素获得水波纹效果。",-1)),d(i(l(b),null,null,512),[[f,p.value]]),i(v,null,{default:r(()=>[i(l(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{p.value=!1}),vueCode:l(A)},{vue:r(()=>[i(D)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=a("h2",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),e[6]||(e[6]=a("p",null,"此外，你还可以自定义水波纹的样式，以下是几个水波纹颜色的样式修改示例。",-1)),d(i(l(b),null,null,512),[[f,p.value]]),i(v,null,{default:r(()=>[i(l(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{p.value=!1}),vueCode:l(B)},{vue:r(()=>[i(k)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=x('<h2 id="ripple-api" tabindex="-1">Ripple API <a class="header-anchor" href="#ripple-api" aria-label="Permalink to &quot;Ripple API&quot;">​</a></h2><h3 id="ripple-属性" tabindex="-1">Ripple 属性 <a class="header-anchor" href="#ripple-属性" aria-label="Permalink to &quot;Ripple 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-ripple</code></td><td>设置水波纹的颜色，持续时间</td><td><code>string</code></td><td><code>{ duration: 800, color: &#39;#cccccc&#39; }</code></td></tr></tbody></table>',3))])}}});export{g as __pageData,Z as default};
