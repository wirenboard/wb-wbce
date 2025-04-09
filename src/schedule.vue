<script setup lang="ts">
const isPartiallyVisible = ref(true);
const choosenDate = ref('2025-04-17');

const schedule = [
  { date: '2025-04-17', time: '10:20', company: 'Мастерская современных интернет коммуникаций', theme: 'Как сделать «умный» дом по-настоящему умным с помощью искусственного интеллекта' },
  { date: '2025-04-17', time: '10:40', company: 'Vikarniz / Etherize', theme: 'Новые подходы в производстве электрокарнизов\nEtherize предлагает свои услуги и ищет партнёров' },
  { date: '2025-04-17', time: '11:00', company: 'Мильчаков Сергей', theme: 'Принципы проектирования доступных интерфейсов оборудования для людей с ограниченными возможностями здоровья' },
  { date: '2025-04-17', time: '11:20', company: 'Module Electronic', theme: 'Интеграция Modbus/KNX – универсальное и надежное решение' },
  { date: '2025-04-17', time: '11:40', company: 'ЛИИС', theme: 'Тренды офисной автоматизации' },
  { date: '2025-04-17', time: '12:00', company: 'Sprut.Hub', theme: 'Про новый spruthub и не только' },
  { date: '2025-04-17', time: '12:20', company: 'Перерыв', highlighted: true },
  { date: '2025-04-17', time: '12:40', company: 'Рекота & Технологии комфорта', theme: 'Успешная реализация проектов и обучение интеграторов' },
  { date: '2025-04-17', time: '13:00', company: 'Intelvision', theme: 'Цифровая экосистема зданий будущего: интеграция сервисов и инженерных систем, вызовы стандартизации и прогнозы для SCADA/BMS-рынка' },
  { date: '2025-04-17', time: '13:20', company: 'Humidex', theme: 'HUMYsystems-центральная система увлажнения многоквартирных домов' },
  { date: '2025-04-17', time: '13:40', company: 'Z-Wave.Me', theme: 'Построение гибридных систем умного дома.  Опыт внедрения проектов на технологиях Wiren Board и Z-Wave' },
  { date: '2025-04-17', time: '14:00', company: 'LavriTech', theme: 'Беспроводные решения на базе контроллеров Lavritech с Lora Wan' },
  { date: '2025-04-17', time: '14:20', company: 'ЦОДУМ', theme: 'Семейство решений ЦОДУМ. Новые подходы к мониторингу' },
  { date: '2025-04-17', time: '14:40', company: 'Перерыв', highlighted: true },
  { date: '2025-04-17', time: '15:00', company: '3R', theme: 'Уникальный российский KNX производитель' },
  { date: '2025-04-17', time: '15:20', company: 'XIOT', theme: 'Интуитивно понятный пользовательский интерфейс' },
  { date: '2025-04-17', time: '15:40', company: 'ЦИНТРОН', theme: 'Устройства автоматизации инженерных систем «ЦИНТРОН»' },
  { date: '2025-04-17', time: '16:00', company: 'Wiren Board', theme: 'Секретный доклад №1' },
  { date: '2025-04-17', time: '16:20', company: 'Симп Лайт', theme: 'СКАДА Симп Лайт 5. Новое поколение - новые возможности' },
  { date: '2025-04-17', time: '16:40', company: 'Сообщество "Вокруг да около Zigbee"', theme: 'Вокруг да около Zigbee2MQTT' },
  { date: '2025-04-17', time: '17:00', company: 'Розыгрыш призов', highlighted: true },
  { date: '2025-04-18', time: '10:20', company: 'demid.net', theme: 'Контроллер подсветки лестницы DemidNet v11 и его интеграция в умный дом' },
  { date: '2025-04-18', time: '10:40', company: 'Ikarniz', theme: 'Электрокарнизы в контексте продаж Wiren Board: как выбрать, внедрить и заработать на этом' },
  { date: '2025-04-18', time: '11:00', company: 'Невотон', theme: 'Новые контроллеры НЕВОТОН и новая плата для WirenBoard' },
  { date: '2025-04-18', time: '11:20', company: 'Философт', theme: 'Проводная автоматизация умной квартиры' },
  { date: '2025-04-18', time: '11:40', company: 'ONOKOM', theme: 'Что нужно знать про управление кондиционерами' },
  { date: '2025-04-18', time: '12:00', company: 'Comfort-Life', theme: 'Как мы работали с беспроводным умным домом' },
  { date: '2025-04-18', time: '12:20', company: 'Перерыв', highlighted: true },
  { date: '2025-04-18', time: '12:40', company: 'Intelligent House', theme: 'Как сделать умный дом, чтобы все прошло как по маслу' },
  { date: '2025-04-18', time: '13:00', company: 'WISE CITY SYSTEMS', theme: 'WISE PLATFORM: построение эффективного цифрового диалога между жильём и его обитателями' },
  { date: '2025-04-18', time: '13:20', company: 'ТеплоМОНИТОР', theme: 'SmartWeb - управляй отоплением правильно' },
  { date: '2025-04-18', time: '13:40', company: 'SberDevices', theme: 'Гибридная автоматизация' },
  { date: '2025-04-18', time: '14:00', company: 'Luxnet', theme: 'Беспроводное управление последней милей на производстве' },
  { date: '2025-04-18', time: '14:20', company: 'CTI', theme: 'Как наш программный продукт превращает WirenBoard в центр управления видеоконференциями и умной переговорной' },
  { date: '2025-04-18', time: '14:40', company: 'Перерыв', highlighted: true },
  { date: '2025-04-18', time: '15:00', company: 'BLAXE', theme: 'Объединение проводных и беспроводных технологий при построении систем автоматизации' },
  { date: '2025-04-18', time: '15:20', company: 'Агран Вент', theme: 'Система вентиляции в Умном доме' },
  { date: '2025-04-18', time: '15:40', company: 'Третий пин', theme: 'Вам (не)надо разрабатывать электронику' },
  { date: '2025-04-18', time: '16:00', company: 'Wiren Board', theme: 'Секретный доклад №2' },
  { date: '2025-04-18', time: '16:20', company: 'Rapid SCADA', theme: 'Разработка заказного программного обеспечения для систем диспетчеризации на базе Rapid SCADA' },
  { date: '2025-04-18', time: '16:40', company: 'TESLA SMART', theme: 'TESLiOT LR Edition (TLRE) - комплексная беспроводная система для контроля микроклимата в ритейле (склады, супермаркеты), пищевых производствах, ресторанах, центрах обработки данных (ЦОД), в цехах и на складах промышленных предприятий' },
  { date: '2025-04-18', time: '17:00', company: 'Розыгрыш призов', highlighted: true },
];
</script>

