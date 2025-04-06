import{b as u,w as r}from"./chunks/theme.uDsgHOqn.js";import{d as f,p as C,c as h,o as p,G as n,k as l,w as i,j as t,B as v,aw as b,a as d}from"./chunks/framework.BrE8sLAv.js";import{Q as m}from"./chunks/index.CmMjEtxm.js";const w=`<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
<\/script>

<template>
  <div>
    <VerCollapse v-model="activeNames" accordion>
      <VerCollapseItem title="Consistency" name="1" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="2" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="3" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,y=f({__name:"accordion",setup(c){const o=C(["1"]);return(e,a)=>(p(),h("div",null,[n(l(u),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),accordion:""},{default:i(()=>[n(l(r),{title:"Consistency",name:"1",icon:"ep:caret-right"},{default:i(()=>a[1]||(a[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),n(l(r),{title:"Consistency",name:"2",icon:"ep:caret-right"},{default:i(()=>a[2]||(a[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),n(l(r),{title:"Consistency",name:"3",icon:"ep:caret-right"},{default:i(()=>a[3]||(a[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),V=`<script setup lang="ts">
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
      <VerCollapseItem title="Consistency 1" name="1" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 2" name="2" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 3" name="3" icon="ep:caret-right">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,I=f({__name:"base",setup(c){const o=C(["1"]),e=a=>{console.log(a)};return(a,s)=>(p(),h("div",null,[n(l(u),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=g=>o.value=g),onChange:e},{default:i(()=>[n(l(r),{title:"Consistency 1",name:"1",icon:"ep:caret-right"},{default:i(()=>s[1]||(s[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),n(l(r),{title:"Consistency 2",name:"2",icon:"ep:caret-right"},{default:i(()=>s[2]||(s[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),n(l(r),{title:"Consistency 3",name:"3",icon:"ep:caret-right"},{default:i(()=>s[3]||(s[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),A=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}'),B={name:"components/collapse/index.md"},k=Object.assign(B,{setup(c){return(o,e)=>{const a=v("ClientOnly");return p(),h("div",null,[e[0]||(e[0]=t("h1",{id:"collapse-折叠面板",tabindex:"-1"},[d("Collapse 折叠面板 "),t("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[1]||(e[1]=t("p",null,"通过折叠面板收纳内容区域。",-1)),e[2]||(e[2]=t("h2",{id:"基本使用",tabindex:"-1"},[d("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e[3]||(e[3]=t("p",null,"可同时展开多个面板，面板之间不影响。",-1)),n(a,null,{default:i(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(V)},{vue:i(()=>[n(I)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"手风琴效果",tabindex:"-1"},[d("手风琴效果 "),t("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1)),e[5]||(e[5]=t("p",null,"每次只能展开一个面板",-1)),e[6]||(e[6]=t("p",null,[d("通过 "),t("code",null,"accordion"),d(" 属性来设置是否以手风琴模式显示。")],-1)),n(a,null,{default:i(()=>[n(l(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(w)},{vue:i(()=>[n(y)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=b('<h2 id="collapse-item-api" tabindex="-1">Collapse Item API <a class="header-anchor" href="#collapse-item-api" aria-label="Permalink to &quot;Collapse Item API&quot;">​</a></h2><h3 id="collapse-item-属性" tabindex="-1">Collapse Item 属性 <a class="header-anchor" href="#collapse-item-属性" aria-label="Permalink to &quot;Collapse Item 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>唯一标志符</td><td><code>string</code> / <code>number</code></td><td>-</td></tr><tr><td><code>title</code></td><td>面板标题</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td><code>accordion</code></td><td>是否设置为手风琴效果</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',3))])}}});export{A as __pageData,k as default};
