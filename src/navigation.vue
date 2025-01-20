<script setup lang="ts">
const isMenuOpened = ref(false);
const toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value;
}
</script>

<template>
  <nav class="navigation">
    <ul :class="{ isMenuOpened }">
      <li class="navigation-item"><a @click="scrollToElementById('about')">Что будет</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('themes')">Темы</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('history')">История</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('howitwas')">Как это было</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('members')">Участники</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('register')">Регистрация</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('faq')">Вопросы</a></li>
      <li class="navigation-item"><a @click="scrollToElementById('place')">Место</a></li>
    </ul>
    <button class="navigation-menu" @click="toggleMenu">
      <img src="/assets/img/close.svg" alt="Меню" v-if="isMenuOpened">
      <img src="/assets/img/menu.svg" alt="Меню" v-else>
    </button>
    <div class="navigation-background"></div>
  </nav>
</template>

<style scoped>
.navigation {
  color: #fff;
  text-align: center;
  margin-bottom: 68px;
  margin-top: 24px;
  overflow: hidden;
  z-index: 1000;
  border-radius: 20px;
  border: var(--border);
  position: relative;

  @media (max-width: 1024px) {
    padding: 12px;
    margin-bottom: 24px;
  }
}

.navigation-background {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  background: var(--bg);
  background-image: linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%);
  width: 100%;
  height: 100%;
  z-index: -10;
}

.navigation ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin: 0;
  padding: 23px 60px;
  list-style: none;
  font-size: 18px;

  @media (max-width: 1250px) {
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    padding: 12px;
    gap: 12px;
  }

  @media (max-width: 930px) {
    font-size: 16px;
  }

  @media (max-width: 830px) {
    align-items: start;
    flex-direction: column;
  }
}

.navigation-item {
  display: flex;
  align-items: center;
}

@media (max-width: 830px) {
  .navigation-item {
    margin-bottom: 12px;
  }

  .navigation-item:before {
    background: #B9F28B;
    width: 3px;
    height: 18px;
    content: '';
    display: block;
    margin-right: 12px;
  }
}

.navigation-item {
  display: flex;
  align-items: center;
}

.isMenuOpened {
  padding-top: 48px !important;
}

.navigation ul:not(.isMenuOpened) .navigation-item {
  @media (max-width: 830px) {
    display: none;
  }
}

.navigation-menu {
  display: none;

  @media (max-width: 830px) {
    padding: 0;
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    background: transparent;
    top: 10px;
  }
}

.navigation-menu img {
  width: 100%;
}

.navigation-item:hover {
  text-decoration: underline;
  cursor: pointer;
}

.navigation-item:not(:last-child)::after {
  @media (min-width: 830px) {
    content: "";
    width: 1px;
    height: 18px;
    display: inline-block;
    background: #b9f28b;
    margin-left: 28px;
  }

  @media (max-width: 1300px) {
    margin-left: 16px;
  }

  @media (max-width: 1024px) {
    margin-left: 12px;
  }
}

.navigation a {
  text-decoration: none;
  color: #fff;
}

.navigation a:hover {
  text-decoration: underline;
}
</style>
