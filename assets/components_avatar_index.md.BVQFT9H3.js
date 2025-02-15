import{d as l,E as g,N as r,D as _}from"./chunks/theme.CQgGDvlX.js";import{d as m,ao as y,ap as z,c as p,o as d,F as x,C as Z,j as e,G as n,t as C,k as t,_ as f,w as a,b as k,a as c,B as W,aq as A}from"./chunks/framework.DWhRHyQt.js";import{Q as b}from"./chunks/index.80Y4sWw1.js";const X=`<template>
  <div class="demo">
    <div v-for="fit in fits" :key="fit" class="block">
      <div class="title">{{ fit }}</div>
      <ver-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { VerAvatar } from '@versakit/ui'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})
const { fits, url } = toRefs(state)
<\/script>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  width: 100%;
  text-align: center;
}
.block {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
`,B={class:"demo"},q={class:"title"},V=m({__name:"fit",setup(v){const i=y({fits:["fill","contain","cover","none"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}),{fits:s,url:o}=z(i);return(u,Ae)=>(d(),p("div",B,[(d(!0),p(x,null,Z(t(s),h=>(d(),p("div",{key:h,class:"block"},[e("div",q,C(h),1),n(t(l),{shape:"square",size:100,fit:h,src:t(o)},null,8,["fit","src"])]))),128))]))}}),w=f(V,[["__scopeId","data-v-39558064"]]),Y=`<template>
  <div class="demo-basic">
    <div class="demo-error">
      <ver-avatar
        src="http://wrong"
        fallback="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </div>
    <div class="demo-error">
      <ver-avatar src="http://wrong">
        <template #error>
          <ver-icon name="card-image" />
        </template>
      </ver-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerAvatar, VerIcon } from '@versakit/ui'
<\/script>

<style scoped>
.demo-basic {
  display: flex;
}
.demo-error {
  margin: 5px;
}
</style>
`,D={class:"demo-basic"},T={class:"demo-error"},$={class:"demo-error"},G=m({__name:"error",setup(v){return(i,s)=>(d(),p("div",D,[e("div",T,[n(t(l),{src:"http://wrong",fallback:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",$,[n(t(l),{src:"http://wrong"},{error:a(()=>[n(t(g),{name:"card-image"})]),_:1})])]))}}),N=f(G,[["__scopeId","data-v-f1679ef5"]]),I=`<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
          </div>
          <div class="block">
            <ver-avatar>user</ver-avatar>
          </div>
          <div class="block">
            <ver-avatar>
              <VerIcon name="card-image" />
            </ver-avatar>
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar shape="square">user</ver-avatar>
          </div>
          <div class="block">
            <ver-avatar shape="square">
              <VerIcon name="card-image" />
            </ver-avatar>
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerAvatar, VerIcon, VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
`,J={class:"demo-basic"},j={class:"demo-basic--circle"},L={class:"block"},S={class:"block"},F={class:"block"},E={class:"demo-basic"},P={class:"demo-basic--square"},M={class:"block"},H={class:"block"},U={class:"block"},R=m({__name:"src",setup(v){return(i,s)=>(d(),k(t(_),null,{default:a(()=>[n(t(r),{span:12},{default:a(()=>[e("div",J,[s[1]||(s[1]=e("div",{class:"sub-title"},"circle",-1)),e("div",j,[e("div",L,[n(t(l),{src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"})]),e("div",S,[n(t(l),null,{default:a(()=>s[0]||(s[0]=[c("user")])),_:1})]),e("div",F,[n(t(l),null,{default:a(()=>[n(t(g),{name:"card-image"})]),_:1})])])])]),_:1}),n(t(r),{span:12},{default:a(()=>[e("div",E,[s[3]||(s[3]=e("div",{class:"sub-title"},"square",-1)),e("div",P,[e("div",M,[n(t(l),{src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",shape:"square"})]),e("div",H,[n(t(l),{shape:"square"},{default:a(()=>s[2]||(s[2]=[c("user")])),_:1})]),e("div",U,[n(t(l),{shape:"square"},{default:a(()=>[n(t(g),{name:"card-image"})]),_:1})])])])]),_:1})]),_:1}))}}),Q=f(R,[["__scopeId","data-v-f14a84cf"]]),O=`<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar
              size="lg"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              size="lg"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar
              size="xs"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              size="sm"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              size="md"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
`,K={class:"demo-basic"},ee={class:"demo-basic--circle"},se={class:"block"},ne={class:"block"},te={class:"block"},ae={class:"demo-basic"},le={class:"demo-basic--square"},ce={class:"block"},de={class:"block"},oe={class:"block"},ie=m({__name:"size",setup(v){return(i,s)=>(d(),k(t(_),null,{default:a(()=>[n(t(r),{span:12},{default:a(()=>[e("div",K,[s[0]||(s[0]=e("div",{class:"sub-title"},"circle",-1)),e("div",ee,[e("div",se,[n(t(l),{size:"lg",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",ne,[n(t(l),{size:"lg",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",te,[n(t(l),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})])])])]),_:1}),n(t(r),{span:12},{default:a(()=>[e("div",ae,[s[1]||(s[1]=e("div",{class:"sub-title"},"square",-1)),e("div",le,[e("div",ce,[n(t(l),{size:"xs",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",de,[n(t(l),{size:"sm",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",oe,[n(t(l),{size:"md",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})])])])]),_:1})]),_:1}))}}),re=f(ie,[["__scopeId","data-v-d9ef9788"]]),ve=`<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="36"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="36"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'
<\/script>

<style scoped>
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
`,ue={class:"demo-basic"},be={class:"demo-basic--circle"},pe={class:"block"},me={class:"block"},fe={class:"block"},he={class:"demo-basic"},ge={class:"demo-basic--square"},_e={class:"block"},ke={class:"block"},We={class:"block"},ye=m({__name:"base",setup(v){return(i,s)=>(d(),k(t(_),null,{default:a(()=>[n(t(r),{span:12},{default:a(()=>[e("div",ue,[s[0]||(s[0]=e("div",{class:"sub-title"},"circle",-1)),e("div",be,[e("div",pe,[n(t(l),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",me,[n(t(l),{size:36,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",fe,[n(t(l),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})])])])]),_:1}),n(t(r),{span:12},{default:a(()=>[e("div",he,[s[1]||(s[1]=e("div",{class:"sub-title"},"square",-1)),e("div",ge,[e("div",_e,[n(t(l),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",ke,[n(t(l),{size:36,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",We,[n(t(l),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})])])])]),_:1})]),_:1}))}}),ze=f(ye,[["__scopeId","data-v-106b92cc"]]),xe={tabindex:"0"},Ze={tabindex:"0"},Ve=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),Ce={name:"components/avatar/index.md"},we=Object.assign(Ce,{setup(v){return(i,s)=>{const o=W("ClientOnly"),u=W("Tool");return d(),p("div",null,[s[20]||(s[20]=e("h1",{id:"avatar-头像",tabindex:"-1"},[c("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),s[21]||(s[21]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),s[22]||(s[22]=e("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[23]||(s[23]=e("p",null,[c(" 使用 "),e("code",null,"shape"),c(" 和 "),e("code",null,"size"),c(" 属性来设置 Avatar 的形状和大小。 ")],-1)),n(o,null,{default:a(()=>[n(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(ve)},{vue:a(()=>[n(ze)]),_:1},8,["vueCode"])]),_:1}),s[24]||(s[24]=A('<h2 id="头像大小" tabindex="-1">头像大小 <a class="header-anchor" href="#头像大小" aria-label="Permalink to &quot;头像大小&quot;">​</a></h2><p>图片的 <code>size</code> 也支持使用 <code>string</code> 类型来设置尺寸大小，例如：<code>xs</code> , <code>s</code> , <code>md</code> , <code>lg</code> 。</p>',2)),n(o,null,{default:a(()=>[n(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(O)},{vue:a(()=>[n(re)]),_:1},8,["vueCode"])]),_:1}),s[25]||(s[25]=e("h2",{id:"展示类型",tabindex:"-1"},[c("展示类型 "),e("a",{class:"header-anchor",href:"#展示类型","aria-label":'Permalink to "展示类型"'},"​")],-1)),s[26]||(s[26]=e("p",null," 支持使用图片或者文字作为 Avatar。 ",-1)),n(o,null,{default:a(()=>[n(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(I)},{vue:a(()=>[n(Q)]),_:1},8,["vueCode"])]),_:1}),s[27]||(s[27]=e("p",null,[c("图片加载失败时，可以使用 "),e("code",null,"error"),c(" 属性触发函数，默认触发图片填充效果。")],-1)),n(o,null,{default:a(()=>[n(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(Y)},{vue:a(()=>[n(N)]),_:1},8,["vueCode"])]),_:1}),s[28]||(s[28]=e("p",null,[c("当使用图片作为用户头像时，使用 "),e("code",null,"object-fit"),c(" 属性设置该图片如何在容器中展示。")],-1)),n(o,null,{default:a(()=>[n(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(X)},{vue:a(()=>[n(w)]),_:1},8,["vueCode"])]),_:1}),s[29]||(s[29]=e("h2",{id:"avatar-api",tabindex:"-1"},[c("Avatar API "),e("a",{class:"header-anchor",href:"#avatar-api","aria-label":'Permalink to "Avatar API"'},"​")],-1)),s[30]||(s[30]=e("h3",{id:"avatar-属性",tabindex:"-1"},[c("Avatar 属性 "),e("a",{class:"header-anchor",href:"#avatar-属性","aria-label":'Permalink to "Avatar 属性"'},"​")],-1)),e("table",xe,[s[15]||(s[15]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[s[14]||(s[14]=e("tr",null,[e("td",null,"src"),e("td",null,"图片资源的路径"),e("td",null,[e("code",null,"string")]),e("td",null,"-")],-1)),e("tr",null,[s[3]||(s[3]=e("td",null,"size",-1)),s[4]||(s[4]=e("td",null,"尺寸大小",-1)),e("td",null,[s[0]||(s[0]=e("code",null,"number",-1)),s[1]||(s[1]=c(" / ")),s[2]||(s[2]=e("code",null,"enum",-1)),n(u,{value:"xs,sm,lg"})]),s[5]||(s[5]=e("td",null,"50",-1))]),e("tr",null,[s[7]||(s[7]=e("td",null,"shape",-1)),s[8]||(s[8]=e("td",null,"头像的形状",-1)),e("td",null,[s[6]||(s[6]=e("code",null,"enum",-1)),n(u,{value:"square,circle"})]),s[9]||(s[9]=e("td",null,"circle",-1))]),e("tr",null,[s[11]||(s[11]=e("td",null,"fit",-1)),s[12]||(s[12]=e("td",null,"头像的填充效果",-1)),e("td",null,[s[10]||(s[10]=e("code",null,"enum",-1)),n(u,{value:"fill,contain,cover"})]),s[13]||(s[13]=e("td",null,"cover",-1))])])]),s[31]||(s[31]=e("h3",{id:"avatar-事件",tabindex:"-1"},[c("Avatar 事件 "),e("a",{class:"header-anchor",href:"#avatar-事件","aria-label":'Permalink to "Avatar 事件"'},"​")],-1)),e("table",Ze,[s[19]||(s[19]=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"说明"),e("th",null,"回调参数")])],-1)),e("tbody",null,[e("tr",null,[s[17]||(s[17]=e("td",null,"error",-1)),s[18]||(s[18]=e("td",null,"图片加载失败时触发",-1)),e("td",null,[s[16]||(s[16]=e("code",null,"Function",-1)),n(u,{value:"(evt: MouseEvent) => void"})])])])]),s[32]||(s[32]=e("h3",{id:"avatar-插槽",tabindex:"-1"},[c("Avatar 插槽 "),e("a",{class:"header-anchor",href:"#avatar-插槽","aria-label":'Permalink to "Avatar 插槽"'},"​")],-1)),s[33]||(s[33]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容")])])],-1))])}}});export{Ve as __pageData,we as default};
