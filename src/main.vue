<template>
  <div class="main-container">
    <time class="main-date" datetime="2025-17-04">17 – 18 апреля / Москва</time>
    <h1 class="main-title">WBCE 2025</h1>
    <p class="main-subtitle">Выставка и конференция по домашней<br /> и промышленной автоматизации</p>
    <button @click="scrollToElementById('register')">Зарегистрироваться</button>
    <p class="main-link">
      <img src="/assets/img/tg.svg" alt="">
      <a href="https://t.me/wbce2025" target="_blank">Подписывайтесь на Telegram-канал WBCE</a>
    </p>
    <div class="main-video-bg"></div>
    <video class="main-video" autoplay loop muted poster="/assets/img/video_poster.jpg">
      <source src="/assets/video/main.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style>
.main-container {
  border-radius: 36px;
  color: #fff;
  text-align: left;
  padding: 90px 52px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1300px) {
    padding: 40px;
  }

  @media (max-width: 550px) {
    padding: 24px;
  }
}

.main-video {
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: -2;
}

.main-video-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background: #7ba500;
  filter: saturate(0.8);
  mix-blend-mode: color;
  opacity: 0.4;
}

.main-date {
  background: var(--gradient);
  padding: 10px 24px;
  border-radius: 15px;
  font-size: 24px;
  font-weight: 400;
  box-shadow: 0 4px 4px 0 #00000040;
  z-index: 1;

  @media (max-width: 1300px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
    padding: 10px 12px;
  }
}

.main-title {
  font-size: 150px;
  margin: 30px 0 10px;
  text-align: left;
  font-weight: 900;
  line-height: 135px;
  max-width: 640px;

  @media (max-width: 1300px) {
    font-size: 100px;
    margin: 20px 0;
    line-height: 110px;
  }

  @media (max-width: 1024px) {
    max-width: none;
    font-size: 90px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    line-height: normal;
  }

  @media (max-width: 550px) {
    margin: 16px 0 0 0;
  }
}

.main-subtitle {
  font-size: 24px;
  margin-bottom: 18px;
  line-height: 34px;

  @media (max-width: 1300px) {
    font-size: 18px;
    margin-bottom: 12px;
    line-height: 24px;
  }

  @media (max-width: 550px) {
    margin-top: 6px;
    font-size: 16px;
  }
}

.main-link {
  display: flex;
  gap: 12px;
  margin-bottom: 0;
  font-size: 20px;

  @media (max-width: 550px) {
    font-size: 16px;
  }
}
</style>
