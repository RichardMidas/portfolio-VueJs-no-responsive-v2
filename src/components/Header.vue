<script setup lang="ts"></script>

<template>
  <div class="header-main">
    <div class="header-left">
      <img src="../img/midas-logoBG-white.png" alt="logo" data-aos="zoom-in" data-aos-duration="1000">
    </div>
    <div class="header-center">
      <a href="#about">
        <span class="" data-aos="fade-down" data-aos-duration="700">INÍCIO</span>
      </a>
      <a href="#info">
        <span class="" data-aos="fade-down" data-aos-duration="900">SOBRE MIM</span>
      </a>
      <a href="#skills">
        <span class="" data-aos="fade-down" data-aos-duration="1100">CONHECIMENTOS</span>
      </a>
      <a href="#projects">
        <span class="" data-aos="fade-down" data-aos-duration="1300">PROJETOS</span>
      </a>
    </div>
    <div class="header-right">

    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.header-main {
  width: 100%;
  height: 100px;
  font-family: 'IBM Plex Sans', sans-serif;
  letter-spacing: 3px;
  position: absolute;
  display: flex;
  z-index: 3;

  .header-left {
    width: 15%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      width: 200px;
      top: -15px;
    }
  }

  .header-center {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin: 0 40px;
      color: #FFF;
      cursor: pointer;
      box-sizing: content-box;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: rgb(195, 0, 255);
      }
    }
  }

  .header-right {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-gmail {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(217, 217, 217, 0.1);
      border: 1px solid #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: rgba(217, 217, 217, 0.411);
      }
    }

    .icon-linkedin {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(217, 217, 217, 0.1);
      border: 1px solid #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 30px;

      &:hover {
        background: rgba(217, 217, 217, 0.411);
      }
    }

    .icon {
      width: 30px;
      cursor: pointer;
    }

    a {
      width: 250px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      margin-left: 80px;
      color: #FFF;
      background: rgba(217, 217, 217, 0.1);
      border: 1px solid #FFFFFF;
      backdrop-filter: blur(25px);
      border-radius: 0px;

      &:hover {
        background: rgba(217, 217, 217, 0.411);
      }
    }
  }
}

@media screen and (max-width: 1650px) {
  .header-center {
    span {
      font-size: .8rem;
    }
  }
}
</style>