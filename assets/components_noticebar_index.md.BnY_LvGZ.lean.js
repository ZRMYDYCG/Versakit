import{d as f,c,o as d,G as t,k as n,_ as b,p as y,B as l,j as o,a5 as v,a as i,w as s,a6 as g}from"./chunks/framework.DgG_RYdR.js";import{u as a}from"./chunks/theme.BN5ATFS7.js";import{d as x,f as _}from"./chunks/index.CrgVH6Ra.js";const B=`<script setup lang="ts">
import { VerNoticeBar } from '@versakit/ui'
<\/script>

<template>
  <div class="notice-examples">
    <!-- Basic types -->
    <VerNoticeBar text="This is an info notice" type="info" />

    <VerNoticeBar
      text="Success! Your operation has been completed."
      type="success"
    />

    <VerNoticeBar
      text="Warning: Please backup your data before proceeding."
      type="warning"
    />

    <VerNoticeBar
      text="Error: Failed to save changes. Please try again."
      type="error"
    />

    <!-- Horizontal scrolling -->
    <VerNoticeBar
      text="This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature."
      type="info"
      scrollable
      direction="horizontal"
    />

    <!-- Vertical scrolling -->
    <VerNoticeBar
      :text="[
        'First notification message',
        'Second notification message',
        'Third notification message',
      ]"
      type="info"
      scrollable
      direction="vertical"
      :speed="100"
    />

    <!-- With close button -->
    <VerNoticeBar text="This notice can be closed" type="info" closable />
  </div>
</template>

<style scoped>
.notice-examples > * {
  margin-bottom: 16px;
}
</style>
`,N={class:"notice-examples"},W=f({__name:"base",setup(p){return(r,m)=>(d(),c("div",N,[t(n(a),{text:"This is an info notice",type:"info"}),t(n(a),{text:"Success! Your operation has been completed.",type:"success"}),t(n(a),{text:"Warning: Please backup your data before proceeding.",type:"warning"}),t(n(a),{text:"Error: Failed to save changes. Please try again.",type:"error"}),t(n(a),{text:"This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature.",type:"info",scrollable:"",direction:"horizontal"}),t(n(a),{text:["First notification message","Second notification message","Third notification message"],type:"info",scrollable:"",direction:"vertical",speed:100}),t(n(a),{text:"This notice can be closed",type:"info",closable:""})]))}}),w=b(W,[["__scopeId","data-v-0f0ee005"]]),V={id:"noticebar-通知栏-alpha",tabindex:"-1"},Y=JSON.parse('{"title":"NoticeBar 通知栏 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/noticebar/index.md","filePath":"components/noticebar/index.md"}'),z={name:"components/noticebar/index.md"},Z=Object.assign(z,{setup(p){const r=y(!0);return(m,e)=>{const h=l("ver-tag"),u=l("ClientOnly");return d(),c("div",null,[o("h1",V,[e[2]||(e[2]=i("NoticeBar 通知栏 ")),t(h,{type:"warn"},{default:s(()=>e[1]||(e[1]=[i("Alpha")])),_:1}),e[3]||(e[3]=i()),e[4]||(e[4]=o("a",{class:"header-anchor",href:"#noticebar-通知栏-alpha","aria-label":'Permalink to "NoticeBar 通知栏 <ver-tag type="warn">Alpha</ver-tag>"'},"​",-1))]),e[5]||(e[5]=o("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),v(t(n(x),null,null,512),[[g,r.value]]),t(u,null,{default:s(()=>[t(n(_),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{r.value=!1}),vueCode:n(B)},{vue:s(()=>[t(w)]),_:1},8,["vueCode"])]),_:1})])}}});export{Y as __pageData,Z as default};
