<template>
  <article id="members">
    <h2>Участники</h2>

    <div class="members">
      <img class="members-logo" src="/assets/logo/blaxe.svg" alt="Blaxe">
      <img class="members-logo" src="/assets/logo/ensystec.svg" alt="Ensystec">
      <img class="members-logo" src="/assets/logo/xiot.svg" alt="Xiot">
      <img class="members-logo" src="/assets/logo/intelvision.svg" alt="Intelvision">
      <img class="members-logo" src="/assets/logo/recota.svg" alt="Recota">
      <img class="members-logo" src="/assets/logo/aquaforce.svg" alt="AquaForce">
      <img class="members-logo" src="/assets/logo/karniz_opt.png" alt="Karniz opt.svg">
      <img class="members-logo" src="/assets/logo/unaru.png" alt="Unaru">
      <img class="members-logo" src="/assets/logo/comfort_life.svg" alt="Comfort life">
      <img class="members-logo" src="/assets/logo/onokom.svg" alt="Onokom">
    </div>
    <h2>Отраслевой партнер</h2>
    <div class="members members-one">
      <a href="https://hitechbuilding.ru/" target="_blank">
        <img class="members-logo" src="/assets/logo/htb.svg" alt="HI-TECH Building">
      </a>
    </div>
  </article>
  <div class="spotlight" />
</template>

<style scoped>
.members {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  width: 100%;
  grid-gap: 60px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 300px);
    justify-content: space-around;
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 150px);
    grid-gap: 40px 20px;
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

.members-one {
  grid-template-columns: 250px;
  justify-content: center;
}

.members-logo {
  width: 100%;

  @media (max-width: 470px) {
    max-width: 250px;
  }

  @media (max-width: 290px) {
    max-width: 160px;
  }
}
</style>
