<template>
  <header>
    <div class="flex justify-center items-center p-6 lg:justify-start">
      <h1 class="font-script text-5xl text-blue-900">LandOff</h1>
    </div>
    <div
      class="grid grid-cols-1 px-10 py-10 gap-8 min-h-full md:px-16 lg:grid-cols-2 lg:py-16 lg:gap-14"
    >
      <img src="~/assets/svg/landing_page.svg" alt="Landing Page" />
      <div
        class="flex flex-col justify-center gap-12 m-auto max-w-lg w-full text-center lg:text-left lg:items-start"
      >
        <div>
          <h2 class="text-blue-500 text-4xl font-bold mb-2">
            Your landing page, taking off
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            deserunt sequi. Hic nihil distinctio minima, ratione et nesciunt,
            alias voluptatum, dicta quia possimus blanditiis aperiam quos vero?
            Fugiat, sint non.
          </p>
        </div>
        <v-button primary size="large">Get started</v-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "VHeader",
};
</script>
