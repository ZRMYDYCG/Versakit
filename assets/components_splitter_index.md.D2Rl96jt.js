import{d as h,p as m,c as z,o as f,F as S,j as t,G as l,k as d,w as o,a as i,t as p,B as v,a5 as C,a6 as _}from"./chunks/framework.B3Jz-8p0.js";import{a2 as u}from"./chunks/theme.DKFx6c4r.js";import{d as b,f as B}from"./chunks/index.BbNYUtVF.js";const x=`<script setup lang="ts">
import { ref } from 'vue'
import { VerSplitter } from '@versakit/ui'

const horizontalSizes = ref([30, 70])
const verticalSizes = ref([40, 60])
<\/script>

<template>
  <h2>横</h2>
  <VerSplitter
    v-model:sizes="horizontalSizes"
    direction="horizontal"
    :min-size="20"
    :max-size="80"
  >
    <template #first>
      <div class="demo-content">
        Left Panel
        <div>Current size: {{ horizontalSizes[0] }}%</div>
      </div>
    </template>
    <template #second>
      <div class="demo-content">
        Right Panel
        <div>Current size: {{ horizontalSizes[1] }}%</div>
      </div>
    </template>
  </VerSplitter>

  <h2>竖</h2>
  <VerSplitter
    v-model:sizes="verticalSizes"
    direction="vertical"
    :min-size="30"
    :max-size="70"
  >
    <template #first>
      <div class="demo-content">
        Top Panel
        <div>Current size: {{ verticalSizes[0] }}%</div>
      </div>
    </template>
    <template #second>
      <div class="demo-content">
        Bottom Panel
        <div>Current size: {{ verticalSizes[1] }}%</div>
      </div>
    </template>
  </VerSplitter>
</template>

<style scoped></style>
`,g={class:"demo-content"},y={class:"demo-content"},P={class:"demo-content"},k={class:"demo-content"},D=h({__name:"base",setup(c){const s=m([30,70]),r=m([40,60]);return(n,e)=>(f(),z(S,null,[e[6]||(e[6]=t("h2",null,"横",-1)),l(d(u),{sizes:s.value,"onUpdate:sizes":e[0]||(e[0]=a=>s.value=a),direction:"horizontal","min-size":20,"max-size":80},{first:o(()=>[t("div",g,[e[2]||(e[2]=i(" Left Panel ")),t("div",null,"Current size: "+p(s.value[0])+"%",1)])]),second:o(()=>[t("div",y,[e[3]||(e[3]=i(" Right Panel ")),t("div",null,"Current size: "+p(s.value[1])+"%",1)])]),_:1},8,["sizes"]),e[7]||(e[7]=t("h2",null,"竖",-1)),l(d(u),{sizes:r.value,"onUpdate:sizes":e[1]||(e[1]=a=>r.value=a),direction:"vertical","min-size":30,"max-size":70},{first:o(()=>[t("div",P,[e[4]||(e[4]=i(" Top Panel ")),t("div",null,"Current size: "+p(r.value[0])+"%",1)])]),second:o(()=>[t("div",k,[e[5]||(e[5]=i(" Bottom Panel ")),t("div",null,"Current size: "+p(r.value[1])+"%",1)])]),_:1},8,["sizes"])],64))}}),V={id:"splitter-分配器-alpha",tabindex:"-1"},T=JSON.parse('{"title":"Splitter 分配器 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/splitter/index.md","filePath":"components/splitter/index.md"}'),w={name:"components/splitter/index.md"},Z=Object.assign(w,{setup(c){const s=m(!0);return(r,n)=>{const e=v("ver-tag"),a=v("ClientOnly");return f(),z("div",null,[t("h1",V,[n[2]||(n[2]=i("Splitter 分配器 ")),l(e,{type:"warn"},{default:o(()=>n[1]||(n[1]=[i("Alpha")])),_:1}),n[3]||(n[3]=i()),n[4]||(n[4]=t("a",{class:"header-anchor",href:"#splitter-分配器-alpha","aria-label":'Permalink to "Splitter 分配器 <ver-tag type="warn">Alpha</ver-tag>"'},"​",-1))]),n[5]||(n[5]=t("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),C(l(d(b),null,null,512),[[_,s.value]]),l(a,null,{default:o(()=>[l(d(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{s.value=!1}),vueCode:d(x)},{vue:o(()=>[l(D)]),_:1},8,["vueCode"])]),_:1})])}}});export{T as __pageData,Z as default};
