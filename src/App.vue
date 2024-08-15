<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import StrategicPlanning from './components/StrategicPlanning.vue'
import Testimonial from './components/Testimonial.vue'
import Benefits from './components/Benefits.vue'

export default {
  components: {
    Header,
    Hero,
    StrategicPlanning,
    Testimonial,
    Benefits,
  },
  data() {
    return {
      name: 'App.vue',
    }
  },
}
</script>

<template>
  <Header />
  <Hero />
  <StrategicPlanning />
  <Testimonial />
  <Benefits />
</template>

<style scoped></style>
