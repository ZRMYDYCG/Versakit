import{ab as d}from"./chunks/theme.uDsgHOqn.js";import{_ as y,p as i,c as h,o as x,j as n,G as s,k as t,t as a,B as T,a as f,w as b}from"./chunks/framework.BrE8sLAv.js";import{Q as S}from"./chunks/index.CmMjEtxm.js";const C=`<template>
  <div class="time-select-demo">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <VerTimeSelect v-model="time1" placeholder="请选择时间" />
        <div class="desc">
          <p class="title">基本时间选择</p>
          <p class="value">选中值: {{ time1 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 时间范围 -->
    <div class="demo-section">
      <h3>时间范围</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time2"
          placeholder="上午时段"
          start="08:30"
          end="12:00"
          step="00:30"
        />
        <div class="desc">
          <p class="title">设置时间范围和步长</p>
          <p>范围: 08:30 至 12:00</p>
          <p>步长: 30分钟</p>
          <p class="value">选中值: {{ time2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 禁用特定时间 -->
    <div class="demo-section">
      <h3>禁用特定时间</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time3"
          placeholder="营业时间"
          :disabledHours="disabledHours"
          :disabledMinutes="disabledMinutes"
        />
        <div class="desc">
          <p class="title">禁用不可选时间</p>
          <p>禁用小时: 12点 (午休时间)</p>
          <p>禁用分钟: 0,15,30,45 (整点和刻钟)</p>
          <p class="value">选中值: {{ time3 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 最小最大时间 -->
    <div class="demo-section">
      <h3>时间限制</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time4"
          placeholder="工作时间"
          minTime="09:00"
          maxTime="18:00"
          step="01:00"
        />
        <div class="desc">
          <p class="title">限制可选时间范围</p>
          <p>最小时间: 09:00</p>
          <p>最大时间: 18:00</p>
          <p class="value">选中值: {{ time4 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 其他特性 -->
    <div class="demo-row">
      <!-- 禁用状态 -->
      <div class="demo-section half">
        <h3>禁用状态</h3>
        <VerTimeSelect v-model="time5" placeholder="禁用状态" disabled />
        <p class="value">值: {{ time5 }}</p>
      </div>

      <!-- 不可清除 -->
      <div class="demo-section half">
        <h3>不可清除</h3>
        <VerTimeSelect
          v-model="time6"
          placeholder="不可清除"
          :clearable="false"
        />
        <p class="value">值: {{ time6 }}</p>
      </div>
    </div>

    <!-- 搜索筛选 -->
    <div class="demo-section">
      <h3>搜索筛选</h3>
      <div class="demo-content">
        <VerTimeSelect
          v-model="time7"
          placeholder="输入筛选时间"
          start="00:00"
          end="23:59"
          step="00:30"
        />
        <div class="desc">
          <p class="title">支持输入搜索</p>
          <p>可在下拉框打开时输入时间进行筛选</p>
          <p class="value">选中值: {{ time7 || '未选择' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VerTimeSelect } from '@versakit/ui'

// 基础用法
const time1 = ref('')

// 时间范围
const time2 = ref('')

// 禁用特定时间
const time3 = ref('')

// 禁用时段 - 直接使用数组
const disabledHours = [12] // 禁用12点(午休时间)

// 将disabledMinutes从函数改为静态数组
const disabledMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

// 最小/最大时间限制
const time4 = ref('')

// 禁用状态
const time5 = ref('10:00')

// 不可清除
const time6 = ref('14:30')

// 搜索筛选
const time7 = ref('')
<\/script>

<style lang="scss" scoped>
.time-select-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-section {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebeef5;

  h3 {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 500;
    color: #303133;
  }
}

.demo-content {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.desc {
  flex: 1;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;

  p {
    margin: 4px 0;
  }

  .title {
    font-weight: 500;
    color: #303133;
  }

  .value {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e4e7ed;
    color: #409eff;
    font-family: monospace;
  }
}

.demo-row {
  display: flex;
  gap: 20px;

  .half {
    flex: 1;
  }
}

.value {
  margin-top: 12px;
  color: #409eff;
  font-family: monospace;
  font-size: 14px;
}
</style>
`,B={class:"time-select-demo"},W={class:"demo-section"},k={class:"demo-content"},w={class:"desc"},G={class:"value"},N={class:"demo-section"},U={class:"demo-content"},Z={class:"desc"},z={class:"value"},X={class:"demo-section"},D={class:"demo-content"},M={class:"desc"},H={class:"value"},J={class:"demo-section"},A={class:"demo-content"},O={class:"desc"},j={class:"value"},I={class:"demo-row"},L={class:"demo-section half"},P={class:"value"},Y={class:"demo-section half"},E={class:"value"},F={class:"demo-section"},q={class:"demo-content"},Q={class:"desc"},R={class:"value"},$={__name:"base",setup(V){const p=i(""),o=i(""),m=i(""),_=[12],g=[0,5,10,15,20,25,30,35,40,45,50,55],c=i(""),u=i("10:00"),r=i("14:30"),v=i("");return(ne,e)=>(x(),h("div",B,[n("div",W,[e[8]||(e[8]=n("h3",null,"基础用法",-1)),n("div",k,[s(t(d),{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),placeholder:"请选择时间"},null,8,["modelValue"]),n("div",w,[e[7]||(e[7]=n("p",{class:"title"},"基本时间选择",-1)),n("p",G,"选中值: "+a(p.value||"未选择"),1)])])]),n("div",N,[e[12]||(e[12]=n("h3",null,"时间范围",-1)),n("div",U,[s(t(d),{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),placeholder:"上午时段",start:"08:30",end:"12:00",step:"00:30"},null,8,["modelValue"]),n("div",Z,[e[9]||(e[9]=n("p",{class:"title"},"设置时间范围和步长",-1)),e[10]||(e[10]=n("p",null,"范围: 08:30 至 12:00",-1)),e[11]||(e[11]=n("p",null,"步长: 30分钟",-1)),n("p",z,"选中值: "+a(o.value||"未选择"),1)])])]),n("div",X,[e[16]||(e[16]=n("h3",null,"禁用特定时间",-1)),n("div",D,[s(t(d),{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),placeholder:"营业时间",disabledHours:_,disabledMinutes:g},null,8,["modelValue"]),n("div",M,[e[13]||(e[13]=n("p",{class:"title"},"禁用不可选时间",-1)),e[14]||(e[14]=n("p",null,"禁用小时: 12点 (午休时间)",-1)),e[15]||(e[15]=n("p",null,"禁用分钟: 0,15,30,45 (整点和刻钟)",-1)),n("p",H,"选中值: "+a(m.value||"未选择"),1)])])]),n("div",J,[e[20]||(e[20]=n("h3",null,"时间限制",-1)),n("div",A,[s(t(d),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),placeholder:"工作时间",minTime:"09:00",maxTime:"18:00",step:"01:00"},null,8,["modelValue"]),n("div",O,[e[17]||(e[17]=n("p",{class:"title"},"限制可选时间范围",-1)),e[18]||(e[18]=n("p",null,"最小时间: 09:00",-1)),e[19]||(e[19]=n("p",null,"最大时间: 18:00",-1)),n("p",j,"选中值: "+a(c.value||"未选择"),1)])])]),n("div",I,[n("div",L,[e[21]||(e[21]=n("h3",null,"禁用状态",-1)),s(t(d),{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=l=>u.value=l),placeholder:"禁用状态",disabled:""},null,8,["modelValue"]),n("p",P,"值: "+a(u.value),1)]),n("div",Y,[e[22]||(e[22]=n("h3",null,"不可清除",-1)),s(t(d),{modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value=l),placeholder:"不可清除",clearable:!1},null,8,["modelValue"]),n("p",E,"值: "+a(r.value),1)])]),n("div",F,[e[25]||(e[25]=n("h3",null,"搜索筛选",-1)),n("div",q,[s(t(d),{modelValue:v.value,"onUpdate:modelValue":e[6]||(e[6]=l=>v.value=l),placeholder:"输入筛选时间",start:"00:00",end:"23:59",step:"00:30"},null,8,["modelValue"]),n("div",Q,[e[23]||(e[23]=n("p",{class:"title"},"支持输入搜索",-1)),e[24]||(e[24]=n("p",null,"可在下拉框打开时输入时间进行筛选",-1)),n("p",R,"选中值: "+a(v.value||"未选择"),1)])])])]))}},K=y($,[["__scopeId","data-v-d89cfc75"]]),oe=JSON.parse('{"title":"Time Select 时间选择","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeselect/index.md","filePath":"components/timeselect/index.md"}'),ee={name:"components/timeselect/index.md"},de=Object.assign(ee,{setup(V){return(p,o)=>{const m=T("ClientOnly");return x(),h("div",null,[o[0]||(o[0]=n("h1",{id:"time-select-时间选择",tabindex:"-1"},[f("Time Select 时间选择 "),n("a",{class:"header-anchor",href:"#time-select-时间选择","aria-label":'Permalink to "Time Select 时间选择"'},"​")],-1)),o[1]||(o[1]=n("h2",{id:"基本使用",tabindex:"-1"},[f("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),s(m,null,{default:b(()=>[s(t(S),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(C)},{vue:b(()=>[s(K)]),_:1},8,["vueCode"])]),_:1})])}}});export{oe as __pageData,de as default};
