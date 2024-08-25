<template>
  <theme style="position: fixed;top: 0;right: 0"></theme>
  <RouterView />
</template>

<script>
import './assets/thems.css'
import theme from './components/theme.vue'

export default {
  components: {
    theme
  },
  created() {
    this.checkSystemTheme()
  },
  methods: {
    checkSystemTheme() {
      if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const theme = prefersDark ? 'dark' : 'light'
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'pingfang';
  src: url('./assets/pingfang.ttf') format('woff');
  font-weight: normal;
  font-style: normal;
}
#app{
  font-family: 'pingfang';
  background-color: var(--background-color);
}
</style>