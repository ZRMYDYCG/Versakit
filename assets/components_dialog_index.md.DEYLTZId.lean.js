import{f as s,s as m,N as V,G as k}from"./chunks/theme.BTh_A52A.js";import{d as g,p,b as h,o as b,w as a,G as o,k as d,a as i,j as n,_ as W,c as C,B as y,ar as D}from"./chunks/framework.B9s_fTIu.js";import{Q as f}from"./chunks/index.Cnf2THuG.js";const c=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <VerDialog v-model="dialogVisible">
      <template #title>
        <div class="title">
          <h4>This is a custom header!</h4>
        </div>
      </template>
    </VerDialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>
`,B=g({__name:"header",setup(v){const r=p(!1);return(l,e)=>(b(),h(d(V),null,{default:a(()=>[o(d(s),{onClick:e[0]||(e[0]=t=>r.value=!0)},{default:a(()=>e[2]||(e[2]=[i("点击打开对话框")])),_:1}),o(d(m),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t)},{title:a(()=>e[3]||(e[3]=[n("div",{class:"title"},[n("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),Z=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>
    <!-- 普通 -->
    <ver-dialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </ver-dialog>
    <!-- 表单 -->
    <ver-dialog v-model="dialogFromVisible" title="表单">
      <div>
        <ver-input />
      </div>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogFromVisible = false">
          确定
        </ver-button>
      </template>
    </ver-dialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog, VerInput } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogFromVisible = ref(false)
<\/script>

<style scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}

.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
`,x=g({__name:"content",setup(v){const r=p(!1),l=p(!1);return(e,t)=>(b(),h(d(V),null,{default:a(()=>[o(d(s),{onClick:t[0]||(t[0]=u=>r.value=!0)},{default:a(()=>t[5]||(t[5]=[i("点击打开对话框")])),_:1}),o(d(s),{onClick:t[1]||(t[1]=u=>l.value=!0)},{default:a(()=>t[6]||(t[6]=[i("点击打开对话框")])),_:1}),o(d(m),{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=u=>r.value=u),title:"测试"},{default:a(()=>t[7]||(t[7]=[n("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),o(d(m),{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=u=>l.value=u),title:"表单"},{footer:a(()=>[o(d(s),null,{default:a(()=>t[8]||(t[8]=[i("取消")])),_:1}),o(d(s),{type:"primary",onClick:t[3]||(t[3]=u=>l.value=!1)},{default:a(()=>t[9]||(t[9]=[i(" 确定 ")])),_:1})]),default:a(()=>[n("div",null,[o(d(k))])]),_:1},8,["modelValue"])]),_:1}))}}),G=W(x,[["__scopeId","data-v-56b31c9e"]]),A=`<template>
  <div>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <ver-dialog v-model="dialogVisible">
      <span>这是一段信息</span>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogVisible = false">
          确定
        </ver-button>
      </template>
    </ver-dialog>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>

<style scoped>
.ver-dialog_footer .ver-btn {
  margin-right: 20px;
}
</style>
`,w=g({__name:"base",setup(v){const r=p(!1);return(l,e)=>(b(),C("div",null,[o(d(s),{onClick:e[0]||(e[0]=t=>r.value=!0)},{default:a(()=>e[3]||(e[3]=[i("点击打开对话框")])),_:1}),o(d(m),{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value=t)},{footer:a(()=>[o(d(s),null,{default:a(()=>e[4]||(e[4]=[i("取消")])),_:1}),o(d(s),{type:"primary",onClick:e[1]||(e[1]=t=>r.value=!1)},{default:a(()=>e[5]||(e[5]=[i(" 确定 ")])),_:1})]),default:a(()=>[e[6]||(e[6]=n("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),T=W(w,[["__scopeId","data-v-f0a5cbbe"]]),N=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),_={name:"components/dialog/index.md"},q=Object.assign(_,{setup(v){return(r,l)=>{const e=y("ClientOnly");return b(),C("div",null,[l[0]||(l[0]=n("h1",{id:"dialog-对话框",tabindex:"-1"},[i("Dialog 对话框 "),n("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),l[1]||(l[1]=n("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l[2]||(l[2]=n("p",null,[i("在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 "),n("code",null,"v-model"),i(" 到一个 "),n("code",null,"Boolean"),i(" 类型的变量。")],-1)),o(e,null,{default:a(()=>[o(d(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(A)},{vue:a(()=>[o(T)]),_:1},8,["vueCode"])]),_:1}),l[3]||(l[3]=n("h2",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),n("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),l[4]||(l[4]=n("p",null,"对话框的内容可以是任何东西。",-1)),o(e,null,{default:a(()=>[o(d(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(Z)},{vue:a(()=>[o(G)]),_:1},8,["vueCode"])]),_:1}),l[5]||(l[5]=n("h2",{id:"自定义标题",tabindex:"-1"},[i("自定义标题 "),n("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),l[6]||(l[6]=n("p",null,[i("可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),n("code",null,"title"),i(" 属性来指定哪些元素应该读取为对话框标题。")],-1)),o(e,null,{default:a(()=>[o(d(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(c)},{vue:a(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),l[7]||(l[7]=D("",5))])}}});export{N as __pageData,q as default};
