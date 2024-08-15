<template>
  <div class="card rounded-3xl bg-white p-7">
    <div class="number mb-4 text-6xl font-extrabold text-[#9593E6]">
      {{ benefits.number }}
    </div>
    <h1 class="title mb-8 text-3xl font-extrabold text-[#9593E6]">
      {{ benefits.title }}
    </h1>
    <p>{{ benefits.text }}</p>
    <button
      class="mt-8 cursor-pointer rounded-3xl bg-gradient-to-r from-blue-500 from-10% to-[#9593E6] px-6 py-2 text-xl font-light text-white"
    >
      {{ benefits.btn_text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    benefits: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
