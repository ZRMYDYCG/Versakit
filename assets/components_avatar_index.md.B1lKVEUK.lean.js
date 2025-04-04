import{d as z,p as m,q as A,c as h,o as p,j as e,G as a,b as S,e as w,k as n,_ as V,F as y,w as c,a as d,B as C,a5 as f,at as W,a6 as x}from"./chunks/framework.DgG_RYdR.js";import{p as k,T as Z,L as i}from"./chunks/theme.BN5ATFS7.js";import{d as _,f as g}from"./chunks/index.CrgVH6Ra.js";const B=`<script setup lang="ts">
import { ref, watch } from 'vue'
import { VerAvatar, VerSegmented, VerSlider } from '@versakit/ui'

const sizeOptions = [
  { label: '小型', value: 'small' },
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '自定义', value: 'custom' },
]
const selectedSize = ref<string | number>('default')
const showSlider = ref(false)
const customSize = ref(60)

watch(selectedSize, (newVal) => {
  showSlider.value = newVal === 'custom'
  if (newVal !== 'custom') {
    customSize.value = typeof newVal === 'number' ? newVal : 60
  }
})
<\/script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>尺寸演示</h2>
      <div class="demo-controls">
        <VerSegmented v-model="selectedSize" :options="sizeOptions" />

        <VerSlider
          v-if="showSlider"
          v-model="customSize"
          :min="20"
          :max="120"
          :step="5"
          class="custom-slider"
        />
      </div>
      <div class="demo-row">
        <VerAvatar
          :size="showSlider ? customSize : selectedSize"
          :text="showSlider ? \`\${customSize}px\` : selectedSize.toString()"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 新增滑块样式 */
.custom-slider {
  margin-top: 20px;
  padding: 0 15px;
  max-width: 300px;
}

.demo-controls {
  /* 保持原有样式 */
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,q={class:"container"},X={class:"demo-section"},P={class:"demo-controls"},T={class:"demo-row"},Y=z({__name:"size",setup(b){const o=[{label:"小型",value:"small"},{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"自定义",value:"custom"}],s=m("default"),t=m(!1),r=m(60);return A(s,u=>{t.value=u==="custom",u!=="custom"&&(r.value=typeof u=="number"?u:60)}),(u,l)=>(p(),h("div",q,[e("section",X,[l[2]||(l[2]=e("h2",null,"尺寸演示",-1)),e("div",P,[a(n(k),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=v=>s.value=v),options:o},null,8,["modelValue"]),t.value?(p(),S(n(Z),{key:0,modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=v=>r.value=v),min:20,max:120,step:5,class:"custom-slider"},null,8,["modelValue"])):w("",!0)]),e("div",T,[a(n(i),{size:t.value?r.value:s.value,text:t.value?`${r.value}px`:s.value.toString()},null,8,["size","text"])])])]))}}),D=V(Y,[["__scopeId","data-v-50b5e01c"]]),G=`<template>
  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar src="https://randomuser.me/api/portraits/men/1.jpg" />
      <VerAvatar text="User" />
      <VerAvatar backgroundColor="#f56a00">U</VerAvatar>
    </div>
  </section>

  <section class="demo-section">
    <div class="demo-row">
      <VerAvatar shape="circle" text="C" />
      <VerAvatar shape="square" text="S" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VerAvatar } from '@versakit/ui'
<\/script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
`,N={class:"demo-section"},E={class:"demo-row"},I={class:"demo-section"},L={class:"demo-row"},U=z({__name:"base",setup(b){return(o,s)=>(p(),h(y,null,[e("section",N,[e("div",E,[a(n(i),{src:"https://randomuser.me/api/portraits/men/1.jpg"}),a(n(i),{text:"User"}),a(n(i),{backgroundColor:"#f56a00"},{default:c(()=>s[0]||(s[0]=[d("U")])),_:1})])]),e("section",I,[e("div",L,[a(n(i),{shape:"circle",text:"C"}),a(n(i),{shape:"square",text:"S"})])])],64))}}),J=V(U,[["__scopeId","data-v-4f7458d6"]]),j=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),F={name:"components/avatar/index.md"},H=Object.assign(F,{setup(b){const o=m(!0);return(s,t)=>{const r=C("ClientOnly");return p(),h("div",null,[t[2]||(t[2]=e("h1",{id:"avatar-头像",tabindex:"-1"},[d("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),t[3]||(t[3]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[5]||(t[5]=e("p",null,[d(" 使用 "),e("code",null,"shape"),d(" 和 "),e("code",null,"size"),d(" 属性来设置 Avatar 的形状和大小。 ")],-1)),f(a(n(_),null,null,512),[[x,o.value]]),a(r,null,{default:c(()=>[a(n(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:n(G)},{vue:c(()=>[a(J)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=e("h2",{id:"尺寸",tabindex:"-1"},[d("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),t[7]||(t[7]=e("p",null,[d("使用 "),e("code",null,"size"),d(" 属性来设置 Avatar 的尺寸。")],-1)),f(a(n(_),null,null,512),[[x,o.value]]),a(r,null,{default:c(()=>[a(n(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:n(B)},{vue:c(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=W("",6))])}}});export{j as __pageData,H as default};