<template>
  <article id="schedule">
    <h2>Программа выступлений</h2>

    <div class="schedule-dateToggler">
      <button class="schedule-dateTogglerButton" :class="{ 'schedule-dateTogglerButtonActive': choosenDate === '2025-04-17' }" @click="choosenDate = '2025-04-17'">17 апреля</button>
      <button class="schedule-dateTogglerButton" :class="{ 'schedule-dateTogglerButtonActive': choosenDate === '2025-04-18' }"  @click="choosenDate = '2025-04-18'">18 апреля</button>
    </div>

    <ul class="schedule">
      <li class="schedule-item" :class="{'schedule-itemHighlighted': talk.highlighted }" v-for="(talk, i) in schedule.filter(item => item.date === choosenDate)" v-show="!isPartiallyVisible || i < 3" :key="i">
        <time class="schedule-itemTime" :datetime="`${talk.date}Z${talk.time}`">{{ talk.time }}</time>
        <div class="schedule-itemContent">
          <div class="schedule-itemCompany">{{ talk.company }}</div>
          <div v-if="talk.theme" class="schedule-itemTheme">{{ talk.theme }}</div>
        </div>
      </li>
    </ul>

    <div class="schedule-toggleSeparator" :class="{ 'schedule-toggleSeparatorToggled': !isPartiallyVisible }">
      <div
        class="schedule-toggle"
        @click="isPartiallyVisible = !isPartiallyVisible">
        {{ isPartiallyVisible ? 'Развернуть' : 'Свернуть' }}
        <img src="/assets/img/chevron.png" :class="{ 'schedule-toggleIconRotated': !isPartiallyVisible }" />
      </div>
    </div>

    <div class="schedule-dateToggler" v-if="!isPartiallyVisible">
      <button class="schedule-dateTogglerButton" :class="{ 'schedule-dateTogglerButtonActive': choosenDate === '2025-04-17' }" @click="() => {
        if (choosenDate === '2025-04-18') {
          scrollToElementById('schedule');
        }
        choosenDate = '2025-04-17';
      }">17 апреля</button>
      <button class="schedule-dateTogglerButton" :class="{ 'schedule-dateTogglerButtonActive': choosenDate === '2025-04-18' }" @click="() => {
        if (choosenDate === '2025-04-17') {
          scrollToElementById('schedule');
        }
        choosenDate = '2025-04-18';
      }">18 апреля</button>
    </div>
  </article>
  <div class="spotlight" />
</template>

<style scoped>
.schedule {
  margin: 0;
  padding: 0;
}

.schedule-dateToggler {
  border: 2px solid #4d9f0c;
  display: flex;
  width: fit-content;
  gap: 12px;
  border-radius: 35px;
  overflow: hidden;
  margin-bottom: 64px;
}

.schedule-dateTogglerButton {
  border-radius: 35px;
  padding: 12px 64px;
  border: 0;
  font-size: 30px;
  font-weight: bold;
  outline: none;
  background: none;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 42px;
  }

  @media (max-width: 548px) {
    font-size: 16px;
    padding: 6px 32px;
  }
}

.schedule-dateTogglerButtonActive {
  background: #4d9f0c;
}

.schedule-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 100px;
  color: #fff;
  text-align: left;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 120px 1fr;
    gap: 24px;
  }

  @media (max-width: 548px) {
    grid-template-columns: 80px 1fr;
    gap: 8px;
  }
}

.schedule-itemHighlighted {
  border-top: 3px solid #6ac40b;
  border-bottom: 3px solid #6ac40b;
  padding: 58px 0;

  @media (max-width: 768px) {
    padding: 22px 0;
  }
}

.schedule-itemTime {
  font-size: 40px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 548px) {
    font-size: 20px;
  }
}

.schedule-itemContent {
  display: flex;
  flex-direction: column;
  gap: 24px;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    gap: 18px;
  }
}

.schedule-itemCompany {
  font-size: 38px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 548px) {
    font-size: 20px;
  }
}

.schedule-itemTheme {
  font-size: 26px;
  line-height: 1.4em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.schedule-toggleSeparator {
  border-top: 3px solid #6ac40b;
  max-width: 80%;
  margin: 96px auto 24px;
  font-size: 24px;

  @media (max-width: 460px) {
    margin-top: 24px;
  }
}

.schedule-toggleSeparatorToggled {
  border: 0;
}

.schedule-toggle {
  color: #6ac40b;
  font-size: 36px;
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.schedule-toggleIconRotated {
  transform: rotate(180deg);
}
</style>
