<template>
  <div class="flex justify-center items-center xl:justify-start">
    <h1
      class="font-script text-5xl"
      :class="inverted ? 'text-accent-50' : 'text-accent-900'"
    >
      LandOff
    </h1>
  </div>
</template>

<script>
export default {
  name: "VLogo",
  props: {
    inverted: { type: Boolean, default: false },
  },
};
</script>
