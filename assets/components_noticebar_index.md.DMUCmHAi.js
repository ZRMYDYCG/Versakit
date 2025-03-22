import{C as a}from"./chunks/theme.TceoO1wW.js";import{d as u,c as l,o as c,G as t,k as n,_ as b,B as s,j as o,a as i,w as r}from"./chunks/framework.CsNVs6Ia.js";import{Q as f}from"./chunks/index.CT2k1i2x.js";const y=`<script setup lang="ts">
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
`,g={class:"notice-examples"},x=u({__name:"base",setup(d){return(p,e)=>(c(),l("div",g,[t(n(a),{text:"This is an info notice",type:"info"}),t(n(a),{text:"Success! Your operation has been completed.",type:"success"}),t(n(a),{text:"Warning: Please backup your data before proceeding.",type:"warning"}),t(n(a),{text:"Error: Failed to save changes. Please try again.",type:"error"}),t(n(a),{text:"This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature.",type:"info",scrollable:"",direction:"horizontal"}),t(n(a),{text:["First notification message","Second notification message","Third notification message"],type:"info",scrollable:"",direction:"vertical",speed:100}),t(n(a),{text:"This notice can be closed",type:"info",closable:""})]))}}),v=b(x,[["__scopeId","data-v-0f0ee005"]]),_={id:"noticebar-通知栏-alpha",tabindex:"-1"},V=JSON.parse('{"title":"NoticeBar 通知栏 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/noticebar/index.md","filePath":"components/noticebar/index.md"}'),B={name:"components/noticebar/index.md"},z=Object.assign(B,{setup(d){return(p,e)=>{const m=s("ver-tag"),h=s("ClientOnly");return c(),l("div",null,[o("h1",_,[e[1]||(e[1]=i("NoticeBar 通知栏 ")),t(m,{type:"warn"},{default:r(()=>e[0]||(e[0]=[i("Alpha")])),_:1}),e[2]||(e[2]=i()),e[3]||(e[3]=o("a",{class:"header-anchor",href:"#noticebar-通知栏-alpha","aria-label":'Permalink to "NoticeBar 通知栏 <ver-tag type="warn">Alpha</ver-tag>"'},"​",-1))]),e[4]||(e[4]=o("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),t(h,null,{default:r(()=>[t(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(y)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1})])}}});export{V as __pageData,z as default};
