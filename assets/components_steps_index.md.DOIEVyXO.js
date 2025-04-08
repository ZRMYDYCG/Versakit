import{d as _,p as f,c as l,o,j as e,G as r,k as s,w as d,F as c,C as m,_ as k,B as g,a5 as y,a as S,a6 as V}from"./chunks/framework.B3Jz-8p0.js";import{a3 as x,a4 as b}from"./chunks/theme.DKFx6c4r.js";import{d as z,f as $}from"./chunks/index.BbNYUtVF.js";const C=`<script setup lang="ts">
import { ref } from 'vue'
import { VerStepItem, VerSteps } from '@versakit/ui'

interface Step {
  title: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error'
}

const currentStep = ref(0)
const steps = [
  { title: '订单确认', description: '确认订单详情' },
  { title: '支付处理', description: '完成支付流程' },
  { title: '订单完成', description: '等待商品送达' },
]

// 错误状态示例
const errorSteps: Step[] = [
  { title: '提交申请', description: '填写信息' },
  { title: '审核中', description: '等待审核结果', status: 'error' },
  { title: '申请结果', description: '查看申请结果' },
]

// 自定义图标示例
const iconSteps: Step[] = [
  { title: '账号注册', description: '创建您的账号', icon: '👤' },
  { title: '资料完善', description: '补充个人信息', icon: '📝' },
  { title: '邮箱验证', description: '验证您的邮箱', icon: '✉️' },
]
<\/script>

<template>
  <div class="container">
    <h2>基础用法</h2>
    <!-- Vertical Example -->
    <div class="example-box">
      <h3>垂直步骤条</h3>
      <VerSteps :steps="steps" :currentStep="currentStep" direction="vertical">
        <VerStepItem
          v-for="(_, index) in steps"
          :key="\`v-\${index}\`"
          :index="index"
          :clickable="true"
        />
      </VerSteps>
    </div>

    <!-- Horizontal Example -->
    <div class="example-box">
      <h3>水平步骤条</h3>
      <VerSteps
        :steps="steps"
        :currentStep="currentStep"
        direction="horizontal"
      >
        <VerStepItem
          v-for="(_, index) in steps"
          :key="\`h-\${index}\`"
          :index="index"
        />
      </VerSteps>
    </div>

    <!-- Controls -->
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

    <h2>高级用法</h2>

    <!-- Error Status Example -->
    <div class="example-box">
      <h3>错误状态</h3>
      <VerSteps :steps="errorSteps" :currentStep="1" direction="horizontal">
        <VerStepItem
          v-for="(_, index) in errorSteps"
          :key="\`error-\${index}\`"
          :index="index"
        />
      </VerSteps>
    </div>

    <!-- Custom Icons Example -->
    <div class="example-box">
      <h3>自定义图标</h3>
      <VerSteps :steps="iconSteps" :currentStep="1" direction="horizontal">
        <VerStepItem
          v-for="(_, index) in iconSteps"
          :key="\`icon-\${index}\`"
          :index="index"
        />
      </VerSteps>
    </div>

    <!-- Different Size Example -->
    <div class="example-box">
      <h3>不同尺寸</h3>
      <div style="margin-bottom: 20px">
        <small>小尺寸</small>
        <VerSteps :steps="steps" :currentStep="1" size="small">
          <VerStepItem
            v-for="(_, index) in steps"
            :key="\`small-\${index}\`"
            :index="index"
          />
        </VerSteps>
      </div>
      <div style="margin-bottom: 20px">
        <small>默认尺寸</small>
        <VerSteps :steps="steps" :currentStep="1" size="default">
          <VerStepItem
            v-for="(_, index) in steps"
            :key="\`default-\${index}\`"
            :index="index"
          />
        </VerSteps>
      </div>
      <div>
        <small>大尺寸</small>
        <VerSteps :steps="steps" :currentStep="1" size="large">
          <VerStepItem
            v-for="(_, index) in steps"
            :key="\`large-\${index}\`"
            :index="index"
          />
        </VerSteps>
      </div>
    </div>

    <!-- Label Placement Example -->
    <div class="example-box">
      <h3>标签位置</h3>
      <div style="margin-bottom: 20px">
        <VerSteps :steps="steps" :currentStep="1" labelPlacement="horizontal">
          <VerStepItem
            v-for="(_, index) in steps"
            :key="\`h-label-\${index}\`"
            :index="index"
          />
        </VerSteps>
      </div>
      <div>
        <VerSteps :steps="steps" :currentStep="1" labelPlacement="vertical">
          <VerStepItem
            v-for="(_, index) in steps"
            :key="\`v-label-\${index}\`"
            :index="index"
          />
        </VerSteps>
      </div>
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

h3 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.example-box {
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
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
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background: #3ca876;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

small {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}
</style>
`,B={class:"container"},I={class:"example-box"},X={class:"example-box"},w={class:"controls"},W=["disabled"],Z=["disabled"],N={class:"example-box"},D={class:"example-box"},P={class:"example-box"},E={style:{"margin-bottom":"20px"}},A={style:{"margin-bottom":"20px"}},T={class:"example-box"},Y={style:{"margin-bottom":"20px"}},H=_({__name:"base",setup(h){const p=f(0),i=[{title:"订单确认",description:"确认订单详情"},{title:"支付处理",description:"完成支付流程"},{title:"订单完成",description:"等待商品送达"}],u=[{title:"提交申请",description:"填写信息"},{title:"审核中",description:"等待审核结果",status:"error"},{title:"申请结果",description:"查看申请结果"}],v=[{title:"账号注册",description:"创建您的账号",icon:"👤"},{title:"资料完善",description:"补充个人信息",icon:"📝"},{title:"邮箱验证",description:"验证您的邮箱",icon:"✉️"}];return(L,n)=>(o(),l("div",B,[n[11]||(n[11]=e("h2",null,"基础用法",-1)),e("div",I,[n[2]||(n[2]=e("h3",null,"垂直步骤条",-1)),r(s(x),{steps:i,currentStep:p.value,direction:"vertical"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`v-${t}`,index:t,clickable:!0},null,8,["index"])),64))]),_:1},8,["currentStep"])]),e("div",X,[n[3]||(n[3]=e("h3",null,"水平步骤条",-1)),r(s(x),{steps:i,currentStep:p.value,direction:"horizontal"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`h-${t}`,index:t},null,8,["index"])),64))]),_:1},8,["currentStep"])]),e("div",w,[e("button",{onClick:n[0]||(n[0]=a=>p.value--),disabled:p.value===0}," 上一步 ",8,W),e("button",{onClick:n[1]||(n[1]=a=>p.value++),disabled:p.value===i.length-1}," 下一步 ",8,Z)]),n[12]||(n[12]=e("h2",null,"高级用法",-1)),e("div",N,[n[4]||(n[4]=e("h3",null,"错误状态",-1)),r(s(x),{steps:u,currentStep:1,direction:"horizontal"},{default:d(()=>[(o(),l(c,null,m(u,(a,t)=>r(s(b),{key:`error-${t}`,index:t},null,8,["index"])),64))]),_:1})]),e("div",D,[n[5]||(n[5]=e("h3",null,"自定义图标",-1)),r(s(x),{steps:v,currentStep:1,direction:"horizontal"},{default:d(()=>[(o(),l(c,null,m(v,(a,t)=>r(s(b),{key:`icon-${t}`,index:t},null,8,["index"])),64))]),_:1})]),e("div",P,[n[9]||(n[9]=e("h3",null,"不同尺寸",-1)),e("div",E,[n[6]||(n[6]=e("small",null,"小尺寸",-1)),r(s(x),{steps:i,currentStep:1,size:"small"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`small-${t}`,index:t},null,8,["index"])),64))]),_:1})]),e("div",A,[n[7]||(n[7]=e("small",null,"默认尺寸",-1)),r(s(x),{steps:i,currentStep:1,size:"default"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`default-${t}`,index:t},null,8,["index"])),64))]),_:1})]),e("div",null,[n[8]||(n[8]=e("small",null,"大尺寸",-1)),r(s(x),{steps:i,currentStep:1,size:"large"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`large-${t}`,index:t},null,8,["index"])),64))]),_:1})])]),e("div",T,[n[10]||(n[10]=e("h3",null,"标签位置",-1)),e("div",Y,[r(s(x),{steps:i,currentStep:1,labelPlacement:"horizontal"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`h-label-${t}`,index:t},null,8,["index"])),64))]),_:1})]),e("div",null,[r(s(x),{steps:i,currentStep:1,labelPlacement:"vertical"},{default:d(()=>[(o(),l(c,null,m(i,(a,t)=>r(s(b),{key:`v-label-${t}`,index:t},null,8,["index"])),64))]),_:1})])])]))}}),J=k(H,[["__scopeId","data-v-92797447"]]),G=JSON.parse('{"title":"Steps 步骤条","description":"","frontmatter":{},"headers":[],"relativePath":"components/steps/index.md","filePath":"components/steps/index.md"}'),M={name:"components/steps/index.md"},R=Object.assign(M,{setup(h){const p=f(!0);return(i,u)=>{const v=g("ClientOnly");return o(),l("div",null,[u[1]||(u[1]=e("h1",{id:"steps-步骤条",tabindex:"-1"},[S("Steps 步骤条 "),e("a",{class:"header-anchor",href:"#steps-步骤条","aria-label":'Permalink to "Steps 步骤条"'},"​")],-1)),u[2]||(u[2]=e("h2",{id:"基本使用",tabindex:"-1"},[S("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),y(r(s(z),null,null,512),[[V,p.value]]),r(v,null,{default:d(()=>[r(s($),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:u[0]||(u[0]=()=>{p.value=!1}),vueCode:s(C)},{vue:d(()=>[r(J)]),_:1},8,["vueCode"])]),_:1})])}}});export{G as __pageData,R as default};
