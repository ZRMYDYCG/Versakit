import{d as h,b as X,o,w as d,G as l,k as n,a as r,_ as y,c as u,j as e,F as x,C as w,t as W,p as Z,B as C,at as _,a5 as m,a6 as b}from"./chunks/framework.DgG_RYdR.js";import{r as i,D as k,g as D}from"./chunks/theme.BN5ATFS7.js";import{d as f,f as c}from"./chunks/index.CrgVH6Ra.js";const A=`<template>
  <ver-row>
    <ver-card style="width: 480px" shadow="always">Always</ver-card>
    <ver-card style="width: 480px" shadow="hover">Hover</ver-card>
    <ver-card style="width: 480px" shadow="never">Never</ver-card>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerCard, VerRow } from '@versakit/ui'
<\/script>

<style scoped>
.ver-card {
  margin: 20px 0;
}
</style>
`,z=h({__name:"shadow",setup(p){return(s,a)=>(o(),X(n(k),null,{default:d(()=>[l(n(i),{style:{width:"480px"},shadow:"always"},{default:d(()=>a[0]||(a[0]=[r("Always")])),_:1}),l(n(i),{style:{width:"480px"},shadow:"hover"},{default:d(()=>a[1]||(a[1]=[r("Hover")])),_:1}),l(n(i),{style:{width:"480px"},shadow:"never"},{default:d(()=>a[2]||(a[2]=[r("Never")])),_:1})]),_:1}))}}),T=y(z,[["__scopeId","data-v-19120f49"]]),g=`<template>
  <div>
    <ver-card>
      <template #header>
        <div>
          <span>头部</span>
        </div>
      </template>
      <div>
        <span>内容</span>
      </div>
      <template #footer>
        <div>
          <span>底部</span>
        </div>
      </template>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard } from '@versakit/ui'
<\/script>
`,N=h({__name:"template",setup(p){return(s,a)=>(o(),u("div",null,[l(n(i),null,{header:d(()=>a[0]||(a[0]=[e("div",null,[e("span",null,"头部")],-1)])),footer:d(()=>a[1]||(a[1]=[e("div",null,[e("span",null,"底部")],-1)])),default:d(()=>[a[2]||(a[2]=e("div",null,[e("span",null,"内容")],-1))]),_:1})]))}}),Y=`<template>
  <div>
    <ver-card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard } from '@versakit/ui'
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,V=h({__name:"simple",setup(p){return(s,a)=>(o(),u("div",null,[l(n(i),null,{default:d(()=>[(o(),u(x,null,w(4,t=>e("div",{key:t,class:"text item"},W("List item "+t),1)),64))]),_:1})]))}}),G=y(V,[["__scopeId","data-v-a67c8d89"]]),L=`<template>
  <div>
    <ver-card>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <ver-button size="sm" type="primary">按 钮</ver-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard, VerButton } from '@versakit/ui'
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,J={class:"card-header"},F=h({__name:"base",setup(p){return(s,a)=>(o(),u("div",null,[l(n(i),null,{header:d(()=>[e("div",J,[a[1]||(a[1]=e("span",null,"Card name",-1)),l(n(D),{size:"sm",type:"primary"},{default:d(()=>a[0]||(a[0]=[r("按 钮")])),_:1})])]),default:d(()=>[(o(),u(x,null,w(4,t=>e("div",{key:t,class:"text item"},W("List item "+t),1)),64))]),_:1})]))}}),q=y(F,[["__scopeId","data-v-7a7bf169"]]),I={tabindex:"0"},H=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),P={name:"components/card/index.md"},R=Object.assign(P,{setup(p){const s=Z(!0);return(a,t)=>{const v=C("ClientOnly"),B=C("Tool");return o(),u("div",null,[t[9]||(t[9]=_('<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code> 组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',5)),m(l(n(f),null,null,512),[[b,s.value]]),l(v,null,{default:d(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:n(L)},{vue:d(()=>[l(q)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=e("h2",{id:"简单卡片",tabindex:"-1"},[r("简单卡片 "),e("a",{class:"header-anchor",href:"#简单卡片","aria-label":'Permalink to "简单卡片"'},"​")],-1)),t[11]||(t[11]=e("p",null,"卡片可以只有内容区域。",-1)),m(l(n(f),null,null,512),[[b,s.value]]),l(v,null,{default:d(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:n(Y)},{vue:d(()=>[l(G)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=e("h2",{id:"插槽",tabindex:"-1"},[r("插槽 "),e("a",{class:"header-anchor",href:"#插槽","aria-label":'Permalink to "插槽"'},"​")],-1)),t[13]||(t[13]=e("p",null,"卡片可以只有内容区域。",-1)),m(l(n(f),null,null,512),[[b,s.value]]),l(v,null,{default:d(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{s.value=!1}),vueCode:n(g)},{vue:d(()=>[l(N)]),_:1},8,["vueCode"])]),_:1}),t[14]||(t[14]=e("h2",{id:"带有阴影效果的卡片",tabindex:"-1"},[r("带有阴影效果的卡片 "),e("a",{class:"header-anchor",href:"#带有阴影效果的卡片","aria-label":'Permalink to "带有阴影效果的卡片"'},"​")],-1)),t[15]||(t[15]=e("p",null,"你可以定义什么时候展示卡片的阴影效果。",-1)),t[16]||(t[16]=e("p",null,[r("通过 "),e("code",null,"shadow"),r(" 属性设置卡片阴影出现的时刻。该属性的值可以是: "),e("code",null,"always"),r("、"),e("code",null,"hover"),r(" 或 "),e("code",null,"never")],-1)),m(l(n(f),null,null,512),[[b,s.value]]),l(v,null,{default:d(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{s.value=!1}),vueCode:n(A)},{vue:d(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=e("h2",{id:"card-api",tabindex:"-1"},[r("Card API "),e("a",{class:"header-anchor",href:"#card-api","aria-label":'Permalink to "Card API"'},"​")],-1)),t[18]||(t[18]=e("h3",{id:"card-属性",tabindex:"-1"},[r("Card 属性 "),e("a",{class:"header-anchor",href:"#card-属性","aria-label":'Permalink to "Card 属性"'},"​")],-1)),e("table",I,[t[8]||(t[8]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[5]||(t[5]=e("td",null,[e("code",null,"shadow")],-1)),t[6]||(t[6]=e("td",null,"可以使用shadow来决定卡片拥有阴影的时机",-1)),e("td",null,[t[4]||(t[4]=e("code",null,"enum",-1)),l(B,{value:"always,hover,never"})]),t[7]||(t[7]=e("td",null,"always",-1))])])]),t[19]||(t[19]=e("h3",{id:"card-插槽",tabindex:"-1"},[r("Card 插槽 "),e("a",{class:"header-anchor",href:"#card-插槽","aria-label":'Permalink to "Card 插槽"'},"​")],-1)),t[20]||(t[20]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,"卡片标题内容")])])],-1))])}}});export{H as __pageData,R as default};
