<script setup lang="ts">
import { filename } from 'pathe/utils'

const isPartiallyVisible = ref(true);

const glob = import.meta.glob('~/assets/logo/*', { eager: true })
const images = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), (value as any).default]));

const members = [
  { name: 'Lavritech', logo: images.lavritech, url: 'https://lavritech.com/', description: 'Разработка и производство оборудования для создания систем автоматизации и Интернета вещей (IoT)' },
  { name: 'Module', logo: images.module, url: 'https://module-electronic.ru/', description: 'Разработка и производство приборов промышленной и домашней автоматизации' },
  { name: 'DemidNet', logo: images.demidnet, url: 'https://demid.net/', description: 'Производство контроллеров автоматизации освещения' },
  { name: 'Цинтрон', logo: images.cyntron, url: 'https://cyntron.ru/', description: 'Производитель и разработчик инженерного оборудования и систем управления' },
  { name: 'ТехРу', logo: images.techru, url: 'https://sinum-tech.ru/', description: 'Продажа приборов для автоматизации, полный спектр услуг по тех. поддержке и консультациям по подбору оборудования' },
  { name: 'Nevoton', logo: images.nevoton, url: 'https://nevoton.ru/', description: 'Разработка и производство полного цикла контроллеров управления котельным оборудованием и медицинской техники' },
  { name: 'Z-Wave>Me', logo: images['z-wave-me'], url: 'https://rus.z-wave.me/', description: 'Первый и крупнейший импортёр оборудования для умного дома Z-Wave в России' },
  { name: 'Blaxe', logo: images.blaxe, url: 'https://blaxe.ru/', description: 'Интегратор и разработчик системы автоматизации для домов, квартир и гостиниц на базе собственных контроллеров BLX' },
  { name: 'Bary', logo: images.bary, url: 'https://bary.io/', description: 'Разработка универсальной IoT-платформы и внедрение умных систем на объектах' },
  { name: 'Etherize', logo: images.etherize, url: 'https://etherize.ru/', description: 'Дистрибьютер и интегратор систем Умного дома под ключ, собственное производство щитов автоматики, датчиков, LED светильников и систем солцезащиты' },
  { name: 'JetHome', logo: images.jethome, url: 'https://jethome.ru', description: 'Производитель оборудования для домашней автоматизации с открытым ПО на базе Linux' },
  { name: 'VIKarniz', logo: images.vikarniz, url: 'https://vikarniz.ru/', description: 'Производитель качественных электрокарнизов с интеграцией в любую систему умного дома' },
  { name: 'ПрофКарниз', logo: images.prof_karniz, url: 'https://profkarniz.ru/', description: 'Производство электрокарнизов для штор, продажа комплектующих' },
  { name: 'WiseCity', logo: images.wisecity, url: 'https://wisecity.ru/', description: 'IT-компания полного цикла, разработчик WISE CITY PLATFORM. Проектирование, внедрение и обслуживание решений для умных зданий и квартир' },
  { name: 'Unimon', logo: images.unimon, url: 'http://unimon.ru/', description: 'Разработка решения для мониторинга температуры, влажности, СО2 и других технологических показателей (контроллеры, беспроводные LoRaWAN-датчики, облачное ПО)' },
  { name: 'iKarniz', logo: images.ikarniz, url: 'https://ikarniz.ru/', description: 'Производство электрокарнизов для штор, продажа комплектующих' },
  { name: 'Drivent', logo: images.drivent, url: 'https://drivent.ru/', description: 'Производство автоматических оконных приводов упрощающих процесс проветривания и наблюдения за качеством воздуха' },
  { name: 'Rapid SCADA', logo: images.rapidscada, url: 'https://rapidscada.ru/', description: 'Разработчик open source платформы для промышленной автоматизации. В крупных внедрениях Rapid SCADA выступает основой для разработки индивидуального SCADA и MES решения для Заказчика' },
  { name: 'Tesliot', logo: images.tesliot, url: 'https://tesla-smart.ru/ ', description: 'Производство BLE-датчиков для авторефижераторов, дальнобойных BLR-датчиков для контроля климата на складах с температурно/влажностным режимом, INDOOR-навигации на IoT' },
  { name: '3R', logo: images['3r'], url: 'https://3r.ru/', description: 'Производитель инновационных устройств, специализирующийся на приборах для умного дома, ориентированных на «Зелёные технологии»' },
  { name: 'SprutHub', logo: images.spruthub, url: 'https://spruthub.ru/', description: 'Разработка универсального хаба, для умного дома. Команда, базирующаяся на опыте сообщества Sprut.ai' },
  { name: 'Мастерская современных интернет коммуникаций', logo: images.masicteam, url: 'https://www.masicteam.ru/', description: 'Интеграция технологий с искусственным интеллектом, разработка программ и сервисов' },
  { name: 'Intelvision', logo: images.intelvision, url: 'http://intelvision.ru/', description: 'Системный интегратор и ИТ компания, предлагает комплексный подход: от проектирования до монтажа, разработки ПО и автоматизации систем' },
  { name: 'ЦОДУМ', logo: images.codym, url: 'https://smartdcim.ru/', description: 'Производство платформы мониторинга ЦОД Smart DCIM, разработка и внедрение комплексного мониторинга ЦОД через набор программно-аппаратных и чисто программных решений Comfort-Life' },
  { name: 'Xiot', logo: images.xiot, url: 'https://xiot.ru/', description: 'Разработчик платформы для автоматизации и визуализации. Состав платформы XIOT: редактор пользовательских интерфейсов и логики, мобильное приложение IOS и Android, ПО для установки на контроллер WirenBoard' },
  { name: 'CTI', logo: images.cti, url: 'https://www.cti.ru/', description: 'Системный интегратор с отраслевой и бизнес-экспертизой, поставщик ИT-решений и услуг' },
  { name: 'SimpLight', logo: images.simpllight, url: 'https://simplight.ru/', description: 'Разработка ПО для автоматизации производства - Scada Simp Light, построения систем управления и диспетчеризации различных объектов' },
  { name: 'ComfLife', logo: images.comfort_life, url: 'https://comf.life/', description: 'Интеграция автоматизации домов и квартир. Специализация на проектах с голосовым управлением через Алису, Сири и др.' },
  { name: 'Onokom', logo: images.onokom, url: 'https://onokom.ru/', description: 'Разработчик программной, аппаратной части и производитель шлюзов для кондиционеров, устройств для умного дома' },
  { name: 'Recota', logo: images.recota, url: 'https://recota.ru/', description: 'Интегратор систем автоматизации, умный дом, автоматизации отелей. Работы под ключ: разработка документации, сборка оборудования, монтаж, программирование, пуско-наладка, сопровождение при эксплуатации' },
  { name: 'ЛИИС', logo: images.liis, url: 'https://simplehome.liis.su/', description: 'Системный интегратор и технологически ориентированный генеральный подрядчик. Реализация проектов в формате fit-out, сопровождение проектов на всех этапах' },
  { name: 'Humidex', logo: images.humidex, url: 'https://humidex.ru/', description: 'Производитель форсуночной системы увлажнения воздуха на базе Wiren Board' },
  { name: 'Ensystec', logo: images.ensystec, url: 'https://ensystec.ru/', description: 'Производитель оборудования для управления водоснабжением и систем защиты от протечек с поддержкой Modbus, Zigbee' },
];
</script>

