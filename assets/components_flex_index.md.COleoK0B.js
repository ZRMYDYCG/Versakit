import{j as g,k as f,l as B,c as z}from"./chunks/theme.BTh_A52A.js";import{d as V,b as Z,o as m,w as u,c as p,F as v,C as W,j as e,k as r,_ as C,p as b,h,G as t,a7 as w,a as s,a9 as X,B as k}from"./chunks/framework.B9s_fTIu.js";import{Q as c}from"./chunks/index.Cnf2THuG.js";const A=`<script setup lang="ts">
import { VerFlex } from '@versakit/ui'
<\/script>
<template>
  <VerFlex wrap="wrap">
    <div v-for="n in 20" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
`,G=V({__name:"wrap",setup(y){return(n,l)=>(m(),Z(r(g),{wrap:"wrap"},{default:u(()=>[(m(),p(v,null,W(20,a=>e("div",{key:a,class:"flex-item"})),64))]),_:1}))}}),S=C(G,[["__scopeId","data-v-cdede82c"]]),D=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { VerRadio, VerSlider, VerFlex } from '@versakit/ui'

const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')
const customGapSize = ref(16)

const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {
  if (gapSize.value === 'custom') {
    return customGapSize.value
  }
  return gapSize.value
})
<\/script>
<template>
  <div>
    <VerRadio label="small" v-model="gapSize">small</VerRadio>
    <VerRadio label="middle" v-model="gapSize">middle</VerRadio>
    <VerRadio label="large" v-model="gapSize">large</VerRadio>
    <VerRadio label="custom" v-model="gapSize">custom</VerRadio>
    <VerSlider
      v-model="customGapSize"
      v-show="gapSize === 'custom'"
    ></VerSlider>
  </div>
  <VerFlex :gap="computedGap" style="margin-top: 10px">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
`,F=V({__name:"gap",setup(y){const n=b("small"),l=b(16),a=h(()=>n.value==="custom"?l.value:n.value);return(i,d)=>(m(),p(v,null,[e("div",null,[t(r(f),{label:"small",modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=o=>n.value=o)},{default:u(()=>d[5]||(d[5]=[s("small")])),_:1},8,["modelValue"]),t(r(f),{label:"middle",modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=o=>n.value=o)},{default:u(()=>d[6]||(d[6]=[s("middle")])),_:1},8,["modelValue"]),t(r(f),{label:"large",modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=o=>n.value=o)},{default:u(()=>d[7]||(d[7]=[s("large")])),_:1},8,["modelValue"]),t(r(f),{label:"custom",modelValue:n.value,"onUpdate:modelValue":d[3]||(d[3]=o=>n.value=o)},{default:u(()=>d[8]||(d[8]=[s("custom")])),_:1},8,["modelValue"]),w(t(r(B),{modelValue:l.value,"onUpdate:modelValue":d[4]||(d[4]=o=>l.value=o)},null,8,["modelValue"]),[[X,n.value==="custom"]])]),t(r(g),{gap:a.value,style:{"margin-top":"10px"}},{default:u(()=>[(m(),p(v,null,W(4,o=>e("div",{key:o,class:"flex-item"})),64))]),_:1},8,["gap"])],64))}}),T=C(F,[["__scopeId","data-v-a34ec277"]]),J=`<script setup lang="ts">
import { ref } from 'vue'
import { VerSegmented, VerFlex } from '@versakit/ui'
import { AlignProps, JustifyProps } from '@versakit/ui/components/flex/type'

const justify = ref<JustifyProps>('flex-start')
const justifyOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
  { label: 'space-between', value: 'space-between' },
  { label: 'space-around', value: 'space-around' },
  { label: 'space-evenly', value: 'space-evenly' },
]

const align = ref<AlignProps>('flex-start')
const alignOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
]
<\/script>
<template>
  <div style="line-height: 36px">justify-content:</div>
  <VerSegmented v-model="justify" :options="justifyOptions"></VerSegmented>
  <div style="line-height: 36px">align-items:</div>
  <VerSegmented v-model="align" :options="alignOptions"></VerSegmented>
  <VerFlex class="flex-container" :align="align" :justify="justify">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>
<style scoped>
.flex-container {
  height: 150px;
  border-radius: 5px;
  border: 1px dotted var(--theme-primary-500, var(--ver-primary-500));
  margin-top: 15px;
}

.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
`,N=V({__name:"align",setup(y){const n=b("flex-start"),l=[{label:"flex-start",value:"flex-start"},{label:"center",value:"center"},{label:"flex-end",value:"flex-end"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"},{label:"space-evenly",value:"space-evenly"}],a=b("flex-start"),i=[{label:"flex-start",value:"flex-start"},{label:"center",value:"center"},{label:"flex-end",value:"flex-end"}];return(d,o)=>(m(),p(v,null,[o[2]||(o[2]=e("div",{style:{"line-height":"36px"}},"justify-content:",-1)),t(r(z),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=x=>n.value=x),options:l},null,8,["modelValue"]),o[3]||(o[3]=e("div",{style:{"line-height":"36px"}},"align-items:",-1)),t(r(z),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=x=>a.value=x),options:i},null,8,["modelValue"]),t(r(g),{class:"flex-container",align:a.value,justify:n.value},{default:u(()=>[(m(),p(v,null,W(4,x=>e("div",{key:x,class:"flex-item"})),64))]),_:1},8,["align","justify"])],64))}}),Y=C(N,[["__scopeId","data-v-3d3dc4ca"]]),j=`<script setup lang="ts">
import { ref } from 'vue'
import { VerFlex, VerRadio } from '@versakit/ui'

