import{d as h,p,b as D,o as v,w as a,G as l,k as o,a as i,j as d,_ as W,c as k,B as C,a5 as f,at as B,a6 as g}from"./chunks/framework.DgG_RYdR.js";import{g as r,U as m,D as y,H as Z}from"./chunks/theme.BN5ATFS7.js";import{d as V,f as c}from"./chunks/index.CrgVH6Ra.js";const x=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <VerDialog v-model="dialogVisible" closeIcon="ep:close">
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
`,w=h({__name:"header",setup(b){const n=p(!1);return(s,e)=>(v(),D(o(y),null,{default:a(()=>[l(o(r),{onClick:e[0]||(e[0]=t=>n.value=!0)},{default:a(()=>e[2]||(e[2]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),closeIcon:"ep:close"},{title:a(()=>e[3]||(e[3]=[d("div",{class:"title"},[d("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),A=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>
    <!-- 普通 -->
    <ver-dialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </ver-dialog>
    <!-- 表单 -->
    <ver-dialog v-model="dialogFromVisible" title="表单" closeIcon="ep:close">
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
`,G=h({__name:"content",setup(b){const n=p(!1),s=p(!1);return(e,t)=>(v(),D(o(y),null,{default:a(()=>[l(o(r),{onClick:t[0]||(t[0]=u=>n.value=!0)},{default:a(()=>t[5]||(t[5]=[i("点击打开对话框")])),_:1}),l(o(r),{onClick:t[1]||(t[1]=u=>s.value=!0)},{default:a(()=>t[6]||(t[6]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=u=>n.value=u),title:"测试"},{default:a(()=>t[7]||(t[7]=[d("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),l(o(m),{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=u=>s.value=u),title:"表单",closeIcon:"ep:close"},{footer:a(()=>[l(o(r),null,{default:a(()=>t[8]||(t[8]=[i("取消")])),_:1}),l(o(r),{type:"primary",onClick:t[3]||(t[3]=u=>s.value=!1)},{default:a(()=>t[9]||(t[9]=[i(" 确定 ")])),_:1})]),default:a(()=>[d("div",null,[l(o(Z))])]),_:1},8,["modelValue"])]),_:1}))}}),T=W(G,[["__scopeId","data-v-77ce029c"]]),_=`<template>
  <div>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <ver-dialog v-model="dialogVisible" closeIcon="ep:close">
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
`,z=h({__name:"base",setup(b){const n=p(!1);return(s,e)=>(v(),k("div",null,[l(o(r),{onClick:e[0]||(e[0]=t=>n.value=!0)},{default:a(()=>e[3]||(e[3]=[i("点击打开对话框")])),_:1}),l(o(m),{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),closeIcon:"ep:close"},{footer:a(()=>[l(o(r),null,{default:a(()=>e[4]||(e[4]=[i("取消")])),_:1}),l(o(r),{type:"primary",onClick:e[1]||(e[1]=t=>n.value=!1)},{default:a(()=>e[5]||(e[5]=[i(" 确定 ")])),_:1})]),default:a(()=>[e[6]||(e[6]=d("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),X=W(z,[["__scopeId","data-v-2c675f2f"]]),P=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),Y={name:"components/dialog/index.md"},J=Object.assign(Y,{setup(b){const n=p(!0);return(s,e)=>{const t=C("ClientOnly");return v(),k("div",null,[e[3]||(e[3]=d("h1",{id:"dialog-对话框",tabindex:"-1"},[i("Dialog 对话框 "),d("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),e[4]||(e[4]=d("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[5]||(e[5]=d("p",null,[i("在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 "),d("code",null,"v-model"),i(" 到一个 "),d("code",null,"Boolean"),i(" 类型的变量。")],-1)),f(l(o(V),null,null,512),[[g,n.value]]),l(t,null,{default:a(()=>[l(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:o(_)},{vue:a(()=>[l(X)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=d("h2",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),d("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),e[7]||(e[7]=d("p",null,"对话框的内容可以是任何东西。",-1)),f(l(o(V),null,null,512),[[g,n.value]]),l(t,null,{default:a(()=>[l(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:o(A)},{vue:a(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=d("h2",{id:"自定义标题",tabindex:"-1"},[i("自定义标题 "),d("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),e[9]||(e[9]=d("p",null,[i("可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),d("code",null,"title"),i(" 属性来指定哪些元素应该读取为对话框标题。")],-1)),f(l(o(V),null,null,512),[[g,n.value]]),l(t,null,{default:a(()=>[l(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:o(x)},{vue:a(()=>[l(w)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=B("",5))])}}});export{P as __pageData,J as default};
