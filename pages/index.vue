<template>
  <div class="bg-accent-50 min-h-screen">
    <div
      class="flex flex-col gap-12 p-6 pb-10 md:p-8 md:pb-12 lg:px-10 md:gap-16"
    >
      <VLogo />
      <TheHeader class="lg:px-16" />
      <TheFeatures class="lg:px-6" />
      <div class="flex flex-col gap-4 justify-center items-center">
        <v-testimonial author="Jane Doe" job-title="manager at Big Company"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          efficitur euismod blandit. Sed sodales ornare nisi, nec porta mauris
          scelerisque eu. Maecenas a elit in.</v-testimonial
        >
        <v-button primary>Get started</v-button>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
