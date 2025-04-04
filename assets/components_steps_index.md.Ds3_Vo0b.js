import{d as f,p as x,c as d,o as l,j as t,G as n,k as r,w as p,F as u,C as m,_ as S,B as k,a5 as y,a as b,a6 as g}from"./chunks/framework.DgG_RYdR.js";import{V as v,Y as _}from"./chunks/theme.BN5ATFS7.js";import{d as C,f as V}from"./chunks/index.CrgVH6Ra.js";const B=`<script setup lang="ts">
import { ref } from 'vue'
import { VerStepItem, VerSteps } from '@versakit/ui'

const currentStep = ref(0)
const steps = [
  { title: '订单确认', description: '确认订单详情' },
  { title: '支付处理', description: '完成支付流程' },
  { title: '订单完成', description: '等待商品送达' },
]
<\/script>

<template>
  <div class="container">
    <!-- Vertical Example -->
    <div class="example-box">
      <VerSteps :steps="steps" :current="currentStep" direction="vertical">
        <VerStepItem
          v-for="(_, index) in steps"
          :key="\`v-\${index}\`"
          :index="index"
        />
      </VerSteps>
    </div>

    <!-- Horizontal Example -->
    <div class="example-box">
      <VerSteps :steps="steps" :current="currentStep" direction="horizontal">
        <VerStepItem
          v-for="(_, index) in steps"
          :key="\`h-\${index}\`"
          :index="index"
        />
      </VerSteps>
    </div>

    <div class="controls">
      <button @click="currentStep--" :disabled="currentStep === 0">
        上一步
      </button>
      <button
        @click="currentStep++"
        :disabled="currentStep === steps.length - 1"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
`,X={class:"container"},W={class:"example-box"},Z={class:"example-box"},w={class:"controls"},z=["disabled"],N=["disabled"],D=f({__name:"base",setup(h){const e=x(0),o=[{title:"订单确认",description:"确认订单详情"},{title:"支付处理",description:"完成支付流程"},{title:"订单完成",description:"等待商品送达"}];return(s,i)=>(l(),d("div",X,[t("div",W,[n(r(v),{steps:o,current:e.value,direction:"vertical"},{default:p(()=>[(l(),d(u,null,m(o,(c,a)=>n(r(_),{key:`v-${a}`,index:a},null,8,["index"])),64))]),_:1},8,["current"])]),t("div",Z,[n(r(v),{steps:o,current:e.value,direction:"horizontal"},{default:p(()=>[(l(),d(u,null,m(o,(c,a)=>n(r(_),{key:`h-${a}`,index:a},null,8,["index"])),64))]),_:1},8,["current"])]),t("div",w,[t("button",{onClick:i[0]||(i[0]=c=>e.value--),disabled:e.value===0}," 上一步 ",8,z),t("button",{onClick:i[1]||(i[1]=c=>e.value++),disabled:e.value===o.length-1}," 下一步 ",8,N)])]))}}),A=S(D,[["__scopeId","data-v-4adad20d"]]),H=JSON.parse('{"title":"Steps 步骤条","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps/index.md","filePath":"components/steps/index.md"}'),I={name:"components/steps/index.md"},J=Object.assign(I,{setup(h){const e=x(!0);return(o,s)=>{const i=k("ClientOnly");return l(),d("div",null,[s[1]||(s[1]=t("h1",{id:"steps-步骤条",tabindex:"-1"},[b("Steps 步骤条 "),t("a",{class:"header-anchor",href:"#steps-步骤条","aria-label":'Permalink to "Steps 步骤条"'},"​")],-1)),s[2]||(s[2]=t("h2",{id:"基本使用",tabindex:"-1"},[b("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),y(n(r(C),null,null,512),[[g,e.value]]),n(i,null,{default:p(()=>[n(r(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:r(B)},{vue:p(()=>[n(A)]),_:1},8,["vueCode"])]),_:1})])}}});export{H as __pageData,J as default};
