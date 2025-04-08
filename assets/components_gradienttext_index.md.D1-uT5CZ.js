import{c as u,o as p,G as t,w as n,a as d,k as a,F as h,p as T,B as c,j as s,a5 as f,aw as g,a6 as b}from"./chunks/framework.B3Jz-8p0.js";import{t as i,_ as G}from"./chunks/theme.DKFx6c4r.js";import{d as x,f as v}from"./chunks/index.BbNYUtVF.js";const y=`<template>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#de344f 0%', end: '#68dada 100%' }"
  >
    自定义颜色
  </VerGradientText>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#4774cf99 0%', end: '#68dada 100%' }"
  >
    Hello World
  </VerGradientText>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#a299ff 0%', end: '#11fdd 100%' }"
  >
    你好，世界
  </VerGradientText>
</template>

<script setup>
import { VerGradientText } from '@versakit/ui'
<\/script>

<style scoped lang="scss"></style>
`,_={__name:"color",setup(m){return(l,r)=>(p(),u(h,null,[t(a(i),{gradient:{rotate:244,start:"#de344f 0%",end:"#68dada 100%"}},{default:n(()=>r[0]||(r[0]=[d(" 自定义颜色 ")])),_:1}),t(a(i),{gradient:{rotate:244,start:"#4774cf99 0%",end:"#68dada 100%"}},{default:n(()=>r[1]||(r[1]=[d(" Hello World ")])),_:1}),t(a(i),{gradient:{rotate:244,start:"#a299ff 0%",end:"#11fdd 100%"}},{default:n(()=>r[2]||(r[2]=[d(" 你好，世界 ")])),_:1})],64))}},B=`<template>
  <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>
  <VerGradientText :size="selectedValue" type="success">
    哈哈哈哈
  </VerGradientText>

  <VerGradientText :size="24" type="error">哈哈哈哈</VerGradientText>
</template>
<script setup>
import { ref } from 'vue'
import { VerGradientText } from '@versakit/ui'
import { VerSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
<\/script>
<style scoped lang="scss"></style>
`,C={__name:"size",setup(m){const l=T("md"),r=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(e,o)=>(p(),u(h,null,[t(a(G),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=V=>l.value=V),options:r},null,8,["modelValue"]),t(a(i),{size:l.value,type:"success"},{default:n(()=>o[1]||(o[1]=[d(" 哈哈哈哈 ")])),_:1},8,["size"]),t(a(i),{size:24,type:"error"},{default:n(()=>o[2]||(o[2]=[d("哈哈哈哈")])),_:1})],64))}},D=`<template>
  <VerGradientText type="error">炸了</VerGradientText>
  <VerGradientText type="info">炸了</VerGradientText>
  <VerGradientText type="warning">炸了</VerGradientText>
  <VerGradientText type="success">炸了</VerGradientText>
</template>
<script setup>
import { VerGradientText } from '@versakit/ui'
<\/script>
<style scoped lang="scss"></style>
`,W={__name:"base",setup(m){return(l,r)=>(p(),u(h,null,[t(a(i),{type:"error"},{default:n(()=>r[0]||(r[0]=[d("炸了")])),_:1}),t(a(i),{type:"info"},{default:n(()=>r[1]||(r[1]=[d("炸了")])),_:1}),t(a(i),{type:"warning"},{default:n(()=>r[2]||(r[2]=[d("炸了")])),_:1}),t(a(i),{type:"success"},{default:n(()=>r[3]||(r[3]=[d("炸了")])),_:1})],64))}},w=JSON.parse('{"title":"GradientText 渐变文字","description":"","frontmatter":{},"headers":[],"relativePath":"components/gradienttext/index.md","filePath":"components/gradienttext/index.md"}'),k={name:"components/gradienttext/index.md"},S=Object.assign(k,{setup(m){const l=T(!0);return(r,e)=>{const o=c("ClientOnly");return p(),u("div",null,[e[3]||(e[3]=s("h1",{id:"gradienttext-渐变文字",tabindex:"-1"},[d("GradientText 渐变文字 "),s("a",{class:"header-anchor",href:"#gradienttext-渐变文字","aria-label":'Permalink to "GradientText 渐变文字"'},"​")],-1)),e[4]||(e[4]=s("p",null,"用于展示渐变色的文字。",-1)),e[5]||(e[5]=s("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[6]||(e[6]=s("p",null,"它有不同的类型。",-1)),f(t(a(x),null,null,512),[[b,l.value]]),t(o,null,{default:n(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(D)},{vue:n(()=>[t(W)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=s("h2",{id:"尺寸",tabindex:"-1"},[d("尺寸 "),s("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),e[8]||(e[8]=s("p",null,"它可以自定义数值，也可以写规定尺寸。",-1)),f(t(a(x),null,null,512),[[b,l.value]]),t(o,null,{default:n(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:a(B)},{vue:n(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=s("h2",{id:"自定义颜色",tabindex:"-1"},[d("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),e[10]||(e[10]=s("p",null,"靠你的天马行空。",-1)),f(t(a(x),null,null,512),[[b,l.value]]),t(o,null,{default:n(()=>[t(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:a(y)},{vue:n(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=g('<h2 id="gradienttext-api" tabindex="-1">GradientText API <a class="header-anchor" href="#gradienttext-api" aria-label="Permalink to &quot;GradientText API&quot;">​</a></h2><h3 id="gradienttext-属性" tabindex="-1">GradientText 属性 <a class="header-anchor" href="#gradienttext-属性" aria-label="Permalink to &quot;GradientText 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>渐变文字的类型</td><td><code>string</code></td><td>primary</td></tr><tr><td><code>size</code></td><td>文字大小（当不指定单位时，默认单位: <code>px</code>）</td><td><code>number</code> <code>string</code></td><td>undefined</td></tr><tr><td><code>gradient</code></td><td>自定义渐变色</td><td><code>object</code></td><td>undefined</td></tr></tbody></table><h3 id="gradienttext-插槽" tabindex="-1">GradientText 插槽 <a class="header-anchor" href="#gradienttext-插槽" aria-label="Permalink to &quot;GradientText 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>渐变文字的内容</td></tr></tbody></table>',5))])}}});export{w as __pageData,S as default};