<template>
  <article id="members">
    <h2>Участники</h2>

    <div class="members">
      <figure class="members-item" v-for="(member, i) in members" v-show="!isPartiallyVisible || i < 8">
        <a :href="member.url" target="_blank" rel="nofollow">
          <img class="members-logo" :src="member.logo" :alt="member.name" :key="member.name" />
        </a>

        <figcaption class="members-itemDescription">{{member.description}}</figcaption>
      </figure>
    </div>

    <div class="members-toggleSeparator">
      <div
        class="members-toggle"
        @click="isPartiallyVisible = !isPartiallyVisible">
        {{ isPartiallyVisible ? 'Развернуть' : 'Свернуть' }}
        <img src="/assets/img/chevron.png" :class="{ 'members-toggleIconRotated': !isPartiallyVisible }" />
      </div>
    </div>

    <div class="members-contact">Хотите участвовать со стендом или выступить на конференции? <a href="https://wirenboard.com/ru/pages/contacts/" target="_blank">Напишите нам</a></div>

    <h2>Отраслевой партнер</h2>
    <div class="members members-one">
      <a href="https://hitechbuilding.ru/" target="_blank">
        <img class="members-logo" src="/assets/logo/htb.svg" alt="HI-TECH Building">
        <div class="members-oneDescription">
          <a href="https://hitechbuilding.ru/" class="members-oneTitle" target="_blank">HI-TECH BUILDING</a>
          <div>Выставка-форум HI-TECH BUILDING проводится с 2001 года и является единственной в России профессиональной площадкой рынка автоматизации, на которой ежегодно встречаются компании производители, интеграторы, дистрибьюторы и заказчики для обмена опытом и приобретения полезных знаний</div>
        </div>
      </a>
    </div>
  </article>
  <div class="spotlight" />
</template>

<style scoped>
.members {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 30px 80px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}

.members-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;
  margin: 0;
  color: #fff;

  @media (max-width: 880px) {
    grid-template-columns: 250px 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 140px 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    margin-bottom: 24px;
    gap: 0;
  }
}

.members-itemDescription {
  text-align: left;
  font-size: 16px;
}

.members-logo {
  width: 100%;
  max-width: 250px;

  @media (max-width: 600px) {
    max-width: 140px;
  }

  @media (max-width: 460px) {
    margin-bottom: 12px;
  }
}

.members-contact {
  color: #fff;
  background: #424642;
  padding: 56px 12px;
  border-radius: 8px;
  margin-top: 72px;
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 84px;

  @media (max-width: 460px) {
    padding: 24px;
    font-size: 18px;
  }
}

.members-one {
  grid-template-columns: 250px 1fr;
  justify-content: center;

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    font-size: 18px;
  }
}

.members-oneDescription {
  text-align: left;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
}

.members-oneTitle {
  color: #6AC40B;
  display: block;
  margin-bottom: 12px;
  font-size: 26px;
}

.members-toggleSeparator {
  border-top: 3px solid #6AC40B;
  max-width: 80%;
  margin: 96px auto 24px;
  font-size: 24px;

  @media (max-width: 460px) {
    margin-top: 24px;
  }
}

.members-toggle {
  color: #6AC40B;
  font-size: 36px;
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.members-toggleIconRotated {
  transform: rotate(180deg);
}
</style>
