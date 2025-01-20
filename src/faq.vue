<template>
  <article id="faq" class="faq-container">
    <h2>Часто задаваемые вопросы</h2>

    <div class="faq-content">
      <details class="faq-details">
        <summary class="faq-question">Кто организатор?</summary>
        <div class="faq-answer">Организатор выставки — компания Wiren Board и партнеры из промышленной отрасли, разработчики ПО, производители устройств для умных домов и ЖК, инсталляторы умных домов.</div>
      </details>

      <details class="faq-details">
        <summary class="faq-question">Когда и где будет проходить?</summary>
        <div class="faq-answer">WBCE 2025 будет проходить 17-18 апреля по адресу: г. Москва, Дмитровское шоссе, 171, <a href="https://himv.ru/)">Отель «Виноградово»</a> (здесь можно остановиться, если вы из другого города). От метро Физтех каждые 15 минут будет ходить маршрутка.</div>
      </details>

      <details class="faq-details">
        <summary class="faq-question">Сколько стоит участие?</summary>
        <div class="faq-answer">В качестве посетителя участие в WBCE 2025 бесплатное.</div>
      </details>

      <details class="faq-details">
        <summary class="faq-question">Будет ли запись выступлений?</summary>
        <div class="faq-answer">Да, запись выступлений опубликуем спустя месяц после проведения мероприятия на <a href="https://www.youtube.com/@wirenboard_ru" target="_blank">YouTube-канале</a> и <a href="https://peertube.wirenboard.com/" target="_blank">PeerTube-канале</a>.</div>
      </details>

      <details class="faq-details">
        <summary class="faq-question">Что покажут во время экскурсии на производство?</summary>
        <div class="faq-answer">Экскурсию по производству компании Wiren Board проведут инженер-электронщик или руководитель производства. Вы увидите, где разрабатывают устройства, стенды для тестирования, складские помещения, процесс конвейерной сборки контроллеров, реле и других устройств.</div>
      </details>

      <details class="faq-details">
        <summary class="faq-question">Есть ли парковка на территории проведения WBCE&#160;2025?</summary>
        <div class="faq-answer">Да, есть бесплатная парковка.</div>
      </details>
    </div>
    <div class="spotlight" />
  </article>
</template>

<style scoped>
.faq-container {
  position: relative;
}

.faq-details {
  text-align: left;
  border-radius: 25px;
  border: var(--border);
  background: var(--block-bg);
  margin-bottom: 24px;
}

.faq-question {
  display: flex;
  color: #6AC40B;
  padding: 24px 32px;
  font-size: 24px;
  cursor: pointer;
  list-style-type: '';

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 620px) {
    padding: 16px 24px;
  }

  @media (max-width: 290px) {
    padding: 12px 16px;
  }
}

.faq-details:not([open]) .faq-question:before {
  content: '+';
  width: 15px;
  display: inline-block;
  margin-right: 12px;
}

.faq-details[open] .faq-question:before {
  content: '–';
  width: 15px;
  display: inline-block;
  margin-right: 12px;
}

.faq-answer {
  color: #fff;
  padding: 6px 32px 32px;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 620px) {
    padding: 0 24px 16px;
  }

  @media (max-width: 290px) {
    padding: 12px 16px;
  }
}
</style>
<script setup lang="ts">
</script>
