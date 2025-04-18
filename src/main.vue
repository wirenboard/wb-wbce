<template>
  <div class="main-container">
    <div>
      <time class="main-date" datetime="2025-17-04">17 – 18 апреля / Москва</time>
      <h1 class="main-title">WBCE 2025</h1>
      <p class="main-subtitle">Выставка и конференция по домашней<br /> и промышленной автоматизации</p>

      <p class="main-link">
        <img src="/assets/img/tg.svg" alt="">
        <a href="https://t.me/wbce2025" target="_blank">Подписывайтесь на Telegram-канал WBCE</a>
      </p>
      <p>Друзья, регистрация завершена, но мы всё равно ждём вас в гости! Просто приезжайте и сообщите, что у вас нет билета, мы выдадим вам бейдж.</p>
    </div>

    <div class="main-videoContainer">
      <iframe
        title="Как это было: конференция и выставка WBCE 2024"
        class="main-video"
        src="https://peertube.wirenboard.com/videos/embed/7d61e2fd-c522-4abb-9957-257d21ff91e6?autoplay=1&amp;muted=1&amp;title=0&amp;warningTitle=0&amp;p2p=0"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="340"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
    <div class="spotlight main-spotlight" />
  </div>
</template>

<style>
.main-container {
  position: relative;
  border-radius: 36px;
  color: #fff;
  text-align: left;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    padding: 40px 18px;
  }

  @media (max-width: 290px) {
    padding: 24px 18px;
  }
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

  @media (max-width: 290px) {
    font-size: 14px;
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
  text-shadow: 0 1px 2px #000;

  @media (max-width: 1300px) {
    font-size: 18px;
    margin-bottom: 12px;
    line-height: 24px;
  }

  @media (max-width: 550px) {
    margin-top: 6px;
    font-size: 16px;
  }

  @media (max-width: 290px) {
    font-size: 14px;
    line-height: 20px;
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

  @media (max-width: 290px) {
    font-size: 14px;
  }
}

.main-register {
  @media (max-width: 290px) {
    font-size: 16px;
    padding: 4px 16px;
  }
}

.main-videoContainer {
  width: 100%;
  max-width: 600px;
  border-radius: 25px;
  border: var(--border);
  padding: 20px;
  position: relative;
  height: fit-content;
  margin-top: 70px;

  @media (max-width: 900px) {
    display: none;
  }
}

.main-video {
  border-radius: 25px;
}

.main-spotlight {
  top: 210px;
  left: 35%;
  opacity: 0.25;
}
</style>
