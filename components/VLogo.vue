<template>
  <div class="flex justify-center items-center lg:justify-start">
    <h1
      class="font-script text-5xl"
      :class="inverted ? 'text-blue-50' : 'text-blue-900'"
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
