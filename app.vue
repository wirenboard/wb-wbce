<script setup lang="ts">
import Navigation from '~/src/navigation.vue';
import Main from '~/src/main.vue';
import About from '~/src/about.vue';
import Themes from '~/src/themes.vue';
import History from '~/src/history.vue';
import Howitwas from '~/src/howitwas.vue';
import Members from '~/src/members.vue';
import Timepad from '~/src/register.vue';
import Faq from '~/src/faq.vue';
import Place from '~/src/place.vue';
</script>

<template>
  <Head>
    <Title>WBCE 2025</Title>
  </Head>
  <main>
    <Navigation />
    <Main />
    <ClientOnly>
      <About />
    </ClientOnly>
    <Themes />
    <History />
    <Howitwas />
    <Members />
    <Timepad />
    <Faq />
    <Place />
  </main>
</template>
