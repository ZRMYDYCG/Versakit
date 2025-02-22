import{I as c,T as o}from"./chunks/theme.BTh_A52A.js";import{d as m,c as i,o as l,G as n,k as s,w as r,j as t,_ as x,B as v,a}from"./chunks/framework.B9s_fTIu.js";import{Q as u}from"./chunks/index.Cnf2THuG.js";const b=`<script setup lang="ts">
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
`,w={class:"carousel-wrapper"},f=m({__name:"slot",setup(p){return(d,e)=>(l(),i("div",w,[n(s(c),{autoplay:!0,interval:3e3,"show-arrows":!0,"show-indicators":!0,direction:"horizontal",trigger:"hover"},{default:r(()=>[n(s(o),{width:"1200px",height:"600px"},{default:r(()=>e[0]||(e[0]=[t("div",{class:"custom-slide"},[t("h3",null,"自定义内容 1"),t("p",null,"这是一个使用 slot 的示例")],-1)])),_:1}),n(s(o),{width:"1200px",height:"600px"},{default:r(()=>e[1]||(e[1]=[t("div",{class:"custom-slide"},[t("h3",null,"自定义内容 2"),t("p",null,"你可以放置任何内容")],-1)])),_:1})]),_:1})]))}}),g=x(f,[["__scopeId","data-v-f43b5e0e"]]),C=`<script setup lang="ts">
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
`,_={class:"carousel-wrapper"},y=m({__name:"base",setup(p){return(d,e)=>(l(),i("div",_,[n(s(c),{autoplay:!0,interval:3e3,"show-arrows":!0,"show-indicators":!0,direction:"horizontal",trigger:"hover"},{default:r(()=>[n(s(o),{src:"https://picsum.photos/id/1018/1200/800",alt:"山川湖泊",caption:"山川湖泊",width:"1200px",height:"600px",fit:"cover"}),n(s(o),{src:"https://picsum.photos/id/1015/1200/800",alt:"城市风光",caption:"城市风光",width:"1200px",height:"600px",fit:"cover"}),n(s(o),{src:"https://picsum.photos/id/1019/1200/800",alt:"自然风景",caption:"自然风景",width:"1200px",height:"600px",fit:"cover"})]),_:1})]))}}),V=x(y,[["__scopeId","data-v-aab8cf88"]]),X=JSON.parse('{"title":"Carousel 走马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}'),W={name:"components/carousel/index.md"},k=Object.assign(W,{setup(p){return(d,e)=>{const h=v("ClientOnly");return l(),i("div",null,[e[0]||(e[0]=t("h1",{id:"carousel-走马灯",tabindex:"-1"},[a("Carousel 走马灯 "),t("a",{class:"header-anchor",href:"#carousel-走马灯","aria-label":'Permalink to "Carousel 走马灯"'},"​")],-1)),e[1]||(e[1]=t("p",null,"在有限空间内，循环播放同一类型的图片、文字等内容",-1)),e[2]||(e[2]=t("h2",{id:"基本使用",tabindex:"-1"},[a("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),n(h,null,{default:r(()=>[n(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(C)},{vue:r(()=>[n(V)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h2",{id:"自定义内容",tabindex:"-1"},[a("自定义内容 "),t("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),n(h,null,{default:r(()=>[n(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(b)},{vue:r(()=>[n(g)]),_:1},8,["vueCode"])]),_:1})])}}});export{X as __pageData,k as default};
