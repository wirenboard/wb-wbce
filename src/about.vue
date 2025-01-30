<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const list = ref();

onMounted(() => {
  gsap.context((self: any) => {
    const boxes = self.selector('.about-item');

    boxes.forEach((box: any, index: number) => {
      const nextBox = boxes[index + 1];
      const isSmallResolution = list.value.offsetWidth <= 643;
      const height = isSmallResolution ? 70 : 90;
      const dynamicOffset = 20 + index * height;
      const isLastBox = index === boxes.length - 1;
      const lastBoxHeight = boxes[boxes.length - 1].offsetHeight;
      const offsetHeight = lastBoxHeight + (20 + (boxes.length - 1) * height);

      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: `top-=${dynamicOffset} top`,
          endTrigger: list.value,
          end: `bottom-=${offsetHeight} top`,
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      if (!isLastBox) {
        gsap.to(box, {
          filter: 'blur(2px)',
          color: 'gray',
          scrollTrigger: {
            trigger: nextBox,
            start: `top-=${dynamicOffset + 130} top`,
            end: `bottom-=${offsetHeight} top`,
            scrub: true,
          },
        });
      }
    });
  }, list.value);

});
</script>

<template>
  <article id="about" class="about-container">
    <h2>Что будет на WBCE</h2>

    <ul class="about-list" ref="list">
      <li class="about-item">
        <div class="about-item-title">Решения автоматизации</div>
        <div class="about-item-description">Будут представлены стенды разработчиков ПО, производителей устройств для умных домов, ЖК, коммерческих и промышленных объектов, интеграторов умных домов.</div>
      </li>
      <li class="about-item">
        <div class="about-item-title">Выступления экспертов</div>
        <div class="about-item-description">Вместе с Партнерами расскажем о&nbsp;сочетании проводных и&nbsp;беспроводных технологий, диспетчеризации и мониторинге систем и&nbsp;новинках оборудования на&nbsp;рынке автоматизации.</div>
      </li>
      <li class="about-item">
        <div class="about-item-title">Экскурсия на производство</div>
        <div class="about-item-description">Вы увидите, как собирают контроллеры и&nbsp;другие устройства для автоматизации.<br />Будет организован бесплатный транспорт каждые 15 минут.</div>
      </li>
      <li class="about-item">
        <div class="about-item-title">Подарки и розыгрыш призов</div>
        <div class="about-item-description">В 2024 году каждый 12 участник получил подарок от Wiren Board и партнеров: различные устройства и&nbsp;сертификаты.<br />Главным призом стал <a href="https://wirenboard.com/ru/product/wiren-board-8_5/" target="_blank">контроллер Wiren Board 8</a>.</div>
      </li>
    </ul>
    <div class="spotlight spotlight-about spotlight-right spotlight-top" />
  </article>
</template>

<style>
.about-container {
  position: relative;
}

.about-list {
  position: relative;
  padding: 0;
  list-style: none;
  text-align: left;
  font-size: 24px;
  line-height: 34px;
}

.about-item {
  border: var(--border);
  background: #161A16;
  color: #fff;
  margin-bottom: 76px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  max-width: 555px;
  transition: background, color ease-in-out 400ms;

  @media (max-width: 850px) {
    padding: 24px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
    gap: 12px;
  }
}

:root {
  --block-margin-left: 90px;

  @media (max-width: 850px) {
    --block-margin-left: 40px;
  }

  @media (max-width: 700px) {
    --block-margin-left: 0;
  }
}

.about-item:nth-child(2) {
  margin-left: var(--block-margin-left);
}

.about-item:nth-child(3) {
  margin-left: calc(var(--block-margin-left) * 2);
}

.about-item:nth-child(4) {
  margin-left: calc(var(--block-margin-left) * 3);
}

.about-item-title {
  color: #6ac40b;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 22px;
  }
}

.about-item-description {
  @media (max-width: 700px) {
    line-height: 28px;
  }
}

.spotlight-about {
  transform: scaleY(0.7);
  right: -150px;
}
</style>
