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
  </article>
  <div class="register-link">Если возникли проблемы с регистрацией, попробуйте <a href="https://wirenboard.timepad.ru/event/3152773/" target="_blank">зарегистрироваться на сайте TimePad</a></div>
  <div class="spotlight spotlight-right" />
</template>

<style scoped>
.register-link {
  color: #fff;
}
</style>
