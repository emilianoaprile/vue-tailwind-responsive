<template>
  <div
    class="card mb-8 flex flex-col items-center gap-14 rounded-l-3xl rounded-br-3xl bg-[#9593E6] px-12 py-8 text-white md:flex-row"
  >
    <div class="t_img">
      <img
        class="aspect-square w-full min-w-20 max-w-52 rounded-full object-cover"
        :src="testimonials.img"
        alt=""
      />
    </div>
    <div class="t_content flex flex-col gap-8">
      <div class="t_quote">
        {{ testimonials.quote }}
      </div>
      <div class="t_name">
        {{ testimonials.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
