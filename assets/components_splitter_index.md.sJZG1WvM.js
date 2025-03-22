import{F as m}from"./chunks/theme.TceoO1wW.js";import{d as h,p as v,c as z,o as c,F as S,j as n,G as l,k as a,w as s,a as i,t as r,B as u}from"./chunks/framework.CsNVs6Ia.js";import{Q as C}from"./chunks/index.CT2k1i2x.js";const B=`<script setup lang="ts">
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
`,b={class:"demo-content"},x={class:"demo-content"},g={class:"demo-content"},_={class:"demo-content"},y=h({__name:"base",setup(f){const o=v([30,70]),t=v([40,60]);return(p,e)=>(c(),z(S,null,[e[6]||(e[6]=n("h2",null,"横",-1)),l(a(m),{sizes:o.value,"onUpdate:sizes":e[0]||(e[0]=d=>o.value=d),direction:"horizontal","min-size":20,"max-size":80},{first:s(()=>[n("div",b,[e[2]||(e[2]=i(" Left Panel ")),n("div",null,"Current size: "+r(o.value[0])+"%",1)])]),second:s(()=>[n("div",x,[e[3]||(e[3]=i(" Right Panel ")),n("div",null,"Current size: "+r(o.value[1])+"%",1)])]),_:1},8,["sizes"]),e[7]||(e[7]=n("h2",null,"竖",-1)),l(a(m),{sizes:t.value,"onUpdate:sizes":e[1]||(e[1]=d=>t.value=d),direction:"vertical","min-size":30,"max-size":70},{first:s(()=>[n("div",g,[e[4]||(e[4]=i(" Top Panel ")),n("div",null,"Current size: "+r(t.value[0])+"%",1)])]),second:s(()=>[n("div",_,[e[5]||(e[5]=i(" Bottom Panel ")),n("div",null,"Current size: "+r(t.value[1])+"%",1)])]),_:1},8,["sizes"])],64))}}),P={id:"splitter-分配器-alpha",tabindex:"-1"},X=JSON.parse('{"title":"Splitter 分配器 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/splitter/index.md","filePath":"components/splitter/index.md"}'),V={name:"components/splitter/index.md"},w=Object.assign(V,{setup(f){return(o,t)=>{const p=u("ver-tag"),e=u("ClientOnly");return c(),z("div",null,[n("h1",P,[t[1]||(t[1]=i("Splitter 分配器 ")),l(p,{type:"warn"},{default:s(()=>t[0]||(t[0]=[i("Alpha")])),_:1}),t[2]||(t[2]=i()),t[3]||(t[3]=n("a",{class:"header-anchor",href:"#splitter-分配器-alpha","aria-label":'Permalink to "Splitter 分配器 <ver-tag type="warn">Alpha</ver-tag>"'},"​",-1))]),t[4]||(t[4]=n("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),l(e,null,{default:s(()=>[l(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(B)},{vue:s(()=>[l(y)]),_:1},8,["vueCode"])]),_:1})])}}});export{X as __pageData,w as default};
