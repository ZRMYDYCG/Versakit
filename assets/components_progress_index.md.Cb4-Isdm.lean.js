import{$ as l,f as b}from"./chunks/theme.tWKbjlo-.js";import{d as f,p,c as u,o as d,G as e,j as s,k as t,_ as h,w as o,a as i,B as g}from"./chunks/framework.D0tLR0bK.js";import{Q as m}from"./chunks/index.BULxsYUw.js";const B=`<template>
  <div>
    <VerProgress :animation="true" :percent />

    <div>
      <VerProgress :animation="true" type="circle" :percent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress } from '@versakit/ui'

const percent = ref(0)

setInterval(() => {
  percent.value = percent.value >= 100 ? 0 : percent.value + 10
}, 1000)
<\/script>
`,_=f({__name:"animation",setup(v){const r=p(0);return setInterval(()=>{r.value=r.value>=100?0:r.value+10},1e3),(n,c)=>(d(),u("div",null,[e(t(l),{animation:!0,percent:r.value},null,8,["percent"]),s("div",null,[e(t(l),{animation:!0,type:"circle",percent:r.value},null,8,["percent"])])]))}}),X=`<template>
  <div>
    <VerProgress type="circle" :percent />
    <VerProgress type="circle" :percent status="success" />
    <VerProgress type="circle" :percent status="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress } from '@versakit/ui'

const percent = ref(75)
<\/script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
`,Z=f({__name:"circle",setup(v){const r=p(75);return(n,c)=>(d(),u("div",null,[e(t(l),{type:"circle",percent:r.value},null,8,["percent"]),e(t(l),{type:"circle",percent:r.value,status:"success"},null,8,["percent"]),e(t(l),{type:"circle",percent:r.value,status:"error"},null,8,["percent"])]))}}),C=h(Z,[["__scopeId","data-v-06a138a2"]]),W=`<template>
  <div>
    <VerProgress :percent />
    <VerProgress :percent status="success" />
    <VerProgress :percent status="error" />

    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <VerProgress :percent="value" />
      <div style="display: flex; justify-content: space-around">
        <VerButton @click="value++" type="success">+</VerButton>
        <VerButton @click="value--" type="error">-</VerButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress, VerButton } from '@versakit/ui'

const percent = ref(75)
const value = ref(0)
<\/script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
`,V={style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},x={style:{display:"flex","justify-content":"space-around"}},k=f({__name:"base",setup(v){const r=p(75),n=p(0);return(c,a)=>(d(),u("div",null,[e(t(l),{percent:r.value},null,8,["percent"]),e(t(l),{percent:r.value,status:"success"},null,8,["percent"]),e(t(l),{percent:r.value,status:"error"},null,8,["percent"]),s("div",V,[e(t(l),{percent:n.value},null,8,["percent"]),s("div",x,[e(t(b),{onClick:a[0]||(a[0]=y=>n.value++),type:"success"},{default:o(()=>a[2]||(a[2]=[i("+")])),_:1}),e(t(b),{onClick:a[1]||(a[1]=y=>n.value--),type:"error"},{default:o(()=>a[3]||(a[3]=[i("-")])),_:1})])])]))}}),J=h(k,[["__scopeId","data-v-cb216448"]]),N=JSON.parse('{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}'),D={name:"components/progress/index.md"},T=Object.assign(D,{setup(v){return(r,n)=>{const c=g("ClientOnly");return d(),u("div",null,[n[0]||(n[0]=s("h1",{id:"progress-进度条",tabindex:"-1"},[i("Progress 进度条 "),s("a",{class:"header-anchor",href:"#progress-进度条","aria-label":'Permalink to "Progress 进度条"'},"​")],-1)),n[1]||(n[1]=s("p",null,"用于展示操作进度，告知用户当前状态和预期。",-1)),n[2]||(n[2]=s("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e(c,null,{default:o(()=>[e(t(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(W)},{vue:o(()=>[e(J)]),_:1},8,["vueCode"])]),_:1}),n[3]||(n[3]=s("h2",{id:"环形进度条",tabindex:"-1"},[i("环形进度条 "),s("a",{class:"header-anchor",href:"#环形进度条","aria-label":'Permalink to "环形进度条"'},"​")],-1)),e(c,null,{default:o(()=>[e(t(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(X)},{vue:o(()=>[e(C)]),_:1},8,["vueCode"])]),_:1}),n[4]||(n[4]=s("h2",{id:"动画",tabindex:"-1"},[i("动画 "),s("a",{class:"header-anchor",href:"#动画","aria-label":'Permalink to "动画"'},"​")],-1)),e(c,null,{default:o(()=>[e(t(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(B)},{vue:o(()=>[e(_)]),_:1},8,["vueCode"])]),_:1})])}}});export{N as __pageData,T as default};
