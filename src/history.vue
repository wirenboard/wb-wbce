<template>
  <article id="history">
    <h2>История WBCE</h2>

    <div class="history-content">
      <img src="/assets/img/history.jpg" class="history-image" alt="Фото с конференции" />
      <div>
        <p>В 2022 году компания Wiren Board провела камерное мероприятие для своих под названием WBCE, чтобы пообщаться с&nbsp;партнерами и клиентами вживую.</p>
        <p>В итоге было больше 400 человек: приехали производители оборудования, разработчики ПО, интеграторы и энтузиасты умных домов из Екатеринбурга, Иркутска, Минска и даже Владивостока и Астаны.</p>
        <p>Тогда было решено масштабировать мероприятие, и за два года выставка превратилась в одну из крупнейших в России.</p>
        <p class="history-link">
          <img src="/assets/img/tg.svg" alt="">
          <a href="https://t.me/wbce2025" target="_blank">Подписывайтесь на Telegram-канал WBCE</a>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.history-image {
  width: 500px;
  height: 468px;
  border-radius: 20px;
  object-fit: cover;
  object-position: left center;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    float: right;
    margin-left: 12px;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 24px;
  }
}

.history-content {
  display: flex;
  color: #fff;
  gap: 36px;
  text-align: left;
  font-size: 24px;
  line-height: 38px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    display: block;
  }
}

.history-content p {
  margin-top: 0;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 24px;
  }
}

.history-link {
  display: flex;
  gap: 12px;
  margin-top: 12px !important;
}
</style>
<script setup lang="ts">
</script>
