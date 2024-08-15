<template>
  <section class="testimonial_section mt-8 py-12">
    <div class="container mx-auto">
      <div class="testimonial_wrapper px-7">
        <div class="testimonial_header mb-14">
          <h1 class="section_title text-center font-extralight uppercase">
            Testimonial
          </h1>
          <p
            class="section_sub mb-8 mt-8 text-center text-4xl font-extrabold text-[#9593E6]"
          >
            We are committed expert partners
          </p>
          <p class="section_text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            vero quisquam, dolorem iste minima blanditiis sit autem ipsam cumque
            suscipit. Natus voluptatibus quibusdam omnis, odio recusandae
            aspernatur illo reiciendis? Inventore.
          </p>
        </div>
        <TestimonialCard
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.i"
          :testimonials="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
export default {
  components: {
    TestimonialCard,
  },
  data() {
    return {
      testimonials: [
        {
          img: '/img/testimonial1.jpg',
          quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum similique magni repudiandae neque aspernatur cumque rem officiis quibusdam est.',
          name: 'MAT REYNOLDS',
        },
        {
          img: '/img/testimonial2.jpg',
          quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum similique magni repudiandae neque aspernatur cumque rem officiis quibusdam est.',
          name: 'CELIA ALMEDA',
        },
        {
          img: '/img/testimonial3.jpg',
          quote:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum similique magni repudiandae neque aspernatur cumque rem officiis quibusdam est.',
          name: 'BOB ROBERTS',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
