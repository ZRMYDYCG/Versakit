import{d as v,c as f,o as d,j as r,G as t,k as o,w as e,a as i,p as u,B as c,a5 as g,a6 as h}from"./chunks/framework.DgG_RYdR.js";import{a6 as s,g as l}from"./chunks/theme.BN5ATFS7.js";import{d as x,f as k}from"./chunks/index.CrgVH6Ra.js";const _=`<script setup lang="ts">
import { VerTooltip, VerButton } from '@versakit/ui'
<\/script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Left"
        position="top-left"
      >
        <ver-button ghost>top-left</ver-button>
      </ver-tooltip>

      <ver-tooltip class="box-item" effect="dark" content="Top " position="top">
        <ver-button ghost>top</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        position="top-right"
      >
        <ver-button ghost>top-right</ver-button>
      </ver-tooltip>
    </div>

    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        position="left-top"
      >
        <ver-button ghost>left-top</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        position="right-top"
      >
        <ver-button ghost>right-top</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left"
        position="left"
      >
        <ver-button ghost class="mt-3 mb-3">left</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right"
        position="right"
      >
        <ver-button ghost>right</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="left-bottom"
        position="left-bottom"
      >
        <ver-button ghost>left-bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        position="right-bottom"
      >
        <ver-button ghost>right-bottom</ver-button>
      </ver-tooltip>
    </div>
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        position="bottom-left"
      >
        <ver-button ghost>bottom-left</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom "
        position="bottom"
      >
        <ver-button ghost>bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        position="bottom-right"
      >
        <ver-button ghost>bottom-right</ver-button>
      </ver-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin: 10px 10px;
}
</style>
`,B={class:"tooltip-base-box"},w={class:"row center"},T={class:"row"},C={class:"row"},y={class:"row"},R={class:"row center"},L=v({__name:"base",setup(m){return(a,n)=>(d(),f("div",B,[r("div",w,[t(o(s),{class:"box-item",effect:"dark",content:"Top Left",position:"top-left"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[0]||(n[0]=[i("top-left")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Top ",position:"top"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[1]||(n[1]=[i("top")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Top Right prompts info",position:"top-right"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[2]||(n[2]=[i("top-right")])),_:1})]),_:1})]),r("div",T,[t(o(s),{class:"box-item",effect:"dark",content:"Left Top prompts info",position:"left-top"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[3]||(n[3]=[i("left-top")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Right Top prompts info",position:"right-top"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[4]||(n[4]=[i("right-top")])),_:1})]),_:1})]),r("div",C,[t(o(s),{class:"box-item",effect:"dark",content:"Left",position:"left"},{default:e(()=>[t(o(l),{ghost:"",class:"mt-3 mb-3"},{default:e(()=>n[5]||(n[5]=[i("left")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Right",position:"right"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[6]||(n[6]=[i("right")])),_:1})]),_:1})]),r("div",y,[t(o(s),{class:"box-item",effect:"dark",content:"left-bottom",position:"left-bottom"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[7]||(n[7]=[i("left-bottom")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Right Bottom prompts info",position:"right-bottom"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[8]||(n[8]=[i("right-bottom")])),_:1})]),_:1})]),r("div",R,[t(o(s),{class:"box-item",effect:"dark",content:"Bottom Left prompts info",position:"bottom-left"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[9]||(n[9]=[i("bottom-left")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Bottom ",position:"bottom"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[10]||(n[10]=[i("bottom")])),_:1})]),_:1}),t(o(s),{class:"box-item",effect:"dark",content:"Bottom Right prompts info",position:"bottom-right"},{default:e(()=>[t(o(l),{ghost:""},{default:e(()=>n[11]||(n[11]=[i("bottom-right")])),_:1})]),_:1})])]))}}),N=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/index.md","filePath":"components/tooltip/index.md"}'),D={name:"components/tooltip/index.md"},G=Object.assign(D,{setup(m){const a=u(!0);return(n,p)=>{const b=c("ClientOnly");return d(),f("div",null,[p[1]||(p[1]=r("h1",{id:"tooltip-文字提示",tabindex:"-1"},[i("Tooltip 文字提示 "),r("a",{class:"header-anchor",href:"#tooltip-文字提示","aria-label":'Permalink to "Tooltip 文字提示"'},"​")],-1)),p[2]||(p[2]=r("p",null,"常用于展示鼠标 hover 时的提示信息。",-1)),p[3]||(p[3]=r("h2",{id:"基本用法",tabindex:"-1"},[i("基本用法 "),r("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),p[4]||(p[4]=r("p",null,"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。",-1)),g(t(o(x),null,null,512),[[h,a.value]]),t(b,null,{default:e(()=>[t(o(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:p[0]||(p[0]=()=>{a.value=!1}),vueCode:o(_)},{vue:e(()=>[t(L)]),_:1},8,["vueCode"])]),_:1})])}}});export{N as __pageData,G as default};
