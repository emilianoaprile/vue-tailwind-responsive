<template>
  <header
    class="header bg-gradient-to-r from-blue-500 from-10% to-[#9593E6] to-80%"
  >
    <div class="container mx-auto">
      <nav class="navbar flex h-16 items-center justify-between px-7 py-10">
        <div>
          <img src="/img/logo.png" alt="" srcset="" />
        </div>
        <menu class="navbar_menu flex gap-8">
          <ul
            class="navbar_menu-list hidden items-center gap-8 text-lg font-extralight text-white lg:flex"
          >
            <li>Planning</li>
            <li>Testimonial</li>
            <li>Features</li>
            <li>About us</li>
          </ul>
          <button
            class="btn hidden cursor-pointer rounded-3xl border border-blue-950 bg-white px-6 py-2 text-xl font-light text-blue-950 lg:block"
          >
            Get Started
          </button>
          <div class="ham_menu lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </menu>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped></style>
