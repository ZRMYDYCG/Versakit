import{d as b,B,b as f,o as i,w as r,j as t,G as a,t as c,a as d,k as s,p as y,c as V,e as z,n as X,a5 as m,aw as A,a6 as p}from"./chunks/framework.B3Jz-8p0.js";import{a as C}from"./chunks/theme.DKFx6c4r.js";import{d as h,f as v}from"./chunks/index.BbNYUtVF.js";const Y=`<template>
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
`,Z={class:"custom-header"},W={class:"custom-header-title"},w=b({__name:"header",setup(u){return(o,n)=>{const e=B("VerButton");return i(),f(s(C),{ref:"calendar"},{header:r(({date:l,prevMonth:x,nextMonth:_,prevYear:g,nextYear:k,today:D})=>[t("div",Z,[t("span",W,c(l.getFullYear())+"年"+c(l.getMonth()+1)+"月 ",1),a(e,{type:"primary",size:"sm",onClick:g},{default:r(()=>n[0]||(n[0]=[d("上一年")])),_:2},1032,["onClick"]),a(e,{type:"primary",size:"sm",onClick:k},{default:r(()=>n[1]||(n[1]=[d("下一年")])),_:2},1032,["onClick"]),a(e,{type:"primary",size:"sm",onClick:x},{default:r(()=>n[2]||(n[2]=[d(" 上个月 ")])),_:2},1032,["onClick"]),a(e,{type:"primary",size:"sm",onClick:D},{default:r(()=>n[3]||(n[3]=[d("今天")])),_:2},1032,["onClick"]),a(e,{type:"primary",size:"sm",onClick:_},{default:r(()=>n[4]||(n[4]=[d(" 下个月 ")])),_:2},1032,["onClick"]),a(e,{type:"primary",size:"sm",onClick:k},{default:r(()=>n[5]||(n[5]=[d("下一年")])),_:2},1032,["onClick"])])]),_:1},512)}}}),T=`<template>
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
`,S={class:"custom-cell"},M={key:0,class:"custom-cell-text"},N=b({__name:"customize",setup(u){const o=y(new Date);return(n,e)=>(i(),f(s(C),{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},{"date-cell":r(({data:l})=>[t("div",S,[t("div",{class:X(["custom-cell-date",{"is-selected":l.isSelected}])},c(l.day.split("-").slice(2).join("")),3),l.type==="current-month"?(i(),V("div",M,c(l.isSelected?"已选择":"可选"),1)):z("",!0)])]),_:1},8,["modelValue"]))}}),P=`<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(new Date())
<\/script>

<template>
  <VerCalendar v-model="value" />
</template>
`,q=b({__name:"base",setup(u){const o=y(new Date);return(n,e)=>(i(),f(s(C),{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},null,8,["modelValue"]))}}),$=JSON.parse('{"title":"Calendar 日历","description":"","frontmatter":{},"headers":[],"relativePath":"components/calendar/index.md","filePath":"components/calendar/index.md"}'),I={name:"components/calendar/index.md"},E=Object.assign(I,{setup(u){const o=y(!0);return(n,e)=>{const l=B("ClientOnly");return i(),V("div",null,[e[3]||(e[3]=t("h1",{id:"calendar-日历",tabindex:"-1"},[d("Calendar 日历 "),t("a",{class:"header-anchor",href:"#calendar-日历","aria-label":'Permalink to "Calendar 日历"'},"​")],-1)),e[4]||(e[4]=t("p",null,"用于展示日期的日历组件，支持自定义内容和头部。",-1)),e[5]||(e[5]=t("h2",{id:"基础使用",tabindex:"-1"},[d("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[6]||(e[6]=t("p",null,[d("Calendar 组件支持通过 "),t("code",null,"v-model"),d(" 进行日期选择，未指定时默认显示当前月份。")],-1)),m(a(s(h),null,null,512),[[p,o.value]]),a(l,null,{default:r(()=>[a(s(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:s(P)},{vue:r(()=>[a(q)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=t("h2",{id:"自定义单元格",tabindex:"-1"},[d("自定义单元格 "),t("a",{class:"header-anchor",href:"#自定义单元格","aria-label":'Permalink to "自定义单元格"'},"​")],-1)),e[8]||(e[8]=t("p",null,[d("通过设置 "),t("code",null,"date-cell"),d(" 插槽来自定义日历单元格中显示的内容，可以获取到当前单元格的日期信息。")],-1)),m(a(s(h),null,null,512),[[p,o.value]]),a(l,null,{default:r(()=>[a(s(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:s(T)},{vue:r(()=>[a(N)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"自定义头部",tabindex:"-1"},[d("自定义头部 "),t("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),e[10]||(e[10]=t("p",null,[d("使用 "),t("code",null,"header"),d(" 插槽来自定义日历头部内容，可以获取到日期切换的方法。")],-1)),m(a(s(h),null,null,512),[[p,o.value]]),a(l,null,{default:r(()=>[a(s(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:s(Y)},{vue:r(()=>[a(w)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=A('<h2 id="calendar-api" tabindex="-1">Calendar API <a class="header-anchor" href="#calendar-api" aria-label="Permalink to &quot;Calendar API&quot;">​</a></h2><h3 id="calendar-属性" tabindex="-1">Calendar 属性 <a class="header-anchor" href="#calendar-属性" aria-label="Permalink to &quot;Calendar 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value/v-model</code></td><td>绑定值</td><td><code>Date</code></td><td>-</td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="calendar-插槽" tabindex="-1">Calendar 插槽 <a class="header-anchor" href="#calendar-插槽" aria-label="Permalink to &quot;Calendar 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td><code>header</code></td><td>自定义头部内容</td><td><code>{ date: Date, prevMonth: () =&gt; void, nextMonth: () =&gt; void, prevYear: () =&gt; void, nextYear: () =&gt; void, today: () =&gt; void }</code></td></tr><tr><td><code>date-cell</code></td><td>自定义单元格内容</td><td><code>{ data: { type: &#39;prev-month&#39; | &#39;current-month&#39; | &#39;next-month&#39;, isSelected: boolean, day: string, date: Date } }</code></td></tr></tbody></table><h3 id="calendar-事件" tabindex="-1">Calendar 事件 <a class="header-anchor" href="#calendar-事件" aria-label="Permalink to &quot;Calendar 事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中日期变化时触发</td><td><code>(value: Date) =&gt; void</code></td></tr></tbody></table><h3 id="calendar-方法" tabindex="-1">Calendar 方法 <a class="header-anchor" href="#calendar-方法" aria-label="Permalink to &quot;Calendar 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>prevYear</code></td><td>切换到上一年</td><td><code>() =&gt; void</code></td></tr><tr><td><code>nextYear</code></td><td>切换到下一年</td><td><code>() =&gt; void</code></td></tr><tr><td><code>prevMonth</code></td><td>切换到上一月</td><td><code>() =&gt; void</code></td></tr><tr><td><code>nextMonth</code></td><td>切换到下一月</td><td><code>() =&gt; void</code></td></tr><tr><td><code>today</code></td><td>切换到今天</td><td><code>() =&gt; void</code></td></tr></tbody></table>',9))])}}});export{$ as __pageData,E as default};
