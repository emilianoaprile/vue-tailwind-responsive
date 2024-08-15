<template>
    <section class="hero">
        <div class="container mx-auto">
            <div class="cards grid grid-cols-1 gap-4 px-7 py-12 sm:grid-cols-4 sm:grid-rows-2 md:grid-cols-3">
                <!-- card grande -->
                <div class="card flex flex-wrap rounded-xl border bg-blue-200 px-3 sm:col-span-4 md:col-span-2">
                    <div class="flex w-full flex-col py-4 md:w-1/2">
                        <h1 class="card_title mb-8 text-xl font-extrabold text-blue-800">
                            titolo
                        </h1>
                        <p class="card_text mb-12 font-extralight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            ipsam veritatis quas molestiae. Hic, modi impedit? Nobis sint iure
                            obcaecati!
                        </p>
                        <button
                            class="btn cursor-pointer self-center rounded-3xl bg-blue-500 px-16 py-2 font-light text-white sm:self-center md:self-start">
                            App store
                        </button>
                    </div>
                    <div class="flex w-full justify-center pt-10 md:w-1/2 md:justify-end">
                        <img class="w-72" src="/img/phone.png" alt="" srcset="" />
                    </div>
                </div>
                <!-- card grande fine -->
                <!-- card piccole -->
                <div class="card flex h-80 flex-col items-center rounded-xl border bg-blue-200 px-3 py-4 sm:h-full">
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-12 stroke-blue-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                    </div>
                    <h1 class="mb-7 text-xl font-extrabold text-blue-800">titolo</h1>
                    <p class="text-center font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
                        consequatur dolores dignissimos fuga itaque rerum sed quasi repellat
                        animi exercitationem inventore sunt, laboriosam nisi.
                    </p>
                </div>

                <div class="card flex h-80 flex-col items-center rounded-xl border bg-blue-200 px-3 py-4 sm:h-full">
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-12 stroke-blue-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                    </div>
                    <h1 class="mb-7 text-xl font-extrabold text-blue-800">titolo</h1>
                    <p class="text-center font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
                        consequatur dolores dignissimos fuga itaque rerum sed quasi repellat
                        animi exercitationem inventore sunt, laboriosam nisi.
                    </p>
                </div>

                <div class="card flex h-80 flex-col items-center rounded-xl border bg-blue-200 px-3 py-4 sm:h-full">
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-12 stroke-blue-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                    </div>
                    <h1 class="mb-7 text-xl font-extrabold text-blue-800">titolo</h1>
                    <p class="text-center font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
                        consequatur dolores dignissimos fuga itaque rerum sed quasi repellat
                        animi exercitationem inventore sunt, laboriosam nisi.
                    </p>
                </div>

                <div class="card flex h-80 flex-col items-center rounded-xl border bg-blue-200 px-3 py-4 sm:h-full">
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-12 stroke-blue-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                    </div>
                    <h1 class="mb-7 text-xl font-extrabold text-blue-800">titolo</h1>
                    <p class="text-center font-extralight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui
                        consequatur dolores dignissimos fuga itaque rerum sed quasi repellat
                        animi exercitationem inventore sunt, laboriosam nisi.
                    </p>
                </div>

                <!-- card piccole fine -->
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style></style>
