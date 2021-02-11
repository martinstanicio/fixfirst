<template>
  <header class="grid grid-cols-1 gap-8 min-h-full lg:grid-cols-2 lg:gap-14">
    <img src="~/assets/svg/landing_page.svg" alt="Landing Page" />
    <div
      class="flex flex-col justify-center gap-12 m-auto max-w-lg w-full text-center lg:text-left lg:items-start"
    >
      <div>
        <h2 class="text-blue-500 text-4xl font-bold mb-2">
          Your landing page, taking off
        </h2>
        <p class="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
          deserunt sequi. Hic nihil distinctio minima, ratione et nesciunt,
          alias voluptatum, dicta quia possimus blanditiis aperiam quos vero?
          Fugiat, sint non.
        </p>
      </div>
      <v-button primary size="large">Get started</v-button>
    </div>
  </header>
</template>

<script>
export default {
  name: "VHeader",
};
</script>
