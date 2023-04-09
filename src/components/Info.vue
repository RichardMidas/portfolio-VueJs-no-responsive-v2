<script setup lang="ts">

</script>

<template>
  <div class="info">
    <div class="info-background"></div>
    <div class="info-main">
      <div class="info-container">
        <div class="info-img">
          <img data-aos="fade-up" data-aos-duration="1500" src="../img/img.png" alt="">
          <div data-aos="fade-up" data-aos-duration="1500" class="masc"></div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" class="container-profile">
          <pre>
                <code>

  <span class="const">const</span> <span class="profile">perfil</span> = {
    <span class="name">name</span>: "Richard Israel"
    <span class="name">age</span>: 20
  }
                </code>
              </pre>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" class="container-post">
          <pre>
                <code>

  <span class="const">const</span> <span class="profile">cargo</span> = {
    <span class="name">dev</span>: "Front-end"
    <span class="name">skill</span>: "VueJs","ReactJs"
  }
                </code>
              </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.info-background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(133.33deg, #000000 33.82%, #00488A 128.77%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  z-index: -1;
  position: absolute;
}

.info-main {
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .info-container {
    width: 1200px;
    height: 800px;
    position: relative;

    .info-img {
      width: 500px;
      height: 700px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;

      img {
        width: 100%;
        position: absolute;
      }

      .masc {
        width: 100%;
        height: 100%;
        background-color: #00478a5b;
        position: absolute;
        border: 2px solid #00478ac7;
      }
    }

    .container-profile,
    .container-post {
      position: absolute;
      width: 250px;
      height: 150px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      color: #ffff;
      font-size: 1rem;
      pointer-events: none;

      .profile {
        color: #00c3ff;
      }

      .const {
        color: #c100df;
      }

      .name {
        color: rgb(255, 238, 0);
      }
    }

    .container-profile {
      top: 200px;
      left: 50px;
      animation: move 5s ease-in-out infinite;
    }

    .container-post {
      bottom: 200px;
      right: 50px;
      animation: move2 5s ease-in-out infinite;
    }

  }

}

//Animações



@keyframes move {
  0% {
    top: 200px;
  }

  50% {
    top: 220px;
  }

  100% {
    top: 200px;
  }
}

@keyframes move2 {
  0% {
    bottom: 200px;
  }

  50% {
    bottom: 220px;
  }

  100% {
    bottom: 200px;
  }
}
</style>