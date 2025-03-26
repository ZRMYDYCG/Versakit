import{H as u,U as m}from"./chunks/theme.4ot6jhsU.js";import{d as h,p as f,c as a,o as d,j as t,G as s,k as r,w as l,F as b,C as v,_ as S,B as k,a as x}from"./chunks/framework.DSK5FMsA.js";import{Q as g}from"./chunks/index.CWxr9eMF.js";const y=`<script setup lang="ts">
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
`,C={class:"container"},B={class:"example-box"},V={class:"example-box"},X={class:"controls"},W=["disabled"],Z=["disabled"],z=h({__name:"base",setup(_){const n=f(0),e=[{title:"订单确认",description:"确认订单详情"},{title:"支付处理",description:"完成支付流程"},{title:"订单完成",description:"等待商品送达"}];return(c,i)=>(d(),a("div",C,[t("div",B,[s(r(u),{steps:e,current:n.value,direction:"vertical"},{default:l(()=>[(d(),a(b,null,v(e,(p,o)=>s(r(m),{key:`v-${o}`,index:o},null,8,["index"])),64))]),_:1},8,["current"])]),t("div",V,[s(r(u),{steps:e,current:n.value,direction:"horizontal"},{default:l(()=>[(d(),a(b,null,v(e,(p,o)=>s(r(m),{key:`h-${o}`,index:o},null,8,["index"])),64))]),_:1},8,["current"])]),t("div",X,[t("button",{onClick:i[0]||(i[0]=p=>n.value--),disabled:n.value===0}," 上一步 ",8,W),t("button",{onClick:i[1]||(i[1]=p=>n.value++),disabled:n.value===e.length-1}," 下一步 ",8,Z)])]))}}),N=S(z,[["__scopeId","data-v-4adad20d"]]),H=JSON.parse('{"title":"Steps 步骤条","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps/index.md","filePath":"components/steps/index.md"}'),w={name:"components/steps/index.md"},I=Object.assign(w,{setup(_){return(n,e)=>{const c=k("ClientOnly");return d(),a("div",null,[e[0]||(e[0]=t("h1",{id:"steps-步骤条",tabindex:"-1"},[x("Steps 步骤条 "),t("a",{class:"header-anchor",href:"#steps-步骤条","aria-label":'Permalink to "Steps 步骤条"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基本使用",tabindex:"-1"},[x("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),s(c,null,{default:l(()=>[s(r(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(y)},{vue:l(()=>[s(N)]),_:1},8,["vueCode"])]),_:1})])}}});export{H as __pageData,I as default};
