<script setup lang="ts">
import AboutMe from './components/AboutMe.vue';
import Info from './components/Info.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <AboutMe id="about"/> 
  <Info id="info"/>
  <Skills id="skills"/>
  <Projects id="projects"/>
</template>

<style lang="scss" scoped></style>