<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.defer = 'defer';
  script.charset = 'UTF-8';
  script.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
  script.setAttribute('data-timepad-customized', '166726');
  script.setAttribute('data-data-timepad-customized', '166726');
  script.setAttribute('data-twf2s-event--id', '3152773');
  script.setAttribute('data-timepad-widget-v2', 'event_register');

  script.innerHTML = `(function() {
      return {
        skipBaseCSS: false,
        disableBootstrap: false,
        loadCSS: [
          '${location.origin}/timepad.css',
        ],
      };
    })();`;

  document.querySelector('#register')!.appendChild(script);
});
</script>

<template>
  <article id="register">
    <h2>Регистрация</h2>
    <div class="main-container">
      <p>Друзья, регистрация завершена, но мы всё равно ждём вас в гости!
Просто приезжайте и сообщите, что у вас нет билета, мы выдадим вам бейдж.</p>
    </div>
  </article>
</template>

<style scoped>
.register-link {
  color: #fff;
}
</style>
