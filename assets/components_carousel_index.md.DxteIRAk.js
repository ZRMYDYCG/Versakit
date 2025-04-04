import{d as w,c as p,o as d,G as e,k as n,w as r,j as t,_ as b,p as g,B as C,a5 as c,a as l,a6 as m}from"./chunks/framework.DgG_RYdR.js";import{i as f,c as i}from"./chunks/theme.BN5ATFS7.js";import{d as v,f as x}from"./chunks/index.CrgVH6Ra.js";const _=`<script setup lang="ts">
import { VerCarousel, VerCarouselItem } from '@versakit/ui'
<\/script>

<template>
  <div class="carousel-wrapper">
    <VerCarousel
      :autoplay="true"
      :interval="3000"
      :show-arrows="true"
      :show-indicators="true"
      direction="horizontal"
      trigger="hover"
    >
      <VerCarouselItem width="1200px" height="600px">
        <div class="custom-slide">
          <h3>自定义内容 1</h3>
          <p>这是一个使用 slot 的示例</p>
        </div>
      </VerCarouselItem>
      <VerCarouselItem width="1200px" height="600px">
        <div class="custom-slide">
          <h3>自定义内容 2</h3>
          <p>你可以放置任何内容</p>
        </div>
      </VerCarouselItem>
    </VerCarousel>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-wrapper {
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 2em;
}

.custom-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-slide h3 {
  font-size: 3em;
  margin-bottom: 1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-slide p {
  font-size: 1.5em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
`,y={class:"carousel-wrapper"},V=w({__name:"slot",setup(u){return(a,o)=>(d(),p("div",y,[e(n(f),{autoplay:!0,interval:3e3,"show-arrows":!0,"show-indicators":!0,direction:"horizontal",trigger:"hover"},{default:r(()=>[e(n(i),{width:"1200px",height:"600px"},{default:r(()=>o[0]||(o[0]=[t("div",{class:"custom-slide"},[t("h3",null,"自定义内容 1"),t("p",null,"这是一个使用 slot 的示例")],-1)])),_:1}),e(n(i),{width:"1200px",height:"600px"},{default:r(()=>o[1]||(o[1]=[t("div",{class:"custom-slide"},[t("h3",null,"自定义内容 2"),t("p",null,"你可以放置任何内容")],-1)])),_:1})]),_:1})]))}}),W=b(V,[["__scopeId","data-v-f43b5e0e"]]),Z=`<script setup lang="ts">
import { VerCarousel, VerCarouselItem } from '@versakit/ui'
<\/script>

<template>
  <div class="carousel-wrapper">
    <VerCarousel
      :autoplay="true"
      :interval="3000"
      :show-arrows="true"
      :show-indicators="true"
      direction="horizontal"
      trigger="hover"
    >
      <VerCarouselItem
        src="https://picsum.photos/id/1018/1200/800"
        alt="山川湖泊"
        caption="山川湖泊"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VerCarouselItem
        src="https://picsum.photos/id/1015/1200/800"
        alt="城市风光"
        caption="城市风光"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VerCarouselItem
        src="https://picsum.photos/id/1019/1200/800"
        alt="自然风景"
        caption="自然风景"
        width="1200px"
        height="600px"
        fit="cover"
      />
    </VerCarousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
}
</style>
`,z={class:"carousel-wrapper"},B=w({__name:"base",setup(u){return(a,o)=>(d(),p("div",z,[e(n(f),{autoplay:!0,interval:3e3,"show-arrows":!0,"show-indicators":!0,direction:"horizontal",trigger:"hover"},{default:r(()=>[e(n(i),{src:"https://picsum.photos/id/1018/1200/800",alt:"山川湖泊",caption:"山川湖泊",width:"1200px",height:"600px",fit:"cover"}),e(n(i),{src:"https://picsum.photos/id/1015/1200/800",alt:"城市风光",caption:"城市风光",width:"1200px",height:"600px",fit:"cover"}),e(n(i),{src:"https://picsum.photos/id/1019/1200/800",alt:"自然风景",caption:"自然风景",width:"1200px",height:"600px",fit:"cover"})]),_:1})]))}}),X=b(B,[["__scopeId","data-v-aab8cf88"]]),Y=JSON.parse('{"title":"Carousel 走马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}'),k={name:"components/carousel/index.md"},A=Object.assign(k,{setup(u){const a=g(!0);return(o,s)=>{const h=C("ClientOnly");return d(),p("div",null,[s[2]||(s[2]=t("h1",{id:"carousel-走马灯",tabindex:"-1"},[l("Carousel 走马灯 "),t("a",{class:"header-anchor",href:"#carousel-走马灯","aria-label":'Permalink to "Carousel 走马灯"'},"​")],-1)),s[3]||(s[3]=t("p",null,"在有限空间内，循环播放同一类型的图片、文字等内容",-1)),s[4]||(s[4]=t("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),c(e(n(v),null,null,512),[[m,a.value]]),e(h,null,{default:r(()=>[e(n(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),vueCode:n(Z)},{vue:r(()=>[e(X)]),_:1},8,["vueCode"])]),_:1}),s[5]||(s[5]=t("h2",{id:"自定义内容",tabindex:"-1"},[l("自定义内容 "),t("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),c(e(n(v),null,null,512),[[m,a.value]]),e(h,null,{default:r(()=>[e(n(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{a.value=!1}),vueCode:n(_)},{vue:r(()=>[e(W)]),_:1},8,["vueCode"])]),_:1})])}}});export{Y as __pageData,A as default};
