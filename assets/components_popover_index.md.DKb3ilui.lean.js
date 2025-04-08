import{d as v,c as d,o as m,j as o,G as n,k as r,w as t,_ as c,p as b,B as _,a5 as f,a as l,a6 as g}from"./chunks/framework.B3Jz-8p0.js";import{U as s}from"./chunks/theme.DKFx6c4r.js";import{d as x,f as h}from"./chunks/index.BbNYUtVF.js";const w=`<template>
  <div class="popover-demo">
    <h2>基础用法</h2>
    <div class="popover-demo__row">
      <ver-popover
        content="这是一个 Popover"
        placement="left"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">左侧弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="top"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">顶部弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="right"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">右侧弹出</button>
      </ver-popover>

      <ver-popover
        content="这是一个 Popover"
        placement="bottom"
        trigger="hover"
        :arrow="true"
      >
        <button class="demo-button">底部弹出</button>
      </ver-popover>
    </div>

    <h2>自定义内容</h2>
    <div class="popover-demo__row">
      <ver-popover placement="bottom" trigger="click">
        <button class="demo-button">点击查看</button>
        <template #content>
          <div class="popover-demo__custom">
            <h3>自定义内容</h3>
            <p>这里可以放置任何内容</p>
            <div class="popover-demo__actions">
              <button class="demo-button demo-button--small">确定</button>
              <button class="demo-button demo-button--small">取消</button>
            </div>
          </div>
        </template>
      </ver-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerPopover } from '@versakit/ui'
<\/script>

<style scoped>
.popover-demo {
  padding: 20px;
}

.popover-demo h2 {
  margin: 20px 0;
  font-size: 18px;
  color: #333;
}

.popover-demo__row {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.demo-button {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
}

.demo-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.demo-button--small {
  padding: 4px 12px;
  font-size: 12px;
}

.popover-demo__custom {
  padding: 8px;
}

.popover-demo__custom h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.popover-demo__custom p {
  margin: 0 0 12px;
  color: #666;
}

.popover-demo__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
`,P={class:"popover-demo"},k={class:"popover-demo__row"},y={class:"popover-demo__row"},C=v({__name:"base",setup(u){return(a,e)=>(m(),d("div",P,[e[6]||(e[6]=o("h2",null,"基础用法",-1)),o("div",k,[n(r(s),{content:"这是一个 Popover",placement:"left",trigger:"hover",arrow:!0},{default:t(()=>e[0]||(e[0]=[o("button",{class:"demo-button"},"左侧弹出",-1)])),_:1}),n(r(s),{content:"这是一个 Popover",placement:"top",trigger:"hover",arrow:!0},{default:t(()=>e[1]||(e[1]=[o("button",{class:"demo-button"},"顶部弹出",-1)])),_:1}),n(r(s),{content:"这是一个 Popover",placement:"right",trigger:"hover",arrow:!0},{default:t(()=>e[2]||(e[2]=[o("button",{class:"demo-button"},"右侧弹出",-1)])),_:1}),n(r(s),{content:"这是一个 Popover",placement:"bottom",trigger:"hover",arrow:!0},{default:t(()=>e[3]||(e[3]=[o("button",{class:"demo-button"},"底部弹出",-1)])),_:1})]),e[7]||(e[7]=o("h2",null,"自定义内容",-1)),o("div",y,[n(r(s),{placement:"bottom",trigger:"click"},{content:t(()=>e[4]||(e[4]=[o("div",{class:"popover-demo__custom"},[o("h3",null,"自定义内容"),o("p",null,"这里可以放置任何内容"),o("div",{class:"popover-demo__actions"},[o("button",{class:"demo-button demo-button--small"},"确定"),o("button",{class:"demo-button demo-button--small"},"取消")])],-1)])),default:t(()=>[e[5]||(e[5]=o("button",{class:"demo-button"},"点击查看",-1))]),_:1})])]))}}),W=c(C,[["__scopeId","data-v-8eb47ae7"]]),G=JSON.parse('{"title":"Popover 弹出框","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover/index.md","filePath":"components/popover/index.md"}'),B={name:"components/popover/index.md"},N=Object.assign(B,{setup(u){const a=b(!0);return(e,p)=>{const i=_("ClientOnly");return m(),d("div",null,[p[1]||(p[1]=o("h1",{id:"popover-弹出框",tabindex:"-1"},[l("Popover 弹出框 "),o("a",{class:"header-anchor",href:"#popover-弹出框","aria-label":'Permalink to "Popover 弹出框"'},"​")],-1)),p[2]||(p[2]=o("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),o("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),f(n(r(x),null,null,512),[[g,a.value]]),n(i,null,{default:t(()=>[n(r(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:p[0]||(p[0]=()=>{a.value=!1}),vueCode:r(w)},{vue:t(()=>[n(W)]),_:1},8,["vueCode"])]),_:1})])}}});export{G as __pageData,N as default};