const direction = ref('horizontal')
<\/script>

<template>
  <div>
    <VerRadio label="horizontal" v-model="direction">horizontal</VerRadio>
    <VerRadio label="vertical" v-model="direction">vertical</VerRadio>
  </div>
  <VerFlex :vertical="direction === 'vertical'">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 25%;
  height: 80px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
`,L=V({__name:"base",setup(y){const n=b("horizontal");return(l,a)=>(m(),p(v,null,[e("div",null,[t(r(f),{label:"horizontal",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i)},{default:u(()=>a[2]||(a[2]=[s("horizontal")])),_:1},8,["modelValue"]),t(r(f),{label:"vertical",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=i=>n.value=i)},{default:u(()=>a[3]||(a[3]=[s("vertical")])),_:1},8,["modelValue"])]),t(r(g),{vertical:n.value==="vertical"},{default:u(()=>[(m(),p(v,null,W(4,i=>e("div",{key:i,class:"flex-item"})),64))]),_:1},8,["vertical"])],64))}}),R=C(L,[["__scopeId","data-v-3172f3e9"]]),I={tabindex:"0"},q=JSON.parse('{"title":"Flex 弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex/index.md","filePath":"components/flex/index.md"}'),P={name:"components/flex/index.md"},H=Object.assign(P,{setup(y){return(n,l)=>{const a=k("ClientOnly"),i=k("Tool");return m(),p("div",null,[l[18]||(l[18]=e("h1",{id:"flex-弹性布局",tabindex:"-1"},[s("Flex 弹性布局 "),e("a",{class:"header-anchor",href:"#flex-弹性布局","aria-label":'Permalink to "Flex 弹性布局"'},"​")],-1)),l[19]||(l[19]=e("h2",{id:"基本使用",tabindex:"-1"},[s("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),t(a,null,{default:u(()=>[t(r(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(j)},{vue:u(()=>[t(R)]),_:1},8,["vueCode"])]),_:1}),l[20]||(l[20]=e("h2",{id:"对齐方式",tabindex:"-1"},[s("对齐方式 "),e("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1)),t(a,null,{default:u(()=>[t(r(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(J)},{vue:u(()=>[t(Y)]),_:1},8,["vueCode"])]),_:1}),l[21]||(l[21]=e("h2",{id:"间隙设置",tabindex:"-1"},[s("间隙设置 "),e("a",{class:"header-anchor",href:"#间隙设置","aria-label":'Permalink to "间隙设置"'},"​")],-1)),t(a,null,{default:u(()=>[t(r(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(D)},{vue:u(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),l[22]||(l[22]=e("h2",{id:"自动换行",tabindex:"-1"},[s("自动换行 "),e("a",{class:"header-anchor",href:"#自动换行","aria-label":'Permalink to "自动换行"'},"​")],-1)),t(a,null,{default:u(()=>[t(r(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(A)},{vue:u(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),l[23]||(l[23]=e("h2",{id:"flex-api",tabindex:"-1"},[s("Flex API "),e("a",{class:"header-anchor",href:"#flex-api","aria-label":'Permalink to "Flex API"'},"​")],-1)),e("table",I,[l[17]||(l[17]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[l[16]||(l[16]=e("tr",null,[e("td",null,[e("code",null,"vertical")]),e("td",null,[e("code",null,"flex"),s(" 主轴的方向是否垂直")]),e("td",null,[e("code",null,"boolean")]),e("td",null,"false")],-1)),e("tr",null,[l[1]||(l[1]=e("td",null,[e("code",null,"wrap")],-1)),l[2]||(l[2]=e("td",null,[s("设置元素单行显示还是多行显示；参考 "),e("code",null,"flex-wrap")],-1)),e("td",null,[l[0]||(l[0]=e("code",null,"enum",-1)),t(i,{value:"nowrap,wrap,wrap-reverse"})]),l[3]||(l[3]=e("td",null,"nowrap",-1))]),e("tr",null,[l[5]||(l[5]=e("td",null,[e("code",null,"justify")],-1)),l[6]||(l[6]=e("td",null,[s("设置元素在主轴方向上的对齐方式；参考 "),e("code",null,"justify-content")],-1)),e("td",null,[l[4]||(l[4]=e("code",null,"enum",-1)),t(i,{value:"normal,flex-start,center,flex-end,space-between,space-around,space-evenly"})]),l[7]||(l[7]=e("td",null,"normal",-1))]),e("tr",null,[l[9]||(l[9]=e("td",null,[e("code",null,"align")],-1)),l[10]||(l[10]=e("td",null,[s("设置元素在交叉轴方向上的对齐方式；参考 "),e("code",null,"align-items")],-1)),e("td",null,[l[8]||(l[8]=e("code",null,"enum",-1)),t(i,{value:"normal,flex-start,center,flex-end"})]),l[11]||(l[11]=e("td",null,"normal",-1))]),e("tr",null,[l[13]||(l[13]=e("td",null,[e("code",null,"gap")],-1)),l[14]||(l[14]=e("td",null,[s("设置网格之间的间隙，数组时表示: "),e("code",null,"[水平间距, 垂直间距]")],-1)),e("td",null,[l[12]||(l[12]=e("code",null,"enum",-1)),t(i,{value:"number,number[],small,middle,large"})]),l[15]||(l[15]=e("td",null,"middle",-1))])])])])}}});export{q as __pageData,H as default};
