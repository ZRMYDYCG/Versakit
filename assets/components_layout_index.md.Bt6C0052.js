import{d as f,b as g,o as c,w as t,G as l,k as e,j as n,_ as V,c as C,F as W,C as w,p as _,B as k,aw as y,a5 as v,a6 as p,a as b}from"./chunks/framework.B3Jz-8p0.js";import{F as s,q as r}from"./chunks/theme.DKFx6c4r.js";import{d as x,f as m}from"./chunks/index.BbNYUtVF.js";const B=`<template>
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
`,Z=f({__name:"reactive",setup(u){return(a,o)=>(c(),g(e(r),{gutter:4},{default:t(()=>[l(e(s),{xs:8,sm:6,md:4,lg:3,xl:1},{default:t(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:1}),l(e(s),{xs:4,sm:6,md:8,lg:9,xl:11},{default:t(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{xs:4,sm:6,md:8,lg:9,xl:11},{default:t(()=>o[2]||(o[2]=[n("div",{class:"col-box"},null,-1)])),_:1}),l(e(s),{xs:8,sm:6,md:4,lg:3,xl:1},{default:t(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}))}}),X=V(Z,[["__scopeId","data-v-f5213fde"]]),D=`<template>
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
`,A=f({__name:"mix",setup(u){return(a,o)=>(c(),C(W,null,[l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:10},{default:t(()=>o[0]||(o[0]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:14},{default:t(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:6},{default:t(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:8},{default:t(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:10},{default:t(()=>o[4]||(o[4]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:4},{default:t(()=>o[5]||(o[5]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:16},{default:t(()=>o[6]||(o[6]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[7]||(o[7]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1})],64))}}),T=V(A,[["__scopeId","data-v-e6ff7531"]]),z=`<template>
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
`,G=f({__name:"gutter",setup(u){return(a,o)=>(c(),g(e(r),{gutter:20},{default:t(()=>[(c(),C(W,null,w(4,d=>l(e(s),{span:6,key:d},{default:t(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:2},1024)),64))]),_:1}))}}),Y=V(G,[["__scopeId","data-v-781d3b1f"]]),L=`<template>
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
`,N=f({__name:"offset",setup(u){return(a,o)=>(c(),C(W,null,[l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:10},{default:t(()=>o[0]||(o[0]=[n("div",{class:"col-box col-box-1"},"10",-1)])),_:1}),l(e(s),{span:12,offset:2},{default:t(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-2"},"12",-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:8},{default:t(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-1"},"8",-1)])),_:1}),l(e(s),{span:8,offset:8},{default:t(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-2"},"8",-1)])),_:1})]),_:1})],64))}}),h=V(N,[["__scopeId","data-v-96b0caeb"]]),I=`<template>
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
`,J=f({__name:"base",setup(u){return(a,o)=>(c(),C(W,null,[l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:24},{default:t(()=>o[0]||(o[0]=[n("div",{class:"col-box"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:12},{default:t(()=>o[1]||(o[1]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:12},{default:t(()=>o[2]||(o[2]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:8},{default:t(()=>o[3]||(o[3]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:8},{default:t(()=>o[4]||(o[4]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:8},{default:t(()=>o[5]||(o[5]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:6},{default:t(()=>o[6]||(o[6]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:6},{default:t(()=>o[7]||(o[7]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:6},{default:t(()=>o[8]||(o[8]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:6},{default:t(()=>o[9]||(o[9]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1}),l(e(r),{class:"mb-4"},{default:t(()=>[l(e(s),{span:4},{default:t(()=>o[10]||(o[10]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[11]||(o[11]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[12]||(o[12]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[13]||(o[13]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[14]||(o[14]=[n("div",{class:"col-box col-box-1"},null,-1)])),_:1}),l(e(s),{span:4},{default:t(()=>o[15]||(o[15]=[n("div",{class:"col-box col-box-2"},null,-1)])),_:1})]),_:1})],64))}}),R=V(J,[["__scopeId","data-v-008dee41"]]),M=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}'),S={name:"components/layout/index.md"},U=Object.assign(S,{setup(u){const a=_(!0);return(o,d)=>{const i=k("ClientOnly");return c(),C("div",null,[d[5]||(d[5]=y('<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>',5)),v(l(e(x),null,null,512),[[p,a.value]]),l(i,null,{default:t(()=>[l(e(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:d[0]||(d[0]=()=>{a.value=!1}),vueCode:e(I)},{vue:t(()=>[l(R)]),_:1},8,["vueCode"])]),_:1}),d[6]||(d[6]=n("h2",{id:"列偏移",tabindex:"-1"},[b("列偏移 "),n("a",{class:"header-anchor",href:"#列偏移","aria-label":'Permalink to "列偏移"'},"​")],-1)),d[7]||(d[7]=n("p",null,[b("通过 "),n("code",null,"offset"),b(" 属性指定分栏偏移的栏数")],-1)),v(l(e(x),null,null,512),[[p,a.value]]),l(i,null,{default:t(()=>[l(e(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:d[1]||(d[1]=()=>{a.value=!1}),vueCode:e(L)},{vue:t(()=>[l(h)]),_:1},8,["vueCode"])]),_:1}),d[8]||(d[8]=n("h2",{id:"分栏间隔",tabindex:"-1"},[b("分栏间隔 "),n("a",{class:"header-anchor",href:"#分栏间隔","aria-label":'Permalink to "分栏间隔"'},"​")],-1)),d[9]||(d[9]=n("p",null,[b("行提供 "),n("code",null,"gutter"),b(" 属性来指定列之间的间距，其默认值为0。")],-1)),v(l(e(x),null,null,512),[[p,a.value]]),l(i,null,{default:t(()=>[l(e(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:d[2]||(d[2]=()=>{a.value=!1}),vueCode:e(z)},{vue:t(()=>[l(Y)]),_:1},8,["vueCode"])]),_:1}),d[10]||(d[10]=n("h2",{id:"混合布局",tabindex:"-1"},[b("混合布局 "),n("a",{class:"header-anchor",href:"#混合布局","aria-label":'Permalink to "混合布局"'},"​")],-1)),d[11]||(d[11]=n("p",null,"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。",-1)),v(l(e(x),null,null,512),[[p,a.value]]),l(i,null,{default:t(()=>[l(e(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:d[3]||(d[3]=()=>{a.value=!1}),vueCode:e(D)},{vue:t(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),d[12]||(d[12]=n("h2",{id:"响应式布局",tabindex:"-1"},[b("响应式布局 "),n("a",{class:"header-anchor",href:"#响应式布局","aria-label":'Permalink to "响应式布局"'},"​")],-1)),d[13]||(d[13]=n("p",null,"参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。",-1)),v(l(e(x),null,null,512),[[p,a.value]]),l(i,null,{default:t(()=>[l(e(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:d[4]||(d[4]=()=>{a.value=!1}),vueCode:e(B)},{vue:t(()=>[l(X)]),_:1},8,["vueCode"])]),_:1}),d[14]||(d[14]=y('<h2 id="layout-api" tabindex="-1">Layout API <a class="header-anchor" href="#layout-api" aria-label="Permalink to &quot;Layout API&quot;">​</a></h2><h3 id="layout-属性" tabindex="-1">Layout 属性 <a class="header-anchor" href="#layout-属性" aria-label="Permalink to &quot;Layout 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>栅格占据的列数</td><td><code>number</code></td><td>24</td></tr><tr><td><code>offset</code></td><td>栅格左侧的间隔格数</td><td><code>number</code></td><td>0</td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>md</code></td><td><code>≥992px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> 响应式栅格数或者栅格属性对象</td><td><code>number</code></td><td>-</td></tr></tbody></table>',3))])}}});export{M as __pageData,U as default};
