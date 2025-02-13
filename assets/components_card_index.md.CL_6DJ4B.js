import{x as o,D as x,y as W}from"./chunks/theme.Pg0pWZWr.js";import{d as v,b as w,o as s,w as n,G as a,k as l,a as d,_ as c,c as i,j as e,F as h,C as y,t as f,B as b,aq as B}from"./chunks/framework.jWG7FAcU.js";import{Q as m}from"./chunks/index.B5U2ewO1.js";const _=`<template>
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
`,X=v({__name:"shadow",setup(u){return(p,t)=>(s(),w(l(x),null,{default:n(()=>[a(l(o),{style:{width:"480px"},shadow:"always"},{default:n(()=>t[0]||(t[0]=[d("Always")])),_:1}),a(l(o),{style:{width:"480px"},shadow:"hover"},{default:n(()=>t[1]||(t[1]=[d("Hover")])),_:1}),a(l(o),{style:{width:"480px"},shadow:"never"},{default:n(()=>t[2]||(t[2]=[d("Never")])),_:1})]),_:1}))}}),Z=c(X,[["__scopeId","data-v-19120f49"]]),k=`<template>
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
`,D=v({__name:"template",setup(u){return(p,t)=>(s(),i("div",null,[a(l(o),null,{header:n(()=>t[0]||(t[0]=[e("div",null,[e("span",null,"头部")],-1)])),footer:n(()=>t[1]||(t[1]=[e("div",null,[e("span",null,"底部")],-1)])),default:n(()=>[t[2]||(t[2]=e("div",null,[e("span",null,"内容")],-1))]),_:1})]))}}),A=`<template>
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
`,z=v({__name:"simple",setup(u){return(p,t)=>(s(),i("div",null,[a(l(o),null,{default:n(()=>[(s(),i(h,null,y(4,r=>e("div",{key:r,class:"text item"},f("List item "+r),1)),64))]),_:1})]))}}),T=c(z,[["__scopeId","data-v-a67c8d89"]]),N=`<template>
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
`,g={class:"card-header"},Y=v({__name:"base",setup(u){return(p,t)=>(s(),i("div",null,[a(l(o),null,{header:n(()=>[e("div",g,[t[1]||(t[1]=e("span",null,"Card name",-1)),a(l(W),{size:"sm",type:"primary"},{default:n(()=>t[0]||(t[0]=[d("按 钮")])),_:1})])]),default:n(()=>[(s(),i(h,null,y(4,r=>e("div",{key:r,class:"text item"},f("List item "+r),1)),64))]),_:1})]))}}),V=c(Y,[["__scopeId","data-v-7a7bf169"]]),G={tabindex:"0"},I=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),L={name:"components/card/index.md"},P=Object.assign(L,{setup(u){return(p,t)=>{const r=b("ClientOnly"),C=b("Tool");return s(),i("div",null,[t[5]||(t[5]=B('<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code> 组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',5)),a(r,null,{default:n(()=>[a(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(N)},{vue:n(()=>[a(V)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=e("h2",{id:"简单卡片",tabindex:"-1"},[d("简单卡片 "),e("a",{class:"header-anchor",href:"#简单卡片","aria-label":'Permalink to "简单卡片"'},"​")],-1)),t[7]||(t[7]=e("p",null,"卡片可以只有内容区域。",-1)),a(r,null,{default:n(()=>[a(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(A)},{vue:n(()=>[a(T)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=e("h2",{id:"插槽",tabindex:"-1"},[d("插槽 "),e("a",{class:"header-anchor",href:"#插槽","aria-label":'Permalink to "插槽"'},"​")],-1)),t[9]||(t[9]=e("p",null,"卡片可以只有内容区域。",-1)),a(r,null,{default:n(()=>[a(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(k)},{vue:n(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=e("h2",{id:"带有阴影效果的卡片",tabindex:"-1"},[d("带有阴影效果的卡片 "),e("a",{class:"header-anchor",href:"#带有阴影效果的卡片","aria-label":'Permalink to "带有阴影效果的卡片"'},"​")],-1)),t[11]||(t[11]=e("p",null,"你可以定义什么时候展示卡片的阴影效果。",-1)),t[12]||(t[12]=e("p",null,[d("通过 "),e("code",null,"shadow"),d(" 属性设置卡片阴影出现的时刻。该属性的值可以是: "),e("code",null,"always"),d("、"),e("code",null,"hover"),d(" 或 "),e("code",null,"never")],-1)),a(r,null,{default:n(()=>[a(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(_)},{vue:n(()=>[a(Z)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=e("h2",{id:"card-api",tabindex:"-1"},[d("Card API "),e("a",{class:"header-anchor",href:"#card-api","aria-label":'Permalink to "Card API"'},"​")],-1)),t[14]||(t[14]=e("h3",{id:"card-属性",tabindex:"-1"},[d("Card 属性 "),e("a",{class:"header-anchor",href:"#card-属性","aria-label":'Permalink to "Card 属性"'},"​")],-1)),e("table",G,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[1]||(t[1]=e("td",null,[e("code",null,"shadow")],-1)),t[2]||(t[2]=e("td",null,"可以使用shadow来决定卡片拥有阴影的时机",-1)),e("td",null,[t[0]||(t[0]=e("code",null,"enum",-1)),a(C,{value:"always,hover,never"})]),t[3]||(t[3]=e("td",null,"always",-1))])])]),t[15]||(t[15]=e("h3",{id:"card-插槽",tabindex:"-1"},[d("Card 插槽 "),e("a",{class:"header-anchor",href:"#card-插槽","aria-label":'Permalink to "Card 插槽"'},"​")],-1)),t[16]||(t[16]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,"卡片标题内容")])])],-1))])}}});export{I as __pageData,P as default};
