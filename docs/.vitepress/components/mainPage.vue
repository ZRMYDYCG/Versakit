<template>
  <div class="theme-main-page">
    <div class="background-box">
      <!-- 背景装饰1 -->
      <img src="../../assets/dot1.svg" class="decor decor1" alt="装饰1" />

      <!-- 背景装饰2 -->
      <img src="../../assets/dot2.svg" class="decor decor2" alt="装饰2" />

      <!-- 背景装饰3 -->
      <img src="../../assets/dot3.svg" class="decor decor3" alt="装饰3" />

      <!-- 背景装饰4 -->
      <img src="../../assets/dot4.svg" class="decor decor4" alt="装饰4" />
      <!-- 人1 -->
      <img
        src="../../assets/person1.svg"
        class="person person1"
        alt="person1"
      />
      <!-- 人2 -->
      <img
        src="../../assets/person2.svg"
        class="person person2"
        alt="person2"
      />
      <!-- 人3 -->
      <img
        src="../../assets/person3.svg"
        class="person person3"
        alt="person3"
      />
      <div class="component-library">
        <img src="../../assets/white.svg" class="white-img" alt="白色小点" />
        <div class="component">
          <div class="title">Versakit</div>
          <div class="title-sub">
            <div class="description">We create designs</div>
            <div class="description">
              everyone
              <span class="span-word">loves.</span>
            </div>
          </div>
          <VerButton v-ripple type="primary" variant="round" size="lg">
            开始
          </VerButton>
        </div>
      </div>
    </div>
  </div>
  <img src="../../assets/dot5.svg" class="dot-img" alt="装饰" />
  <main class="main">
    <div class="main-content">123</div>
  </main>
</template>
<script setup>
import { VerButton } from '@versakit/ui'
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
}
.background-box {
  width: 100%;
  background-image: url('../../assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  aspect-ratio: 2108 / 1398;
  /* position: relative; */
}

.component-library {
  display: flex;
}
.white-img {
  transform: translateY(30%);
  width: clamp(30px, 15vw, 200px);
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
  animation: float1 6s infinite ease-in-out;
  z-index: 1;
  @media (max-width: 765px) {
    animation: float-min1 6s infinite ease-in-out;
  }
}

.person1 {
  top: 9%;
  left: 50%;

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
  @media (min-width: 555px) and (max-width: 765px) {
    top: 12%;
  }
  @media (max-width: 555px) {
    top: 7%;
  }
}

.person3 {
  width: clamp(10px, 28vw, 450px);
  top: 28%;
  left: 60%;
  @media (min-width: 555px) and (max-width: 765px) {
    top: 20%;
  }
  @media (max-width: 555px) {
    top: 10%;
  }
}

.decor {
  position: absolute;
  width: clamp(30px, 100vw, 400px);
  animation: float2 5s infinite ease-in-out;
  z-index: 1;
  max-width: 100%;
  overflow: hidden;

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
    top: 1%;
  }
  @media (max-width: 555px) {
    top: 0%;
  }
}

.decor2 {
  top: 14%;
  left: 62%;
}

.decor3 {
  top: 28%;
  left: 62%;
  @media (max-width: 765px) {
    display: none;
  }
}

.decor4 {
  top: 12%;
  left: 68%;
  @media (max-width: 765px) {
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
  font-size: clamp(1.5rem, 5vw, 4.5rem);
  font-weight: 600;
  padding: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 5px;
  }
}

.title-sub {
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
}

.description {
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding: 5px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding: 1px;
    padding-left: 10px;
  }
}

.span-word {
  color: #8b5cf6;
  font-weight: 600;
}

.dot-img {
  width: clamp(30px, 100vw, 800px);
  transform: translate(10%, -200%);

  @media (max-width: 1024px) {
    width: clamp(30px, 80vw, 600px);
  }
}

.main {
  background-color: yellow;
  display: flex;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 960px) {
    padding: 0 64px;
  }
  @media (min-width: 768px) {
    padding: 0 48px;
  }
}

.main-content {
}
</style>
