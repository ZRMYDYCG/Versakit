import{d as f,c as i,o as g,F as y,j as e,G as n,k as l,w as r,a as o,_ as V,p as v,B as u,aw as b,a5 as _,a6 as w}from"./chunks/framework.B3Jz-8p0.js";import{h as d}from"./chunks/theme.DKFx6c4r.js";import{d as x,f as C}from"./chunks/index.BbNYUtVF.js";const W=`<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warn">Tag 4</VerTag>
    <VerTag type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VerTag plain type="success">Tag 2</VerTag>
    <VerTag plain type="info">Tag 3</VerTag>
    <VerTag plain type="warn">Tag 4</VerTag>
    <VerTag plain type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warn">Tag 4</VerTag>
    <VerTag round type="error">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from '@versakit/ui'
<\/script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
`,k={class:"my"},B={class:"my"},A={class:"my"},D=f({__name:"base",setup(p){return(s,a)=>(g(),i(y,null,[e("div",k,[n(l(d),null,{default:r(()=>a[0]||(a[0]=[o("Tag 1")])),_:1}),n(l(d),{type:"success"},{default:r(()=>a[1]||(a[1]=[o("Tag 2")])),_:1}),n(l(d),{type:"info"},{default:r(()=>a[2]||(a[2]=[o("Tag 3")])),_:1}),n(l(d),{type:"warn"},{default:r(()=>a[3]||(a[3]=[o("Tag 4")])),_:1}),n(l(d),{type:"error"},{default:r(()=>a[4]||(a[4]=[o("Tag 5")])),_:1})]),e("div",B,[n(l(d),{plain:""},{default:r(()=>a[5]||(a[5]=[o("Tag 1")])),_:1}),n(l(d),{plain:"",type:"success"},{default:r(()=>a[6]||(a[6]=[o("Tag 2")])),_:1}),n(l(d),{plain:"",type:"info"},{default:r(()=>a[7]||(a[7]=[o("Tag 3")])),_:1}),n(l(d),{plain:"",type:"warn"},{default:r(()=>a[8]||(a[8]=[o("Tag 4")])),_:1}),n(l(d),{plain:"",type:"error"},{default:r(()=>a[9]||(a[9]=[o("Tag 5")])),_:1})]),e("div",A,[n(l(d),{round:""},{default:r(()=>a[10]||(a[10]=[o("Tag 1")])),_:1}),n(l(d),{round:"",type:"success"},{default:r(()=>a[11]||(a[11]=[o("Tag 2")])),_:1}),n(l(d),{round:"",type:"info"},{default:r(()=>a[12]||(a[12]=[o("Tag 3")])),_:1}),n(l(d),{round:"",type:"warn"},{default:r(()=>a[13]||(a[13]=[o("Tag 4")])),_:1}),n(l(d),{round:"",type:"error"},{default:r(()=>a[14]||(a[14]=[o("Tag 5")])),_:1})])],64))}}),N=V(D,[["__scopeId","data-v-580ea1da"]]),P={tabindex:"0"},X=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}'),Z={name:"components/tag/index.md"},Y=Object.assign(Z,{setup(p){const s=v(!0);return(a,t)=>{const T=u("ClientOnly"),m=u("Tool");return g(),i("div",null,[t[8]||(t[8]=b('<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过 <code>plain</code> 让 tag 的背景变得半透明，可以通过 <code>color</code> 属性自定义颜色。</p>',4)),_(n(l(x),null,null,512),[[w,s.value]]),n(T,null,{default:r(()=>[n(l(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(W)},{vue:r(()=>[n(N)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"tag-api",tabindex:"-1"},[o("Tag API "),e("a",{class:"header-anchor",href:"#tag-api","aria-label":'Permalink to "Tag API"'},"​")],-1)),t[10]||(t[10]=e("h3",{id:"tag-属性",tabindex:"-1"},[o("Tag 属性 "),e("a",{class:"header-anchor",href:"#tag-属性","aria-label":'Permalink to "Tag 属性"'},"​")],-1)),e("table",P,[t[7]||(t[7]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[2]||(t[2]=e("td",null,[e("code",null,"type")],-1)),t[3]||(t[3]=e("td",null,"Tag 的类型",-1)),e("td",null,[t[1]||(t[1]=e("code",null,"enum",-1)),n(m,{value:"primary,success,info,warning,danger"})]),t[4]||(t[4]=e("td",null,"primary",-1))]),t[5]||(t[5]=e("tr",null,[e("td",null,[e("code",null,"plain")]),e("td",null,"背景是否半透明"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),t[6]||(t[6]=e("tr",null,[e("td",null,[e("code",null,"round")]),e("td",null,"Tag 是否为圆角"),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1))])])])}}});export{X as __pageData,Y as default};
