import{d as x,p as i,c as v,o as w,G as r,k as n,w as a,a as o,j as t,B as b,a5 as D,a6 as k}from"./chunks/framework.B3Jz-8p0.js";import{x as m,m as f}from"./chunks/theme.DKFx6c4r.js";import{d as C,f as g}from"./chunks/index.BbNYUtVF.js";const W=`<template>
  <div>
    <VerButton @click="drawerLeft = true">Left</VerButton>
    <VerButton @click="drawerTop = true">Top</VerButton>
    <VerButton @click="drawerRight = true">Right</VerButton>
    <VerButton @click="drawerBottom = true">Bottom</VerButton>

    <VerDrawer v-model="drawerLeft" closeIcon="ep:close">
      <span>左边</span>
    </VerDrawer>

    <VerDrawer direction="top" v-model="drawerTop" closeIcon="ep:close">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="right" v-model="drawerRight" closeIcon="ep:close">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="bottom" v-model="drawerBottom" closeIcon="ep:close">
      <span>上面</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
const drawerTop = ref(false)
const drawerRight = ref(false)
const drawerBottom = ref(false)
<\/script>
`,T=x({__name:"direction",setup(V){const d=i(!1),p=i(!1),e=i(!1),u=i(!1);return(B,l)=>(w(),v("div",null,[r(n(m),{onClick:l[0]||(l[0]=s=>d.value=!0)},{default:a(()=>l[8]||(l[8]=[o("Left")])),_:1}),r(n(m),{onClick:l[1]||(l[1]=s=>p.value=!0)},{default:a(()=>l[9]||(l[9]=[o("Top")])),_:1}),r(n(m),{onClick:l[2]||(l[2]=s=>e.value=!0)},{default:a(()=>l[10]||(l[10]=[o("Right")])),_:1}),r(n(m),{onClick:l[3]||(l[3]=s=>u.value=!0)},{default:a(()=>l[11]||(l[11]=[o("Bottom")])),_:1}),r(n(f),{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=s=>d.value=s),closeIcon:"ep:close"},{default:a(()=>l[12]||(l[12]=[t("span",null,"左边",-1)])),_:1},8,["modelValue"]),r(n(f),{direction:"top",modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=s=>p.value=s),closeIcon:"ep:close"},{default:a(()=>l[13]||(l[13]=[t("span",null,"上面",-1)])),_:1},8,["modelValue"]),r(n(f),{direction:"right",modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=s=>e.value=s),closeIcon:"ep:close"},{default:a(()=>l[14]||(l[14]=[t("span",null,"上面",-1)])),_:1},8,["modelValue"]),r(n(f),{direction:"bottom",modelValue:u.value,"onUpdate:modelValue":l[7]||(l[7]=s=>u.value=s),closeIcon:"ep:close"},{default:a(()=>l[15]||(l[15]=[t("span",null,"上面",-1)])),_:1},8,["modelValue"])]))}}),y=`<template>
  <div>
    <VerButton @click="drawerLeft = true">基本使用</VerButton>

    <VerDrawer v-model="drawerLeft" closeIcon="ep:close">
      <span>左边</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
<\/script>
`,A=x({__name:"base",setup(V){const d=i(!1);return(p,e)=>(w(),v("div",null,[r(n(m),{onClick:e[0]||(e[0]=u=>d.value=!0)},{default:a(()=>e[2]||(e[2]=[o("基本使用")])),_:1}),r(n(f),{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=u=>d.value=u),closeIcon:"ep:close"},{default:a(()=>e[3]||(e[3]=[t("span",null,"左边",-1)])),_:1},8,["modelValue"])]))}}),I={tabindex:"0"},P=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),L={name:"components/drawer/index.md"},X=Object.assign(L,{setup(V){const d=i(!0);return(p,e)=>{const u=b("ClientOnly"),B=b("Tool");return w(),v("div",null,[e[7]||(e[7]=t("h1",{id:"drawer-抽屉",tabindex:"-1"},[o("Drawer 抽屉 "),t("a",{class:"header-anchor",href:"#drawer-抽屉","aria-label":'Permalink to "Drawer 抽屉"'},"​")],-1)),e[8]||(e[8]=t("p",null,[o("有些时候, "),t("code",null,"Dialog"),o(" 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档。")],-1)),e[9]||(e[9]=t("h2",{id:"基础使用",tabindex:"-1"},[o("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[10]||(e[10]=t("p",null,"呼出一个临时的侧边栏，自定义内容。",-1)),D(r(n(C),null,null,512),[[k,d.value]]),r(u,null,{default:a(()=>[r(n(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{d.value=!1}),vueCode:n(y)},{vue:a(()=>[r(A)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=t("h2",{id:"不同方向",tabindex:"-1"},[o("不同方向 "),t("a",{class:"header-anchor",href:"#不同方向","aria-label":'Permalink to "不同方向"'},"​")],-1)),e[12]||(e[12]=t("p",null,[o("抽屉可以从四个方向呼出，可以用 "),t("code",null,"direction"),o(" 设置。")],-1)),D(r(n(C),null,null,512),[[k,d.value]]),r(u,null,{default:a(()=>[r(n(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{d.value=!1}),vueCode:n(W)},{vue:a(()=>[r(T)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=t("h2",{id:"drawer-api",tabindex:"-1"},[o("Drawer API "),t("a",{class:"header-anchor",href:"#drawer-api","aria-label":'Permalink to "Drawer API"'},"​")],-1)),e[14]||(e[14]=t("h3",{id:"drawer-属性",tabindex:"-1"},[o("Drawer 属性 "),t("a",{class:"header-anchor",href:"#drawer-属性","aria-label":'Permalink to "Drawer 属性"'},"​")],-1)),t("table",I,[e[6]||(e[6]=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1)),t("tbody",null,[t("tr",null,[e[3]||(e[3]=t("td",null,[t("code",null,"direction")],-1)),e[4]||(e[4]=t("td",null,"设置呼出的方向",-1)),t("td",null,[e[2]||(e[2]=t("code",null,"enum",-1)),r(B,{value:"left,top,right,bottom"})]),e[5]||(e[5]=t("td",null,"left",-1))])])])])}}});export{P as __pageData,X as default};
