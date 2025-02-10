<template>
  <div class="background-box">
    <!-- 人1 -->
    <img src="../../assets/person1.svg" class="person person1" alt="person1" />

    <!-- 人2 -->
    <img src="../../assets/person2.svg" class="person person2" alt="person2" />

    <!-- 人3 -->
    <img src="../../assets/person3.svg" class="person person3" alt="person3" />

    <!-- 背景装饰1 -->
    <img src="../../assets/dot1.svg" class="decor decor1" alt="装饰1" />

    <!-- 背景装饰2 -->
    <img src="../../assets/dot2.svg" class="decor decor2" alt="装饰2" />

    <!-- 背景装饰3 -->
    <img src="../../assets/dot3.svg" class="decor decor3" alt="装饰3" />

    <!-- 背景装饰4 -->
    <img src="../../assets/dot4.svg" class="decor decor4" alt="装饰4" />
  </div>
</template>
<script setup></script>
<style scoped>
.background-box {
  width: 100%;
  background-image: url('../../assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  aspect-ratio: 2108 / 1398;
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
  width: clamp(10px, 15vw, 200px); /* 自适应宽度 */
  animation: float 6s infinite ease-in-out;
  z-index: 1;
}

.person1 {
  top: 8%;
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
  width: clamp(10px, 100vw, 300px);
  animation: float2 5s infinite ease-in-out;
  z-index: 1;
}

.decor1 {
  top: 10%;
  left: 20%;
}

.decor2 {
  top: 40%;
  left: 50%;
}

.decor3 {
  top: 80%;
  left: 10%;
}

.decor4 {
  top: 60%;
  left: 80%;
}

@keyframes float {
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
    transform: translateX(20px);
    transform: translateY(-10px);
  }
  50% {
    transform: translateX(0px);
    transform: translateY(0px);
  }
}
</style>
