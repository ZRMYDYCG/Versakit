import{l,p as c}from"./chunks/theme.C6BEB8ch.js";import{c as u,o as p,G as t,w as r,a as d,k as a,F as f,p as h,B as T,j as n,at as v}from"./chunks/framework.CYu56ZLI.js";import{Q as b}from"./chunks/index.B77M7Ljq.js";const V=`<template>
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
`,g={__name:"color",setup(m){return(s,e)=>(p(),u(f,null,[t(a(l),{gradient:{rotate:244,start:"#de344f 0%",end:"#68dada 100%"}},{default:r(()=>e[0]||(e[0]=[d(" 自定义颜色 ")])),_:1}),t(a(l),{gradient:{rotate:244,start:"#4774cf99 0%",end:"#68dada 100%"}},{default:r(()=>e[1]||(e[1]=[d(" Hello World ")])),_:1}),t(a(l),{gradient:{rotate:244,start:"#a299ff 0%",end:"#11fdd 100%"}},{default:r(()=>e[2]||(e[2]=[d(" 你好，世界 ")])),_:1})],64))}},G=`<template>
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
`,y={__name:"size",setup(m){const s=h("md"),e=[{label:"XS",value:"xs"},{label:"SM",value:"sm"},{label:"MD",value:"md"},{label:"LG",value:"lg"}];return(i,o)=>(p(),u(f,null,[t(a(c),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=x=>s.value=x),options:e},null,8,["modelValue"]),t(a(l),{size:s.value,type:"success"},{default:r(()=>o[1]||(o[1]=[d(" 哈哈哈哈 ")])),_:1},8,["size"]),t(a(l),{size:24,type:"error"},{default:r(()=>o[2]||(o[2]=[d("哈哈哈哈")])),_:1})],64))}},B=`<template>
  <VerGradientText type="error">炸了</VerGradientText>
  <VerGradientText type="info">炸了</VerGradientText>
  <VerGradientText type="warning">炸了</VerGradientText>
  <VerGradientText type="success">炸了</VerGradientText>
</template>
<script setup>
import { VerGradientText } from '@versakit/ui'
<\/script>
<style scoped lang="scss"></style>
`,C={__name:"base",setup(m){return(s,e)=>(p(),u(f,null,[t(a(l),{type:"error"},{default:r(()=>e[0]||(e[0]=[d("炸了")])),_:1}),t(a(l),{type:"info"},{default:r(()=>e[1]||(e[1]=[d("炸了")])),_:1}),t(a(l),{type:"warning"},{default:r(()=>e[2]||(e[2]=[d("炸了")])),_:1}),t(a(l),{type:"success"},{default:r(()=>e[3]||(e[3]=[d("炸了")])),_:1})],64))}},A=JSON.parse('{"title":"GradientText 渐变文字","description":"","frontmatter":{},"headers":[],"relativePath":"components/gradienttext/index.md","filePath":"components/gradienttext/index.md"}'),_={name:"components/gradienttext/index.md"},Z=Object.assign(_,{setup(m){return(s,e)=>{const i=T("ClientOnly");return p(),u("div",null,[e[0]||(e[0]=n("h1",{id:"gradienttext-渐变文字",tabindex:"-1"},[d("GradientText 渐变文字 "),n("a",{class:"header-anchor",href:"#gradienttext-渐变文字","aria-label":'Permalink to "GradientText 渐变文字"'},"​")],-1)),e[1]||(e[1]=n("p",null,"用于展示渐变色的文字。",-1)),e[2]||(e[2]=n("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=n("p",null,"它有不同的类型。",-1)),t(i,null,{default:r(()=>[t(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(B)},{vue:r(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=n("h2",{id:"尺寸",tabindex:"-1"},[d("尺寸 "),n("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),e[5]||(e[5]=n("p",null,"它可以自定义数值，也可以写规定尺寸。",-1)),t(i,null,{default:r(()=>[t(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(G)},{vue:r(()=>[t(y)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=n("h2",{id:"自定义颜色",tabindex:"-1"},[d("自定义颜色 "),n("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),e[7]||(e[7]=n("p",null,"靠你的天马行空。",-1)),t(i,null,{default:r(()=>[t(a(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(V)},{vue:r(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=v('<h2 id="gradienttext-api" tabindex="-1">GradientText API <a class="header-anchor" href="#gradienttext-api" aria-label="Permalink to &quot;GradientText API&quot;">​</a></h2><h3 id="gradienttext-属性" tabindex="-1">GradientText 属性 <a class="header-anchor" href="#gradienttext-属性" aria-label="Permalink to &quot;GradientText 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>渐变文字的类型</td><td><code>string</code></td><td>primary</td></tr><tr><td><code>size</code></td><td>文字大小（当不指定单位时，默认单位: <code>px</code>）</td><td><code>number</code> <code>string</code></td><td>undefined</td></tr><tr><td><code>gradient</code></td><td>自定义渐变色</td><td><code>object</code></td><td>undefined</td></tr></tbody></table><h3 id="gradienttext-插槽" tabindex="-1">GradientText 插槽 <a class="header-anchor" href="#gradienttext-插槽" aria-label="Permalink to &quot;GradientText 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>渐变文字的内容</td></tr></tbody></table>',5))])}}});export{A as __pageData,Z as default};
