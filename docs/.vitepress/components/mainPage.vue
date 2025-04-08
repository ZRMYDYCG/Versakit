<template>
  <div class="theme-main-page">
    <div class="background-box">
      <template v-for="img in images" :key="img.src">
        <img :src="img.src" :class="img.class" :alt="img.alt" />
      </template>
      <div class="component-library">
        <img src="/image/white.svg" class="white-img" alt="白色小点" />
        <div class="component">
          <div class="title">Versakit</div>
          <div class="title-sub">
            <div class="description">We create designs</div>
            <div class="description">
              everyone
              <span class="span-word">loves.</span>
            </div>
          </div>

          <div class="start-box">
            <VerButton
              @click="navigate('/Versakit/guide/versakit/')"
              type="primary"
              variant="round"
              size="lg"
            >
              开始
            </VerButton>
            <div class="btn-shine">V 0.3.6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img src="/image/dot5.svg" class="dot-img" alt="装饰" />
  <main class="main">
    <div class="main-content">
      <div class="inner-content">
        <div class="center-title">VersakitVue</div>
        <div class="sur-title">基于 Vue 3，面向设计师和开发者的组件库</div>
        <div class="center-components">
          <div class="center-component" v-for="item in list" :key="item.name">
            <div class="component-top">
              <div class="purple-box">
                <img
                  src="/image/purple.svg"
                  class="purple-img"
                  alt="紫色背景"
                />
              </div>
              <ver-icon
                class="component-top-icon"
                :name="item.name"
                size="25"
              />
              <div class="component-top-content">
                {{ item.content }}
              </div>
            </div>
            <div class="component-bottom" @click="navigate(item.link)">
              <div class="component-bottom-word">{{ item.word }}</div>
              <ver-icon
                class="component-bottom-icon"
                name="arrow-right-circle-fill"
                size="16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'

let list = [
  {
    name: 'lightbulb',
    content:
      '了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品',
    word: '指南',
    link: '/Versakit/guide/installation/',
  },
  {
    name: 'basket',
    content:
      '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发',
    word: '组件',
    link: '/Versakit/components/layout/',
  },
  {
    name: 'rocket',
    content:
      '持续开发中，使用相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率',
    word: '资源',
    link: '/Versakit/design/colors/',
  },
]
const navigate = (path) => {
  window.location.href = path
}

// 需要加上 config.mts 的 base 前缀， template 中的路径 Vite 会自动加上 base
const images = ref([
  { src: '/Versakit/image/dot1.svg', class: 'decor decor1', alt: '装饰1' },
  { src: '/Versakit/image/dot2.svg', class: 'decor decor2', alt: '装饰2' },
  { src: '/Versakit/image/dot3.svg', class: 'decor decor3', alt: '装饰3' },
  { src: '/Versakit/image/dot4.svg', class: 'decor decor4', alt: '装饰4' },
  { src: '/Versakit/image/person1.svg', class: 'person person1', alt: '人物1' },
  { src: '/Versakit/image/person2.svg', class: 'person person2', alt: '人物2' },
  { src: '/Versakit/image/person3.svg', class: 'person person3', alt: '人物3' },
])
</script>
<style scoped>
body {
  overflow-x: hidden;
}

.ver-btn {
  border: none;
  margin-left: 20px;
  width: 120px;

  @media (max-width: 768px) {
    width: 80px;
    font-size: 14px;
    height: 35px;
    margin-left: 10px;
  }

  @media (max-width: 555px) {
    width: 40px;
    padding: 0;
    height: 20px;
    font-size: 10px;
    margin-left: 10px;
  }
}

.background-box {
  width: 100%;
  background-image: url('/image/bg.png');
  opacity: 0.9;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  aspect-ratio: 2108 / 1398;
}

.component-library {
  display: flex;
}

.white-img {
  transform: translateY(30%);
  width: clamp(30px, 15vw, 200px);
  user-select: none;
}

