import{b as c,B as d}from"./chunks/theme.CQgGDvlX.js";import{d as f,p as C,c as h,o as p,G as l,k as n,w as s,j as t,B as g,aq as b,a as r}from"./chunks/framework.DWhRHyQt.js";import{Q as u}from"./chunks/index.80Y4sWw1.js";const w=`<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
<\/script>

<template>
  <div>
    <VerCollapse v-model="activeNames" accordion>
      <VerCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="2">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="3">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,y=f({__name:"accordion",setup(m){const o=C(["1"]);return(e,a)=>(p(),h("div",null,[l(n(c),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),accordion:""},{default:s(()=>[l(n(d),{title:"Consistency",name:"1"},{default:s(()=>a[1]||(a[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(n(d),{title:"Consistency",name:"2"},{default:s(()=>a[2]||(a[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(n(d),{title:"Consistency",name:"3"},{default:s(()=>a[3]||(a[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),V=`<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
<\/script>

<template>
  <div>
    <VerCollapse v-model="activeNames" @change="handleChange">
      <VerCollapseItem title="Consistency 1" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 2" name="2">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 3" name="3">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,B=f({__name:"base",setup(m){const o=C(["1"]),e=a=>{console.log(a)};return(a,i)=>(p(),h("div",null,[l(n(c),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=v=>o.value=v),onChange:e},{default:s(()=>[l(n(d),{title:"Consistency 1",name:"1"},{default:s(()=>i[1]||(i[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(n(d),{title:"Consistency 2",name:"2"},{default:s(()=>i[2]||(i[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(n(d),{title:"Consistency 3",name:"3"},{default:s(()=>i[3]||(i[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),A=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}'),I={name:"components/collapse/index.md"},k=Object.assign(I,{setup(m){return(o,e)=>{const a=g("ClientOnly");return p(),h("div",null,[e[0]||(e[0]=t("h1",{id:"collapse-折叠面板",tabindex:"-1"},[r("Collapse 折叠面板 "),t("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[1]||(e[1]=t("p",null,"通过折叠面板收纳内容区域。",-1)),e[2]||(e[2]=t("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e[3]||(e[3]=t("p",null,"可同时展开多个面板，面板之间不影响。",-1)),l(a,null,{default:s(()=>[l(n(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(V)},{vue:s(()=>[l(B)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"手风琴效果",tabindex:"-1"},[r("手风琴效果 "),t("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1)),e[5]||(e[5]=t("p",null,"每次只能展开一个面板",-1)),e[6]||(e[6]=t("p",null,[r("通过 "),t("code",null,"accordion"),r(" 属性来设置是否以手风琴模式显示。")],-1)),l(a,null,{default:s(()=>[l(n(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(w)},{vue:s(()=>[l(y)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=b("",3))])}}});export{A as __pageData,k as default};
