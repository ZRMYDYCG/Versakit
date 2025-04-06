import{x as s,n as p,Y as V,o as C}from"./chunks/theme.uDsgHOqn.js";import{d as g,p as m,b as c,o as v,w as a,G as o,k as n,a as i,j as d,_ as h,c as W,B as k,aw as y}from"./chunks/framework.BrE8sLAv.js";import{Q as f}from"./chunks/index.CmMjEtxm.js";const D=`<template>
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
`,B=g({__name:"header",setup(b){const r=m(!1);return(l,e)=>(v(),c(n(V),null,{default:a(()=>[o(n(s),{onClick:e[0]||(e[0]=t=>r.value=!0)},{default:a(()=>e[2]||(e[2]=[i("点击打开对话框")])),_:1}),o(n(p),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t),closeIcon:"ep:close"},{title:a(()=>e[3]||(e[3]=[d("div",{class:"title"},[d("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),x=`<template>
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
`,Z=g({__name:"content",setup(b){const r=m(!1),l=m(!1);return(e,t)=>(v(),c(n(V),null,{default:a(()=>[o(n(s),{onClick:t[0]||(t[0]=u=>r.value=!0)},{default:a(()=>t[5]||(t[5]=[i("点击打开对话框")])),_:1}),o(n(s),{onClick:t[1]||(t[1]=u=>l.value=!0)},{default:a(()=>t[6]||(t[6]=[i("点击打开对话框")])),_:1}),o(n(p),{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=u=>r.value=u),title:"测试"},{default:a(()=>t[7]||(t[7]=[d("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),o(n(p),{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=u=>l.value=u),title:"表单",closeIcon:"ep:close"},{footer:a(()=>[o(n(s),null,{default:a(()=>t[8]||(t[8]=[i("取消")])),_:1}),o(n(s),{type:"primary",onClick:t[3]||(t[3]=u=>l.value=!1)},{default:a(()=>t[9]||(t[9]=[i(" 确定 ")])),_:1})]),default:a(()=>[d("div",null,[o(n(C))])]),_:1},8,["modelValue"])]),_:1}))}}),A=h(Z,[["__scopeId","data-v-77ce029c"]]),G=`<template>
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
`,w=g({__name:"base",setup(b){const r=m(!1);return(l,e)=>(v(),W("div",null,[o(n(s),{onClick:e[0]||(e[0]=t=>r.value=!0)},{default:a(()=>e[3]||(e[3]=[i("点击打开对话框")])),_:1}),o(n(p),{modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value=t),closeIcon:"ep:close"},{footer:a(()=>[o(n(s),null,{default:a(()=>e[4]||(e[4]=[i("取消")])),_:1}),o(n(s),{type:"primary",onClick:e[1]||(e[1]=t=>r.value=!1)},{default:a(()=>e[5]||(e[5]=[i(" 确定 ")])),_:1})]),default:a(()=>[e[6]||(e[6]=d("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),T=h(w,[["__scopeId","data-v-2c675f2f"]]),I=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),Y={name:"components/dialog/index.md"},N=Object.assign(Y,{setup(b){return(r,l)=>{const e=k("ClientOnly");return v(),W("div",null,[l[0]||(l[0]=d("h1",{id:"dialog-对话框",tabindex:"-1"},[i("Dialog 对话框 "),d("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),l[1]||(l[1]=d("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l[2]||(l[2]=d("p",null,[i("在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 "),d("code",null,"v-model"),i(" 到一个 "),d("code",null,"Boolean"),i(" 类型的变量。")],-1)),o(e,null,{default:a(()=>[o(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(G)},{vue:a(()=>[o(T)]),_:1},8,["vueCode"])]),_:1}),l[3]||(l[3]=d("h2",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),d("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),l[4]||(l[4]=d("p",null,"对话框的内容可以是任何东西。",-1)),o(e,null,{default:a(()=>[o(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(x)},{vue:a(()=>[o(A)]),_:1},8,["vueCode"])]),_:1}),l[5]||(l[5]=d("h2",{id:"自定义标题",tabindex:"-1"},[i("自定义标题 "),d("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),l[6]||(l[6]=d("p",null,[i("可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),d("code",null,"title"),i(" 属性来指定哪些元素应该读取为对话框标题。")],-1)),o(e,null,{default:a(()=>[o(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(D)},{vue:a(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),l[7]||(l[7]=y('<h2 id="dialog-api" tabindex="-1">Dialog API <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;Dialog API&quot;">​</a></h2><h3 id="dialog-属性" tabindex="-1">Dialog 属性 <a class="header-anchor" href="#dialog-属性" aria-label="Permalink to &quot;Dialog 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>dialog 的宽度</td><td><code>string</code></td><td>30%</td></tr><tr><td><code>top</code></td><td>距顶部距离</td><td><code>string</code></td><td>15vh</td></tr></tbody></table><h3 id="dialog-插槽" tabindex="-1">Dialog 插槽 <a class="header-anchor" href="#dialog-插槽" aria-label="Permalink to &quot;Dialog 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>dialog 的标题部分</td></tr><tr><td><code>footer</code></td><td>dialog 的 <code>footer</code> 部分</td></tr></tbody></table>',5))])}}});export{I as __pageData,N as default};
