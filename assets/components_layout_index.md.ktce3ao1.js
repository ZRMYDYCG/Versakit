import{N as s,D as d}from"./chunks/theme.BQa7b3Ic.js";import{d as v,b as V,o as c,w as e,G as l,k as t,j as n,_ as p,c as x,F as m,C,B as W,aq as f,a}from"./chunks/framework.jWG7FAcU.js";import{Q as u}from"./chunks/index.B5U2ewO1.js";const y=`<template>
  <ver-row :gutter="4">
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box"></div>
    </ver-col>
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box"></div>
    </ver-col>
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box col-box-1"></div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #d3dce6;
}

.col-box-1 {
  background-color: #e5e9f2;
}
</style>
`,g=v({__name:"reactive",setup(b){return(i,o)=>(c(),V(t(d),{gutter:4},{default:e(()=>[l(t(s),{xs:8,sm:6,md:4,lg:3,xl:1},{default:e(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:1}),l(t(s),{xs:4,sm:6,md:8,lg:9,xl:11},{default:e(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{xs:4,sm:6,md:8,lg:9,xl:11},{default:e(()=>o[2]||(o[2]=[n("div",{class:"col-box"},null,-1)])),_:1}),l(t(s),{xs:8,sm:6,md:4,lg:3,xl:1},{default:e(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}))}}),_=p(g,[["__scopeId","data-v-f5213fde"]]),w=`<template>
  <VerRow class="mb-4">
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="14">
      <div class="col-box col-box-2"></div>
    </VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,k=v({__name:"mix",setup(b){return(i,o)=>(c(),x(m,null,[l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:10},{default:e(()=>o[0]||(o[0]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:14},{default:e(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:6},{default:e(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:8},{default:e(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:10},{default:e(()=>o[4]||(o[4]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:4},{default:e(()=>o[5]||(o[5]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:16},{default:e(()=>o[6]||(o[6]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[7]||(o[7]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1})],64))}}),B=p(k,[["__scopeId","data-v-e6ff7531"]]),Z=`<template>
  <ver-row :gutter="20">
    <ver-col :span="6" v-for="n in 4" :key="n">
      <div class="col-box"></div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}
</style>
`,D=v({__name:"gutter",setup(b){return(i,o)=>(c(),V(t(d),{gutter:20},{default:e(()=>[(c(),x(m,null,C(4,r=>l(t(s),{span:6,key:r},{default:e(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:2},1024)),64))]),_:1}))}}),X=p(D,[["__scopeId","data-v-781d3b1f"]]),A=`<template>
  <VerRow class="mb-4">
    <VerCol :span="10"><div class="col-box col-box-1">10</div></VerCol>
    <VerCol :span="12" :offset="2">
      <div class="col-box col-box-2">12</div>
    </VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="8"><div class="col-box col-box-1">8</div></VerCol>
    <VerCol :span="8" :offset="8">
      <div class="col-box col-box-2">8</div>
    </VerCol>
  </VerRow>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,T=v({__name:"offset",setup(b){return(i,o)=>(c(),x(m,null,[l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:10},{default:e(()=>o[0]||(o[0]=[n("div",{class:"col-box col-box-1"},"10",-1)])),_:1}),l(t(s),{span:12,offset:2},{default:e(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-2"},"12",-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:8},{default:e(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-1"},"8",-1)])),_:1}),l(t(s),{span:8,offset:8},{default:e(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-2"},"8",-1)])),_:1})]),_:1})],64))}}),z=p(T,[["__scopeId","data-v-96b0caeb"]]),Y=`<template>
  <ver-row class="mb-4">
    <ver-col :span="24">
      <div class="col-box"></div>
    </ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="12">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="12">
      <div class="col-box col-box-2"></div>
    </ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="8">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="8">
      <div class="col-box col-box-2"></div>
    </ver-col>
    <ver-col :span="8">
      <div class="col-box col-box-1"></div>
    </ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="6">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="6">
      <div class="col-box col-box-2"></div>
    </ver-col>
    <ver-col :span="6">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="6">
      <div class="col-box col-box-2"></div>
    </ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="4">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="4">
      <div class="col-box col-box-2"></div>
    </ver-col>
    <ver-col :span="4">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="4">
      <div class="col-box col-box-2"></div>
    </ver-col>
    <ver-col :span="4">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :span="4">
      <div class="col-box col-box-2"></div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,G=v({__name:"base",setup(b){return(i,o)=>(c(),x(m,null,[l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:24},{default:e(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:12},{default:e(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:12},{default:e(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:8},{default:e(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:8},{default:e(()=>o[4]||(o[4]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:8},{default:e(()=>o[5]||(o[5]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:6},{default:e(()=>o[6]||(o[6]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:6},{default:e(()=>o[7]||(o[7]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:6},{default:e(()=>o[8]||(o[8]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:6},{default:e(()=>o[9]||(o[9]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(t(d),{class:"mb-4"},{default:e(()=>[l(t(s),{span:4},{default:e(()=>o[10]||(o[10]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[11]||(o[11]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[12]||(o[12]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[13]||(o[13]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[14]||(o[14]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(t(s),{span:4},{default:e(()=>o[15]||(o[15]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1})],64))}}),h=p(G,[["__scopeId","data-v-008dee41"]]),R=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}'),N={name:"components/layout/index.md"},S=Object.assign(N,{setup(b){return(i,o)=>{const r=W("ClientOnly");return c(),x("div",null,[o[0]||(o[0]=f('<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>',5)),l(r,null,{default:e(()=>[l(t(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(Y)},{vue:e(()=>[l(h)]),_:1},8,["vueCode"])]),_:1}),o[1]||(o[1]=n("h2",{id:"列偏移",tabindex:"-1"},[a("列偏移 "),n("a",{class:"header-anchor",href:"#列偏移","aria-label":'Permalink to "列偏移"'},"​")],-1)),o[2]||(o[2]=n("p",null,[a("通过 "),n("code",null,"offset"),a(" 属性指定分栏偏移的栏数")],-1)),l(r,null,{default:e(()=>[l(t(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(A)},{vue:e(()=>[l(z)]),_:1},8,["vueCode"])]),_:1}),o[3]||(o[3]=n("h2",{id:"分栏间隔",tabindex:"-1"},[a("分栏间隔 "),n("a",{class:"header-anchor",href:"#分栏间隔","aria-label":'Permalink to "分栏间隔"'},"​")],-1)),o[4]||(o[4]=n("p",null,[a("行提供 "),n("code",null,"gutter"),a(" 属性来指定列之间的间距，其默认值为0。")],-1)),l(r,null,{default:e(()=>[l(t(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(Z)},{vue:e(()=>[l(X)]),_:1},8,["vueCode"])]),_:1}),o[5]||(o[5]=n("h2",{id:"混合布局",tabindex:"-1"},[a("混合布局 "),n("a",{class:"header-anchor",href:"#混合布局","aria-label":'Permalink to "混合布局"'},"​")],-1)),o[6]||(o[6]=n("p",null,"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。",-1)),l(r,null,{default:e(()=>[l(t(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(w)},{vue:e(()=>[l(B)]),_:1},8,["vueCode"])]),_:1}),o[7]||(o[7]=n("h2",{id:"响应式布局",tabindex:"-1"},[a("响应式布局 "),n("a",{class:"header-anchor",href:"#响应式布局","aria-label":'Permalink to "响应式布局"'},"​")],-1)),o[8]||(o[8]=n("p",null,"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。",-1)),l(r,null,{default:e(()=>[l(t(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(y)},{vue:e(()=>[l(_)]),_:1},8,["vueCode"])]),_:1}),o[9]||(o[9]=f('<h2 id="layout-api" tabindex="-1">Layout API <a class="header-anchor" href="#layout-api" aria-label="Permalink to &quot;Layout API&quot;">​</a></h2><h3 id="layout-属性" tabindex="-1">Layout 属性 <a class="header-anchor" href="#layout-属性" aria-label="Permalink to &quot;Layout 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>栅格占据的列数</td><td><code>number</code></td><td>24</td></tr><tr><td><code>offset</code></td><td>栅格左侧的间隔格数</td><td><code>number</code></td><td>0</td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>md</code></td><td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr></tbody></table>',3))])}}});export{R as __pageData,S as default};
