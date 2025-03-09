import{b as s,z as i}from"./chunks/theme.DCe5qy_u.js";import{p as c,b as g,o as p,w as a,G as n,k as r,a as l,_ as f,c as v,F as h,B as b,ar as _,j as e}from"./chunks/framework.B9s_fTIu.js";import{Q as B}from"./chunks/index.Cnf2THuG.js";const y=`<template>
  <VerBadge type="number" :value="value1">
    <VerButton @click="countUp()">点我增加</VerButton>
  </VerBadge>
</template>

<script setup>
import { VerBadge, VerButton } from '@versakit/ui'
import { ref } from 'vue'

const value1 = ref(95)

const countUp = () => {
  value1.value++
}
<\/script>
`,V={__name:"number",setup(m){const d=c(95),t=()=>{d.value++};return(u,o)=>(p(),g(r(i),{type:"number",value:d.value},{default:a(()=>[n(r(s),{onClick:o[0]||(o[0]=W=>t())},{default:a(()=>o[1]||(o[1]=[l("点我增加")])),_:1})]),_:1},8,["value"]))}},k=`<template>
  <VerBadge>
    <VerButton type="primary">点我没啥</VerButton>
  </VerBadge>
  <VerBadge type="text" value="new">
    <VerButton>点我没事</VerButton>
  </VerBadge>
</template>

<script setup>
import { VerBadge, VerButton } from '@versakit/ui'
<\/script>

<style scoped lang="scss">
.ver-badge {
  margin-right: 20px;
}
</style>
`,C={__name:"base",setup(m){return(d,t)=>(p(),v(h,null,[n(r(i),null,{default:a(()=>[n(r(s),{type:"primary"},{default:a(()=>t[0]||(t[0]=[l("点我没啥")])),_:1})]),_:1}),n(r(i),{type:"text",value:"new"},{default:a(()=>[n(r(s),null,{default:a(()=>t[1]||(t[1]=[l("点我没事")])),_:1})]),_:1})],64))}},Z=f(C,[["__scopeId","data-v-58b79351"]]),x={tabindex:"0"},N=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),X={name:"components/badge/index.md"},z=Object.assign(X,{setup(m){return(d,t)=>{const u=b("ClientOnly"),o=b("Tool");return p(),v("div",null,[t[6]||(t[6]=_('<h1 id="badge-徽标" tabindex="-1">Badge 徽标 <a class="header-anchor" href="#badge-徽标" aria-label="Permalink to &quot;Badge 徽标&quot;">​</a></h1><p>按钮和图标上的数字或状态标记。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可以通过设置 <code>type</code> 属性改变徽标类型。 数量值可接受 <code>Number</code> 或 <code>String。</code></p>',4)),n(u,null,{default:a(()=>[n(r(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(k)},{vue:a(()=>[n(Z)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"最大值徽标",tabindex:"-1"},[l("最大值徽标 "),e("a",{class:"header-anchor",href:"#最大值徽标","aria-label":'Permalink to "最大值徽标"'},"​")],-1)),t[8]||(t[8]=e("p",null,[l("当徽标中数字大于 "),e("code",null,"99"),l(" 时候会显示 "),e("code",null,"99+"),l("，使用数字徽标需将 "),e("code",null,"type"),l(" 属性设置为 "),e("code",null,"number")],-1)),n(u,null,{default:a(()=>[n(r(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(y)},{vue:a(()=>[n(V)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"badge-api",tabindex:"-1"},[l("Badge API "),e("a",{class:"header-anchor",href:"#badge-api","aria-label":'Permalink to "Badge API"'},"​")],-1)),t[10]||(t[10]=e("h3",{id:"badge-属性",tabindex:"-1"},[l("Badge 属性 "),e("a",{class:"header-anchor",href:"#badge-属性","aria-label":'Permalink to "Badge 属性"'},"​")],-1)),e("table",x,[t[5]||(t[5]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[1]||(t[1]=e("td",null,[e("code",null,"type")],-1)),t[2]||(t[2]=e("td",null,"指定徽标的类型",-1)),e("td",null,[t[0]||(t[0]=e("code",null,"enum",-1)),n(o,{value:"number,string"})]),t[3]||(t[3]=e("td",null,"number",-1))]),t[4]||(t[4]=e("tr",null,[e("td",null,[e("code",null,"value")]),e("td",null,"徽标显示的值"),e("td",null,[e("code",null,"number"),l(" / "),e("code",null,"string")]),e("td",null,"-")],-1))])])])}}});export{N as __pageData,z as default};
