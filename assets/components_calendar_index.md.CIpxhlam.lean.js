import{C as p}from"./chunks/theme.tWKbjlo-.js";import{d as h,B as C,b as v,o as i,w as r,j as t,G as n,t as c,a as d,k as o,p as y,c as f,e as _,n as g,as as D}from"./chunks/framework.D0tLR0bK.js";import{Q as m}from"./chunks/index.BULxsYUw.js";const z=`<template>
  <VerCalendar ref="calendar">
    <template
      #header="{ date, prevMonth, nextMonth, prevYear, nextYear, today }"
    >
      <div class="custom-header">
        <span class="custom-header-title">
          {{ date.getFullYear() }}年{{ date.getMonth() + 1 }}月
        </span>

        <VerButton type="primary" size="sm" @click="prevYear">上一年</VerButton>
        <VerButton type="primary" size="sm" @click="nextYear">下一年</VerButton>
        <VerButton type="primary" size="sm" @click="prevMonth">
          上个月
        </VerButton>

        <VerButton type="primary" size="sm" @click="today">今天</VerButton>
        <VerButton type="primary" size="sm" @click="nextMonth">
          下个月
        </VerButton>
        <VerButton type="primary" size="sm" @click="nextYear">下一年</VerButton>
      </div>
    </template>
  </VerCalendar>
</template>

<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
<\/script>
<style>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}
.custom-header-title {
  margin: auto;
}
</style>
`,X={class:"custom-header"},A={class:"custom-header-title"},Y=h({__name:"header",setup(u){return(s,e)=>{const a=C("VerButton");return i(),v(o(p),{ref:"calendar"},{header:r(({date:l,prevMonth:k,nextMonth:B,prevYear:V,nextYear:b,today:x})=>[t("div",X,[t("span",A,c(l.getFullYear())+"年"+c(l.getMonth()+1)+"月 ",1),n(a,{type:"primary",size:"sm",onClick:V},{default:r(()=>e[0]||(e[0]=[d("上一年")])),_:2},1032,["onClick"]),n(a,{type:"primary",size:"sm",onClick:b},{default:r(()=>e[1]||(e[1]=[d("下一年")])),_:2},1032,["onClick"]),n(a,{type:"primary",size:"sm",onClick:k},{default:r(()=>e[2]||(e[2]=[d(" 上个月 ")])),_:2},1032,["onClick"]),n(a,{type:"primary",size:"sm",onClick:x},{default:r(()=>e[3]||(e[3]=[d("今天")])),_:2},1032,["onClick"]),n(a,{type:"primary",size:"sm",onClick:B},{default:r(()=>e[4]||(e[4]=[d(" 下个月 ")])),_:2},1032,["onClick"]),n(a,{type:"primary",size:"sm",onClick:b},{default:r(()=>e[5]||(e[5]=[d("下一年")])),_:2},1032,["onClick"])])]),_:1},512)}}}),Z=`<template>
  <VerCalendar v-model="date">
    <template #date-cell="{ data }">
      <div class="custom-cell">
        <div class="custom-cell-date" :class="{ 'is-selected': data.isSelected }">
          {{ data.day.split('-').slice(2).join('') }}
        </div>
        <div class="custom-cell-text" v-if="data.type === 'current-month'">
          {{ data.isSelected ? '已选择' : '可选' }}
        </div>
      </div>
    </template>
  </VerCalendar>
</template>

<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
import { ref } from 'vue'

const date = ref(new Date())
<\/script>
`,W={class:"custom-cell"},T={key:0,class:"custom-cell-text"},S=h({__name:"customize",setup(u){const s=y(new Date);return(e,a)=>(i(),v(o(p),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l)},{"date-cell":r(({data:l})=>[t("div",W,[t("div",{class:g(["custom-cell-date",{"is-selected":l.isSelected}])},c(l.day.split("-").slice(2).join("")),3),l.type==="current-month"?(i(),f("div",T,c(l.isSelected?"已选择":"可选"),1)):_("",!0)])]),_:1},8,["modelValue"]))}}),w=`<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(new Date())
<\/script>

<template>
  <VerCalendar v-model="value" />
</template>
`,N=h({__name:"base",setup(u){const s=y(new Date);return(e,a)=>(i(),v(o(p),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l)},null,8,["modelValue"]))}}),J=JSON.parse('{"title":"Calendar 日历","description":"","frontmatter":{},"headers":[],"relativePath":"components/calendar/index.md","filePath":"components/calendar/index.md"}'),P={name:"components/calendar/index.md"},j=Object.assign(P,{setup(u){return(s,e)=>{const a=C("ClientOnly");return i(),f("div",null,[e[0]||(e[0]=t("h1",{id:"calendar-日历",tabindex:"-1"},[d("Calendar 日历 "),t("a",{class:"header-anchor",href:"#calendar-日历","aria-label":'Permalink to "Calendar 日历"'},"​")],-1)),e[1]||(e[1]=t("p",null,"用于展示日期的日历组件，支持自定义内容和头部。",-1)),e[2]||(e[2]=t("h2",{id:"基础使用",tabindex:"-1"},[d("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[3]||(e[3]=t("p",null,[d("Calendar 组件支持通过 "),t("code",null,"v-model"),d(" 进行日期选择，未指定时默认显示当前月份。")],-1)),n(a,null,{default:r(()=>[n(o(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(w)},{vue:r(()=>[n(N)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"自定义单元格",tabindex:"-1"},[d("自定义单元格 "),t("a",{class:"header-anchor",href:"#自定义单元格","aria-label":'Permalink to "自定义单元格"'},"​")],-1)),e[5]||(e[5]=t("p",null,[d("通过设置 "),t("code",null,"date-cell"),d(" 插槽来自定义日历单元格中显示的内容，可以获取到当前单元格的日期信息。")],-1)),n(a,null,{default:r(()=>[n(o(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(Z)},{vue:r(()=>[n(S)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"自定义头部",tabindex:"-1"},[d("自定义头部 "),t("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),e[7]||(e[7]=t("p",null,[d("使用 "),t("code",null,"header"),d(" 插槽来自定义日历头部内容，可以获取到日期切换的方法。")],-1)),n(a,null,{default:r(()=>[n(o(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(z)},{vue:r(()=>[n(Y)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=D("",9))])}}});export{J as __pageData,j as default};
