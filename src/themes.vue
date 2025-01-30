<template>
  <article id="themes" class="themes-container">
    <h2>Тематика выступлений</h2>

    <ul class="themes-content">
      <li class="themes-item">
        <img src="/assets/img/automation.png" alt="Промышленная автоматизация">
        Промышленная<br />автоматизация
      </li>
      <li class="themes-item">
        <img src="/assets/img/scada.png" alt="SCADA-системы" />
        SCADA-системы
      </li>
      <li class="themes-item">
        <img src="/assets/img/dispatch.png" alt="Диспетчеризация инженерных систем" />
        Диспетчеризация<br />инженерных систем
      </li>
      <li class="themes-item">
        <img src="/assets/img/monitoring.png" alt="Мониторинг серверного оборудования и базовых станций" />
        Мониторинг серверного<br />оборудования и базовых станций</li>
      <li class="themes-item">
        <img src="/assets/img/home_automation.png" alt="Домашняя автоматизация" />
        Домашняя<br />автоматизация
      </li>
      <li class="themes-item">
        <img src="/assets/img/monitoring_automation.png" alt="Мониторинг и автоматизация коммерческой недвижимости" />
        Мониторинг и автоматизация<br />коммерческой недвижимости</li>
      <li class="themes-item">
        <img src="/assets/img/mkhome_automation.png" alt="Автоматизация многоквартирных домов" />
        Автоматизация<br />многоквартирных домов
      </li>
    </ul>
    <div class="spotlight themes-spotlight" />
  </article>
</template>

<style scoped>
.themes-container {
  position: relative;
}

.themes-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #fff;
  gap: 36px;
  text-align: left;
  font-size: 24px;
  line-height: 32px;
  list-style: none;
  padding-left: 0;

  @media (max-width: 1000px) {
    gap: 24px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.themes-item {
  display: flex;
  gap: 24px;
  align-items: center;
}

.themes-spotlight {
  bottom: -400px;
  left: -150px
}
</style>
