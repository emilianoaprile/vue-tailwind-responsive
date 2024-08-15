<template>
    <div class="card rounded-3xl bg-white p-7">
        <div class="number text-6xl font-extrabold text-[#9593E6] mb-4">{{ benefits.number }}</div>
        <h1 class="title text-3xl font-extrabold text-[#9593E6] mb-8">{{ benefits.title }}</h1>
        <p>{{ benefits.text }}</p>
        <button
            class="px-6 py-2 text-xl font-light rounded-3xl cursor-pointer bg-gradient-to-r from-blue-500 from-10% to-[#9593E6] mt-8 text-white">
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
