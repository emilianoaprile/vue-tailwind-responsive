<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import StrategicPlanning from './components/StrategicPlanning.vue'
export default {
  components: {
    Header,
    Hero,
    StrategicPlanning,
  },
  data() {
    return {
      name: 'App.vue',
    }
  },
}
</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <StrategicPlanning></StrategicPlanning>
</template>

<style scoped></style>