.component {
  transform: translate(10%, 20%);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.person {
  position: absolute;
  width: clamp(10px, 15vw, 180px);
  z-index: 1;
  user-select: none;

  @media (max-width: 765px) {
    animation: float-min1 6s infinite ease-in-out;
  }
}

.person1 {
  top: 9%;
  left: 50%;
  animation: float1 6s infinite ease-in-out;

  @media (min-width: 555px) and (max-width: 765px) {
    top: 5%;
  }

  @media (max-width: 555px) {
    top: 3%;
  }
}

.person2 {
  top: 18%;
  left: 62%;
  animation: float2 8s infinite ease-in-out;

  @media (min-width: 555px) and (max-width: 765px) {
    top: 12%;
  }

  @media (max-width: 555px) {
    top: 7%;
  }
}

.person3 {
  width: clamp(10px, 28vw, 450px);
  top: 27%;
  left: 60%;
  animation: float3 7s infinite ease-in-out;

  @media (min-width: 1024px) and (max-width: 1200px) {
    top: 25%;
    width: clamp(10px, 20vw, 350px);
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.decor {
  position: absolute;
  width: clamp(30px, 100vw, 400px);
  animation: float2 5s infinite ease-in-out;
  z-index: 1;
  max-width: 100%;
  overflow: hidden;
  user-select: none;

  @media (max-width: 1024px) {
    width: clamp(30px, 80vw, 300px);
  }

  @media (max-width: 765px) {
    animation: float-min2 5s infinite ease-in-out;
  }
}

.decor1 {
  top: 3%;
  left: 48%;

  @media (min-width: 555px) and (max-width: 765px) {
    width: clamp(30px, 50vw, 300px);
    top: 2%;
  }

  @media (max-width: 555px) {
    width: clamp(30px, 50vw, 300px);
    top: 1%;
  }
}

.decor2 {
  top: 12%;
  left: 62%;
  width: clamp(30px, 30vw, 340px);

  @media (max-width: 765px) {
    display: none;
  }
}

.decor3 {
  top: 28%;
  left: 62%;

  @media (max-width: 1024px) {
    display: none;
  }
}

.decor4 {
  top: 22%;
  left: 64%;
  width: clamp(30px, 80vw, 340px);

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: clamp(10px, 70vw, 200px);
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

@keyframes float1 {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(10px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translateY(20px);
  }

  50% {
    transform: translateY(0px);
  }
}

@keyframes float-min1 {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes float-min2 {
  0%,
  100% {
    transform: translateX(5px);
    transform: translateY(-5px);
  }

  50% {
    transform: translateX(0px);
    transform: translateY(0px);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateX(20px);
    transform: translateY(-10px);
  }

  50% {
    transform: translateX(0px);
    transform: translateY(0px);
  }
}

.title {
  color: #8b5cf6;
  font-size: clamp(1rem, 5vw, 4.5rem);
  font-weight: 600;
  padding: 20px;
  margin-bottom: 30px;
  user-select: none;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 5px;
  }

  @media (max-width: 555px) {
    height: 30px;
  }
}

.title-sub {
  margin-bottom: 30px;
  user-select: none;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
}

.description {
  color: #fff;
  font-size: clamp(0.5rem, 2.5vw, 2rem);
  padding: 5px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding: 0;
    padding-left: 10px;
  }

  @media (max-width: 555px) {
    height: 16px;
  }
}

.span-word {
  color: #8b5cf6;
  font-weight: 600;
}

.dot-img {
  width: clamp(30px, 100vw, 800px);
  transform: translate(10%, -200%);
  user-select: none;

  @media (max-width: 1024px) {
    width: clamp(30px, 80vw, 600px);
  }
}

.main {
  display: flex;
  max-width: 1152px;
  margin: 0 auto;
  padding: 24px;

  @media (min-width: 960px) {
    padding: 40px 64px;
  }

  @media (min-width: 768px) {
    padding: 40px 48px;
  }
}

.main-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-content {
  width: 100%;
  text-align: center;
}

.center-title {
  color: #434343;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 600;
  padding: 20px;
  user-select: none;
}

.dark .center-title {
  color: #f5f5f5;
}

.sur-title {
  color: #595959;
  padding: 20px;
  user-select: none;
}

.dark .sur-title {
  color: #8c8c8c;
}

.center-components {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 50px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.center-component {
  position: relative;
  border-radius: 15px;
  height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: transform 0.3s ease;
}

.center-component:hover {
  transform: translateY(-10px);
}

.component-top {
  padding: 50px 30px;
}

.purple-box {
  display: flex;
  justify-content: center;
  transform: translate(6px, 20px);
}

.purple-img {
  text-align: center;
}

.component-top-icon {
  transform: translateY(-45px);
}

.component-top-content {
  user-select: none;
  padding: 20px;
  font-size: 14px;
}

.component-bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8b5cf6;
  color: #fff;
  padding: 10px 0;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  user-select: none;
}

.component-bottom-word {
  margin-right: 10px;
}

.component-bottom-icon {
  transition: transform 0.5s ease;
}

.component-bottom:hover .component-bottom-icon {
  transform: translateX(5px);
}

/* 版本号 */
.start-box {
  align-items: center;
  display: flex;
  gap: 5%;
  position: relative;
}

/* From Uiverse.io by neerajbaniwal */
.btn-shine {
  position: absolute;
  top: 50%;
  margin-left: 10px;
  left: 62%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  /* background: linear-gradient(to right, #e4e4e4 0, #6a6a6a 10%, #b9b9b9 20%); */
  background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #7f7f7f 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1256px) {
    left: 76%;
    margin-left: 20px;
    font-size: 0.8rem;
  }

  @media (max-width: 1024px) {
    left: 86%;
    margin-left: 20px;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    left: 86%;
    font-size: 0.8rem;
  }

  @media (max-width: 555px) {
    font-size: 0.6rem;
    margin-left: 5px;
  }
}

.dark .btn-shine {
  /* background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #7f7f7f 20%); */
}

@-moz-keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 180px;
  }

  100% {
    background-position: 180px;
  }
}

@-webkit-keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 180px;
  }

  100% {
    background-position: 180px;
  }
}

@-o-keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 180px;
  }

  100% {
    background-position: 180px;
  }
}

@keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 180px;
  }

  100% {
    background-position: 180px;
  }
}
</style>
