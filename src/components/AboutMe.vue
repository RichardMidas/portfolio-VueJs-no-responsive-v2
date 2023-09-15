<script setup lang="ts">
import AOS from 'aos'
AOS.init();
</script>

<template>
  <div class="about-me-main">
    <div class="about-me-left">
      <div class="about-container" data-aos="fade-right" data-aos-duration="1500">
        <div class="welcome">
          <p>Bem-vindo(a) ao meu Portfólio</p>
        </div>
        <div class="about-h1">
          <h1>Oi! Eu sou Richard <span>“Midas”</span></h1>
        </div>
        <div class="about-h2">
          <h1 style="display:flex;">Desenvolvedor <div class="input-wrapper"><span class="placeholder"></span></div>
          </h1>
        </div>
        <h3>Sou desenvolvedor web, atualmente focado em Front-end. <br>
          Tenho experiência com Freelancer e projetos pessoais. <br>
          Estudo um pouco de Back-end com a finalidade de um dia <br>
          me tornar Programador FullStack.</h3>
      </div>
    </div>
    <div class="about-me-right">
      <div class="circle" data-aos="fade-left" data-aos-duration="1000">
        <img src="../img/img-home.png" alt="" data-aos="fade-left" data-aos-duration="1500">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  margin-left: 30px;
  display: inline-block;
  font-family: monospace;
  font-size: 125%;
  width: 50%;

  >input,
  >.placeholder {
    display: block;
    appearance: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }

  >.placeholder {
    pointer-events: none;
    @include typed("Web",
      "Front-end",
      .8,
      (caret-width: 2px,
        caret-space: 2px));
  }

  >input {

    &:focus,
    &:active {
      +.placeholder {
        display: none;
      }
    }
  }
}

.about-me-main {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(133.33deg, #000000 33.82%, #00488A 128.77%);
  display: flex;
  flex-direction: row;

  .about-me-left {
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    z-index: 10;

    .about-container {
      width: 900px;
      height: 400px;
      margin-left: 50px;

      .welcome {
        height: 50px;
        width: 500px;
        background: linear-gradient(90.55deg, rgba(197, 1, 226, 0.6) 4.21%, rgba(102, 100, 255, 0.6) 49.84%, rgba(1, 196, 231, 0.6) 93.51%);
        border: 1px solid #FFFFFF;
        border-radius: 0px;

        p {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 1.7rem;
          line-height: 39px;
          text-align: center;
          color: #FFFFFF;
        }
      }

      .about-h1 {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 78px;
        color: #FFFFFF;

        span {
          background: linear-gradient(180deg, #F2C6F9 0%, #C501E2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }

      .about-h2 {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 78px;
        color: #FFFFFF;

        span {
          color: #01C4E7
        }
      }

      h3 {
        padding-top: 20px;
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 31px;
        color: #FFFFFF;
      }
    }
  }

  .about-me-right {
    height: 100%;
    width: 40%;
    position: relative;

    .circle {
      position: absolute;
      height: 1000px;
      width: 1000px;
      top: -20%;
      right: -40%;
      border-radius: 50%;
      background: linear-gradient(219.41deg, rgba(154, 39, 247, 0.5625) 31.03%, rgba(43, 151, 250, 0.5625) 61.18%, rgba(1, 196, 231, 0.5625) 90.79%);

      img {
        scale: 1.2;
        position: absolute;
        top: 350px;
        right: 480px;
        animation: moveLogo 3s ease-in-out infinite;
      }
    }
  }
}

//Animações

@keyframes moveLogo {
  0% {
    top: 350px;
  }

  50% {
    top: 360px;
  }

  100% {
    top: 350px;
  }
}

@media screen and (max-width: 1650px) {

  .about-me-main {
    .about-me-right{
    .circle {
      height: 900px;
      width: 900px;

      img {
        top: 280px;
        right: 420px;
      }
    }
  }
  }
}

</style>
