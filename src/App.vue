<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import StrategicPlanning from './components/StrategicPlanning.vue'
import Testimonial from './components/Testimonial.vue'
export default {
  components: {
    Header,
    Hero,
    StrategicPlanning,
    Testimonial,
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
</template>

<style scoped></style>
