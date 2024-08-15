<template>
    <section class="benefits_section bg-[#9593E6] py-12">
        <div class="container mx-auto">
            <h1 class="text-center text-5xl font-extrabold text-white">
                Benefits of working with us
            </h1>
            <div class="b_cards mt-12 grid gap-8 px-7 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
                <BenefitCard v-for="(benefit, i) in benefits" :key="benefit.i" :benefits="benefit" />
            </div>
        </div>
    </section>
</template>

<script>
import BenefitCard from './BenefitCard.vue'
export default {
    components: {
        BenefitCard,
    },
    data() {
        return {
            benefits: [
                {
                    number: '01',
                    title: 'High Quality',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
                {
                    number: '02',
                    title: 'Creative Team',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
                {
                    number: '03',
                    title: 'Amazing Results',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
                {
                    number: '04',
                    title: 'Best Pricing',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
                {
                    number: '05',
                    title: 'Innovation',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
                {
                    number: '06',
                    title: '24/7 Support',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate ab sequi enim facere, eveniet iusto voluptates possimus ea velit sapiente id impedit.',
                    btn_text: 'see more',
                },
            ],
        }
    },
}
</script>

<style scoped></style>
