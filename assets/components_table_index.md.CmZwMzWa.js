import{s as b}from"./chunks/theme.B-FNYTZS.js";import{d as u,b as c,o,k as d,B as h,c as k,j as a,G as t,aq as y,a as n,w as r}from"./chunks/framework.jWG7FAcU.js";import{Q as m}from"./chunks/index.B5U2ewO1.js";const g=`<template>
  <VerTable border :data="tableData" :columns="columns"></VerTable>
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,x=u({__name:"border",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{border:"",data:s,columns:e}))}}),f=`<template>
  <VerTable stripe :data="tableData" :columns="columns"></VerTable>
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '范冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '李冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,T=u({__name:"stripe",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"},{key:"3",name:"范冰冰",age:42,address:"西湖区湖底公园1号"},{key:"4",name:"李冰冰",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{stripe:"",data:s,columns:e}))}}),_=`<template>
  <VerTable :data="tableData" :columns="columns" />
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,v=u({__name:"base",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{data:s,columns:e}))}}),A=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),B={name:"components/table/index.md"},V=Object.assign(B,{setup(i){return(s,e)=>{const l=h("ClientOnly");return o(),k("div",null,[e[0]||(e[0]=a("h1",{id:"table-表格",tabindex:"-1"},[n("Table 表格 "),a("a",{class:"header-anchor",href:"#table-表格","aria-label":'Permalink to "Table 表格"'},"​")],-1)),e[1]||(e[1]=a("p",null,"展示行列数据。",-1)),e[2]||(e[2]=a("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=a("p",null,"简单的表格",-1)),t(l,null,{default:r(()=>[t(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(_)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"带斑马纹表格",tabindex:"-1"},[n("带斑马纹表格 "),a("a",{class:"header-anchor",href:"#带斑马纹表格","aria-label":'Permalink to "带斑马纹表格"'},"​")],-1)),e[5]||(e[5]=a("p",null,"使用带斑马纹的表格，可以更容易区分出不同行的数据。",-1)),e[6]||(e[6]=a("p",null,[a("code",null,"stripe"),n(" 可以创建带斑马纹的表格。 如果 "),a("code",null,"true"),n(", 表格将会带有斑马纹。")],-1)),t(l,null,{default:r(()=>[t(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(f)},{vue:r(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"带边框表格​",tabindex:"-1"},[n("带边框表格​ "),a("a",{class:"header-anchor",href:"#带边框表格​","aria-label":'Permalink to "带边框表格​"'},"​")],-1)),e[8]||(e[8]=a("p",null,[n("默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),a("code",null,"border"),n(" 属性，把该属性设置为 "),a("code",null,"true"),n(" 即可启用。")],-1)),t(l,null,{default:r(()=>[t(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(g)},{vue:r(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=y('<h2 id="table-api" tabindex="-1">Table API <a class="header-anchor" href="#table-api" aria-label="Permalink to &quot;Table API&quot;">​</a></h2><h3 id="table-属性" tabindex="-1">Table 属性 <a class="header-anchor" href="#table-属性" aria-label="Permalink to &quot;Table 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>bordered</code></td><td>是否显示边框</td><td><code>boolean</code></td><td>true</td></tr><tr><td><code>stripe</code></td><td>是否显示斑马纹</td><td><code>boolean</code></td><td>false</td></tr></tbody></table><h3 id="table-插槽" tabindex="-1">Table 插槽 <a class="header-anchor" href="#table-插槽" aria-label="Permalink to &quot;Table 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead></table>',5))])}}});export{A as __pageData,V as default};
