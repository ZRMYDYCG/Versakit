import{d as h,p as c,c as p,o as d,G as e,j as l,k as n,_ as B,w as o,a as i,B as X,a5 as m,a6 as f}from"./chunks/framework.B3Jz-8p0.js";import{V as a,x as g}from"./chunks/theme.DKFx6c4r.js";import{d as b,f as y}from"./chunks/index.BbNYUtVF.js";const Z=`<template>
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
`,C=h({__name:"animation",setup(v){const t=c(0);return setInterval(()=>{t.value=t.value>=100?0:t.value+10},1e3),(u,r)=>(d(),p("div",null,[e(n(a),{animation:!0,percent:t.value},null,8,["percent"]),l("div",null,[e(n(a),{animation:!0,type:"circle",percent:t.value},null,8,["percent"])])]))}}),W=`<template>
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
`,V=h({__name:"circle",setup(v){const t=c(75);return(u,r)=>(d(),p("div",null,[e(n(a),{type:"circle",percent:t.value},null,8,["percent"]),e(n(a),{type:"circle",percent:t.value,status:"success"},null,8,["percent"]),e(n(a),{type:"circle",percent:t.value,status:"error"},null,8,["percent"])]))}}),x=B(V,[["__scopeId","data-v-06a138a2"]]),k=`<template>
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
`,D={style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},J={style:{display:"flex","justify-content":"space-around"}},P=h({__name:"base",setup(v){const t=c(75),u=c(0);return(r,s)=>(d(),p("div",null,[e(n(a),{percent:t.value},null,8,["percent"]),e(n(a),{percent:t.value,status:"success"},null,8,["percent"]),e(n(a),{percent:t.value,status:"error"},null,8,["percent"]),l("div",D,[e(n(a),{percent:u.value},null,8,["percent"]),l("div",J,[e(n(g),{onClick:s[0]||(s[0]=_=>u.value++),type:"success"},{default:o(()=>s[2]||(s[2]=[i("+")])),_:1}),e(n(g),{onClick:s[1]||(s[1]=_=>u.value--),type:"error"},{default:o(()=>s[3]||(s[3]=[i("-")])),_:1})])])]))}}),z=B(P,[["__scopeId","data-v-cb216448"]]),M=JSON.parse('{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}'),A={name:"components/progress/index.md"},Y=Object.assign(A,{setup(v){const t=c(!0);return(u,r)=>{const s=X("ClientOnly");return d(),p("div",null,[r[3]||(r[3]=l("h1",{id:"progress-进度条",tabindex:"-1"},[i("Progress 进度条 "),l("a",{class:"header-anchor",href:"#progress-进度条","aria-label":'Permalink to "Progress 进度条"'},"​")],-1)),r[4]||(r[4]=l("p",null,"用于展示操作进度，告知用户当前状态和预期。",-1)),r[5]||(r[5]=l("h2",{id:"基本使用",tabindex:"-1"},[i("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),m(e(n(b),null,null,512),[[f,t.value]]),e(s,null,{default:o(()=>[e(n(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[0]||(r[0]=()=>{t.value=!1}),vueCode:n(k)},{vue:o(()=>[e(z)]),_:1},8,["vueCode"])]),_:1}),r[6]||(r[6]=l("h2",{id:"环形进度条",tabindex:"-1"},[i("环形进度条 "),l("a",{class:"header-anchor",href:"#环形进度条","aria-label":'Permalink to "环形进度条"'},"​")],-1)),m(e(n(b),null,null,512),[[f,t.value]]),e(s,null,{default:o(()=>[e(n(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[1]||(r[1]=()=>{t.value=!1}),vueCode:n(W)},{vue:o(()=>[e(x)]),_:1},8,["vueCode"])]),_:1}),r[7]||(r[7]=l("h2",{id:"动画",tabindex:"-1"},[i("动画 "),l("a",{class:"header-anchor",href:"#动画","aria-label":'Permalink to "动画"'},"​")],-1)),m(e(n(b),null,null,512),[[f,t.value]]),e(s,null,{default:o(()=>[e(n(y),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:r[2]||(r[2]=()=>{t.value=!1}),vueCode:n(Z)},{vue:o(()=>[e(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{M as __pageData,Y as default};
