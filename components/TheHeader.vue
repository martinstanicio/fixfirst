<template>
  <header class="flex flex-col gap-8 min-h-full xl:flex-row xl:gap-16">
    <TheIllustration class="max-w-full flex-1 m-auto" />
    <div
      class="flex flex-col justify-center gap-12 m-auto text-center xl:text-left xl:items-start flex-1"
    >
      <div>
        <h2 class="text-accent-500 text-4xl font-bold mb-2">
          Your landing page, taking off
        </h2>
        <p class="leading-relaxed max-w-lg m-auto">
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
  name: "TheHeader",
};
</script>
