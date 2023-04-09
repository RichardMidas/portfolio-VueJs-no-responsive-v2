<script setup lang="ts">
import { ref } from 'vue';
const selected = ref(0)
</script>

<template>
  <div class="projects">
    <div class="projects-bg"></div>
    <div class="projects-main">
      <div class="projects-text">
        <h1 data-aos="fade-down-left" data-aos-duration="1000">Projetos</h1>
        <h3 data-aos="zoom-in" data-aos-duration="1000">Esses são os projetos que desenvolvi com base dos meus
          conhecimentos atuais.</h3>
      </div>
      <div class="projects-content">
        <div data-aos="fade-up-right" data-aos-duration="1000" class="projects-inputs">
          <div class="projects-inputs-1">
            <h3>Sessão 1</h3>
            <input value="0" type="radio" v-model="selected" class="rad">
          </div>
          <div class="projects-inputs-2">
            <h3>Sessão 2</h3>
            <input value="1" type="radio" v-model="selected" class="rad">
          </div>
          <div class="projects-inputs-3">
            <h3>Sessão 3</h3>
            <input value="2" type="radio" v-model="selected" class="rad">
          </div>
        </div>
        <div class="projects-sec">
          <div v-if="selected == 0" style="display: flex;">
            <a href="https://github.com/RichardMidas/Jogo-da-forca" target="_blank">
              <div data-aos="fade-up" class="projects-sec-container">
                <img class="projects-img" src="../img/project1.png" alt="" srcset="">
                <div class="move-bottom">
                  <h2>Jogo da forca RGB</h2>
                </div>
                <div class="move-right">
                  <h3>Um jogo da forca feito em <br> java script com interação <br> de cores definidas.</h3>
                </div>
              </div>
            </a>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
          </div>
          <div v-else-if="selected == 1" style="display: flex;">
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
          </div>
          <div v-else-if="selected == 2" style="display: flex;">
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
            <div data-aos="fade-up" class="projects-sec-container">
              <h2>Em breve</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="projects-footer">
        <span></span>
        <h2>Desenvolvido por <a href="https://github.com/RichardMidas" target="_blank" rel="noopener noreferrer">Midas</a>
        </h2>
        <h3>richardisraelmagalhaes@gmail.com</h3>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.projects-bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(128.54deg, #000000 53.06%, #C501E2 164.11%);
  transform: rotate(-180deg);
  z-index: -1;
}

.projects-main {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .projects-text {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    h3 {
      height: 70px;
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      text-align: center;
    }

    h1 {

      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 3rem;
      color: #FFFFFF;
      background: linear-gradient(90.55deg, rgba(197, 1, 226, 0.6) 4.21%, rgba(102, 100, 255, 0.6) 49.84%, rgba(1, 196, 231, 0.6) 93.51%);
      border: 1px solid #FFFFFF;
      border-radius: 0px;
    }

    h3 {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 700;
      font-size: 1.2rem;
      text-align: center;
      color: #FFFFFF;
    }
  }

  .projects-content {
    width: 100%;
    height: 65%;
    // background-color: blue;

    .projects-inputs {
      display: flex;
      flex-direction: row;
      justify-content: center;

      h3 {
        color: #FFFFFF;
        position: absolute;
        pointer-events: none;
        font-family: 'IBM Plex Sans';
        font-weight: 400;
      }


      .projects-inputs-1,
      .projects-inputs-3 {
        width: 270px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #2B97FA;
        border: 5px solid #FFFFFF;
      }

      .projects-inputs-1 {
        border-radius: 30px 0px 0px 30px;
      }

      .projects-inputs-2 {
        width: 270px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 5px solid #FFFF;
        border-left: 0px;
        border-right: 0px;
      }

      .projects-inputs-3 {
        border-radius: 0px 30px 30px 0px;
      }

      .rad {
        cursor: pointer;
        appearance: none;
        background: #2B97FA;
        width: 100%;
        height: 100%;
        transition: all 0.3s;

        &:hover {
          background-color: #5aafff;
        }

        &:checked {
          background: #C501E2;
        }
      }
    }

    .projects-sec {
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .projects-sec-container {
        width: 350px;
        height: 250px;
        border-radius: 30px;
        background-color: rgb(27, 27, 27);
        margin: 15px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;

        .projects-img {
          width: 450px;
          transition: all 0.4s;
        }

        h2 {
          font-family: 'IBM Plex Mono';
          color: #ffff;
        }

        &:hover>img {
          opacity: 0.1;
          scale: 1.2;
        }

        &:hover {
          scale: 1.1;
        }

        &:hover>.move-bottom {
          top: 40px;
          opacity: 1;
        }

        &:hover>.move-right {
          left: 20px;
          opacity: 1;
        }

        .move-bottom {
          position: absolute;
          top: 20px;
          left: 20px;
          transition: all 0.4s ease-in-out;
          opacity: 0;
          font-family: 'IBM Plex Mono';
          color: #FFFF;

        }

        .move-right {
          position: absolute;
          left: 0px;
          bottom: 30px;
          color: #ffff;
          font-family: 'IBM Plex Mono';
          opacity: 0;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }

  .projects-footer {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    font-size: 0.6rem;

    a {
      text-decoration: none;
      color: #C501E2;
    }
  }
}
</style>