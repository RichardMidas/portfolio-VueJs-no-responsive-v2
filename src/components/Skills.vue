<script setup lang="ts">
import { ref } from 'vue';
const swiper = ref<HTMLDivElement>();
const selectedCar = ref(0);

</script>

<template>
  <div class="skills">
    <div class="skills-background"></div>
    <div class="skills-main">
      <div class="skills-container">
        <div class="skills-text">
          <h2 data-aos="fade-down" data-aos-duration="1500" class="title">Habilidades</h2>
          <h3 data-aos="fade-up" data-aos-duration="1000">Esses são meus conhecimentos em tecnologia web.</h3>
        </div>
        <div id="skills-tech">
          <div data-aos="zoom-out" class="skills-swiper" ref="swiper">
            <Transition name="slide">
              <div v-if="selectedCar == 0" class="skills-container-img">
                <div class="skills-img">
                  <h2 class="text">HTML</h2>
                  <img src="../img/01.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">CSS</h2>
                  <img src="../img/02.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">Java Script</h2>
                  <img src="../img/03.png" alt="">
                </div>
              </div>
              <div v-else-if="selectedCar == 1" class="skills-container-img">
                <div class="skills-img">
                  <h2 class="text">Sass</h2>
                  <img src="../img/04.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">Vue</h2>
                  <img src="../img/05.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">React</h2>
                  <img src="../img/06.png" alt="">
                </div>
              </div>
              <div v-else-if="selectedCar == 2" class="skills-container-img">
                <div class="skills-img">
                  <h2 class="text">MySql</h2>
                  <img src="../img/07.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">Git</h2>
                  <img src="../img/08.png" alt="">
                </div>
                <div class="skills-img">
                  <h2 class="text">PHP</h2>
                  <img src="../img/09.png" alt="">
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000" class="skills-buttons">
          <input class="radio" type="radio" value="0" v-model="selectedCar">
          <input class="radio" type="radio" value="1" v-model="selectedCar">
          <input class="radio" type="radio" value="2" v-model="selectedCar">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.skills-background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(128.54deg, #000000 53.06%, #C501E2 164.11%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  position: absolute;
  z-index: -1;
}

.skills-main {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .skills-container {
    width: 1300px;
    height: 700px;
    border: 1px solid #fdfdfd23;
    display: flex;
    align-items: center;
    flex-direction: column;

    background: radial-gradient(122.61% 391.26% at -5.59% -4.36%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(10px);
    border-radius: 100px;


    .skills-buttons {
      width: 100px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .radio {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #ffffff38;
        cursor: pointer;
        transition: all 0.3s;

        &:checked {
          background-color: #ffffff;
        }
      }
    }

    .skills-text {
      width: 100%;
      height: 230px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;


      .title {

        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 5px;
        color: #FFFFFF;
      }

      h3 {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 300;
        font-size: 1rem;
        color: #FFFFFF;
      }
    }

    #skills-tech {
      width: 800px;
      height: 350px;
      display: flex;
      align-items: center;
      flex-direction: row;
      overflow: hidden;

      .skills-swiper {
        height: 100%;
        width: 100%;
        display: flex;
        transition: ease-in-out 1s;

        .skills-container-img {
          width: 100%;
          height: 100%;
          display: flex;


          .skills-img {
            height: 100%;
            width: 266px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            flex-direction: column;
            position: relative;
            opacity: 0.5;

            &:hover {
              opacity: 1;
            }


            .text {
              font-family: 'IBM Plex Mono';
              color: #ffffff;
              position: absolute;
              top: 30px;
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              opacity: 0;
              transition: all 0.3s ease;

              &:hover {
                opacity: 1;
              }
            }


            &:hover {
              scale: 1.2;
            }
          }
        }
      }

      .transition0 {
        transform: translateX(0px);
      }

      .transition800 {
        transform: translateX(-800px);
      }

      .transition1600 {
        transform: translateX(-1600px);
      }

      img {
        margin: 0 20px;
        width: 150px;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}

.slide-enter-from {
  transform: translateX(800px);
  z-index: 20;
}

.slide-leave-to {
  position: absolute;
  transform: translateX(-800px);
  z-index: -20;
}

.slide-enter-to {
  transform: translateX(0px);
}
</style>
